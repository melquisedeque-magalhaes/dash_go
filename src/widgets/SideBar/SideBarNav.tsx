import { Stack } from "@chakra-ui/react";
import { RiContactsLine, RiDashboardLine, RiGitMergeLine, RiInputMethodLine } from "react-icons/ri";
import { NavLink } from "./NavLink";
import { NavSection } from "./NavSection";

export function SideBarNav(){
    return(
        <Stack spacing="12" align="flex-start">
            <NavSection title="GERAL">
                
                <NavLink title="Dashboard" icon={RiDashboardLine} url="/dashboard" />

                <NavLink title="Usuarios" icon={RiContactsLine} url="/users" />
                
            </NavSection>
            <NavSection title="AUTOMAÇÃO">
                
                <NavLink title="Formularios" icon={RiInputMethodLine} url="#" />

                <NavLink title="Automação" icon={RiGitMergeLine} url="#" />  
                
            </NavSection>
        </Stack>
    )
}