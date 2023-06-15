import { Box, Text, useColorModeValue } from '@chakra-ui/react'
import PropTypes from 'prop-types'
import { PriceReductionSection } from './PriceReductionSection'

export const ItemDetailsPriceReductions = ({ priceReductions }) => {
    return (
        <Box>
            <Text
                fontSize={{ base: '16px', lg: '18px' }}
                color={useColorModeValue('purple.500', 'purple.300')}
                fontWeight={'500'}
                textTransform={'uppercase'}
                mb={'4'}
            >
                Discount Applied
            </Text>
            {priceReductions?.length > 0 ? (
                priceReductions.map((priceReduction, i) => {
                    return (
                        <PriceReductionSection
                            priceReduction={priceReduction}
                            key={`price_reduction${i}`}
                        />
                    )
                })
            ) : (
                <></>
            )}
        </Box>
    )
}

ItemDetailsPriceReductions.propTypes = {
    priceReductions: PropTypes.array,
}
