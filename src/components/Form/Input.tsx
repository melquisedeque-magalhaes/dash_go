import { forwardRef, ForwardRefRenderFunction } from 'react'
import { 
    InputGroup,
    InputRightElement,
    Input as ChakraInput, 
    FormLabel, 
    FormControl, 
    InputProps as ChakraInputProps ,
    FormErrorMessage,
    FormErrorIcon
} from '@chakra-ui/react'

import { FieldError } from 'react-hook-form'
import { RiErrorWarningFill } from 'react-icons/ri'


interface InputProps extends ChakraInputProps{
    name: string;
    label?: string;
    error?: FieldError;
}

const InputBase: ForwardRefRenderFunction<HTMLInputElement, InputProps> 
    = ({ name, label, error = null, ...rest }, ref) => {

    return (
        <FormControl isInvalid={!!error}>
            {
                !!label && <FormLabel htmlFor={name}>{label}</FormLabel>
            }
            
            <InputGroup 
                focusBorderColor="pink.500"
                bg="gray.900"
                variant="filled"
                size="lg"
                display="flex"
                alignItems="center"
                // _hover={{ 
                //     bgColor: "gray.900"
                // }}
                borderRadius={8}
            >   
                <ChakraInput
                    ref={ref}
                    id={name}
                    name={name}
                    focusBorderColor="pink.500"
                    bg="gray.900"
                    variant="filled"
                    _hover={{ 
                        bgColor: "gray.900"
                    }}
                    size="lg"
                    {...rest}
                />

                {   !!error && 
                    <InputRightElement>
                        <FormErrorIcon as={RiErrorWarningFill} color="red.500" fontSize={16} />
                    </InputRightElement>
                    
                }
            </InputGroup>
            

            { !!error && <FormErrorMessage>{error.message}</FormErrorMessage>}
        </FormControl>
    )
}

export const Input = forwardRef(InputBase)