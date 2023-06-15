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
                <AdminSelectionCard
                    label={'Suppliers'}
                    url={'/admin/suppliers'}
                />
                <AdminSelectionCard
                    label={'Price Reductions'}
                    url={'/admin/price-reductions'}
                />
                <AdminSelectionCard label={'Users'} url={'/admin/users'} />
                <AdminSelectionCard label={'Items'} url={'/admin/items'} />
            </Grid>
        </Box>
    )
}
