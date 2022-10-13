import type { ITransferInfo } from '../../../types';

export enum AddressEncodings {
  P2PKH = 'P2PKH', // Legacy BIP-44
  P2SH_P2WPKH = 'P2SH_P2WPKH', // BIP-49 P2WPKH nested in P2SH
  P2WPKH = 'P2WPKH', // BIP-84 P2WPKH
  // P2TR = "P2TR",  // BIP-86 P2TR
}

export type ChainInfo = {
  code: string;
  feeCode: string;
  impl: string;
  curve: 'secp256k1' | 'ed25519';
  implOptions: { [key: string]: any };
  clients: Array<{ name: string; args: Array<any> }>;
};

export type AddressValidation = {
  isValid: boolean;
  normalizedAddress?: string;
  displayAddress?: string;
  encoding?: string;
};

export type IBtcUTXO = {
  txid: string;
  vout: number;
  value: string;
  address: string;
  path: string;
};

export type IUTXOInput = Omit<IBtcUTXO, 'txid'> & { txId: string };
export type IUTXOOutput = { address: string; value: number };

export type IEncodedTxBtc = {
  inputs: Array<IBtcUTXO>;
  outputs: Array<{ address: string; value: string }>;
  totalFee: string;
  totalFeeInNative: string;
  transferInfo: ITransferInfo;
};
