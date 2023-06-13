/* eslint-disable react/no-unescaped-entities */
import {
    Flex,
    Stack,
    Heading,
    Text,
    useColorModeValue,
    useToast,
} from '@chakra-ui/react'
import { useFormik } from 'formik'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import * as Yup from 'yup'
import { LoginRequest } from '../../features/auth'

import { UserLoginForm } from '../../components/user'
import { useEffect, useId } from 'react'

export const LoginPage = () => {
    const toast = useToast()
    const navigation = useNavigate()
    const { token, status, error } = useSelector((state) => state.auth)
    const dispatch = useDispatch()
    const isLoading = status === 'loading'
    const formik = useFormik({
        initialValues: {
            password: '',
            email: '',
        },
        validationSchema: Yup.object({
            email: Yup.string()
                .required('email required')
                .email('not valid email'),
            password: Yup.string().required('password required'),
        }),
        onSubmit: async (values, actions) => {
            values.email.toLowerCase()

            dispatch(LoginRequest(values))

            actions.resetForm()
            error &&
                toast({
                    status: 'error',
                    isClosable: true,
                    duration: 10000,
                    title: `error: ${error}`,
                })
            status &&
                toast({
                    status: 'success',
                    isClosable: true,
                    duration: 10000,
                    title: `Login Succesfull`,
                })
        },
    })

    useEffect(() => {
        if (token !== null && token !== '') {
            navigation('/items')
        }
    }, [token])

    return (
        <Flex
            minH={'100vh'}
            align={'center'}
            justify={'center'}
            bg={useColorModeValue('gray.50', 'gray.800')}
        >
            <Stack spacing={8} mx={'auto'} maxW={'lg'} py={12} px={6}>
                <Stack align={'center'}>
                    <Heading fontSize={'4xl'}>Sing in</Heading>
                    <Text fontSize={'lg'} color={'gray.600'}>
                        To purchase items across the galaxy 🌌
                    </Text>
                </Stack>
                <UserLoginForm
                    key={useId()}
                    formik={formik}
                    isButtonDisabled={isLoading}
                />
            </Stack>
        </Flex>
    )
}
