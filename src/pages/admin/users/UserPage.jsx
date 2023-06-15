import { Box, Button, Flex, useColorModeValue } from '@chakra-ui/react'
import { UserTable } from '../../../components/user/UserTable'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'
import { fetchAllUsers } from '../../../features'

export const UserPage = () => {
    const textBorderValue = useColorModeValue('purple.500', 'purple.200')
    const dispatch = useDispatch()
    const { users, status, error } = useSelector((state) => state.users)

    useEffect(() => {
        if (status === 'idle') {
            dispatch(fetchAllUsers())
        }
    }, [status])
    return (
        <Box minH={'100vh'} w={'100%'} mt={20}>
            <Flex
                direction={'column'}
                w={'100%'}
                minH={'100vh'}
                alignItems={'center'}
            >
                <Button
                    color={textBorderValue}
                    borderColor={textBorderValue}
                    border={'1px'}
                    backgroundColor={useColorModeValue('white', 'gray.900')}
                >
                    Create an User + 1
                </Button>
                <UserTable />
            </Flex>
        </Box>
    )
}
