import { Spinner } from '@chakra-ui/react'

export const CustomSpinner = () => {
    return (
        <Spinner
            thickness="4px"
            speed="0.65s"
            emptyColor="gray.200"
            color="purple.500"
            size="lg"
        />
    )
}
