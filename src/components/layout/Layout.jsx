import { Box } from '@chakra-ui/layout'
import { Outlet } from 'react-router'

export const Layout = () => {
    return (
        <Box>
            <Outlet />
        </Box>
    )
}
