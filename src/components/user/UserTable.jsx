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
import { UserEditUserModal } from './UserEditUserModal'

export const UserTable = () => {
    const { users, status } = useSelector((state) => state.users)
    const dispatch = useDispatch()
    const [selectedUserId, setSelectedUserId] = useState(null)
    const [selectedUser, setSelectedUser] = useState({})
    const [isDeleteModalOpen, openDeleteModal, closeDeleteModal] = useModal()
    const [isUpdateModalOpen, openUpdateModal, closeUpdateModal] = useModal()

    const openDeleteModalFunction = (userId) => {
        setSelectedUserId(userId)
        openDeleteModal()
    }

    const openUpdateModalFunction = (user) => {
        setSelectedUser(user)
        openUpdateModal()
    }

    useEffect(() => {
        if (status === 'idle') {
            dispatch(fetchAllUsers())
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
                        {users?.length > 0 ? (
                            <UserTableRowList
                                users={users}
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
            <UserDeleteModal
                userId={selectedUserId}
                isOpen={isDeleteModalOpen}
                onClose={closeDeleteModal}
            />
            <UserEditUserModal
                isOpen={isUpdateModalOpen}
                user={selectedUser}
                onClose={closeUpdateModal}
            />
        </>
    )
}
