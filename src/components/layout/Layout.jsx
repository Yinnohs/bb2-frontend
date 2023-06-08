import { Box } from '@chakra-ui/layout'
import { Outlet } from 'react-router'
import { NavBar } from '../navbar'
export const Layout = () => {
    return (
        <Box w="100vw" h="100vh">
            <NavBar />
            <Outlet />
        </Box>
    )
}
