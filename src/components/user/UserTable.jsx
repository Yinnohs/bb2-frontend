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
import { useSelector } from 'react-redux'
import { UserTableRowList } from './UserTableRowList'
import { useEffect } from 'react'

export const UserTable = () => {
    const { users, status, error } = useSelector((state) => state.users)

    useEffect(() => {}, [status])

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
