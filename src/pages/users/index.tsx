import { Box, Flex, Heading, Button, Icon, Table, Tr, Checkbox, Thead, Th, Tbody, Td, Text } from '@chakra-ui/react'
import { RiAddLine, RiPencilLine } from 'react-icons/ri'

import { Header } from '../../components/Header'
import { Pagination } from '../../components/Pagination'
import { Sidebar } from '../../components/Sidebar'

export default function UserList(){
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
                    <Flex mb="8" justify="space-between" align="center">
                        <Heading size="lg" fontWeight="normal">Usuarios</Heading>

                        <Button
                            as="a"
                            size="sm"
                            fontSize="sm"
                            colorScheme="pink"
                            leftIcon={
                                <Icon
                                    fontSize="20"
                                    as={RiAddLine}
                                />
                            }
                        >
                            Criar novo
                        </Button>
                    </Flex>

                    <Table colorScheme="whiteAlpha">
                        <Thead>
                            <Tr>
                                <Th px="6" color="green.300" width="8">
                                    <Checkbox colorScheme="pink" />
                                </Th>
                                <Th>
                                    Usuario
                                </Th>
                                <Th>
                                    Data de Cadastro
                                </Th>
                                <Td></Td>
                            </Tr>
                        </Thead>
                        <Tbody>
                            <Tr>
                                <Td px="6">
                                    <Checkbox colorScheme="pink" />
                                </Td>
                                <Td>
                                    <Box>
                                        <Text fontWeight="bold">Melquisedeque</Text>
                                        <Text fontSize="sm" color="gray.300">melqui.sodre15@gmail.com</Text>
                                    </Box>
                                </Td>
                                <Td>
                                    19 de Agosto, 2021
                                </Td>
                                <Td>
                                    <Button
                                        as="a"
                                        size="sm"
                                        fontSize="sm"
                                        colorScheme="purple"
                                        leftIcon={
                                            <Icon
                                                fontSize="16"
                                                as={RiPencilLine}
                                            />
                                        }
                                    >
                                        Editar
                                    </Button>
                                </Td>
                            </Tr>
                        </Tbody>
                    </Table>

                    <Pagination />
                </Box>
            </Flex>
        </Box>
    )
}