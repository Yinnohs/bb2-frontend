import {
    Button,
    Modal,
    ModalBody,
    ModalCloseButton,
    ModalContent,
    ModalFooter,
    ModalHeader,
    ModalOverlay,
} from '@chakra-ui/react'
import PropTypes from 'prop-types'
import { useDispatch, useSelector } from 'react-redux'
import { CustomAlert } from '../alert'
import { UserCreateForm } from './UserForm'
import { updateUserRequest } from '../../features'
import { authenticateFunction } from '../../functions'
import * as Yup from 'yup'
import { useFormik } from 'formik'
import { useEffect } from 'react'

export const UserEditUserModal = ({ isOpen, onClose, user }) => {
    const { status, error } = useSelector((state) => state.users)
    const dispatch = useDispatch()

    let formik = useFormik({
        initialValues: {
            user_id: 0,
            name: '',
            surname: '',
            password: '',
            email: '',
        },
        validationSchema: Yup.object({
            name: Yup.string().min(
                4,
                'The name field should have at least 4 characters long',
            ),
            email: Yup.string().email('not valid email'),
            password: Yup.string().min(
                6,
                'The password should have at least 2 characters',
            ),
        }),
        onSubmit: async (values, actions) => {
            authenticateFunction(
                values,
                actions,
                dispatch,
                updateUserRequest,
                status,
                error,
            )
            onClose()
        },
        onReset: (_, actions) => {
            actions.setValues({
                user_id: 0,
                name: '',
                surname: '',
                password: '',
                email: '',
            })
            onClose()
        },
    })

    useEffect(() => {
        formik.setValues({
            user_id: user?.user_id,
            name: user?.name,
            surname: user?.surname,
            password: '',
            email: user?.email,
        })
    }, [user])

    return (
        <Modal isOpen={isOpen} onClose={onClose} size={'xl'}>
            <ModalOverlay />
            <ModalContent>
                <ModalHeader>Edit the user: {user?.email}</ModalHeader>
                <ModalCloseButton />
                <ModalBody pb={6}>
                    {formik.values.user_id ? (
                        <UserCreateForm formik={formik} />
                    ) : (
                        <></>
                    )}
                </ModalBody>
                <ModalFooter>
                    <Button
                        colorScheme="purple"
                        mr={3}
                        onClick={formik.handleSubmit}
                    >
                        Update
                    </Button>
                    <Button onClick={() => formik.handleReset()}>Cancel</Button>
                </ModalFooter>
                {error !== null && status === 'rejected' ? (
                    <CustomAlert
                        label={'Oh No!: '}
                        reason={
                            'Somethin happened when updating the user the user'
                        }
                    />
                ) : (
                    <></>
                )}
            </ModalContent>
        </Modal>
    )
}

UserEditUserModal.propTypes = {
    isOpen: PropTypes.bool,
    onClose: PropTypes.func,
    user: PropTypes.object,
}
