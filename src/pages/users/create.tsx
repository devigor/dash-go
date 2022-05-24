import {
  Box,
  Button,
  Divider,
  Flex,
  Heading,
  HStack,
  SimpleGrid,
  VStack,
} from '@chakra-ui/react'
import { Input } from '../../components/Form/Input'
import { Header } from '../../components/Header'
import { Sidebar } from '../../components/Siderbar'

export default function CreateUser() {
  return (
    <Box>
      <Header />

      <Flex w="100%" my="6" mx="auto" px="6" maxWidth={1480}>
        <Sidebar />

        <Box flex="1" borderRadius="8" bg="gray.800" p="8">
          <Heading size="lg" fontWeight="normal">
            Criar usuário
            <Divider my="6" borderColor="gray.700" />
            <VStack spacing="8">
              <SimpleGrid minChildWidth="240px" spacing="8" width="100%">
                <Input name="name" label="Nome completo" />
                <Input name="email" label="Email" type="email" />
              </SimpleGrid>
              <SimpleGrid minChildWidth="240px" spacing="8" width="100%">
                <Input name="password" type="password" label="Senha" />
                <Input
                  name="password_confirm"
                  label="Confirmação de senha"
                  type="password"
                />
              </SimpleGrid>
            </VStack>

            <Flex mt="8" justify="flex-end">
              <HStack spacing="4">
                <Button colorScheme="whiteAlpha">Cancelar</Button>
                <Button colorScheme="pink">Salvar</Button>
              </HStack>
            </Flex>
          </Heading>
        </Box>
      </Flex>
    </Box>
  )
}
