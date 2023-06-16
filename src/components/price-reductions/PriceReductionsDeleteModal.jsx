import {
    Button,
    Modal,
    ModalBody,
    ModalCloseButton,
    ModalContent,
    ModalFooter,
    ModalHeader,
    ModalOverlay,
    Text,
} from '@chakra-ui/react'
import PropTypes from 'prop-types'
import { useDispatch, useSelector } from 'react-redux'
import {
    deletePriceReductionRequest,
    deleteSupplierRequest,
} from '../../features'
import { CustomAlert } from '../alert'

export const PriceReductionDeleteModal = ({
    isOpen,
    onClose,
    priceReductionId,
}) => {
    const { status, priceReductions, error } = useSelector(
        (state) => state.priceReductions,
    )
    const currentPriceReduction = priceReductions.find(
        (pr) => pr?.price_reduction_id === priceReductionId,
    )
    const dispatch = useDispatch()

    const deletePriceReduction = async () => {
        dispatch(deletePriceReductionRequest(priceReductionId))
        if (status === 'succeded') onClose()
    }
    return (
        <Modal isOpen={isOpen} onClose={onClose} size={'xl'}>
            <ModalOverlay />
            <ModalContent>
                <ModalHeader>Delete A suplierr</ModalHeader>
                <ModalCloseButton />
                <ModalBody
                    pb={6}
                    gap={10}
                    display={'flex'}
                    flexDirection={'column'}
                    justifyContent={'center'}
                    alignItems={'center'}
                >
                    <Text fontSize={'xl'}>
                        Are you sure you want to delete the discount that ends
                        in :
                    </Text>
                    <Text fontWeight={'bold'} color={'purple.400'}>
                        {currentPriceReduction?.end_date}
                    </Text>
                </ModalBody>
                <ModalFooter>
                    <Button
                        colorScheme="purple"
                        mr={3}
                        onClick={deletePriceReduction}
                    >
                        Acept
                    </Button>
                    <Button onClick={onClose}>Cancel</Button>
                </ModalFooter>
                {error !== null && status === 'rejected' ? (
                    <CustomAlert
                        label={'Oh No!: '}
                        reason={'Somethin happened when deleting the discount'}
                    />
                ) : (
                    <></>
                )}
            </ModalContent>
        </Modal>
    )
}

PriceReductionDeleteModal.propTypes = {
    isOpen: PropTypes.bool,
    onClose: PropTypes.func,
    priceReductionId: PropTypes.number,
}
