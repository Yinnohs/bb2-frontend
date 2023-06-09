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

export const ItemCard = ({ image = '/blackhole.webp', item }) => {
    return (
        <Center py={12}>
            <Box
                role={'group'}
                p={6}
                maxW={'330px'}
                w={'full'}
                bg={useColorModeValue('white', 'blackAlpha.500')}
                boxShadow={'2xl'}
                rounded={'lg'}
                pos={'relative'}
                zIndex={1}
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
                        12
                    </Text>
                    <Heading
                        fontSize={'xl'}
                        fontFamily={'body'}
                        fontWeight={500}
                    >
                        {item?.description}A brief Description
                    </Heading>
                    <Stack direction={'row'} align={'center'}>
                        <Text
                            color={'purple.400'}
                            fontSize={'sm'}
                            fontWeight={'bold'}
                            textTransform={'uppercase'}
                        >
                            {/* {`${item?.creator?.name} ${item?.creator?.surname}`} */}
                            Jose I Soto
                        </Text>
                        <Badge
                            fontSize={'sm'}
                            borderRadius={5}
                            textColor={'purple.400'}
                            backgroundColor={useColorModeValue(
                                'white',
                                'gray.800'
                            )}
                            border={'1px'}
                            borderColor={'purple.400'}
                        >
                            {item?.status}
                            Active
                        </Badge>
                    </Stack>
                    <Stack direction={'row'} align={'center'}>
                        <Text fontWeight={800} fontSize={'xl'}>
                            {item?.price} 12€
                        </Text>
                        <Text
                            textDecoration={'line-through'}
                            color={'gray.600'}
                        >
                            {item?.price} 22€
                        </Text>
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
