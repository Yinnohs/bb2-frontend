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
import { createPriceReductionRequest } from '../../features'
import { authenticateFunction } from '../../functions'
import { useFormik } from 'formik'
import { useDispatch, useSelector } from 'react-redux'
import * as Yup from 'yup'
import { CustomAlert } from '../alert'
import { PriceReductionForm } from './PriceReductionForm'

export const PriceReductionCreateModal = ({ isOpen, onClose }) => {
    const { status, error } = useSelector((state) => state.suppliers)
    const dispatch = useDispatch()
    const formik = useFormik({
        initialValues: {
            reduced_price: 0,
            start_date: new Date(),
            end_date: new Date(),
        },
        validationSchema: Yup.object({
            reduced_price: Yup.number()
                .required('reduced price required')
                .min(
                    4,
                    'The name field should have at least 4 characters long',
                ),
        }),
        onSubmit: async (values, actions) => {
            authenticateFunction(
                values,
                actions,
                dispatch,
                createPriceReductionRequest,
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
                <ModalHeader>Create A Discount</ModalHeader>
                <ModalCloseButton />
                <ModalBody pb={6}>
                    <PriceReductionForm formik={formik} />
                </ModalBody>
                <ModalFooter>
                    <Button
                        colorScheme="purple"
                        mr={3}
                        onClick={formik.submitForm}
                    >
                        Create Discount
                    </Button>
                    <Button onClick={onClose}>Cancel</Button>
                </ModalFooter>
                {error !== null && status === 'rejected' ? (
                    <CustomAlert
                        label={'Somethin happened when creating the Discount: '}
                        reason={' unknow error '}
                    />
                ) : (
                    <></>
                )}
            </ModalContent>
        </Modal>
    )
}

PriceReductionCreateModal.propTypes = {
    isOpen: PropTypes.bool,
    onClose: PropTypes.func,
}
