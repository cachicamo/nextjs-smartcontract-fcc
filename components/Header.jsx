import { ConnectButton } from "web3uikit"

export default function Header() {
    return (
        <div class="border-b-4 border-indigo-500 flex flex-row">
            <h1 class="py-4 px-4 font-bold text-3xl"> Decentralized Raffle</h1>
            <div class="ml-auto py-2 px-4">
                <ConnectButton moralisAuth={false} />
            </div>
        </div>
    )
}
