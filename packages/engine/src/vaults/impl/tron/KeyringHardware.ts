/* eslint no-unused-vars: ["warn", { "argsIgnorePattern": "^_" }] */
/* eslint @typescript-eslint/no-unused-vars: ["warn", { "argsIgnorePattern": "^_" }] */
import {
  SignedTx,
  UnsignedTx,
} from '@onekeyfe/blockchain-libs/dist/types/provider';
import TronWeb from 'tronweb';

import { HardwareSDK, deviceUtils } from '@onekeyhq/kit/src/utils/hardware';
import debugLogger from '@onekeyhq/shared/src/logger/debugLogger';

import { COINTYPE_TRON as COIN_TYPE } from '../../../constants';
import { NotImplemented, OneKeyHardwareError } from '../../../errors';
import { AccountType, DBSimpleAccount } from '../../../types/account';
import { KeyringHardwareBase } from '../../keyring/KeyringHardwareBase';

import { publicKeyToAddress } from './utils';

import type {
  IGetAddressParams,
  IPrepareHardwareAccountsParams,
  ISignCredentialOptions,
} from '../../types';
import type { IEncodedTxTron } from './types';
import type { TronTransactionContract } from '@onekeyfe/hd-core';

const PATH_PREFIX = `m/44'/${COIN_TYPE}'/0'/0`;
const CURVE_NAME = 'secp256k1';

export class KeyringHardware extends KeyringHardwareBase {
  override async signTransaction(
    unsignedTx: UnsignedTx,
    _options: ISignCredentialOptions,
  ): Promise<SignedTx> {
    const { encodedTx } = unsignedTx.payload as { encodedTx: IEncodedTxTron };
    const {
      ref_block_bytes: refBlockBytes,
      ref_block_hash: refBlockHash,
      expiration,
      timestamp,
      fee_limit: feeLimit,
    } = encodedTx.raw_data;

    let contractCall: TronTransactionContract | undefined;
    if (encodedTx.raw_data.contract[0].type === 'TransferContract') {
      const { amount, to_address: toAddressHex } =
        encodedTx.raw_data.contract[0].parameter.value;
      contractCall = {
        transferContract: {
          amount,
          toAddress: TronWeb.address.fromHex(toAddressHex),
        },
      };
    } else if (encodedTx.raw_data.contract[0].type === 'TriggerSmartContract') {
      const { contract_address: contractAddressHex, data } =
        encodedTx.raw_data.contract[0].parameter.value;
      contractCall = {
        triggerSmartContract: {
          contractAddress: TronWeb.address.fromHex(contractAddressHex),
          data,
        },
      };
    }

    if (typeof contractCall === 'undefined') {
      throw new NotImplemented();
    }

    const dbAccount = await this.getDbAccount();
    await this.getHardwareSDKInstance();
    const { connectId, deviceId } = await this.getHardwareInfo();
    const passphraseState = await this.getWalletPassphraseState();
    const response = await HardwareSDK.tronSignTransaction(
      connectId,
      deviceId,
      {
        path: dbAccount.path,
        transaction: {
          refBlockBytes,
          refBlockHash,
          expiration,
          timestamp,
          feeLimit,
          contract: contractCall,
        },
        ...passphraseState,
      },
    );

    if (response.success && response.payload.signature) {
      const { signature } = response.payload;
      return Promise.resolve({
        txid: encodedTx.txID,
        rawTx: JSON.stringify({
          ...encodedTx,
          signature: [signature],
        }),
      });
    }

    throw deviceUtils.convertDeviceError(response.payload);
  }

  override signMessage(
    _messages: any[],
    _options: ISignCredentialOptions,
  ): any {
    throw new NotImplemented('Signing tron message is not supported yet.');
  }

  override async prepareAccounts(
    params: IPrepareHardwareAccountsParams,
  ): Promise<Array<DBSimpleAccount>> {
    const { indexes, names } = params;
    await this.getHardwareSDKInstance();
    const { connectId, deviceId } = await this.getHardwareInfo();
    const passphraseState = await this.getWalletPassphraseState();

    let response;
    try {
      response = await HardwareSDK.batchGetPublicKey(connectId, deviceId, {
        showOnOneKey: false,
        ecdsaCurveName: CURVE_NAME,
        paths: indexes.map((index) => `${PATH_PREFIX}/${index}`),
        ...passphraseState,
      });
    } catch (error: any) {
      debugLogger.common.error(error);
      throw new OneKeyHardwareError(error);
    }
    if (!response.success) {
      debugLogger.common.error(response.payload);
      throw deviceUtils.convertDeviceError(response.payload);
    }

    return response.payload.map(({ path, publicKey }, index) => ({
      id: `${this.walletId}--${path}`,
      name: (names || [])[index] || `TRON #${indexes[index] + 1}`,
      type: AccountType.SIMPLE,
      path,
      coinType: COIN_TYPE,
      pub: publicKey,
      address: publicKeyToAddress(publicKey),
    }));
  }

  override async getAddress(params: IGetAddressParams): Promise<string> {
    await this.getHardwareSDKInstance();
    const { connectId, deviceId } = await this.getHardwareInfo();
    const passphraseState = await this.getWalletPassphraseState();
    const response = await HardwareSDK.tronGetAddress(connectId, deviceId, {
      path: params.path,
      showOnOneKey: params.showOnOneKey,
      ...passphraseState,
    });
    if (response.success && !!response.payload?.address) {
      return response.payload.address;
    }
    throw deviceUtils.convertDeviceError(response.payload);
  }
}
