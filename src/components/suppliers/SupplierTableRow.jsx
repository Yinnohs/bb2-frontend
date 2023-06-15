import { DeleteIcon, EditIcon } from '@chakra-ui/icons'
import { IconButton, Td, Tr } from '@chakra-ui/react'
import PropTypes from 'prop-types'
export const UserTableRow = ({
    supplier,
    openDeleteModal,
    openUpdateModal,
}) => {
    return (
        <>
            <Tr key={supplier?.supplier_id}>
                <Td>{supplier?.supplier_id}</Td>
                <Td>{supplier?.name}</Td>
                <Td>{supplier?.country}</Td>
                <Td gap={5} display={'flex'} justifyContent={'space-around'}>
                    <IconButton
                        colorScheme="purple"
                        aria-label="Search database"
                        _hover={{
                            color: 'red.500',
                            backgroundColor: 'red.200',
                        }}
                        onClick={() => openDeleteModal(supplier?.supplier_id)}
                        icon={<DeleteIcon />}
                    />
                    <IconButton
                        colorScheme="purple"
                        aria-label="Search database"
                        _hover={{
                            color: 'green.600',
                            backgroundColor: 'green.100',
                        }}
                        onClick={() => openUpdateModal(supplier)}
                        icon={<EditIcon />}
                    />
                </Td>
            </Tr>
        </>
    )
}
UserTableRow.propTypes = {
    supplier: PropTypes.object,
    openDeleteModal: PropTypes.func,
    openUpdateModal: PropTypes.func,
}
