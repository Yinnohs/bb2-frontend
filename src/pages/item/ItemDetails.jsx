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
    List,
    ListItem,
} from '@chakra-ui/react'
import { useParams } from 'react-router-dom'
import {} from '@chakra-ui/icons'

export const ItemDetails = () => {
    const { id } = useParams()
    return (
        <Container maxW={'7xl'}>
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
                            Andromeda black hole
                        </Heading>
                        <Text
                            color={useColorModeValue('gray.900', 'gray.400')}
                            fontWeight={300}
                            fontSize={'2xl'}
                        >
                            350.00 €
                        </Text>
                    </Box>

                    <Stack
                        spacing={{ base: 4, sm: 6 }}
                        direction={'column'}
                        divider={
                            <StackDivider
                                borderColor={useColorModeValue(
                                    'gray.200',
                                    'gray.600'
                                )}
                            />
                        }
                    >
                        <VStack spacing={{ base: 4, sm: 6 }}>
                            <Text
                                color={useColorModeValue(
                                    'gray.500',
                                    'gray.400'
                                )}
                                fontSize={'2xl'}
                                fontWeight={'300'}
                            >
                                Just another black hole in the system
                            </Text>
                            <Text fontSize={'lg'}>
                                This black hole is near the block B023-G078 just
                                a random mind weight black hole
                            </Text>
                        </VStack>
                        <Box>
                            <Text
                                fontSize={{ base: '16px', lg: '18px' }}
                                color={useColorModeValue(
                                    'purple.500',
                                    'purple.300'
                                )}
                                fontWeight={'500'}
                                textTransform={'uppercase'}
                                mb={'4'}
                            >
                                Features
                            </Text>

                            <SimpleGrid
                                columns={{ base: 1, md: 2 }}
                                spacing={10}
                            >
                                <List spacing={2}>
                                    <ListItem>
                                        Mid higclass mass density
                                    </ListItem>
                                    <ListItem>High enrgy emitted</ListItem>
                                    <ListItem>
                                        Good for creating white smurfs
                                    </ListItem>
                                </List>
                            </SimpleGrid>
                        </Box>
                        <Box>
                            <Text
                                fontSize={{ base: '16px', lg: '18px' }}
                                color={useColorModeValue(
                                    'purple.',
                                    'purple.300'
                                )}
                                fontWeight={'500'}
                                textTransform={'uppercase'}
                                mb={'4'}
                            >
                                Supplier Details
                            </Text>

                            <List spacing={2}>
                                <ListItem>
                                    <Text
                                        as={'span'}
                                        fontWeight={'bold'}
                                        mr={5}
                                    >
                                        Name:
                                    </Text>
                                    Black holes andromeda A.S.
                                </ListItem>
                                <ListItem>
                                    <Text
                                        as={'span'}
                                        fontWeight={'bold'}
                                        mr={5}
                                    >
                                        Country:
                                    </Text>
                                    Spain
                                </ListItem>
                            </List>
                        </Box>
                        <Box>
                            <Text
                                fontSize={{ base: '16px', lg: '18px' }}
                                color={useColorModeValue(
                                    'purple.',
                                    'purple.300'
                                )}
                                fontWeight={'500'}
                                textTransform={'uppercase'}
                                mb={'4'}
                            >
                                Discount Applied
                            </Text>

                            <List spacing={2}>
                                <ListItem>
                                    <Text
                                        as={'span'}
                                        fontWeight={'bold'}
                                        mr={5}
                                    >
                                        Discount applied:
                                    </Text>
                                    20%
                                </ListItem>
                                <ListItem>
                                    <Text
                                        as={'span'}
                                        fontWeight={'bold'}
                                        mr={5}
                                    >
                                        Discount until:
                                    </Text>
                                    20/10/2555
                                </ListItem>
                            </List>
                        </Box>
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
                        Add to cart
                    </Button>

                    <Stack
                        direction="row"
                        alignItems="center"
                        justifyContent={'center'}
                    >
                        <Text> Created by : Jose I soto </Text>
                    </Stack>
                </Stack>
            </SimpleGrid>
        </Container>
    )
}
