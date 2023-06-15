/* eslint-disable react-hooks/rules-of-hooks */
import {
    Box,
    FormControl,
    FormErrorMessage,
    FormLabel,
    HStack,
    Input,
} from '@chakra-ui/react'

import PropTypes from 'prop-types'

export const SupplierForm = ({ formik }) => {
    return (
        <>
            <HStack>
                <Box>
                    <FormControl
                        id="firstName"
                        isRequired
                        isInvalid={formik.errors.name && formik.touched.name}
                    >
                        <FormLabel>Supplier Name</FormLabel>
                        <Input
                            focusBorderColor="purple.600"
                            type="text"
                            value={formik.values?.name}
                            name="name"
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                        />
                        <FormErrorMessage>
                            {formik.errors.name}
                        </FormErrorMessage>
                    </FormControl>
                </Box>
                <Box>
                    <FormControl id="country">
                        <FormLabel>Country</FormLabel>
                        <Input
                            focusBorderColor="purple.600"
                            type="text"
                            name="country"
                            onChange={formik.handleChange}
                            value={formik.values?.country}
                        />
                    </FormControl>
                </Box>
            </HStack>

            <FormErrorMessage>{formik.errors.password}</FormErrorMessage>
        </>
    )
}

SupplierForm.propTypes = {
    formik: PropTypes.object,
}
