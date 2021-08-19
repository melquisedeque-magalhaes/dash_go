import { Box, Button, HStack, Stack } from "@chakra-ui/react";
import { ButtonPagination } from "../widgets/Pagination/ButtonPagination";

export function Pagination(){
    return(
        <HStack
            mt="8"
            justify="space-between"
            align="center"
            spacing="6"
        >
            <Box>
                <strong>0</strong> - <strong>10</strong> de <strong>100</strong>
            </Box>
            <Stack direction="row" spacing="2">

                <ButtonPagination isCurrent={true}>1</ButtonPagination>
                <ButtonPagination>2</ButtonPagination>
                <ButtonPagination>3</ButtonPagination>
                <ButtonPagination>4</ButtonPagination>
                <ButtonPagination>5</ButtonPagination>
                
            </Stack>
        </HStack>
    )
}