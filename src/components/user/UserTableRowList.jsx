import PropTypes from 'prop-types'
import { UserTableRow } from './UserTableRow'
export const UserTableRowList = ({ users }) => {
    return (
        <>
            {users.map((user) => {
                return <UserTableRow key={user?.email} user={user} />
            })}
        </>
    )
}
UserTableRowList.propTypes = {
    users: PropTypes.array,
}
