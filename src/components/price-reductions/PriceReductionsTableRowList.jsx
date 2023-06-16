import PropTypes from 'prop-types'
import { PriceReductionTableRow } from './PriceReductionsTableRow'
export const PriceReductionsTableRowList = ({
    priceReductions,
    openDeleteModal,
    openUpdateModal,
}) => {
    return (
        <>
            {priceReductions.map((priceReduction, index) => {
                return (
                    <PriceReductionTableRow
                        key={priceReduction?.reduced_price + `${index}`}
                        supplier={priceReduction}
                        openDeleteModal={openDeleteModal}
                        openUpdateModal={openUpdateModal}
                    />
                )
            })}
        </>
    )
}
PriceReductionsTableRowList.propTypes = {
    priceReductions: PropTypes.array,
    openDeleteModal: PropTypes.func,
    openUpdateModal: PropTypes.func,
}
