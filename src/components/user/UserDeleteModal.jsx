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
import { deleteUserRequest } from '../../features'
import { CustomAlert } from '../alert'

export const UserDeleteModal = ({ isOpen, onClose, userId }) => {
    const { status, users, error } = useSelector((state) => state.users)
    const currentUser = users.find((user) => user?.user_id === userId)
    const dispatch = useDispatch()

    const deleteUser = async () => {
        dispatch(deleteUserRequest(userId))
        if (status === 'succeded') onClose()
    }
    return (
        <Modal isOpen={isOpen} onClose={onClose} size={'xl'}>
            <ModalOverlay />
            <ModalContent>
                <ModalHeader>Create An User</ModalHeader>
                <ModalCloseButton />
                <ModalBody pb={6}>
                    <Text size={'xl'}>
                        Are you sure you want to delete the user
                    </Text>
                    <Text>{currentUser?.email}</Text>
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

UserDeleteModal.propTypes = {
    isOpen: PropTypes.bool,
    onClose: PropTypes.func,
    userId: PropTypes.number,
}
