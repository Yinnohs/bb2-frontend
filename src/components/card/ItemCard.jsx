import {
    Box,
    Center,
    useColorModeValue,
    Heading,
    Text,
    Stack,
    Image,
    Badge,
} from '@chakra-ui/react'

import PropTypes from 'prop-types'
import { useNavigate } from 'react-router-dom'

export const ItemCard = ({ image = '/blackhole.webp', item }) => {
    const navigation = useNavigate()
    return (
        <Center py={12}>
            <Box
                onClick={() => navigation(`/items/details/${item.item_id}`)}
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
                        filter: 'blur(15px)',
                        zIndex: -1,
                    }}
                    _groupHover={{
                        _after: {
                            filter: 'blur(20px)',
                        },
                    }}
                >
                    <Image
                        rounded={'lg'}
                        height={230}
                        width={282}
                        objectFit={'cover'}
                        src={image}
                    />
                </Box>
                <Stack pt={10} align={'center'}>
                    <Text
                        color={'gray.500'}
                        fontSize={'sm'}
                        textTransform={'uppercase'}
                    >
                        {item?.code}
                    </Text>
                    <Heading
                        fontSize={'xl'}
                        fontFamily={'body'}
                        fontWeight={500}
                    >
                        {item?.description}
                    </Heading>
                    <Stack direction={'row'} align={'center'}>
                        <Text
                            color={'purple.400'}
                            fontSize={'sm'}
                            fontWeight={'bold'}
                            textTransform={'uppercase'}
                        >
                            {`${item?.creator?.name} ${item?.creator?.surname}`}
                        </Text>
                        <Badge
                            fontSize={'sm'}
                            borderRadius={5}
                            textColor={'purple.400'}
                            backgroundColor={useColorModeValue(
                                'white',
                                'gray.800',
                            )}
                            border={'1px'}
                            borderColor={'purple.400'}
                        >
                            {item?.item_state}
                        </Badge>
                    </Stack>
                    <Stack direction={'row'} align={'center'}>
                        <Text fontWeight={800} fontSize={'xl'}>
                            {item?.price}€
                        </Text>
                        {item.price_reductions !== undefined ? (
                            <Text
                                textDecoration={'line-through'}
                                color={'gray.600'}
                            >
                                {item?.price}€
                            </Text>
                        ) : (
                            <></>
                        )}
                    </Stack>
                </Stack>
            </Box>
        </Center>
    )
}
ItemCard.propTypes = {
    image: PropTypes.string,
    item: PropTypes.object,
}
