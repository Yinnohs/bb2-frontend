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
import { deleteItemRequest } from '../../features'
import { useNavigate } from 'react-router'

export const DeleteItemModal = ({ isOpen, onClose, itemId }) => {
    const navigation = useNavigate()
    const { error, status } = useSelector((state) => state.items)
    const dispatch = useDispatch()

    const deleteItemFunction = () => {
        dispatch(deleteItemRequest(itemId))
        navigation('/items')
    }

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
                        onClick={deleteItemFunction}
                    >
                        Deactivate
                    </Button>
                    <Button onClick={onClose}>Cancel</Button>
                </ModalFooter>
                {error !== null && status === 'rejected' ? (
                    <CustomAlert
                        label={'Error'}
                        reason={'something happened when deleting the item'}
                    />
                ) : (
                    <></>
                )}
            </ModalContent>
        </Modal>
    )
}

DeleteItemModal.propTypes = {
    isOpen: PropTypes.bool,
    onClose: PropTypes.func,
    itemId: PropTypes.number,
}
