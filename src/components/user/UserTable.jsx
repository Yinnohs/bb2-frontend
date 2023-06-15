import {
    Table,
    TableCaption,
    TableContainer,
    Tbody,
    Td,
    Tfoot,
    Th,
    Thead,
    Tr,
} from '@chakra-ui/react'

export const UserTable = () => {
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
                    <Tr>
                        <Td>inches</Td>
                        <Td>millimetres (mm)</Td>
                        <Td isNumeric>25.4</Td>
                    </Tr>
                </Tbody>
                <Tfoot>
                    <Tr>
                        <Th>To convert</Th>
                        <Th>into</Th>
                        <Th isNumeric>multiply by</Th>
                    </Tr>
                </Tfoot>
            </Table>
        </TableContainer>
    )
}
