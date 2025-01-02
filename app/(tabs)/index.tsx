import { Image, StyleSheet, Platform, View, Text, Button } from "react-native";

import { useAppKit } from "@reown/appkit-ethers-react-native";

import "@walletconnect/react-native-compat";

import {
    createAppKit,
    defaultConfig,
    AppKit,
} from "@reown/appkit-ethers-react-native";

// 1. Get projectId from https://cloud.reown.com
const projectId = "b5c6bf26f884222d5eb81d80a0a096c0";

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

const sepolia = {
    chainId: 11155111,
    name: "Sepolia",
    currency: "ETH",
    explorerUrl: "https://sepolia.etherscan.io",
    rpcUrl: "https://sepolia.infura.io",
};

const polygon = {
    chainId: 137,
    name: "Polygon",
    currency: "MATIC",
    explorerUrl: "https://polygonscan.com",
    rpcUrl: "https://polygon-rpc.com",
};

const amoy = {
    chainId: 80002,
    name: "Amoy",
    currency: "MATIC",
    explorerUrl: "https://amoy.polygonscan.com",
    rpcUrl: "rpc-amoy.polygon.technology",
};

const chains = [mainnet, polygon, sepolia, amoy];

// 4. Create modal
createAppKit({
    projectId,
    chains,
    config,
    enableAnalytics: true, // Optional - defaults to your Cloud configuration
});

export default function HomeScreen() {
    const { open } = useAppKit();
    return (
        <View>
            <Text>Hello</Text>
            <AppKit />
            <Button
                title="connectWallet"
                onPress={() => open()}
            >
                Connect Wallet
            </Button>
        </View>
    );
}
