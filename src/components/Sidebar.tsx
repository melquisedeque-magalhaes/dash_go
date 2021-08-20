import { 
    Box, 
    useBreakpointValue, 
    Drawer, 
    DrawerOverlay, 
    DrawerContent, 
    DrawerCloseButton, 
    DrawerHeader, 
    DrawerBody, 
    Flex 
} from "@chakra-ui/react";
import { useSidebarDrawer } from "../contexts/SidebarDrawerContext";

import { Logo } from "../widgets/Header/Logo";
import { SideBarNav } from "../widgets/SideBar/SideBarNav";

export function Sidebar(){

    const { onClose, isOpen } = useSidebarDrawer()

    const isDrawerSidebar = useBreakpointValue({
        base: true,
        lg: false
    })

    if(isDrawerSidebar){
        return(
            <Drawer isOpen={isOpen} placement="left" onClose={onClose}>
                <DrawerOverlay>
                    <DrawerContent bg="gray.800" p="4">
                        <DrawerCloseButton />
                        <DrawerHeader>
                            <Logo />
                        </DrawerHeader>

                        <DrawerBody>
                            <SideBarNav />
                        </DrawerBody>
                    </DrawerContent>
                </DrawerOverlay>
            </Drawer>
        )
    }

    return(
        <Box as="aside" w="64" mr="8">
            <SideBarNav />
        </Box>
    )
} 