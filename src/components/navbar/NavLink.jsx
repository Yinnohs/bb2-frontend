import { useColorModeValue } from '@chakra-ui/react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'

export const NavLink = ({ children }) => {
    return (
        <Link
            px={2}
            py={1}
            rounded={'md'}
            _hover={{
                textDecoration: 'none',
                bg: useColorModeValue('gray.200', 'gray.700'),
            }}
            href={'#'}
        >
            {children}
        </Link>
    )
}

NavLink.propTypes = {
    children: PropTypes.element,
}
