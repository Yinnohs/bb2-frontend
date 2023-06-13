/* eslint-disable react/no-unescaped-entities */
import { ViewIcon, ViewOffIcon } from '@chakra-ui/icons'
import {
    Box,
    Button,
    FormControl,
    FormErrorMessage,
    FormLabel,
    Input,
    InputGroup,
    InputRightElement,
    Stack,
    Text,
    useColorModeValue,
} from '@chakra-ui/react'
import PropTypes from 'prop-types'
import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { CustomSpinner } from '../spinner'

export const UserLoginForm = ({ formik, isLoading = false }) => {
    const [showPassword, setShowPassword] = useState(false)
    const navigation = useNavigate()
    return (
        <Box
            rounded={'lg'}
            bg={useColorModeValue('white', 'gray.700')}
            boxShadow={'lg'}
            p={8}
        >
            <Stack spacing={4}>
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
                    isInvalid={
                        formik.errors.password && formik.touched.password
                    }
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
                                    setShowPassword(
                                        (showPassword) => !showPassword,
                                    )
                                }
                            >
                                {showPassword ? <ViewIcon /> : <ViewOffIcon />}
                            </Button>
                        </InputRightElement>
                    </InputGroup>
                    <FormErrorMessage>
                        {formik.errors.password}
                    </FormErrorMessage>
                </FormControl>
                <Stack spacing={10}>
                    <Stack
                        direction={{ base: 'column', sm: 'row' }}
                        align={'start'}
                        justify={'space-between'}
                    >
                        <Text color={useColorModeValue('gray.500')}>
                            don't have an account?{' '}
                            <Link
                                color={'purple.400'}
                                onClick={() => navigation('/register')}
                            >
                                Register
                            </Link>
                        </Text>
                    </Stack>
                    <Button
                        bg={'purple.400'}
                        color={'white'}
                        _hover={{
                            bg: 'purple.500',
                        }}
                        onClick={formik.handleSubmit}
                    >
                        {isLoading ? <CustomSpinner /> : 'sign in'}
                    </Button>
                </Stack>
            </Stack>
        </Box>
    )
}
UserLoginForm.propTypes = {
    formik: PropTypes.object,
    isLoading: PropTypes.bool,
}
