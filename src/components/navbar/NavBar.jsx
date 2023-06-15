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
    useColorModeValue,
    Stack,
    useColorMode,
    Center,
    Image,
} from '@chakra-ui/react'
import { MoonIcon, SunIcon } from '@chakra-ui/icons'
import { useDispatch, useSelector } from 'react-redux'
import { getCurrentUser } from '../../features/auth'
import { useNavigate } from 'react-router-dom'
import { NavLink } from './NavLink'
import { logoutUser } from '../../functions'
const image = '/astronaut.jfif'

export const NavBar = () => {
    const { colorMode, toggleColorMode } = useColorMode()
    const user = useSelector(getCurrentUser)
    const navigation = useNavigate()
    const distpatch = useDispatch()
    return (
        <Box
            position={'sticky'}
            top={0}
            left={0}
            bg={useColorModeValue('white', 'blackAlpha.500')}
            px={4}
            shadow={'md'}
            zIndex={99}
        >
            <Flex
                h={16}
                flexDirection={'row'}
                alignItems={'center'}
                justifyContent={'space-between'}
            >
                <Box w={100} h={50}>
                    <Image src="/logo.svg" />
                </Box>
                <NavLink to={'/items'} label={'Home'} />
                <Flex alignItems={'center'}>
                    <Stack direction={'row'} spacing={7}>
                        <Button
                            onClick={toggleColorMode}
                            backgroundColor={useColorModeValue(
                                'purple.200',
                                'gray.700',
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
                                    <p>{`${user?.name}`}</p>
                                </Center>
                                <br />
                                <MenuDivider />
                                {user?.roles?.length > 0 &&
                                user?.roles[0]?.role === 'ADMIN' ? (
                                    <MenuItem
                                        onClick={(e) => navigation('/admin')}
                                    >
                                        Admin panel
                                    </MenuItem>
                                ) : (
                                    <></>
                                )}
                                <MenuItem>Account Settings</MenuItem>
                                <MenuItem
                                    onClick={() =>
                                        logoutUser(distpatch, navigation)
                                    }
                                >
                                    Logout
                                </MenuItem>
                            </MenuList>
                        </Menu>
                    </Stack>
                </Flex>
            </Flex>
        </Box>
    )
}
