import { DeleteIcon, EditIcon } from '@chakra-ui/icons'
import { IconButton, Td, Tr } from '@chakra-ui/react'
import PropTypes from 'prop-types'
export const PriceReductionTableRow = ({
    PriceReduction,
    openDeleteModal,
    openUpdateModal,
}) => {
    return (
        <>
            <Tr key={PriceReduction?.price_reduction_id}>
                <Td>{PriceReduction?.price_reduction_id}</Td>
                <Td>{PriceReduction?.reduced_price}</Td>
                <Td>{PriceReduction?.start_date}</Td>
                <Td>{PriceReduction?.end_date}</Td>
                <Td gap={5} display={'flex'} justifyContent={'space-around'}>
                    <IconButton
                        colorScheme="purple"
                        aria-label="Search database"
                        _hover={{
                            color: 'red.500',
                            backgroundColor: 'red.200',
                        }}
                        onClick={() =>
                            openDeleteModal(PriceReduction?.price_reduction_id)
                        }
                        icon={<DeleteIcon />}
                    />
                    <IconButton
                        colorScheme="purple"
                        aria-label="Search database"
                        _hover={{
                            color: 'green.600',
                            backgroundColor: 'green.100',
                        }}
                        onClick={() => openUpdateModal(PriceReduction)}
                        icon={<EditIcon />}
                    />
                </Td>
            </Tr>
        </>
    )
}
PriceReductionTableRow.propTypes = {
    PriceReduction: PropTypes.object,
    openDeleteModal: PropTypes.func,
    openUpdateModal: PropTypes.func,
}
