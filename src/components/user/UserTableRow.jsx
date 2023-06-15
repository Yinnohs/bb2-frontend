import { DeleteIcon, EditIcon } from '@chakra-ui/icons'
import { IconButton, Td, Tr } from '@chakra-ui/react'
import PropTypes from 'prop-types'
export const UserTableRow = ({ user, openDeleteModal, openUpdateModal }) => {
    return (
        <>
            <Tr key={user?.user_id}>
                <Td>{user?.user_id}</Td>
                <Td>{user?.name}</Td>
                <Td>{user?.surname}</Td>
                <Td>{user?.email}</Td>
                <Td>{user?.creation_date}</Td>
                <Td>{user?.roles[0]?.role}</Td>
                <Td gap={5} display={'flex'} justifyContent={'space-around'}>
                    <IconButton
                        colorScheme="purple"
                        aria-label="Search database"
                        _hover={{
                            color: 'red.500',
                            backgroundColor: 'red.200',
                        }}
                        onClick={() => openDeleteModal(user?.user_id)}
                        icon={<DeleteIcon />}
                    />
                    <IconButton
                        colorScheme="purple"
                        aria-label="Search database"
                        _hover={{
                            color: 'green.600',
                            backgroundColor: 'green.100',
                        }}
                        onClick={() => openUpdateModal(user)}
                        icon={<EditIcon />}
                    />
                </Td>
            </Tr>
        </>
    )
}
UserTableRow.propTypes = {
    user: PropTypes.object,
    openDeleteModal: PropTypes.func,
    openUpdateModal: PropTypes.func,
}
