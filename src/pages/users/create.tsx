import { 
    Box, 
    Divider, 
    Flex, 
    Heading, 
    SimpleGrid, 
    VStack, 
    Button, 
    HStack 
} from '@chakra-ui/react'
import LinkNext from "next/link"
import { useForm, SubmitHandler } from 'react-hook-form'
import * as Yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'

import { Header } from '../../components/Header'
import { Sidebar } from '../../components/Sidebar'
import { Input } from '../../components/Form/Input'

type CreateUserFormData = {
    name: string;
    email: string;
    password: string;
    password_confirmation: string;
}

const createUserFormSchema = Yup.object().shape({
    name: Yup.string().required('Nome e obrigatorio !'),
    email: Yup.string().required('E-mail é obrigatorio !').email('Digite um E-mail valido!'),
    password: Yup.string().min(6, "No minimo 6 caracteres !"),
    password_confirmation: Yup.string().oneOf([null, Yup.ref('password')], 'As senhas precisam ser iguais !')
})

export default function CreateUser(){

    const { register, formState, handleSubmit } = useForm({
        resolver: yupResolver(createUserFormSchema)
    })

    const { errors, isSubmitting } = formState

    const handleCreateUser: SubmitHandler<CreateUserFormData> = async (values,  event) => {
        await new Promise(resolve => setTimeout(resolve, 2000))
        event.preventDefault()
        console.log(values)
    }

    return(
        <Box>
            <Header />

             <Flex
              w="100%"
              my="6"
              maxWidth={1480}
              mx="auto"
              px="6"
            >
                <Sidebar />

                <Box 
                    flex="1" 
                    bg="gray.800" 
                    borderRadius={8} p={["6", "8"]} 
                    as="form"
                    onSubmit={handleSubmit(handleCreateUser)}
                >
                   <Heading size="lg" fontWeight="normal">Criar Usuario</Heading>

                   <Divider my="6" borderColor="gray.700" />

                   <VStack
                     spacing="8"
                   >
                        <SimpleGrid minChildWidth="240px" spacing={["6", "8"]} w="100%"> 
                            <Input
                              name="name"
                              label="Nome Completo"
                              {...register('name')}
                              error={errors.name}
                            />

                            <Input
                              name="email"
                              label="E-mail"
                              type="email"
                              {...register('email')}
                              error={errors.email}
                            />
                        </SimpleGrid>

                        <SimpleGrid minChildWidth="240px" spacing={["6", "8"]} w="100%"> 
                            <Input
                              name="password"
                              label="Senha"
                              type="password"
                              {...register('password')}
                              error={errors.password}
                            />

                            <Input
                              name="password_confirmation"
                              label="Confirmação da Senha"
                              type="password"
                              {...register('password_confirmation')}
                              error={errors.password_confirmation}
                            />
                        </SimpleGrid>
                   </VStack>

                   <Flex mt="8" justify="flex-end">
                        <HStack>
                            <LinkNext href="/users" passHref>
                                <Button as="a" colorScheme="whiteAlpha">Cancelar</Button>
                            </LinkNext>


                            <Button
                              cursor="pointer"
                              type="submit"
                              as="button"
                              colorScheme="pink"
                              isLoading={isSubmitting}
                            >
                                Salvar
                            </Button>
                            
                        </HStack>
                   </Flex>
                </Box>
            </Flex>
        </Box>
    )
}