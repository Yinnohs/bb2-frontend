import { Box, Button, Flex, useColorModeValue } from '@chakra-ui/react'
import { UserTable } from '../../../components/user/UserTable'

export const UserPage = () => {
    const textBorderValue = useColorModeValue('purple.500', 'purple.200')
    return (
        <Box minH={'100vh'} w={'100%'}>
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
