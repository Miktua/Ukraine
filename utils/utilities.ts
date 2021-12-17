import { BigNumber } from 'ethers'
import BN from 'bignumber.js'
import numeral from 'numeral'

export function toBNJS(val: BigNumber | number | string) {
    return new BN(val.toString())
}

export function maskAddress(address: string) {
    return address.slice(0, 6) + '...' + address.slice(address.length - 4)
}

export function fd(val: number | string | BN) {
    if (!val) return ''
    return numeral(val?.toString()).format('0,0[.][000000000000000000]')
}

BN.config({ EXPONENTIAL_AT: 100 })
