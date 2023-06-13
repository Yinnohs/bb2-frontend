/* eslint-disable react-hooks/exhaustive-deps */
import {
    Flex,
    Box,
    Stack,
    Button,
    Heading,
    Text,
    useColorModeValue,
    Link,
    useToast,
} from '@chakra-ui/react'
import { useNavigate } from 'react-router-dom'
import { useFormik } from 'formik'
import * as Yup from 'yup'
import { CreateUserForm } from '../../components/user'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'
import { registerRequest } from '../../features/auth'
import { authenticateFunction } from '../../functions/auth'
import { CustomAlert } from '../../components/alert'

export const RegisterPage = () => {
    const toast = useToast()
    const navigation = useNavigate()
    const { status, error } = useSelector((state) => state.auth)
    const dispatch = useDispatch()
    const formik = useFormik({
        initialValues: {
            name: '',
            surname: '',
            password: '',
            email: '',
        },
        validationSchema: Yup.object({
            name: Yup.string()
                .required('name required')
                .min(
                    4,
                    'The name field should have at least 4 characters long',
                ),
            email: Yup.string()
                .required('email required')
                .email('not valid email'),
            password: Yup.string()
                .required('password required')
                .min(6, 'The password should have at least 6 characters'),
        }),
        onSubmit: async (values, actions) => {
            authenticateFunction(
                values,
                actions,
                dispatch,
                registerRequest,
                status,
                error,
                toast,
            )
        },
    })

    useEffect(() => {
        if (status === 'succeded') {
            navigation('/login')
        }
    }, [status])

    return (
        <Flex
            h={'100vh'}
            w={'100%'}
            align={'center'}
            justify={'center'}
            bg={useColorModeValue('gray.50', 'gray.800')}
        >
            <Stack spacing={8} mx={'auto'} maxW={'lg'} py={0} px={6}>
                <Stack align={'center'}>
                    <Heading fontSize={'4xl'} textAlign={'center'}>
                        Register 🚀
                    </Heading>
                    <Text
                        fontSize={'lg'}
                        color={useColorModeValue('gray.500', 'gray.400')}
                    >
                        To buy the most exiting items in the galaxy
                    </Text>
                </Stack>
                <Box
                    rounded={'lg'}
                    bg={useColorModeValue('white', 'gray.700')}
                    boxShadow={'lg'}
                    p={8}
                >
                    <Stack spacing={4}>
                        <CreateUserForm formik={formik} />
                        <Stack spacing={10} pt={2}>
                            <Button
                                onClick={formik.submitForm}
                                loadingText="Submitting"
                                size="lg"
                                bg={'purple.400'}
                                color={'white'}
                                _hover={{
                                    bg: 'purple.500',
                                }}
                                type="button"
                            >
                                Sign up
                            </Button>
                        </Stack>
                        <Stack pt={6}>
                            <Text align={'center'}>
                                Already a user?
                                <Link
                                    color={'purple.400'}
                                    onClick={() => navigation('/login')}
                                >
                                    Login
                                </Link>
                            </Text>
                            {error !== null ? (
                                <CustomAlert
                                    label={'Error! '}
                                    reason={'Email migth be taken'}
                                />
                            ) : (
                                <></>
                            )}
                        </Stack>
                    </Stack>
                </Box>
            </Stack>
        </Flex>
    )
}
