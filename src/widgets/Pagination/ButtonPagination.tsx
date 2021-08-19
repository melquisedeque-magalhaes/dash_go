import { Button } from "@chakra-ui/react";

interface ButtonPaginationProps {
    isCurrent?: boolean;
    children: string;
}

export function ButtonPagination({ isCurrent = false, children }: ButtonPaginationProps){

    if(isCurrent){
        return(
            <Button 
                size="sm"
                fontSize="xs"
                width="4"
                colorScheme="pink"
                disabled
                _disabled={{
                    bg: 'pink.500',
                    cursor: 'default'
                }}
            >
                {children}
            </Button>
        )
    }

    return(
        <Button 
            size="sm"
            fontSize="xs"
            width="4"
            bg="gray.700"
            _hover={{
                bg: 'gray.500'
            }}
        >
            {children}
        </Button>
    )
    
}