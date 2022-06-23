import { useCallback, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { AppState } from "..";

import { updateBlockNumber } from "./actions";
import { useWeb3Connection } from "./hooks";
export default function Updater(): null {
  const { web3, chainId, account } = useWeb3Connection();
  const initialBlock = useSelector(
    (state: AppState) => state.application.initialBlockNumber
  );
  const library = web3.eth;
  const dispatch = useDispatch();
  const [state, setState] = useState<{
    chainId: number | undefined;
    blockNumber: number | null;
  }>({
    chainId,
    blockNumber: null,
  });

  const blockNumberCallback = useCallback(
    (newBlockNumber: number) => {
      if (!initialBlock || newBlockNumber < initialBlock + 10)
        dispatch(updateBlockNumber({ chainId, blockNumber: newBlockNumber }));
    },
    [chainId, setState]
  );

  // attach/detach listeners
  useEffect(() => {
    if (!library || !chainId || !account) return undefined;

    setState({ chainId, blockNumber: null });
    library
      .getBlockNumber()
      .then(blockNumberCallback)
      .catch((error) =>
        console.error(
          `Failed to get block number for chainId: ${chainId}`,
          error
        )
      );

    library
      .subscribe("newBlockHeaders", (error: Error, blockHeader) => {
        if (error) console.warn(error);
      })
      .on("data", (header) => blockNumberCallback(header.number));
    return () => {
      library.clearSubscriptions(() => null);
    };
  }, [dispatch, chainId, account, blockNumberCallback]);

  // const debouncedState = useDebounce(state, 100);

  // useEffect(() => {
  //   if (!debouncedState.chainId || !debouncedState.blockNumber) return;
  //   dispatch(
  //     updateBlockNumber({
  //       chainId: debouncedState.chainId,
  //       blockNumber: debouncedState.blockNumber,
  //     })
  //   );
  // }, [dispatch, debouncedState.blockNumber, debouncedState.chainId]);

  return null;
}
