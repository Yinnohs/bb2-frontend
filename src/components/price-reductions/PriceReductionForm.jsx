/* eslint-disable react-hooks/rules-of-hooks */
import {
    Box,
    FormControl,
    FormErrorMessage,
    FormLabel,
    Input,
    VStack,
} from '@chakra-ui/react'
import DatePicker from 'react-datepicker'

import PropTypes from 'prop-types'

export const PriceReductionForm = ({ formik }) => {
    return (
        <>
            <VStack>
                <Box>
                    <FormControl
                        id="reduced_price"
                        isRequired
                        isInvalid={
                            formik.errors.reduced_price &&
                            formik.touched.reduced_price
                        }
                    >
                        <FormLabel>Reduced Price</FormLabel>
                        <Input
                            focusBorderColor="purple.600"
                            type="text"
                            value={formik.values?.reduced_price}
                            name="reduced_price"
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                        />
                        <FormErrorMessage>
                            {formik.errors.name}
                        </FormErrorMessage>
                    </FormControl>
                </Box>
                <Box>
                    <FormControl id="start_date">
                        <FormLabel>start Date</FormLabel>
                        <DatePicker
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            name="start_date"
                            id="start_date"
                            value={formik.values?.start_date}
                            minDate={new Date()}
                        />
                    </FormControl>
                </Box>
                <Box>
                    <FormControl id="end_date">
                        <FormLabel>End Date</FormLabel>
                        <DatePicker
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            name="end_date"
                            id="end_date"
                            value={formik.values?.end_date}
                            minDate={new Date()}
                        />
                    </FormControl>
                </Box>
            </VStack>
        </>
    )
}

PriceReductionForm.propTypes = {
    formik: PropTypes.object,
}
