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
import { updateItem } from '../../features'
import {
    executeItemFormularyFunction,
    transformPriceReductionsToFilterData,
    transformSuppliersTofilterdata,
} from '../../functions'
import { CustomAlert } from '../alert'
import {} from '../../features/price-reductions/priceReductionSlice'
import { useState } from 'react'
import { CustomSelect } from '../inputs/CustomSelect'

export const UpdateItemModal = ({ isOpen, onClose, item }) => {
    const { error, status } = useSelector((state) => state.items)
    const { suppliers } = useSelector((state) => state.suppliers)
    const { priceReductions } = useSelector((state) => state.priceReductions)
    const dispatch = useDispatch()
    const [selectedSupplier, setSelectSupplier] = useState([])
    const [selectedPriceReduction, setSelectedPriceReduction] = useState([])

    const formik = useFormik({
        initialValues: {
            code: item?.item_code,
            description: item?.descrition,
            price: item?.price,
            user: item?.user,
            item_state: item?.item_state,
            suppliers: item?.suppliers ? item?.suppliers : [],
            price_reductions: item?.price_reductions
                ? item?.price_reductions
                : [],
            new_suppliers: [],
            new_price_reductions: [],
        },
        validationSchema: Yup.object({
            description: Yup.string()
                .required('description is required')
                .min(4, 'description should have at least 4 characters'),

            price: Yup.number().required('this field price is required'),
        }),

        onSubmit: async (values, actions) => {
            values.new_suppliers.push(selectedSupplier)
            values.new_price_reductions.push(selectedPriceReduction)
            executeItemFormularyFunction(values, actions, dispatch, updateItem)
        },
    })

    return (
        <Modal isOpen={isOpen} onClose={onClose} size={'xl'}>
            <ModalOverlay />
            <ModalContent>
                <ModalHeader>Update Item</ModalHeader>
                <ModalCloseButton />
                <ModalBody pb={6}>
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
                    {suppliers.length > 0 ? (
                        <CustomSelect
                            data={transformSuppliersTofilterdata(
                                suppliers,
                                item?.suppliers ? item?.suppliers : [],
                            )}
                            setSelected={setSelectSupplier}
                        />
                    ) : (
                        <></>
                    )}
                    {priceReductions.length > 0 ? (
                        <CustomSelect
                            data={transformPriceReductionsToFilterData(
                                priceReductions,
                                item?.price_reductions
                                    ? item?.price_reductions
                                    : [],
                            )}
                            setSelected={setSelectedPriceReduction}
                        />
                    ) : (
                        <></>
                    )}
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
                {error !== null && status === 'rejected' ? (
                    <CustomAlert
                        label={'Error'}
                        reason={'Something happend while updating the item'}
                    />
                ) : (
                    <></>
                )}
            </ModalContent>
        </Modal>
    )
}

UpdateItemModal.propTypes = {
    isOpen: PropTypes.bool,
    onClose: PropTypes.func,
    item: PropTypes.object,
}
