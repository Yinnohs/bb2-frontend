import {
    Button,
    FormControl,
    FormErrorMessage,
    FormLabel,
    Input,
    Modal,
    ModalBody,
    ModalCloseButton,
    ModalContent,
    ModalFooter,
    ModalHeader,
    ModalOverlay,
} from '@chakra-ui/react'
import { useFormik } from 'formik'
import * as Yup from 'yup'
import PropTypes from 'prop-types'
import { useDispatch, useSelector } from 'react-redux'
import { CustomAlert } from '../alert'
import { getCurrentUser } from '../../features/auth'
import { executeItemFormularyFunction } from '../../functions'

export const DeactivateItemModal = ({ isOpen, onClose, itemId }) => {
    const { error, status } = useSelector((state) => state.items)
    const user = useSelector(getCurrentUser)
    const dispatch = useDispatch()
    const formik = useFormik({
        initialValues: {
            item_id: itemId,
            deactivated_by_id: user.user_id,
            deactivate_reason: '',
        },
        validationSchema: Yup.object({
            deactivate_reason: Yup.string()
                .required('deactivate reason is required')
                .min(4, 'deactivate reason should have at least 4 characters'),
        }),

        onSubmit: async (values, actions) => {
            executeItemFormularyFunction(values, actions, dispatch)
        },
    })
    // TODO: use inside all i want to add the modal = const { isOpen, onClose } = useDisclosure()
    return (
        <Modal isOpen={isOpen} onClose={onClose} size={'xl'}>
            <ModalOverlay />
            <ModalContent>
                <ModalHeader>Deactivate item</ModalHeader>
                <ModalCloseButton />
                <ModalBody pb={6}>
                    <FormControl
                        id="deactivateReason"
                        isRequired
                        isInvalid={
                            formik.errors.deactivate_reason &&
                            formik.touched.deactivate_reason
                        }
                    >
                        <FormLabel>Reason</FormLabel>
                        <Input
                            focusBorderColor="purple.600"
                            type="text"
                            onChange={formik.handleChange}
                            value={formik.values.deactivate_reason}
                            onBlur={formik.handleBlur}
                        />
                        <FormErrorMessage>
                            {formik.errors.deactivateReason}
                        </FormErrorMessage>
                    </FormControl>
                </ModalBody>

                <ModalFooter>
                    <Button
                        colorScheme="purple"
                        mr={3}
                        onClick={formik.submitForm}
                    >
                        Deactivate
                    </Button>
                    <Button onClick={onClose}>Cancel</Button>
                </ModalFooter>
                {error !== null && status === 'rejected' ? (
                    <CustomAlert
                        label={'Error'}
                        reason={'something happened when deactivating the item'}
                    />
                ) : (
                    <></>
                )}
            </ModalContent>
        </Modal>
    )
}

DeactivateItemModal.propTypes = {
    isOpen: PropTypes.bool,
    onClose: PropTypes.func,
    itemId: PropTypes.number,
}
