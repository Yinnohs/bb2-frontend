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
import { itemAdded, selectAllItems } from '../../features/items/itemsSlice'
import { getAuthData } from '../../features/auth'

export const ItemModal = ({ isOpen, onClose }) => {
    const authData = useSelector(getAuthData)
    const items = useSelector(selectAllItems)
    const dispatch = useDispatch()
    const formik = useFormik({
        initialValues: {
            item_id: items?.length,
            item_code: 0,
            description: '',
            price: 0.0,
            creator: authData.user, //
        },
        validationSchema: Yup.object({
            item_code: Yup.number()
                .required('the item_code field is required')
                .integer('the value of the item_code camp should be an integer')
                .positive('the value should be positive'),

            description: Yup.string()
                .required('description is required')
                .min(4, 'description should have at least 4 characters'),

            price: Yup.number().required('this field price is required'),
        }),

        onSubmit: (data, actions) => {
            dispatch(
                itemAdded({
                    item_id: data.item_id,
                    item_code: data.item_code,
                    description: data.description,
                    price: data.price,
                    creator: data.creator,
                }),
            )
            actions.resetForm()
            onClose()
        },
    })
    // TODO: use inside all i want to add the modal = const { isOpen, onClose } = useDisclosure()
    return (
        <Modal isOpen={isOpen} onClose={onClose} size={'xl'}>
            <ModalOverlay />
            <ModalContent>
                <ModalHeader>Create a new Item</ModalHeader>
                <ModalCloseButton />
                <ModalBody pb={6}>
                    <FormControl
                        id="item_code"
                        isRequired
                        isInvalid={
                            formik.errors.item_code && formik.touched.item_code
                        }
                    >
                        <FormLabel>Item Code</FormLabel>
                        <Input
                            focusBorderColor="purple.600"
                            type="number"
                            onChange={formik.handleChange}
                            value={formik.values.item_code}
                            onBlur={formik.handleBlur}
                        />
                        <FormErrorMessage>
                            {formik.errors.item_code}
                        </FormErrorMessage>
                    </FormControl>

                    <FormControl
                        id="description"
                        isRequired
                        isInvalid={
                            formik.errors.description &&
                            formik.touched.description
                        }
                    >
                        <FormLabel>Item Description</FormLabel>
                        <Input
                            focusBorderColor="purple.600"
                            type="text"
                            onChange={formik.handleChange}
                            value={formik.values.description}
                            onBlur={formik.handleBlur}
                        />
                        <FormErrorMessage>
                            {formik.errors.description}
                        </FormErrorMessage>
                    </FormControl>

                    <FormControl
                        id="price"
                        isRequired
                        isInvalid={formik.errors.price && formik.touched.price}
                    >
                        <FormLabel>Item Price</FormLabel>
                        <Input
                            focusBorderColor="purple.600"
                            type="number"
                            onChange={formik.handleChange}
                            value={formik.values.price}
                            onBlur={formik.handleBlur}
                        />
                        <FormErrorMessage>
                            {formik.errors.price}
                        </FormErrorMessage>
                    </FormControl>
                </ModalBody>

                <ModalFooter>
                    <Button
                        colorScheme="purple"
                        mr={3}
                        onClick={formik.submitForm}
                    >
                        Save
                    </Button>
                    <Button onClick={onClose}>Cancel</Button>
                </ModalFooter>
            </ModalContent>
        </Modal>
    )
}

ItemModal.propTypes = {
    isOpen: PropTypes.bool,
    onClose: PropTypes.func,
}
