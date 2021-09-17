import { Button, Text, Popover, PopoverTrigger, PopoverContent, PopoverHeader, PopoverBody } from "@chakra-ui/react"
import { useEthers, useEtherBalance } from "@usedapp/core"
import { formatEther } from "@ethersproject/units"

const WalletButton = () => {
    const { activateBrowserWallet, account, deactivate } = useEthers()
    const etherBalance = useEtherBalance(account)

    return account ? (
        <Popover
            placement="bottom-start"
        >
            <PopoverTrigger>
                <Button>
                    Your Wallet
                </Button>
            </PopoverTrigger>

            <PopoverContent>
                <PopoverHeader
                    fontSize='22'
                    fontWeight='bold'
                >
                    <Text
                        align='center'
                    >
                        {account && account.slice(0, 10)}...{account.slice(account.length - 10, account.length)}
                    </Text>
                </PopoverHeader>

                <PopoverBody>
                    <Text>
                        Balance: {etherBalance && formatEther(etherBalance)} ETH
                    </Text>
                    <Text>
                        Network: { }
                    </Text>
                    <Button
                        colorScheme='red'
                        onClick={() => deactivate()}
                    >
                        Disconnect Wallet
                    </Button>
                </PopoverBody>
            </PopoverContent>

        </Popover>

    ) : (
        <Button
            colorScheme='red'
            onClick={() => activateBrowserWallet()}
        >
            Wallet Not Connected!
        </Button>
    )
}

export default WalletButton