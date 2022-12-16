import React, {
  FC,
  useCallback,
  useEffect,
  useLayoutEffect,
  useMemo,
  useRef,
  useState,
} from 'react';

import { RouteProp, useNavigation, useRoute } from '@react-navigation/core';
import { BigNumber } from 'bignumber.js';
import { Row } from 'native-base';
import { useIntl } from 'react-intl';

import {
  Box,
  Button,
  Center,
  CustomSkeleton,
  Divider,
  Empty,
  HStack,
  Hidden,
  Icon,
  IconButton,
  ListItem,
  Searchbar,
  Skeleton,
  Spinner,
  Text,
  Tooltip,
  useIsVerticalLayout,
} from '@onekeyhq/components';
import { shortenAddress } from '@onekeyhq/components/src/utils';
import { Network } from '@onekeyhq/engine/src/types/network';
import { NFTAsset, NFTNPL } from '@onekeyhq/engine/src/types/nft';
import {
  HomeRoutes,
  HomeRoutesParams,
  ModalRoutes,
  ModalScreenProps,
  RootRoutes,
} from '@onekeyhq/kit/src/routes/types';
import { IMPL_EVM } from '@onekeyhq/shared/src/engine/engineConsts';

import backgroundApiProxy from '../../../../background/instance/backgroundApiProxy';
import { AccountSelectorTrigger } from '../../../../components/NetworkAccountSelector/triggers/AccountSelectorTrigger';
import { useActiveWalletAccount } from '../../../../hooks';
import { useConnectAndCreateExternalAccount } from '../../../ExternalAccount/useConnectAndCreateExternalAccount';
// import ChainSelector from '../../ChainSelector';
import { useDefaultNetWork } from '../../Home/hook';
import { NFTMarketRoutes, NFTMarketRoutesParams } from '../../Modals/type';
import { PriceString } from '../../PriceText';

import { useSearchAddress } from './hook';
import Desktop from './List/Desktop';
import Mobile from './List/Mobile';
import SearchAddress from './SearchAddress';

type NavigationProps = ModalScreenProps<NFTMarketRoutesParams>;

type NPLData = {
  totalProfit?: BigNumber;
  win?: number;
  lose?: number;
  spend?: BigNumber;
  content: NFTNPL[];
};

function parseNPLData(items: NFTNPL[]): NPLData {
  let totalProfit: BigNumber = new BigNumber(0);
  let totalSpend: BigNumber = new BigNumber(0);
  let win = 0;
  let lose = 0;
  items.forEach((item) => {
    const { entry, exit } = item;
    const gasEntry: BigNumber = new BigNumber(entry.gasFee ?? 0);
    const tradeValueEntry: BigNumber = new BigNumber(entry.tradePrice ?? 0);
    const gasExit: BigNumber = new BigNumber(exit.gasFee ?? 0);
    const tradeValueExit: BigNumber = new BigNumber(
      exit.internalTxValue ?? exit.tokenTxValue ?? exit.tradePrice ?? 0,
    );
    const spend = tradeValueEntry.plus(gasEntry).plus(gasExit);
    const profit = tradeValueExit.minus(spend);

    if (profit.toNumber() > 0) {
      win += 1;
    } else if (profit.toNumber() < 0) {
      lose += 1;
    }
    item.profit = profit.toNumber();
    totalProfit = totalProfit.plus(profit);
    totalSpend = totalSpend.plus(spend);
  });
  return {
    totalProfit,
    win,
    lose,
    spend: totalSpend,
    content: items,
  };
}

const ListTitle = () => {
  const intl = useIntl();

  return (
    <ListItem mt="48px" px={0} py={0}>
      <ListItem.Column
        flex={1}
        text={{
          label: 'NFT',
          labelProps: {
            typography: 'Subheading',
            color: 'text-subdued',
          },
        }}
      />
      <ListItem.Column
        w="200px"
        text={{
          label: intl.formatMessage({ id: 'content__entry_price' }),
          labelProps: {
            typography: 'Subheading',
            color: 'text-subdued',
          },
        }}
      />
      <ListItem.Column
        w="160px"
        text={{
          label: (
            <Tooltip
              label={intl.formatMessage({
                id: 'content__royalty_fees_are_excluded',
              })}
              placement="top left"
            >
              <HStack alignItems="center" space={1} alignSelf="flex-start">
                <Text typography="Subheading" color="text-subdued">
                  {intl.formatMessage({ id: 'content__exit_value' })}
                </Text>
                <Icon
                  name="QuestionMarkCircleMini"
                  size={16}
                  color="icon-subdued"
                />
              </HStack>
            </Tooltip>
          ),
          labelProps: {
            typography: 'Subheading',
            color: 'text-subdued',
          },
        }}
      />
      <ListItem.Column
        w="140px"
        text={{
          label: intl.formatMessage({ id: 'content__profit' }),

          labelProps: {
            typography: 'Subheading',
            color: 'text-subdued',
            textAlign: 'right',
          },
        }}
      />
      <Hidden till="lg">
        <ListItem.Column
          w="140px"
          text={{
            label: intl.formatMessage({ id: 'content__hodl_duration' }),
            labelProps: {
              typography: 'Subheading',
              color: 'text-subdued',
              textAlign: 'right',
            },
          }}
        />
      </Hidden>
    </ListItem>
  );
};

type HeaderProps = {
  loading?: boolean;
  network: Network;
  accountAddress: string;
  onAddressSearch: (address: string) => void;
} & NPLData;

const Header: FC<HeaderProps> = ({
  network,
  totalProfit,
  win,
  lose,
  spend,
  accountAddress,
  onAddressSearch,
  content,
  loading,
}) => {
  let totalValue = '0';
  if (totalProfit) {
    totalValue = new BigNumber(totalProfit).decimalPlaces(3).toString();
    totalValue = `${totalProfit.toNumber() >= 0 ? '+' : ''}${totalValue}`;
  }
  totalValue = PriceString({ price: totalValue, networkId: network.id });
  const [nameOrAddress, setNameOrAddress] = useState<string>(
    accountAddress ?? '',
  );
  const intl = useIntl();

  const name = useRef<string>();
  const { loading: inputLoading } = useSearchAddress({
    keyword: nameOrAddress,
    network,
    onAddressSearch: ({ ens: ensName, address: vaildAddress }) => {
      name.current = ensName;
      if (vaildAddress) {
        if (ensName) {
          setNameOrAddress(ensName);
        } else {
          setNameOrAddress(shortenAddress(vaildAddress));
        }
        onAddressSearch(vaildAddress);
      }
    },
  });
  const isVerticalLayout = useIsVerticalLayout();
  const navigation = useNavigation<NavigationProps['navigation']>();

  const shareAction = useCallback(() => {
    let displayName = '';
    if (name.current && name.current?.length > 0) {
      displayName = name.current;
    } else {
      displayName = shortenAddress(nameOrAddress);
    }
    navigation.navigate(RootRoutes.Modal, {
      screen: ModalRoutes.NFTMarket,
      params: {
        screen: NFTMarketRoutes.ShareNFTNPLModal,
        params: {
          totalProfit,
          win,
          lose,
          assets: content,
          network,
          nameOrAddress: displayName,
          endTime: content[0].exit.timestamp,
          startTime: content[content.length - 1].exit.timestamp,
        },
      },
    });
  }, [content, lose, nameOrAddress, navigation, network, totalProfit, win]);

  const { account: activeAccount } = useActiveWalletAccount();

  useEffect(() => {
    if (activeAccount?.address) {
      setNameOrAddress(activeAccount?.address);
    }
  }, [activeAccount?.address]);

  const showClearBtn = useMemo(() => {
    if (nameOrAddress.length === 0) {
      return false;
    }
    if (inputLoading === true) {
      return false;
    }
    return true;
  }, [nameOrAddress, inputLoading]);

  return (
    <Box width="full" p={2} pb={{ base: 3, md: 0 }}>
      <Box width="full" flexDirection="row">
        <Searchbar
          w="full"
          maxW="400px"
          value={nameOrAddress}
          onChangeText={setNameOrAddress}
          rightIconName={showClearBtn ? 'XCircleMini' : undefined}
          rightElement={
            <Center height="36px" right="8px">
              {inputLoading === true ? <Spinner size="sm" /> : null}
            </Center>
          }
          onClear={() => {
            setNameOrAddress('');
          }}
          placeholder={intl.formatMessage({
            id: 'form__enter_address_ens_name',
          })}
        />
      </Box>
      <Box
        flexDirection={{ sm: 'row' }}
        alignItems={{ sm: 'center' }}
        justifyContent="space-between"
        mt="24px"
      >
        <Box>
          <Text typography="Body1" color="text-subdued">
            {intl.formatMessage({ id: 'content__profit' })}
          </Text>
          {totalProfit ? (
            <Text
              typography="Display2XLarge"
              color={
                totalProfit.toNumber() > 0 ? 'text-success' : 'text-critical'
              }
            >
              {totalValue}
            </Text>
          ) : (
            <Skeleton shape="Display2XLarge" />
          )}

          <Box flexDirection="row" mt="8px">
            <Box flexDirection="row" mr="24px" alignItems="center">
              {win !== undefined ? (
                <Text mr="6px" typography="Body1Strong" color="text-success">
                  {win}
                </Text>
              ) : (
                <Skeleton shape="Body1" />
              )}

              <Text typography="Body1" color="text-subdued">
                {intl.formatMessage({ id: 'content__winning_flips' })}
              </Text>
            </Box>

            <Box flexDirection="row" alignItems="center" mr="24px">
              {lose !== undefined ? (
                <Text mr="6px" typography="Body1Strong" color="text-critical">
                  {lose}
                </Text>
              ) : (
                <Skeleton shape="Body1" />
              )}

              <Text typography="Body1" color="text-subdued">
                {intl.formatMessage({ id: 'content__losing_flips' })}
              </Text>
            </Box>

            <Hidden from="base" till="md">
              <Box flexDirection="row" alignItems="center">
                {spend !== undefined ? (
                  <Text mr="6px" typography="Body1Strong">
                    {PriceString({
                      price: new BigNumber(spend).decimalPlaces(3).toString(),
                      networkId: network.id,
                    })}
                  </Text>
                ) : (
                  <CustomSkeleton width="24px" height="12px" mr="6px" />
                )}

                <Text typography="Body1" color="text-subdued">
                  {intl.formatMessage({ id: 'content__spent' })}
                </Text>
              </Box>
            </Hidden>
          </Box>
        </Box>
        <Button
          isDisabled={loading}
          type="primary"
          size={isVerticalLayout ? 'lg' : 'base'}
          leftIconName="ArrowTopRightOnSquareSolid"
          onPress={shareAction}
          mt={{ base: 6, sm: 0 }}
        >
          {intl.formatMessage({ id: 'action__share' })}
        </Button>
      </Box>
      <Hidden from="base" till="md">
        <ListTitle />
      </Hidden>
      <Divider mt={{ base: '24px', md: '8px' }} />
    </Box>
  );
};

const NPLDetail: FC<{ accountAddress: string; ens?: string }> = ({
  accountAddress,
}) => {
  const isVerticalLayout = useIsVerticalLayout();
  const intl = useIntl();
  const { account: activeAccount } = useActiveWalletAccount();

  const navigation = useNavigation();
  const defaultNetwork = useDefaultNetWork();
  const [selectNetwork] = useState<Network>(defaultNetwork);

  const { serviceNFT } = backgroundApiProxy;

  const { connectAndCreateExternalAccount } =
    useConnectAndCreateExternalAccount({
      networkId: selectNetwork?.id ?? '',
    });
  const calculatorAction = useCallback(() => {
    navigation.navigate(RootRoutes.Modal, {
      screen: ModalRoutes.NFTMarket,
      params: {
        screen: NFTMarketRoutes.CalculatorModal,
        params: undefined,
      },
    });
  }, [navigation]);

  const connectAccountBtn = useMemo(() => {
    if (activeAccount?.id === undefined) {
      return (
        <Button onPress={connectAndCreateExternalAccount}>
          {intl.formatMessage({ id: 'action__connect_wallet' })}
        </Button>
      );
    }
    return (
      <AccountSelectorTrigger
        type={isVerticalLayout ? 'basic' : 'plain'}
        showAddress={!isVerticalLayout}
      />
    );
  }, [
    activeAccount?.id,
    connectAndCreateExternalAccount,
    intl,
    isVerticalLayout,
  ]);
  useLayoutEffect(() => {
    navigation.setOptions({
      title: '',
      headerRight: () => (
        <Row
          space={2}
          alignItems="center"
          mr={{ base: 2.5, md: 8 }}
          justifyContent="flex-end"
        >
          {/* <ChainSelector
            // tiggerProps={{ display: 'none' }}
            triggerSize="lg"
            selectedNetwork={selectNetwork}
            onChange={setSelectNetwork}
          /> */}
          {connectAccountBtn}
          <IconButton
            // isDisabled
            type="plain"
            size="lg"
            name="CalculatorOutline"
            circle
            onPress={calculatorAction}
          />
        </Row>
      ),
    });
  }, [calculatorAction, connectAccountBtn, navigation, selectNetwork]);

  const [listData, updateListData] = useState<NFTNPL[]>([]);
  const allData = useRef<NPLData>({
    totalProfit: new BigNumber(0),
    lose: 0,
    win: 0,
    spend: new BigNumber(0),
    content: [],
  });
  const pageSize = 50;
  const currentPage = useRef<number>(0);
  const [totalNPLData, updateTotalNPLData] = useState<Omit<NPLData, 'content'>>(
    {},
  );
  const [address, setAddress] = useState<string>(accountAddress);
  const [loading, setLoading] = useState<boolean>(true);

  const getAssets = useCallback(
    async (page: number) => {
      const start = currentPage.current * pageSize;
      const pageDatas = allData.current?.content.slice(start, start + pageSize);
      const batchParams = pageDatas.map((item) => ({
        contract_address: item.contractAddress,
        token_id: item.tokenId,
      }));
      if (pageDatas.length === 0) {
        setLoading(false);
        return;
      }
      const data = await serviceNFT.batchAsset({
        chain: selectNetwork?.id,
        items: batchParams,
      });

      if (data) {
        const nftMap: Record<string, NFTAsset | undefined> = {};
        data.forEach((item) => {
          const key = `${item.contractAddress as string}-${
            item.tokenId as string
          }`;
          nftMap[key] = item;
        });
        pageDatas.forEach((item) => {
          const key = `${item.contractAddress as string}-${item.tokenId}`;
          const asset = nftMap[key];
          if (asset) {
            item.asset = asset;
          }
        });
        if (page === 0) {
          updateListData(pageDatas);
        } else {
          updateListData((prev) => prev.concat(pageDatas));
        }
      }
    },
    [selectNetwork?.id, serviceNFT],
  );

  const searchAction = useCallback(
    async (text: string) => {
      const data = await serviceNFT.getNPLData({
        address: text,
      });
      // serviceNFT.setNPLAddress(text);
      const parseData = parseNPLData(data);
      allData.current = parseData;
      updateTotalNPLData({
        totalProfit: parseData.totalProfit,
        win: parseData.win,
        lose: parseData.lose,
        spend: parseData.spend,
      });
      if (data) {
        getAssets(0);
      }
    },
    [getAssets, serviceNFT],
  );

  useEffect(() => {
    setLoading(true);
    updateTotalNPLData({
      totalProfit: new BigNumber(0),
      spend: new BigNumber(0),
      win: 0,
      lose: 0,
    });
    currentPage.current = 0;
    updateListData([]);
    searchAction(address);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [address]);

  const listProps = useMemo(
    () => ({
      data: listData,
      ListHeaderComponent: () => (
        <Header
          accountAddress={accountAddress}
          network={selectNetwork}
          onAddressSearch={setAddress}
          content={allData.current.content}
          loading={listData.length === 0}
          {...totalNPLData}
        />
      ),
      ListEmptyComponent: () => {
        if (!loading) {
          return (
            <Empty
              emoji="💰"
              title={intl.formatMessage({ id: 'empty__no_sales_record' })}
              subTitle={intl.formatMessage({
                id: 'empty__no_sales_record_desc',
              })}
            />
          );
        }
        return null;
      },
      onEndReached: () => {
        currentPage.current += 1;
        getAssets(currentPage.current);
      },
    }),
    [
      accountAddress,
      getAssets,
      intl,
      listData,
      loading,
      selectNetwork,
      totalNPLData,
    ],
  );

  return (
    <Box flex={1}>
      {isVerticalLayout ? (
        <Mobile {...listProps} loading={loading} network={selectNetwork} />
      ) : (
        <Desktop {...listProps} loading={loading} network={selectNetwork} />
      )}
    </Box>
  );
};

const NPLScreen = () => {
  const route =
    useRoute<RouteProp<HomeRoutesParams, HomeRoutes.NFTNPLScreen>>();
  const { address: lastAddress } = route.params;
  const { network, account } = useActiveWalletAccount();
  const isEvmAddress = network?.impl === IMPL_EVM;

  const [addressInfo, setAddressInfo] = useState<{
    address?: string;
    ens?: string;
  }>(() => {
    if (lastAddress && lastAddress.length > 0) {
      return { address: lastAddress };
    }
    return { address: isEvmAddress ? account?.address : undefined };
  });
  if (addressInfo?.address) {
    return (
      <NPLDetail accountAddress={addressInfo?.address} ens={addressInfo.ens} />
    );
  }
  return <SearchAddress onAddressSearch={setAddressInfo} />;
};

export default NPLScreen;
