import { useBosLoaderStore } from "../../stores/bos-loader";
import { useVmStore } from "../../stores/vm";
import React from "react";
import { Spinner } from "../lib/Spinner";

export function Widget(props) {
	const { EthersProvider, ethersContext, Widget: MyWidget } = useVmStore();
	const redirectMapStore = useBosLoaderStore();

	if (!EthersProvider || !redirectMapStore.hasResolved) {
		return <Spinner />;
	}

	return (
		<EthersProvider value={ethersContext}>
			<MyWidget
				config={{
					redirectMap: redirectMapStore.redirectMap,
				}}
				{...props}
			/>
		</EthersProvider>
	);
}
