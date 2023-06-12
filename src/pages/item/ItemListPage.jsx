/* eslint-disable no-unused-vars */
import { useState, useEffect } from 'react'
import {
    Box,
    Button,
    Flex,
    Grid,
    Select,
    useColorModeValue,
    useDisclosure,
} from '@chakra-ui/react'
import { ItemCard } from '../../components/card'
import { ItemModal } from '../../components/items'
import { useDispatch, useSelector } from 'react-redux'
import {
    selectAllItems,
    selectItemStatus,
    selectItemsError,
    fetchAllItems,
} from '../../features/items/itemsSlice'

export const ItemListPage = () => {
    const dispatch = useDispatch()
    const textBorderValue = useColorModeValue('purple.500', 'purple.200')
    const items = useSelector(selectAllItems)
    const itemsStatus = useSelector(selectItemStatus)
    const itemsError = useSelector(selectItemsError)
    const { isOpen, onClose, onOpen } = useDisclosure()

    useEffect(() => {
        if (itemsStatus === 'idle') {
            dispatch(fetchAllItems())
        }
    }, [itemsStatus, dispatch])

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
                        onClick={onOpen}
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
                            'blackAlpha.500',
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
            <ItemModal isOpen={isOpen} onClose={onClose} />
        </Box>
    )
}
