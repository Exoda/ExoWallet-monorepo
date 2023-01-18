import { useIntl } from 'react-intl';

import { Box, Center, Icon, Text } from '@onekeyhq/components';

import type { TokenReceiver } from '../types';

interface Props {
  setReceiverFromFile: React.Dispatch<React.SetStateAction<TokenReceiver[]>>;
  setIsUploadMode: React.Dispatch<React.SetStateAction<boolean>>;
}

function ReceiverUploader(props: Props) {
  const intl = useIntl();
  return (
    <>
      <Box
        borderWidth={1}
        borderRadius={12}
        height="148px"
        backgroundColor="action-secondary-default"
      >
        <Center w="full" h="full">
          <Icon name="UploadOutline" size={40} color="icon-subdued" />
          <Text fontSize={14} mt="20px">
            {intl.formatMessage({ id: 'form__drag_or_drop_file_to_import' })}
          </Text>
        </Center>
      </Box>
      <Text fontSize={14} color="text-subdued" mt={4}>
        {intl.formatMessage({ id: 'content__support_csv_txt_or_excel' })}
      </Text>
    </>
  );
}

export { ReceiverUploader };
