import "@walletconnect/react-native-compat";

import {
    createAppKit,
    defaultConfig,
    AppKit,
} from "@reown/appkit-ethers-react-native";

// 1. Get projectId from https://cloud.reown.com
const projectId = "YOUR_PROJECT_ID";

// 2. Create config
const metadata = {
    name: "AppKit RN",
    description: "AppKit RN Example",
    url: "https://reown.com/appkit",
    icons: ["https://avatars.githubusercontent.com/u/179229932"],
    redirect: {
        native: "YOUR_APP_SCHEME://",
    },
};

const config = defaultConfig({ metadata });

// 3. Define your chains
const mainnet = {
    chainId: 1,
    name: "Ethereum",
    currency: "ETH",
    explorerUrl: "https://etherscan.io",
    rpcUrl: "https://cloudflare-eth.com",
};

const polygon = {
    chainId: 137,
    name: "Polygon",
    currency: "MATIC",
    explorerUrl: "https://polygonscan.com",
    rpcUrl: "https://polygon-rpc.com",
};

const chains = [mainnet, polygon];

// 4. Create modal
createAppKit({
    projectId,
    chains,
    config,
    enableAnalytics: true, // Optional - defaults to your Cloud configuration
});

export default function App() {
    return (
        <>
            // Rest of your app...
            <AppKit />
        </>
    );
}
