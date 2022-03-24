import Web3 from "web3";

const NETWORK_ID = process.env.NEXT_PUBLIC_NETWORK_ID

export const loadContract = async (name: string, web3: Web3) => {
    const contractUrl = `/contracts/${name}.json`

    const res = await fetch(contractUrl)

    if (!res.ok) {
        const errorMessage = 'Failed to load contract: ' + contractUrl
        console.error(errorMessage)
        throw new Error(errorMessage)
    }

    const Artifact = await res.json()

    if (!NETWORK_ID) {
        const errorMessage = `No NETWORK_ID provided.`
        console.error(errorMessage)
        throw new Error(errorMessage)
    }

    const contract = new web3.eth.Contract(
        Artifact,
        process.env.NEXT_PUBLIC_CONTRACT_ADDRESS
    )

    return contract
}
