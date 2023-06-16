import { Box, Button, Flex, useColorModeValue } from '@chakra-ui/react'
import { useSelector } from 'react-redux'
import { CustomAlert } from '../../../components/alert'
import { useModal } from '../../../hooks/modal/useModal'
import { useEffect } from 'react'
import {
    PriceReductionCreateModal,
    PriceReductionsTable,
} from '../../../components/price-reductions'

export const PriceReductionsPage = () => {
    const textBorderValue = useColorModeValue('purple.500', 'purple.200')

    const { error } = useSelector((state) => state.users)
    const [isCreateModalOpen, openCreateModal, closeCreateModal] = useModal()

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
                    onClick={openCreateModal}
                >
                    Create a PriceReductions + 1
                </Button>
                <PriceReductionsTable />
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
            </Flex>
            <PriceReductionCreateModal
                isOpen={isCreateModalOpen}
                onClose={closeCreateModal}
            />
        </Box>
    )
}
