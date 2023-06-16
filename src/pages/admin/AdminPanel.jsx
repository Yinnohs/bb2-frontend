import { Box, Grid } from '@chakra-ui/react'
import { AdminSelectionCard } from '../../components/card'

export const AdminPanel = () => {
    return (
        <Box
            minH={'90vh'}
            maxW={'100vw'}
            display={'flex'}
            justifyContent={'center'}
        >
            <Grid
                width={'50%'}
                templateColumns={'repeat(2, 1fr)'}
                gap={6}
                scrollBehavior={'smooth'}
            >
                <AdminSelectionCard label={'Suppliers'} url={'/suppliers/'} />
                <AdminSelectionCard label={'Discounts'} url={'/discounts/'} />
                <AdminSelectionCard label={'Users'} url={'/users/'} />
            </Grid>
        </Box>
    )
}
