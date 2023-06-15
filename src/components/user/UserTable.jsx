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
import { useEffect } from 'react'
import { fetchAllUsers } from '../../features'

export const UserTable = () => {
    const { users, status } = useSelector((state) => state.users)
    const dispatch = useDispatch()
    useEffect(() => {
        if (status === 'idle') {
            dispatch(fetchAllUsers())
        }
    }, [status, dispatch])

    return (
        <TableContainer w={'86%'}>
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
                    </Tr>
                </Thead>
                <Tbody>
                    {users?.length > 0 ? (
                        <UserTableRowList users={users} />
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
                    </Tr>
                </Tfoot>
            </Table>
        </TableContainer>
    )
}
