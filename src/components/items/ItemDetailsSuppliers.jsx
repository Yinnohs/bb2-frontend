import { Box, useColorModeValue, Text } from '@chakra-ui/react'
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
            {suppliers ??
                suppliers.map((supplier, i) => {
                    return (
                        <SupplierSection
                            supplier={supplier}
                            key={`supplier${i}`}
                        />
                    )
                })}
        </Box>
    )
}
ItemsDetailsSuppliers.propTypes = {
    suppliers: PropTypes.array,
}
