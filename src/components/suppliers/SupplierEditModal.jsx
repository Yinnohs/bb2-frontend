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
import { SupplierCreateForm } from './SupplierForm'
import { updateSupplierRequest } from '../../features'
import { authenticateFunction } from '../../functions'
import * as Yup from 'yup'
import { useFormik } from 'formik'
import { useEffect } from 'react'

export const SupplierEditModal = ({ isOpen, onClose, Supplier }) => {
    const { status, error } = useSelector((state) => state.Suppliers)
    const dispatch = useDispatch()

    let formik = useFormik({
        initialValues: {
            Supplier_id: Supplier?.Supplier_id,
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
                updateSupplierRequest,
                status,
                error,
            )
            onClose()
        },
        onReset: (_, actions) => {
            actions.setValues({
                Supplier_id: 0,
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
            Supplier_id: Supplier?.Supplier_id,
            name: Supplier?.name,
            surname: Supplier?.surname,
            password: '',
            email: Supplier?.email,
        })
    }, [Supplier])

    return (
        <Modal isOpen={isOpen} onClose={onClose} size={'xl'}>
            <ModalOverlay />
            <ModalContent>
                <ModalHeader>Edit the Supplier: {Supplier?.email}</ModalHeader>
                <ModalCloseButton />
                <ModalBody pb={6}>
                    {formik.values.Supplier_id ? (
                        <SupplierCreateForm formik={formik} />
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
                            'Somethin happened when updating the Supplier the Supplier'
                        }
                    />
                ) : (
                    <></>
                )}
            </ModalContent>
        </Modal>
    )
}

SupplierEditModal.propTypes = {
    isOpen: PropTypes.bool,
    onClose: PropTypes.func,
    Supplier: PropTypes.object,
}
