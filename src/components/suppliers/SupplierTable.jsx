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
import { UserTableRowList } from './UserTableRowList'
import { useEffect, useState } from 'react'
import { fetchAllUsers, fetchAllsuppliers } from '../../features'
import { useModal } from '../../hooks/modal/useModal'
import { UserDeleteModal } from './UserDeleteModal'
import { UserEditUserModal } from './UserEditUserModal'

export const UserTable = () => {
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
                    <TableCaption>Current Users on the app</TableCaption>
                    <Thead>
                        <Tr>
                            <Th> User Id </Th>
                            <Th> name </Th>
                            <Th> surname </Th>
                            <Th> email </Th>
                            <Th> Created At </Th>
                            <Th> Role </Th>
                            <Th> Actions </Th>
                        </Tr>
                    </Thead>
                    <Tbody>
                        {suppliers?.length > 0 ? (
                            <UserTableRowList
                                users={suppliers}
                                openDeleteModal={openDeleteModalFunction}
                                openUpdateModal={openUpdateModalFunction}
                            />
                        ) : (
                            <></>
                        )}
                    </Tbody>
                    <Tfoot>
                        <Tr>
                            <Th> User Id </Th>
                            <Th> name </Th>
                            <Th> surname </Th>
                            <Th> email </Th>
                            <Th> Created At </Th>
                            <Th> Role </Th>
                            <Th> Actions </Th>
                        </Tr>
                    </Tfoot>
                </Table>
            </TableContainer>
        </>
    )
}
