import {
    Box,
    Container,
    Stack,
    Text,
    Image,
    Flex,
    VStack,
    Button,
    Heading,
    SimpleGrid,
    StackDivider,
    useColorModeValue,
} from '@chakra-ui/react'
import { useParams } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { selectOneItemById } from '../../features/items/itemsSlice'
import {
    ItemDetailsPriceReductions,
    ItemsDetailsSuppliers,
} from '../../components/items'

export const ItemDetails = () => {
    const { id } = useParams()
    const itemId = parseInt(id, 10)
    const item = useSelector((state) => selectOneItemById(state, itemId))

    return (
        <Container maxW={'7xl'} minH={'100vh'}>
            <SimpleGrid
                columns={{ base: 1, lg: 2 }}
                spacing={{ base: 8, md: 20 }}
                py={{ base: 18, md: 24 }}
            >
                <Flex>
                    <Image
                        rounded={'md'}
                        alt={'product image'}
                        src={'/blackhole.webp'}
                        fit={'cover'}
                        align={'center'}
                        w={'100%'}
                        h={{ base: '100%', sm: '400px', lg: '500px' }}
                    />
                </Flex>
                <Stack spacing={{ base: 6, md: 12 }}>
                    <Box as={'header'}>
                        <Heading
                            lineHeight={1.1}
                            fontWeight={600}
                            fontSize={{ base: '2xl', sm: '4xl', lg: '5xl' }}
                        >
                            {item?.description}
                        </Heading>
                        <Text
                            color={useColorModeValue('gray.900', 'gray.400')}
                            fontWeight={300}
                            fontSize={'2xl'}
                        >
                            {item?.price} €
                        </Text>
                    </Box>

                    <Stack
                        spacing={{ base: 4, sm: 6 }}
                        direction={'column'}
                        divider={
                            <StackDivider
                                borderColor={useColorModeValue(
                                    'gray.200',
                                    'gray.600',
                                )}
                            />
                        }
                    >
                        <VStack spacing={{ base: 4, sm: 6 }}>
                            <Text
                                color={useColorModeValue(
                                    'gray.500',
                                    'gray.400',
                                )}
                                fontSize={'2xl'}
                                fontWeight={'300'}
                            >
                                {item?.item_state}
                            </Text>
                            <Text fontSize={'lg'}>{item?.code}</Text>
                        </VStack>

                        {item?.suppliers ?? (
                            <ItemsDetailsSuppliers suppliers={item?.supplier} />
                        )}

                        {item?.price_reductions ?? (
                            <ItemDetailsPriceReductions
                                priceReductions={item?.priceReductions}
                            />
                        )}
                    </Stack>

                    <Button
                        rounded={'none'}
                        w={'full'}
                        mt={8}
                        size={'lg'}
                        py={'7'}
                        bg={useColorModeValue('purple.900', 'purple.100')}
                        color={useColorModeValue('white', 'gray.900')}
                        textTransform={'uppercase'}
                        _hover={{
                            transform: 'translateY(2px)',
                            boxShadow: 'lg',
                        }}
                    >
                        Update Item
                    </Button>

                    <Stack
                        direction="row"
                        alignItems="center"
                        justifyContent={'center'}
                    >
                        <Text>
                            {' '}
                            Created by :{' '}
                            {` ${item?.creator.name} ${item?.creator.surname}`}
                        </Text>
                    </Stack>
                </Stack>
            </SimpleGrid>
        </Container>
    )
}
