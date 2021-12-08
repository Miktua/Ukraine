export const INFURA_ID = 'b266401a3b4242aebe375aa154e80e9d'



export const NETWORKS = {
    avax: {
        master: '0xD58cef37f1e9a42fd2938212Ad6eBBF3fE83eC5d',
        api: 'https://toolto.farm/api/avax/data',
        chainParameters: {
            chainId: '0xa86a',
            chainName: 'Avalanche',
            nativeCurrency: {
                name: 'AVAX',
                symbol: 'AVAX',
                decimals: 18,
            },
            rpcUrls: ['https://api.avax.network/ext/bc/C/rpc'],
            blockExplorerUrls: ['https://cchain.explorer.avax.network'],
        },
        explorerTpl: 'https://cchain.explorer.avax.network/address/ADDRESS',
        tokenList: 'https://raw.githubusercontent.com/complusnetwork/default-token-list/master/default-tokenlist-ava.json',
    },
    bsc: {
        master: '0x3243d89382fAA26e3f4eC39E64243A3aa0Ef3Ed4',
        api: 'https://toolto.farm/api/bsc/data',
        chainParameters: {
            chainId: '0x38',
            chainName: 'BSC',
            nativeCurrency: {
                name: 'Binance Coin',
                symbol: 'BNB',
                decimals: 18,
            },
            rpcUrls: ['https://bsc-dataseed.binance.org/'],
            blockExplorerUrls: ['https://bscscan.com/'],
        },
        explorerTpl: 'https://bscscan.com/address/ADDRESS',
        tokenList: 'https://gateway.pinata.cloud/ipfs/QmdKy1K5TMzSHncLzUXUJdvKi1tHRmJocDRfmCXxW5mshS',
    },
    eth: {
        master: '0xB9144272C971Ae08Db982DBFb6DA79A4c7961be1',
        api: 'https://toolto.farm/api/eth/data',
        chainParameters: {
            chainId: '0x1',
            chainName: 'BSC',
            nativeCurrency: {
                name: 'Binance Coin',
                symbol: 'BNB',
                decimals: 18,
            },
            rpcUrls: ['https://bsc-dataseed.binance.org/'],
            blockExplorerUrls: ['https://bscscan.com/'],
        },
        explorerTpl: 'https://etherscan.com/address/ADDRESS',
        tokenList: 'https://gateway.ipfs.io/ipns/tokens.uniswap.org',
    },
    fantom: {
        master: '0x705C6d508890F29cb97e5DFC1E49c4c67254A23C',
        api: 'https://toolto.farm/api/fantom/data',
        chainParameters: {
            chainId: '0xfa',
            chainName: 'Fantom Opera',
            nativeCurrency: {
                name: 'FTM',
                symbol: 'FTM',
                decimals: 18,
            },
            rpcUrls: ['https://rpcapi.fantom.network'],
            blockExplorerUrls: ['https://ftmscan.com'],
        },
        explorerTpl: 'https://ftmscan.com/address/ADDRESS',
        tokenList: 'https://raw.githubusercontent.com/Crocoswap/tokenlists/main/fantomfinance.tokenlist.json',
    },
    heco: {
        master: '0xF2c257532ccd48B779Fa9402B78CCEB57bdD633c',
        api: 'https://toolto.farm/api/heco/data',
        chainParameters: {
            chainId: '0x80',
            chainName: 'HECO',
            nativeCurrency: {
                name: 'HT',
                symbol: 'HT',
                decimals: 18,
            },
            rpcUrls: ['https://http-mainnet-node.huobichain.com'],
            blockExplorerUrls: ['https://hecoinfo.com/'],
        },
        explorerTpl: 'https://hecoinfo.com/address/ADDRESS',
        tokenList: 'https://raw.githubusercontent.com/complusnetwork/default-token-list/master/default-tokenlist-heco.json',
    },
    polygon: {
        master: '0x5171BD33Cc5851F749F4aCa983F6C6086CA8Df0E',
        api: 'https://toolto.farm/api/polygon/data',
        chainParameters: {
            chainId: '0x89',
            chainName: 'Polygon',
            nativeCurrency: {
                name: 'MATIC Token',
                symbol: 'MATIC',
                decimals: 18,
            },
            rpcUrls: ['https://rpc-mainnet.maticvigil.com'],
            blockExplorerUrls: ['https://explorer-mainnet.maticvigil.com'],
        },
        explorerTpl: 'https://explorer-mainnet.maticvigil.com/address/ADDRESS',
        tokenList: 'https://raw.githubusercontent.com/complusnetwork/default-token-list/master/default-tokenlist-matic.json',
    },
}


