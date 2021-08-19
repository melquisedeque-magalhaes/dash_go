import { Box, Divider, Flex, Heading, SimpleGrid, VStack, Button, HStack } from '@chakra-ui/react'

import { Header } from '../../components/Header'
import { Sidebar } from '../../components/Sidebar'
import { Input } from '../../components/Form/Input'

export default function CreateUser(){
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

                <Box flex="1" bg="gray.800" borderRadius={8} p="8">
                   <Heading size="lg" fontWeight="normal">Criar Usuario</Heading>

                   <Divider my="6" borderColor="gray.700" />

                   <VStack spacing="8">
                        <SimpleGrid minChildWidth="240px" spacing="8" w="100%"> 
                            <Input name="name" label="Nome Completo" />
                            <Input name="email" label="E-mail" type="email"/>
                        </SimpleGrid>

                        <SimpleGrid minChildWidth="240px" spacing="8" w="100%"> 
                            <Input name="password" label="Senha" type="password" />
                            <Input name="password_confirmation" label="Confirmação da Senha" type="password"/>
                        </SimpleGrid>
                   </VStack>

                   <Flex mt="8" justify="flex-end">
                        <HStack>
                            <Button colorScheme="whiteAlpha">Cancelar</Button>
                            <Button colorScheme="pink">Salvar</Button>
                        </HStack>
                   </Flex>
                </Box>
            </Flex>
        </Box>
    )
}