import { Stack, Text } from '@chakra-ui/react'
import PropTypes from 'prop-types'
import { formatPrice } from '../../functions'

export const ItemCardPriceSection = ({ price, discounts = [] }) => {
    return (
        <Stack direction={'row'} align={'center'}>
            {discounts.length > 0 ? (
                <>
                    <Text fontWeight={800} fontSize={'xl'}>
                        {formatPrice(price, discounts[0]?.reduced_price)}€
                    </Text>
                    <Text textDecoration={'line-through'} color={'gray.600'}>
                        {price}€
                    </Text>
                </>
            ) : (
                <Text fontWeight={800} fontSize={'xl'}>
                    {price}€
                </Text>
            )}
        </Stack>
    )
}

ItemCardPriceSection.propTypes = {
    price: PropTypes.number,
    discounts: PropTypes.array,
}
