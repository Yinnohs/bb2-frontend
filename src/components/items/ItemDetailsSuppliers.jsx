import { Box, useColorModeValue, Text, List } from '@chakra-ui/react'
import PropTypes from 'prop-types'
import { SupplierSection } from './SupplierSection'
export const ItemsDetailsSuppliers = ({ suppliers }) => {
    return (
        <Box>
            <Text
                fontSize={{ base: '16px', lg: '18px' }}
                color={useColorModeValue('purple.500', 'purple.300')}
                fontWeight={'500'}
                textTransform={'uppercase'}
                mb={'4'}
            >
                Suppliers Details
            </Text>
            <List spacing={2}>
                {suppliers.length > 0 ? (
                    suppliers.map((supplier, i) => {
                        return (
                            <SupplierSection
                                supplier={supplier}
                                key={`supplier${i}`}
                            />
                        )
                    })
                ) : (
                    <></>
                )}
            </List>
        </Box>
    )
}
ItemsDetailsSuppliers.propTypes = {
    suppliers: PropTypes.array,
}
