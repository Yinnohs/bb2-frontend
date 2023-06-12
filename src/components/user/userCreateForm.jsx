/* eslint-disable react-hooks/rules-of-hooks */
import {
    Box,
    Button,
    FormControl,
    FormErrorMessage,
    FormLabel,
    HStack,
    Input,
    InputGroup,
    InputRightElement,
} from '@chakra-ui/react'
import { ViewIcon, ViewOffIcon } from '@chakra-ui/icons'
import { useState } from 'react'
import PropTypes from 'prop-types'

export const CreateUserForm = ({ formik }) => {
    const [showPassword, setShowPassword] = useState(false)
    return (
        <>
            <HStack>
                <Box>
                    <FormControl
                        id="firstName"
                        isRequired
                        isInvalid={formik.errors.name && formik.touched.name}
                    >
                        <FormLabel>First Name</FormLabel>
                        <Input
                            focusBorderColor="purple.600"
                            type="text"
                            value={formik.values.name}
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
                    <FormControl id="lastName">
                        <FormLabel>Last Name</FormLabel>
                        <Input
                            focusBorderColor="purple.600"
                            type="text"
                            name="surname"
                            onChange={formik.handleChange}
                            value={formik.values.surname}
                        />
                    </FormControl>
                </Box>
            </HStack>
            <FormControl
                id="email"
                isRequired
                isInvalid={formik.errors.email && formik.touched.email}
            >
                <FormLabel>Email address</FormLabel>
                <Input
                    focusBorderColor="purple.600"
                    type="email"
                    name="email"
                    onChange={formik.handleChange}
                    value={formik.values.email}
                    onBlur={formik.handleBlur}
                />
                <FormErrorMessage>{formik.errors.email}</FormErrorMessage>
            </FormControl>
            <FormControl
                id="password"
                isRequired
                isInvalid={formik.errors.password && formik.touched.password}
            >
                <FormLabel>Password</FormLabel>
                <InputGroup>
                    <Input
                        type={showPassword ? 'text' : 'password'}
                        value={formik.values.password}
                        name="password"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                    />
                    <InputRightElement h={'full'}>
                        <Button
                            variant={'ghost'}
                            onClick={() =>
                                setShowPassword((showPassword) => !showPassword)
                            }
                        >
                            {showPassword ? <ViewIcon /> : <ViewOffIcon />}
                        </Button>
                    </InputRightElement>
                </InputGroup>
                <FormErrorMessage>{formik.errors.password}</FormErrorMessage>
            </FormControl>
        </>
    )
}

CreateUserForm.propTypes = {
    formik: PropTypes.object,
}
