import { ListItem, Text } from '@chakra-ui/react'
import PropTypes from 'prop-types'
export const SupplierSection = ({ supplier }) => {
    return (
        <>
            <ListItem>
                <Text as={'span'} fontWeight={'bold'} mr={5}>
                    Name:
                </Text>
                {supplier?.name}
            </ListItem>
            <ListItem>
                <Text as={'span'} fontWeight={'bold'} mr={5}>
                    Country:
                </Text>
                {supplier?.country}
            </ListItem>
        </>
    )
}
SupplierSection.propTypes = {
    supplier: PropTypes.object,
}
