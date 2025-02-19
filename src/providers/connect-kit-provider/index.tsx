import React from "react";

import { InitContractProvider } from "@crossbell/contract";
import type { BaseSigner } from "@crossbell/react-account";
import { useAccountState, ReactAccountProvider } from "@crossbell/react-account";
import { useRefCallback } from "@crossbell/util-hooks";
import { Web3Provider } from "@ethersproject/providers";
import { useWalletConnectModal } from "@walletconnect/modal-react-native";
import * as Sentry from "sentry-expo";
import type { Address } from "viem";

import { Web3Context } from "@/context/web3-context";

import { useContractConfig } from "./contract-config";

export function ConnectKitProvider({ children }: React.PropsWithChildren) {
  const accountState = useAccountState();
  const { address, provider: walletConnectProvider } = useWalletConnectModal();
  const contractConfig = useContractConfig();
  const web3Provider = React.useMemo(() => {
    if (contractConfig.provider)
      return new Web3Provider(contractConfig.provider, 3737);
    else
      return null;
  }, [contractConfig.provider]);

  const onDisconnect = useRefCallback(() => walletConnectProvider?.disconnect?.());

  const getSigner = useRefCallback(async () => web3Provider.getSigner(address) as BaseSigner);

  React.useEffect(() => {
    if (address) {
      accountState.connectWallet(address as Address);
    }
  }, [address]);

  React.useEffect(() => {
    const isConnected = !!accountState?.wallet || !!accountState?.email;

    if (!isConnected) {
      Sentry.Native.setUser(null);
      return;
    }

    Sentry.Native.setUser({
      id: accountState?.wallet?.characterId?.toString(),
      address: accountState?.wallet?.address || "",
      email: accountState?.email?.email || "",
      username: accountState?.wallet?.character?.metadata?.content?.name || "",
    });
  }, [accountState]);

  React.useEffect(() => {
    accountState.refreshEmail();
    accountState.markSSRReady();
  }, []);

  return (
    <InitContractProvider {...contractConfig}>
      <ReactAccountProvider getSigner={getSigner} onDisconnect={onDisconnect}>
        <Web3Context.Provider value={web3Provider}>
          {children}
        </Web3Context.Provider>
      </ReactAccountProvider>
    </InitContractProvider>
  );
}

