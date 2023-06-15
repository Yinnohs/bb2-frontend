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
import { updateSupplierRequest } from '../../features'
import { authenticateFunction } from '../../functions'
import * as Yup from 'yup'
import { useFormik } from 'formik'
import { useEffect } from 'react'

export const UserEditUserModal = ({ isOpen, onClose, supplier }) => {
    const { status, error } = useSelector((state) => state.users)
    const dispatch = useDispatch()

    const formik = useFormik({
        initialValues: {
            supplier_id: 0,
            name: '',
            country: '',
        },
        validationSchema: Yup.object({
            name: Yup.string()
                .required('name required')
                .min(
                    4,
                    'The name field should have at least 4 characters long',
                ),
            country: Yup.string().required('countryl required'),
        }),
        onSubmit: async (values, actions) => {
            authenticateFunction(
                values,
                actions,
                dispatch,
                updateSupplierRequest,
                status,
                error,
            )
            onClose()
        },
    })
    useEffect(() => {
        formik.setValues({
            supplier_id: supplier?.supplier_id,
            name: supplier?.name,
            country: supplier?.country,
        })
    }, [supplier])

    return (
        <Modal isOpen={isOpen} onClose={onClose} size={'xl'}>
            <ModalOverlay />
            <ModalContent>
                <ModalHeader>Edit the supplier: {supplier?.name}</ModalHeader>
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
    supplier: PropTypes.object,
}
