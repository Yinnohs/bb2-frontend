import { Box, Button, Flex, useColorModeValue } from '@chakra-ui/react'
import { useNavigate } from 'react-router-dom'

export const UserPage = () => {
    const navigation = useNavigate()
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
                    Create an Item + 1
                </Button>
            </Flex>
        </Box>
    )
}
