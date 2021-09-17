import { Flex, Button, Box, Spacer, ButtonGroup, useColorMode, useColorModeValue, IconButton, Heading } from "@chakra-ui/react"
import { SunIcon, MoonIcon } from "@chakra-ui/icons"
import WalletButton from "./WalletButton"


const NavBar = () => {
    const { toggleColorMode } = useColorMode()
    const color = useColorModeValue(<SunIcon />, <MoonIcon />)


    return (
        <>
            <Flex>
                <Box p='2'>
                    <Heading
                        as='h1'
                        fontSize='36'

                    >
                        Placeholder
                    </Heading>
                </Box>
                <Spacer />
                <Box p='4'>
                    <ButtonGroup
                        colorScheme='teal'
                        variant='solid'
                        alignContent='center'
                    >

                        <Button>
                            Home
                        </Button>

                        <WalletButton />

                        <Button>
                            About
                        </Button>



                        <IconButton
                            aria-label="Change Color Mode"
                            onClick={toggleColorMode}
                            icon={color}
                        />
                    </ButtonGroup>

                </Box>
            </Flex>
        </>
    )
}

export default NavBar