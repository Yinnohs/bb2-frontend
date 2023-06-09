/* eslint-disable no-unused-vars */
import { useState } from 'react'
import {
    Box,
    Button,
    Flex,
    Grid,
    Select,
    useColorModeValue,
} from '@chakra-ui/react'
import { itemListMockups } from '../../mock/Items'
import { ItemCard } from '../../components/card'

export const ItemListPage = () => {
    const textBorderValue = useColorModeValue('purple.500', 'purple.200')
    const [items, setItems] = useState(itemListMockups)
    const [isLoading, setIsLoading] = useState(true)
    return (
        <Box w={'100%'} minH={'100%'}>
            <Flex w={'100%'} minH={'100%'} direction={'column'}>
                <Flex
                    w={'100%'}
                    minH={'10vh'}
                    justify={'center'}
                    align={'center'}
                >
                    <Button
                        color={textBorderValue}
                        borderColor={textBorderValue}
                        border={'1px'}
                        backgroundColor={useColorModeValue('white', 'gray.900')}
                    >
                        Create an Item + 1{' '}
                    </Button>
                </Flex>

                <Flex
                    w={'100%'}
                    minH={'100%'}
                    direction={'column'}
                    alignItems={'center'}
                >
                    <Select
                        placeholder="Select a product state"
                        minW={'20vw'}
                        maxWidth={'30%'}
                        backgroundColor={useColorModeValue(
                            'none',
                            'blackAlpha.500'
                        )}
                        color={textBorderValue}
                        borderColor={textBorderValue}
                    >
                        <option value="ACTIVE">Active</option>
                        <option value="INACTIVE">Inactive</option>
                    </Select>
                    <Grid
                        width={'80%'}
                        templateColumns={'repeat(3, 1fr)'}
                        gap={6}
                        scrollBehavior={'smooth'}
                        scroll
                    >
                        {items.length > 0 ? (
                            items.map((item, i) => {
                                return <ItemCard item={item} key={i} />
                            })
                        ) : (
                            <></>
                        )}
                    </Grid>
                </Flex>
            </Flex>
        </Box>
    )
}
