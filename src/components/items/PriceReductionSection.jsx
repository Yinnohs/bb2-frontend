import {
    AbsoluteCenter,
    Box,
    Divider,
    ListItem,
    Text,
    useColorModeValue,
} from '@chakra-ui/react'
import PropTypes from 'prop-types'

export const PriceReductionSection = ({ priceReduction, index }) => {
    return (
        <>
            <Box position="relative" padding="3">
                <Divider colorScheme="purple" />
                <AbsoluteCenter
                    px="4"
                    bg={useColorModeValue('white', 'gray.800')}
                    color={'purple.500'}
                >
                    Discount {index}
                </AbsoluteCenter>
            </Box>
            <ListItem>
                <Text as={'span'} fontWeight={'bold'} mr={5}>
                    Discounts applied:
                </Text>
                {priceReduction?.reduced_price * 100} %
            </ListItem>
            <ListItem>
                <Text as={'span'} fontWeight={'bold'} mr={5}>
                    Discount until:
                </Text>
                {priceReduction?.end_date}
            </ListItem>
        </>
    )
}

PriceReductionSection.propTypes = {
    priceReduction: PropTypes.object,
    index: PropTypes.number,
}
