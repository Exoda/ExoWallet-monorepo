import { useEffect, useState } from 'react';

import { useIntl } from 'react-intl';

import { Box, Center, Icon, Text, Textarea } from '@onekeyhq/components';

import { useDebounce } from '../../../hooks';
import { useDropUpload } from '../hooks';
import { TokenReceiverEnum } from '../types';
import { decodeReceiver, encodeReceiver } from '../utils';

import { ReceiverErrors } from './ReceiverErrors';

import type { ReceiverInputParams, TokenReceiver } from '../types';

type Props = Omit<ReceiverInputParams, 'isUploadMode' | 'setIsUploadMode'>;

function ReceiverEditor(props: Props) {
  const {
    receiverFromOut,
    setReceiverFromOut,
    setReceiver,
    type,
    receiverErrors,
  } = props;

  const intl = useIntl();

  const [receiverString, setReceiverString] = useState('');
  const { isDragAccept, data, getRootProps } = useDropUpload<TokenReceiver>({
    header: [TokenReceiverEnum.Address, TokenReceiverEnum.Amount],
    noClick: true,
  });

  const receiverStringDebounce = useDebounce(receiverString, 1000);

  useEffect(() => {
    setReceiver(decodeReceiver(receiverStringDebounce, type));
  }, [receiverStringDebounce, setReceiver, type]);

  useEffect(() => {
    if (receiverFromOut.length > 0) {
      setReceiverString(encodeReceiver(receiverFromOut));
    }
  }, [receiverFromOut]);

  useEffect(() => {
    if (data && data[0] && data[0].Address && data[0].Amount) {
      setReceiverFromOut(
        data.filter(
          (item) =>
            item.Address !== TokenReceiverEnum.Address &&
            item.Amount !== TokenReceiverEnum.Amount,
        ),
      );
    }
  }, [data, setReceiverFromOut]);

  return (
    <Box>
      <div style={{ width: '100%', height: '100%' }} {...getRootProps()}>
        <Textarea
          value={receiverString}
          h="240px"
          // @ts-ignore
          onChange={(e) => setReceiverString(e.currentTarget.value)}
        />
        {isDragAccept && (
          <Center
            flex="1"
            bg="backdrop"
            zIndex={999}
            position="absolute"
            left="0"
            right="0"
            top="0"
            bottom="0"
            borderRadius={12}
          >
            <Box
              bg="surface-default"
              borderWidth={1}
              borderColor="interactive-default"
              w="358px"
              borderRadius={12}
              h="148px"
            >
              <Center h="full">
                <Icon name="DocumentArrowUpOutline" size={38} />
                <Text mt={5}>
                  {intl.formatMessage({ id: 'form__drag_file_here' })}
                </Text>
              </Center>
            </Box>
          </Center>
        )}
      </div>
      <Box mt={3}>
        <ReceiverErrors errors={receiverErrors} />
      </Box>
    </Box>
  );
}

export { ReceiverEditor };
