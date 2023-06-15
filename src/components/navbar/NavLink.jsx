import { Text, useColorModeValue, Link } from '@chakra-ui/react'
import { Link as RouterLink } from 'react-router-dom'
import PropTypes from 'prop-types'

export const NavLink = ({ label, to }) => {
    return (
        <Link
            as={RouterLink}
            px={2}
            py={1}
            rounded={'md'}
            _hover={{
                childrenDecoration: 'none',
                bg: useColorModeValue('gray.200', 'gray.700'),
            }}
            href={'#'}
            to={to}
        >
            <Text>{label}</Text>
        </Link>
    )
}

NavLink.propTypes = {
    label: PropTypes.string,
    to: PropTypes.string,
}
