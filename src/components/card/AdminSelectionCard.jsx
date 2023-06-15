import {
    Box,
    Center,
    useColorModeValue,
    Heading,
    Stack,
} from '@chakra-ui/react'

import PropTypes from 'prop-types'
import { useNavigate } from 'react-router-dom'

export const AdminSelectionCard = ({
    image = '/blackhole.webp',
    label,
    url,
}) => {
    const navigation = useNavigate()
    return (
        <Center py={12}>
            <Box
                onClick={() => navigation(`/admin${url}`)}
                role={'group'}
                p={6}
                maxW={'330px'}
                w={'full'}
                bg={useColorModeValue('white', 'blackAlpha.500')}
                boxShadow={'2xl'}
                rounded={'lg'}
                pos={'relative'}
                zIndex={1}
                _hover={{
                    cursor: 'pointer',
                }}
            >
                <Box
                    rounded={'lg'}
                    mt={-1}
                    pos={'relative'}
                    height={'230px'}
                    _after={{
                        transition: 'all .3s ease',
                        content: '""',
                        w: 'full',
                        h: 'full',
                        pos: 'absolute',
                        top: 5,
                        left: 0,
                        backgroundImage: `url(${image})`,
                    }}
                    _groupHover={{
                        _after: {
                            filter: 'blur(20px)',
                        },
                    }}
                ></Box>
                <Stack
                    pt={10}
                    align={'center'}
                    w={'100%'}
                    h={'100%'}
                    display={'flex'}
                    flexDirection={'row'}
                    justifyContent={'center'}
                    alignItems={'center'}
                >
                    <Heading
                        fontSize={'xl'}
                        fontFamily={'body'}
                        fontWeight={500}
                        position={'absolute'}
                        top={'28'}
                        color={'purple.200'}
                    >
                        {label}
                    </Heading>
                </Stack>
            </Box>
        </Center>
    )
}
AdminSelectionCard.propTypes = {
    image: PropTypes.string,
    label: PropTypes.string,
    url: PropTypes.string,
}
