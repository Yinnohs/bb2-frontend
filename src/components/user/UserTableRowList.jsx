import PropTypes from 'prop-types'
import { UserTableRow } from './UserTableRow'
export const UserTableRowList = ({ users, openModal }) => {
    return (
        <>
            {users.map((user) => {
                return (
                    <UserTableRow
                        key={user?.email}
                        user={user}
                        openModal={openModal}
                    />
                )
            })}
        </>
    )
}
UserTableRowList.propTypes = {
    users: PropTypes.array,
    openModal: PropTypes.func,
}
