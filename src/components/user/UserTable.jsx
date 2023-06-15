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
import { fetchAllUsers } from '../../features'
import { useModal } from '../../hooks/modal/useModal'
import { UserDeleteModal } from './UserDeleteModal'

export const UserTable = () => {
    const { users, status } = useSelector((state) => state.users)
    const dispatch = useDispatch()
    const [selectedUserId, setSelectedUserId] = useState(null)
    const [isDeleteModalOpen, openDeleteModal, closeDeleteModal] = useModal()
    const openDeleteModalFunction = (userId) => {
        setSelectedUserId(userId)
        openDeleteModal()
    }
    useEffect(() => {
        if (status === 'idle') {
            dispatch(fetchAllUsers())
        }
    }, [status, dispatch])

    return (
        <>
            <TableContainer w={'60%'}>
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
                        {users?.length > 0 ? (
                            <UserTableRowList
                                users={users}
                                openModal={openDeleteModalFunction}
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
            <UserDeleteModal
                userId={selectedUserId}
                isOpen={isDeleteModalOpen}
                onClose={closeDeleteModal}
            />
        </>
    )
}
