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
import 'react-datepicker/dist/react-datepicker.css'
import 'react-datepicker/dist/react-datepicker-cssmodules.css'
import PropTypes from 'prop-types'
import { useState } from 'react'

export const PriceReductionForm = ({ formik }) => {
    const [startDate, setStartDate] = useState(new Date())
    const [endDate, setEndDate] = useState(new Date())
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
                            type="number"
                            value={formik.values?.reduced_price}
                            name="reduced_price"
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                        />
                        <FormErrorMessage>
                            {formik.errors.reduced_price}
                        </FormErrorMessage>
                    </FormControl>
                </Box>
                <Box>
                    <FormControl id="start_date" isRequired>
                        <FormLabel>start Date</FormLabel>
                        <DatePicker
                            dateFormat="yyyy-MM-dd"
                            onChange={(date) => setStartDate(date)}
                            name="start_date"
                            id="start_date"
                            value={startDate}
                            selected={startDate}
                            placeholderText="agrega una fecha de inicio"
                            minDate={new Date()}
                        />
                    </FormControl>
                </Box>
                <Box>
                    <FormControl id="end_date" isRequired>
                        <FormLabel>End Date</FormLabel>
                        <DatePicker
                            dateFormat="yyyy-MM-dd"
                            onChange={(date) => setEndDate(date)}
                            name="end_date"
                            id="end_date"
                            value={endDate}
                            selected={endDate}
                            minDate={new Date()}
                            placeholderText="agrega una fecha de final"
                            adjustDateOnChange={true}
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
