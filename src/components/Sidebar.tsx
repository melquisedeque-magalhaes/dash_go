import { Box, Stack, Text, Link, Icon } from "@chakra-ui/react";
import { RiContactsLine, RiDashboardLine, RiGitMergeLine, RiInputMethodLine } from "react-icons/ri";
import { NavLink } from "../widgets/SideBar/NavLink";
import { NavSection } from "../widgets/SideBar/NavSection";

export function Sidebar(){
    return(
        <Box as="aside" w="64" mr="8">
            <Stack spacing="12" align="flex-start">
                <NavSection title="GERAL">
                    
                    <NavLink title="Dashboard" icon={RiDashboardLine} />

                    <NavLink title="Usuarios" icon={RiContactsLine} />
                    
                </NavSection>
                <NavSection title="AUTOMAÇÃO">
                    
                    <NavLink title="Formularios" icon={RiInputMethodLine} />

                    <NavLink title="Automação" icon={RiGitMergeLine} />  
                    
                </NavSection>
            </Stack>
        </Box>
    )
} 