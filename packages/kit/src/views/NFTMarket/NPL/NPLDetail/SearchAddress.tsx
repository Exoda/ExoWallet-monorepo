import React, { FC, useCallback, useLayoutEffect, useState } from 'react';

import { useNavigation } from '@react-navigation/core';
import { MotiView } from 'moti';
import { useIntl } from 'react-intl';

import {
  Box,
  Button,
  Center,
  HStack,
  IconButton,
  Image,
  Input,
  Spinner,
  Text,
  useIsVerticalLayout,
  useTheme,
} from '@onekeyhq/components';
import PnlEmptyImage from '@onekeyhq/kit/assets/nft_pnl_empty_image.png';
import PnlEmptyImageLight from '@onekeyhq/kit/assets/nft_pnl_empty_image_light.png';
import { ModalRoutes, RootRoutes } from '@onekeyhq/kit/src/routes/types';

import { useActiveWalletAccount } from '../../../../hooks';
import { useConnectAndCreateExternalAccount } from '../../../ExternalAccount/useConnectAndCreateExternalAccount';
import { useDefaultNetWork } from '../../Home/hook';
import { NFTMarketRoutes } from '../../Modals/type';

import { useSearchAddress } from './hook';

const SearchAddress: FC<{
  onAddressSearch: ({
    address,
    ens,
  }: {
    address?: string;
    ens?: string;
  }) => void;
}> = ({ onAddressSearch }) => {
  const navigation = useNavigation();
  const { network } = useActiveWalletAccount();
  const intl = useIntl();
  const { themeVariant } = useTheme();

  const { connectAndCreateExternalAccount } =
    useConnectAndCreateExternalAccount({
      networkId: network?.id ?? '',
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

  useLayoutEffect(() => {
    navigation.setOptions({
      title: '',
      headerRight: () => (
        <IconButton
          mr="16px"
          type="basic"
          size="sm"
          name="CalculatorSolid"
          circle
          onPress={calculatorAction}
        />
      ),
    });
  }, [calculatorAction, navigation]);
  const [keyword, setKeyword] = useState<string>('');
  const defaultNetWork = useDefaultNetWork();

  const { loading } = useSearchAddress({
    keyword,
    network: defaultNetWork,
    onAddressSearch,
  });
  const isVerticalLayout = useIsVerticalLayout();
  return (
    <Box flex={1} alignItems="center" px="16px" pt="96px">
      {/* <Box w="full" height="106px" bgColor="blue.100" /> */}
      <MotiView
        from={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
      >
        <Image
          width={358}
          height={155}
          source={themeVariant === 'light' ? PnlEmptyImageLight : PnlEmptyImage}
        />
      </MotiView>
      <Text
        textAlign="center"
        typography={{ sm: 'DisplayMedium', md: 'DisplaySmall' }}
      >
        {intl.formatMessage({ id: 'empty__pnl' })}
      </Text>
      <HStack
        mt="24px"
        w={isVerticalLayout ? 'full' : '400px'}
        justifyContent="center"
      >
        <Input
          flex={1}
          size={isVerticalLayout ? 'xl' : 'default'}
          value={keyword}
          onChangeText={setKeyword}
          leftIconName="SearchOutline"
          numberOfLines={1}
          placeholder={intl.formatMessage({
            id: 'form__enter_address_ens_name',
          })}
        />
        <Center height="full" position="absolute" right="8px">
          {loading === true ? <Spinner size="sm" /> : null}
        </Center>
      </HStack>
      <HStack
        w={isVerticalLayout ? 'full' : '400px'}
        mt="24px"
        space="12px"
        alignItems="center"
        justifyContent="center"
      >
        <Box height="1px" bgColor="divider" flex={1} />
        <Text typography="Body2" color="text-subdued">
          OR
        </Text>
        <Box height="1px" bgColor="divider" flex={1} />
      </HStack>

      <Button
        onPress={connectAndCreateExternalAccount}
        type="primary"
        size={isVerticalLayout ? 'lg' : 'base'}
        mt="24px"
      >
        {intl.formatMessage({ id: 'action__connect_wallet' })}
      </Button>
    </Box>
  );
};

export default SearchAddress;
