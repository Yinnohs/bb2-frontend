import PropTypes from 'prop-types'
import { PriceReductionTableRow } from './PriceReductionsTableRow'
export const PriceReductionsTableRowList = ({
    suppliers,
    openDeleteModal,
    openUpdateModal,
}) => {
    return (
        <>
            {suppliers.map((supplier, index) => {
                return (
                    <PriceReductionTableRow
                        key={supplier?.name + `${index}`}
                        supplier={supplier}
                        openDeleteModal={openDeleteModal}
                        openUpdateModal={openUpdateModal}
                    />
                )
            })}
        </>
    )
}
PriceReductionsTableRowList.propTypes = {
    suppliers: PropTypes.array,
    openDeleteModal: PropTypes.func,
    openUpdateModal: PropTypes.func,
}
