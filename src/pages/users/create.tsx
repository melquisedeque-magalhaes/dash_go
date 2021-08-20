import { Box, Divider, Flex, Heading, SimpleGrid, VStack, Button, HStack } from '@chakra-ui/react'
import LinkNext from "next/link"
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

                <Box flex="1" bg="gray.800" borderRadius={8} p={["6", "8"]}>
                   <Heading size="lg" fontWeight="normal">Criar Usuario</Heading>

                   <Divider my="6" borderColor="gray.700" />

                   <VStack spacing="8">
                        <SimpleGrid minChildWidth="240px" spacing={["6", "8"]} w="100%"> 
                            <Input name="name" label="Nome Completo" />
                            <Input name="email" label="E-mail" type="email"/>
                        </SimpleGrid>

                        <SimpleGrid minChildWidth="240px" spacing={["6", "8"]} w="100%"> 
                            <Input name="password" label="Senha" type="password" />
                            <Input name="password_confirmation" label="Confirmação da Senha" type="password"/>
                        </SimpleGrid>
                   </VStack>

                   <Flex mt="8" justify="flex-end">
                        <HStack>
                            <LinkNext href="/users" passHref>
                                <Button as="a" colorScheme="whiteAlpha">Cancelar</Button>
                            </LinkNext>

                            <LinkNext href="/users" passHref>
                                <Button as="a" colorScheme="pink">Salvar</Button>
                            </LinkNext>
                        </HStack>
                   </Flex>
                </Box>
            </Flex>
        </Box>
    )
}