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
import { deleteSupplierRequest } from '../../features'
import { CustomAlert } from '../alert'

export const SupplierDeleteModal = ({ isOpen, onClose, supplierId }) => {
    const { status, suppliers, error } = useSelector((state) => state.suppliers)
    const currentUser = suppliers.find(
        (supplier) => supplier?.supplier_id === supplierId,
    )
    const dispatch = useDispatch()

    const deleteUser = async () => {
        dispatch(deleteSupplierRequest(supplierId))
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
                        Are you sure you want to delete the supplier:
                    </Text>
                    <Text fontWeight={'bold'} color={'purple.400'}>
                        {currentUser?.name}
                    </Text>
                </ModalBody>
                <ModalFooter>
                    <Button colorScheme="purple" mr={3} onClick={deleteUser}>
                        Acept
                    </Button>
                    <Button onClick={onClose}>Cancel</Button>
                </ModalFooter>
                {error !== null && status === 'rejected' ? (
                    <CustomAlert
                        label={'Oh No!: '}
                        reason={'Somethin happened when deleting the user'}
                    />
                ) : (
                    <></>
                )}
            </ModalContent>
        </Modal>
    )
}

SupplierDeleteModal.propTypes = {
    isOpen: PropTypes.bool,
    onClose: PropTypes.func,
    supplierId: PropTypes.number,
}
