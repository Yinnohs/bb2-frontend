import {
    AlertDescription,
    AlertIcon,
    AlertTitle,
    Alert,
} from '@chakra-ui/react'
import PropTypes from 'prop-types'

export const CustomAlert = ({ label, reason }) => {
    return (
        <Alert status="error">
            <AlertIcon />
            <AlertTitle>{label}</AlertTitle>
            <AlertDescription>{reason}</AlertDescription>
        </Alert>
    )
}

CustomAlert.propTypes = {
    label: PropTypes.string,
    reason: PropTypes.string,
}
