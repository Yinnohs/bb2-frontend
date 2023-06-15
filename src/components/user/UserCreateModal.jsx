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
import { registerRequest } from '../../features'
import { authenticateFunction } from '../../functions'
import { useFormik } from 'formik'
import { useDispatch, useSelector } from 'react-redux'
import * as Yup from 'yup'
import { CustomAlert } from '../alert'

export const UserCreateModal = ({ isOpen, onClose }) => {
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
            )
        },
    })
    return (
        <Modal isOpen={isOpen} onClose={onClose} size={'xl'}>
            <ModalOverlay />
            <ModalContent>
                <ModalHeader>Deactivate item</ModalHeader>
                <ModalCloseButton />
                <ModalBody pb={6}></ModalBody>

                <ModalFooter>
                    <Button
                        colorScheme="purple"
                        mr={3}
                        onClick={formik.submitForm}
                    >
                        Create User
                    </Button>
                    <Button onClick={onClose}>Cancel</Button>
                </ModalFooter>
                {error !== null && status === 'rejected' ? (
                    <CustomAlert
                        label={'Somethin happened when creating the user: '}
                        reason={'Email migth be taken'}
                    />
                ) : (
                    <></>
                )}
            </ModalContent>
        </Modal>
    )
}

UserCreateModal.propTypes = {
    isOpen: PropTypes.bool,
    onClose: PropTypes.func,
}
