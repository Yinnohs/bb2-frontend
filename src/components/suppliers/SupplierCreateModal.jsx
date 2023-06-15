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
import { createSupplierRequest } from '../../features'
import { authenticateFunction } from '../../functions'
import { useFormik } from 'formik'
import { useDispatch, useSelector } from 'react-redux'
import * as Yup from 'yup'
import { CustomAlert } from '../alert'
import { SupplierForm } from './SupplierForm'

export const SupplierCreateModal = ({ isOpen, onClose }) => {
    const { status, error } = useSelector((state) => state.suppliers)
    const dispatch = useDispatch()
    const formik = useFormik({
        initialValues: {
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
                createSupplierRequest,
                status,
                error,
            )
            onClose()
        },
    })
    return (
        <Modal isOpen={isOpen} onClose={onClose} size={'xl'}>
            <ModalOverlay />
            <ModalContent>
                <ModalHeader>Create A Supplier</ModalHeader>
                <ModalCloseButton />
                <ModalBody pb={6}>
                    <SupplierForm formik={formik} />
                </ModalBody>
                <ModalFooter>
                    <Button
                        colorScheme="purple"
                        mr={3}
                        onClick={formik.submitForm}
                    >
                        Create Supplier
                    </Button>
                    <Button onClick={onClose}>Cancel</Button>
                </ModalFooter>
                {error !== null && status === 'rejected' ? (
                    <CustomAlert
                        label={'Somethin happened when creating the Supplier: '}
                        reason={' unknow error '}
                    />
                ) : (
                    <></>
                )}
            </ModalContent>
        </Modal>
    )
}

SupplierCreateModal.propTypes = {
    isOpen: PropTypes.bool,
    onClose: PropTypes.func,
}
