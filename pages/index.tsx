import { Flex } from "@chakra-ui/react"
import { DAppProvider } from "@usedapp/core"
import NavBar from "../components/NavBar"


const IndexPage = () => {
	return (
		<DAppProvider config={{}}>
			<NavBar />
			<Flex>
				Test
			</Flex>
		</DAppProvider>
	)
}

export default IndexPage
