import { Select, useColorModeValue } from '@chakra-ui/react'
import PropTypes from 'prop-types'

export const CustomSelect = ({ data, setSelected }) => {
    const handleSelectedChange = (event) => {
        setSelected(event.target.value)
    }
    const textBorderValue = useColorModeValue('purple.500', 'purple.200')
    return (
        <Select
            placeholder="Select a product state"
            minW={'20vw'}
            maxWidth={'30%'}
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

            <option value="Active">Active</option>
            <option value="Discontinued">Discontinued</option>
        </Select>
    )
}

CustomSelect.propTypes = {
    data: PropTypes.array,
    setSelected: PropTypes.func,
}
