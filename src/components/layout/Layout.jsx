import { Box } from '@chakra-ui/layout'
import { Outlet } from 'react-router'
import { NavBar } from '../navbar'
import { Footer } from '../footer'
export const Layout = () => {
    return (
        <Box w="100%" minH="100vh">
            <NavBar />
            <Outlet />
            <Footer />
        </Box>
    )
}
