import {
    Box,
    Container,
    Stack,
    Text,
    useColorModeValue,
} from '@chakra-ui/react'
import { ArrowLeftIcon, ArrowUpIcon } from '@chakra-ui/icons'
import { SocialButton } from '../buttons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export const Footer = () => {
    return (
        <Box
            bg={useColorModeValue('gray.50', 'gray.900')}
            color={useColorModeValue('gray.700', 'gray.200')}
        >
            <Container
                as={Stack}
                maxW={'6xl'}
                py={4}
                direction={{ base: 'column', md: 'row' }}
                spacing={4}
                justify={{ base: 'center', md: 'space-between' }}
                align={{ base: 'center', md: 'center' }}
            >
                <Text>© 2023 Yinnohs. All rights reserved</Text>
                <Stack direction={'row'} spacing={6}>
                    <SocialButton label={'Github'} href={'#'}>
                        <FontAwesomeIcon size="lg" icon={'github'} />
                    </SocialButton>
                    <SocialButton label={'YouTube'} href={'#'}>
                        <ArrowLeftIcon />
                    </SocialButton>
                    <SocialButton label={'Instagram'} href={'#'}>
                        <ArrowUpIcon />
                    </SocialButton>
                </Stack>
            </Container>
        </Box>
    )
}
