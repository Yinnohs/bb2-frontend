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
import { fetchAllsuppliers } from '../../features'
import { useModal } from '../../hooks/modal/useModal'
import { SupplierTableRowList } from './SupplierTableRowList'

export const SupplierTable = () => {
    const { users: suppliers, status } = useSelector((state) => state.suppliers)
    const dispatch = useDispatch()
    const [selectedSupplierId, setSelectedSupplierId] = useState(null)
    const [selectedSupplier, setSelectedSupplier] = useState({})
    const [isDeleteModalOpen, openDeleteModal, closeDeleteModal] = useModal()
    const [isUpdateModalOpen, openUpdateModal, closeUpdateModal] = useModal()

    const openDeleteModalFunction = (userId) => {
        setSelectedSupplierId(userId)
        openDeleteModal()
    }

    const openUpdateModalFunction = (supplier) => {
        setSelectedSupplier(supplier)
        openUpdateModal()
    }

    useEffect(() => {
        if (status === 'idle') {
            dispatch(fetchAllsuppliers())
        }
    }, [status, dispatch])

    return (
        <>
            <TableContainer w={'70%'} minW={'60vw'}>
                <Table colorScheme="purple" variant="striped">
                    <TableCaption>Current Suppliers on the app</TableCaption>
                    <Thead>
                        <Tr>
                            <Th> Supplier Id </Th>
                            <Th> name </Th>
                            <Th> country </Th>
                        </Tr>
                    </Thead>
                    <Tbody>
                        {suppliers?.length > 0 ? (
                            <SupplierTableRowList
                                suppliers={suppliers}
                                openDeleteModal={openDeleteModalFunction}
                                openUpdateModal={openUpdateModalFunction}
                            />
                        ) : (
                            <></>
                        )}
                    </Tbody>
                    <Tfoot>
                        <Tr>
                            <Th> Supplier Id </Th>
                            <Th> name </Th>
                            <Th> country </Th>
                        </Tr>
                    </Tfoot>
                </Table>
            </TableContainer>
        </>
    )
}
