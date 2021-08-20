import { Stack } from "@chakra-ui/react";
import { RiContactsLine, RiDashboardLine, RiGitMergeLine, RiInputMethodLine } from "react-icons/ri";
import { NavLink } from "./NavLink";
import { NavSection } from "./NavSection";

export function SideBarNav(){
    return(
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
    )
}