import { DeleteIcon } from '@chakra-ui/icons'
import { IconButton, Td, Tr } from '@chakra-ui/react'
import PropTypes from 'prop-types'
export const UserTableRow = ({ user }) => {
    return (
        <>
            <Tr key={user?.user_id}>
                <Td>{user?.user_id}</Td>
                <Td>{user?.name}</Td>
                <Td>{user?.surname}</Td>
                <Td>{user?.email}</Td>
                <Td>{user?.creation_date}</Td>
                <Td>{user?.roles[0]?.role}</Td>
                <Td>
                    <IconButton
                        colorScheme="red"
                        aria-label="Search database"
                        icon={<DeleteIcon />}
                    />
                </Td>
            </Tr>
        </>
    )
}
UserTableRow.propTypes = {
    user: PropTypes.object,
}
