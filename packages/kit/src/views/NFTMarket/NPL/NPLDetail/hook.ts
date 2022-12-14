import { useCallback, useEffect, useMemo, useState } from 'react';

import { Network } from '@onekeyhq/engine/src/types/network';

import backgroundApiProxy from '../../../../background/instance/backgroundApiProxy';
import { useDebounce } from '../../../../hooks';

export function useSearchAddress({
  keyword,
  network,
  onAddressSearch,
}: {
  keyword: string;
  network: Network;
  onAddressSearch: ({
    address,
    ens,
  }: {
    address?: string;
    ens?: string;
  }) => void;
}) {
  const terms = useDebounce(keyword, 500).toLowerCase();

  const [loading, setLoading] = useState(false);
  const [name, setName] = useState('');
  const lookupEnsName = useCallback(async (address: string) => {
    const result = backgroundApiProxy.serviceRevoke.lookupEnsName(address);
    return result;
  }, []);

  const valildAddress = useCallback(
    async (address: string) => {
      try {
        await backgroundApiProxy.validator.validateAddress(network.id, address);
        return true;
      } catch (e) {
        return false;
      }
    },
    [network.id],
  );

  const getAddress = useCallback(
    async (address: string) => {
      const result = await backgroundApiProxy.serviceRevoke.getAddress(
        address,
        network.id,
      );
      return result;
    },
    [network.id],
  );

  useEffect(() => {
    if (terms?.length > 0) {
      (async () => {
        if (terms === name) {
          return;
        }
        setLoading(true);
        const [ens, address] = await Promise.all([
          lookupEnsName(terms),
          getAddress(terms),
        ]);
        if (address) {
          const isValid = await valildAddress(address);
          if (isValid) {
            setName(ens);
            onAddressSearch({ address: address.toLocaleLowerCase(), ens });
          }
        } else {
          setName('');
        }
        setLoading(false);
      })();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [terms]);

  return useMemo(() => ({ loading }), [loading]);
}
