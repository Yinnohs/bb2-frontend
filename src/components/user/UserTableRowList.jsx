import PropTypes from 'prop-types'
import { UserTableRow } from './UserTableRow'
export const UserTableRowList = ({
    users,
    openDeleteModal,
    openUpdateModal,
}) => {
    return (
        <>
            {users.map((user) => {
                return (
                    <UserTableRow
                        key={user?.email}
                        user={user}
                        openDeleteModal={openDeleteModal}
                        openUpdateModal={openUpdateModal}
                    />
                )
            })}
        </>
    )
}
UserTableRowList.propTypes = {
    users: PropTypes.array,
    openDeleteModal: PropTypes.func,
    openUpdateModal: PropTypes.func,
}
