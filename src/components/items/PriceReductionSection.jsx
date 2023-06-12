import { List, ListItem, Text } from '@chakra-ui/react'
import PropTypes from 'prop-types'

export const PriceReductionSection = ({ priceReduction }) => {
    return (
        <List spacing={2}>
            <ListItem>
                <Text as={'span'} fontWeight={'bold'} mr={5}>
                    Discount applied:
                </Text>
                {priceReduction?.reduced_price * 100} %
            </ListItem>
            <ListItem>
                <Text as={'span'} fontWeight={'bold'} mr={5}>
                    Discount until:
                </Text>
                {priceReduction.end_date}
            </ListItem>
        </List>
    )
}

PriceReductionSection.propTypes = {
    priceReduction: PropTypes.object,
}
