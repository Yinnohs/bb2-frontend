/* eslint-disable no-unused-vars */
import {
    Box,
    Flex,
    Avatar,
    Button,
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
    MenuDivider,
    useDisclosure,
    useColorModeValue,
    Stack,
    useColorMode,
    Center,
    Image,
} from '@chakra-ui/react'
import { MoonIcon, SunIcon } from '@chakra-ui/icons'
const image = '/astronaut.jfif'

export const NavBar = () => {
    const { colorMode, toggleColorMode } = useColorMode()
    const { isOpen, onOpen, onClose } = useDisclosure()
    return (
        <Box
            position={'sticky'}
            top={0}
            left={0}
            bg={useColorModeValue('white', 'gray.800')}
            px={4}
            shadow={'md'}
            zIndex={99}
        >
            <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
                <Box w={100} h={50}>
                    <Image src="/logo.svg" />
                </Box>

                <Flex alignItems={'center'}>
                    <Stack direction={'row'} spacing={7}>
                        <Button
                            onClick={toggleColorMode}
                            backgroundColor={useColorModeValue(
                                'purple.200',
                                'gray.700'
                            )}
                            rounded={'3xl'}
                        >
                            {colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
                        </Button>

                        <Menu>
                            <MenuButton
                                as={Button}
                                rounded={'full'}
                                variant={'link'}
                                cursor={'pointer'}
                                minW={0}
                            >
                                <Avatar size={'sm'} src={image} />
                            </MenuButton>
                            <MenuList alignItems={'center'}>
                                <br />
                                <Center>
                                    <Avatar size={'lg'} src={image} />
                                </Center>
                                <br />
                                <Center>
                                    <p>Jose I Soto</p>
                                </Center>
                                <br />
                                <MenuDivider />
                                <MenuItem>Your Servers</MenuItem>
                                <MenuItem>Account Settings</MenuItem>
                                <MenuItem>Logout</MenuItem>
                            </MenuList>
                        </Menu>
                    </Stack>
                </Flex>
            </Flex>
        </Box>
    )
}
