import { Select, useColorModeValue } from '@chakra-ui/react'
import PropTypes from 'prop-types'

export const CustomSelect = ({ data, setSelected, placeholder }) => {
    const handleSelectedChange = (event) => {
        setSelected(parseInt(event.target.value, 10))
    }
    const textBorderValue = useColorModeValue('purple.500', 'purple.200')

    return (
        <Select
            placeholder={placeholder}
            minW={'20vw'}
            maxWidth={'100%'}
            backgroundColor={useColorModeValue('none', 'blackAlpha.500')}
            color={textBorderValue}
            borderColor={textBorderValue}
            onChange={handleSelectedChange}
        >
            {data.map((value, i) => (
                <option value={value?.value} key={`${value?.label}${i}`}>
                    {value?.label}
                </option>
            ))}
        </Select>
    )
}

CustomSelect.propTypes = {
    data: PropTypes.array,
    setSelected: PropTypes.func,
    placeholder: PropTypes.string,
}
