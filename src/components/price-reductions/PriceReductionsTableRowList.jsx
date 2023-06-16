import PropTypes from 'prop-types'
import { PriceReductionTableRow } from './PriceReductionsTableRow'
export const PriceReductionsTableRowList = ({
    priceReductions,
    openDeleteModal,
}) => {
    return (
        <>
            {priceReductions.map((priceReduction, index) => {
                return (
                    <PriceReductionTableRow
                        key={priceReduction?.reduced_price + `${index}`}
                        priceReduction={priceReduction}
                        openDeleteModal={openDeleteModal}
                    />
                )
            })}
        </>
    )
}
PriceReductionsTableRowList.propTypes = {
    priceReductions: PropTypes.array,
    openDeleteModal: PropTypes.func,
}
