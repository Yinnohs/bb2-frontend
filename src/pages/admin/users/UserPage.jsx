import { Box, Button, Flex, useColorModeValue } from '@chakra-ui/react'
import { UserTable } from '../../../components/user/UserTable'
import { useSelector } from 'react-redux'
import { CustomAlert } from '../../../components/alert'
import { UserCreateModal } from '../../../components/user/UserCreateModal'
import { useModal } from '../../../hooks/modal/useModal'
import { useEffect } from 'react'

export const UserPage = () => {
    const textBorderValue = useColorModeValue('purple.500', 'purple.200')

    const { error } = useSelector((state) => state.users)
    const [isCreateModalOpen, openCreateUserModal, closeCreateModal] =
        useModal()

    useEffect(() => {}, [closeCreateModal])
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
