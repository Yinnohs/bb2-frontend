import {
    Table,
    TableCaption,
    TableContainer,
    Tbody,
    Tfoot,
    Th,
    Thead,
    Tr,
} from '@chakra-ui/react'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect, useState } from 'react'
import { fetchAllpriceReductions } from '../../features'
import { useModal } from '../../hooks/modal/useModal'
import { PriceReductionsTableRowList } from './PriceReductionsTableRowList'
import { PriceReductionDeleteModal } from './PriceReductionsDeleteModal'

export const PriceReductionsTable = () => {
    const { priceReductions, status } = useSelector(
        (state) => state.priceReductions,
    )
    const dispatch = useDispatch()
    const [selectedPriceReductionId, setSelectedPriceReductionId] =
        useState(null)
    const [isDeleteModalOpen, openDeleteModal, closeDeleteModal] = useModal()

    const openDeleteModalFunction = (userId) => {
        setSelectedPriceReductionId(userId)
        openDeleteModal()
    }

    useEffect(() => {
        if (status === 'idle') {
            dispatch(fetchAllpriceReductions())
        }
    }, [status, dispatch])

    return (
        <>
            <TableContainer w={'70%'} minW={'60vw'}>
                <Table colorScheme="purple" variant="striped">
                    <TableCaption>Current Discounts on the app</TableCaption>
                    <Thead>
                        <Tr>
                            <Th> Discount Id </Th>
                            <Th> Reduced price in % </Th>
                            <Th> Start date </Th>
                            <Th> End date </Th>
                            <Th> Actions </Th>
                        </Tr>
                    </Thead>
                    <Tbody>
                        {priceReductions?.length > 0 ? (
                            <PriceReductionsTableRowList
                                priceReductions={priceReductions}
                                openDeleteModal={openDeleteModalFunction}
                            />
                        ) : (
                            <></>
                        )}
                    </Tbody>
                    <Tfoot>
                        <Tr>
                            <Th> Discount Id </Th>
                            <Th> Reduced price in % </Th>
                            <Th> Start date </Th>
                            <Th> End date </Th>
                            <Th> Actions </Th>
                        </Tr>
                    </Tfoot>
                </Table>
            </TableContainer>
            <PriceReductionDeleteModal
                priceReductionId={selectedPriceReductionId}
                isOpen={isDeleteModalOpen}
                onClose={closeDeleteModal}
            />
        </>
    )
}
