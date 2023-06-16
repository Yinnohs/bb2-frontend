import { DeleteIcon } from '@chakra-ui/icons'
import { IconButton, Td, Tr } from '@chakra-ui/react'
import PropTypes from 'prop-types'
export const PriceReductionTableRow = ({ priceReduction, openDeleteModal }) => {
    return (
        <>
            <Tr key={priceReduction?.price_reduction_id}>
                <Td>{priceReduction?.price_reduction_id}</Td>
                <Td>{priceReduction?.reduced_price * 100} %</Td>
                <Td>{priceReduction?.start_date}</Td>
                <Td>{priceReduction?.end_date}</Td>
                <Td gap={5} display={'flex'} justifyContent={'space-around'}>
                    <IconButton
                        colorScheme="purple"
                        aria-label="Search database"
                        _hover={{
                            color: 'red.500',
                            backgroundColor: 'red.200',
                        }}
                        onClick={() =>
                            openDeleteModal(priceReduction?.price_reduction_id)
                        }
                        icon={<DeleteIcon />}
                    />
                </Td>
            </Tr>
        </>
    )
}
PriceReductionTableRow.propTypes = {
    priceReduction: PropTypes.object,
    openDeleteModal: PropTypes.func,
}
