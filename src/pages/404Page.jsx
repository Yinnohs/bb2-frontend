/* eslint-disable react/no-unescaped-entities */
import { Box, Heading, Text, Button } from '@chakra-ui/react'
import { useNavigate } from 'react-router'

export const NotFoundPage = () => {
    const navigate = useNavigate()
    return (
        <Box
            textAlign="center"
            py={10}
            px={6}
            h={'86%'}
            display={'flex'}
            flexDirection={'column'}
            justifyContent={'center'}
            alignItems={'center'}
        >
            <Heading
                display="inline-block"
                as="h2"
                size="4xl"
                bgGradient="linear(to-r, purple.400, purple.600)"
                backgroundClip="text"
            >
                404
            </Heading>
            <Text fontSize="2xl" mt={3} mb={2}>
                Page Not Found
            </Text>
            <Text color={'gray.500'} mb={6} fontSize={'xl'}>
                The page you're looking for does not seem to exist
            </Text>

            <Button
                onClick={() => navigate('/')}
                colorScheme="purple"
                bgGradient="linear(to-r, purple.400, purple.500, purple.600)"
                color="white"
                variant="solid"
            >
                Go to Home
            </Button>
        </Box>
    )
}
