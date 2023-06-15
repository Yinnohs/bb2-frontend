import {
    AbsoluteCenter,
    Box,
    Divider,
    ListItem,
    Text,
    useColorModeValue,
} from '@chakra-ui/react'
import PropTypes from 'prop-types'
export const SupplierSection = ({ supplier, index }) => {
    return (
        <>
            <Box position="relative" padding="3">
                <Divider colorScheme="purple" />
                <AbsoluteCenter
                    px="4"
                    bg={useColorModeValue('white', 'gray.800')}
                    color={'purple.500'}
                >
                    Supplier {index}
                </AbsoluteCenter>
            </Box>
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
    index: PropTypes.number,
}
