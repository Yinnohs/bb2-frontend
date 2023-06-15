import PropTypes from 'prop-types'
import { SupplierTableRow } from './SupplierTableRow'
export const SupplierTableRowList = ({
    suppliers,
    openDeleteModal,
    openUpdateModal,
}) => {
    return (
        <>
            {suppliers.map((Supplier) => {
                return (
                    <SupplierTableRow
                        key={Supplier?.email}
                        Supplier={Supplier}
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
