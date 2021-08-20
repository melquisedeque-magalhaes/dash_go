import { Flex, Icon, IconButton, useBreakpointValue } from '@chakra-ui/react'
import { RiMenuLine } from 'react-icons/ri'
import { useSidebarDrawer } from '../contexts/SidebarDrawerContext'

import { Logo } from '../widgets/Header/Logo'
import { NotificationNav } from '../widgets/Header/NotificationNav'
import { Profile } from '../widgets/Header/Profile'
import { SearchBox } from '../widgets/Header/SearchBox'

export function Header(){

    const { onOpen } = useSidebarDrawer()

    const isWideVersion = useBreakpointValue({
        base: false,
        lg: true
    })

    return(
        <Flex
          as="header"
          width="100%"
          maxWidth={1480}
          h="20"
          mx="auto"
          px="6"
          align="center"
          mt="4"
        >
            {
                !isWideVersion && (
                    <IconButton
                        aria-label="open sidebar"
                        icon={<Icon as={RiMenuLine} />}
                        fontSize="24"
                        variant="unstyled"
                        onClick={onOpen}
                        mr="2"
                    >

                    </IconButton>
                )
            }
            <Logo />

            {isWideVersion && (
                <SearchBox />
            )}
        
            <Flex
                align="center"
                ml="auto"
            >
                <NotificationNav />

                <Profile 
                    name="Melqui Sodre" 
                    email="melqui.sodre15@gmail.com" 
                    showProfileData={isWideVersion} 
                />
                
            </Flex>
        </Flex>
    )
}