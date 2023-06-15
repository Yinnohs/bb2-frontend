import { Box, Button, Flex, useColorModeValue } from '@chakra-ui/react'
import { UserTable } from '../../../components/user/UserTable'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'
import { fetchAllUsers } from '../../../features'
import { CustomAlert } from '../../../components/alert'
import { UserCreateModal } from '../../../components/user/UserCreateModal'
import { useModal } from '../../../hooks/modal/useModal'

export const UserPage = () => {
    const textBorderValue = useColorModeValue('purple.500', 'purple.200')
    const dispatch = useDispatch()
    const { status, error } = useSelector((state) => state.users)
    const [isCreateModalOpen, openCreateUserModal, closeCreateModal] =
        useModal()

    useEffect(() => {
        if (status === 'idle') {
            dispatch(fetchAllUsers())
        }
    }, [status, dispatch])
    return (
        <Box minH={'100vh'} w={'100%'} mt={20}>
            <Flex
                direction={'column'}
                w={'100%'}
                minH={'100vh'}
                alignItems={'center'}
            >
                <Button
                    color={textBorderValue}
                    borderColor={textBorderValue}
                    border={'1px'}
                    backgroundColor={useColorModeValue('white', 'gray.900')}
                    onClick={openCreateUserModal}
                >
                    Create an User + 1
                </Button>
                <UserTable />
                {error !== null ? (
                    <CustomAlert
                        label={'OH no!'}
                        reason={
                            'Something strange happened while reaching the data server'
                        }
                    />
                ) : (
                    <></>
                )}
                <UserCreateModal
                    isOpen={isCreateModalOpen}
                    onClose={closeCreateModal}
                />
            </Flex>
        </Box>
    )
}
