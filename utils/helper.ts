import axios from "axios";

export const isServer = typeof window === 'undefined';
export const addressSlice = (address: string | undefined) => {
    if(!address) return '0000...0000'
    return   address.slice(
        0,
        4
    )+'...'+address.slice(
        address.length - 4,
        address.length
    )
}

export const convertBNBtoUSD = async (value: any) => {
    if(!value || !Number(value)) return '';
    else {
        const res = await axios.get('https://api.coingecko.com/api/v3/simple/price?ids=binancecoin&vs_currencies=usd');
        console.log(res.data, 'res data')
        const price = res.data.binancecoin.usd;
        return value*price
    }
}

export const USDBNBpair = async () => {
    const res = await axios.get('https://api.coingecko.com/api/v3/simple/price?ids=binancecoin&vs_currencies=usd');
    return Number(res.data.binancecoin.usd);
}
