import PropTypes from 'prop-types'
import { SupplierTableRow } from './SupplierTableRow'
export const SupplierTableRowList = ({
    suppliers,
    openDeleteModal,
    openUpdateModal,
}) => {
    return (
        <>
            {suppliers.map((supplier, index) => {
                return (
                    <SupplierTableRow
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
SupplierTableRowList.propTypes = {
    suppliers: PropTypes.array,
    openDeleteModal: PropTypes.func,
    openUpdateModal: PropTypes.func,
}
