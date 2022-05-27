import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'

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
import Link from 'next/link'
import { SubmitHandler, useForm } from 'react-hook-form'
import { Input } from '../../components/Form/Input'
import { Header } from '../../components/Header'
import { Sidebar } from '../../components/Sidebar'

type CreateUserFormProps = {
  name: string
  email: string
  password: string
  password_confirm: string
}

const CreateUserSchema = yup.object().shape({
  name: yup.string().required(),
  email: yup.string().required().email(),
  password: yup.string().required(),
  password_confirm: yup.string().oneOf([null, yup.ref('password')]),
})

export default function CreateUser() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: yupResolver(CreateUserSchema),
  })

  const handleCreateUser: SubmitHandler<CreateUserFormProps> = async (
    values
  ) => {
    await new Promise((resolve) => setTimeout(resolve, 2000))
    console.log(values)
  }

  return (
    <Box>
      <Header />

      <Flex w="100%" my="6" mx="auto" px="6" maxWidth={1480}>
        <Sidebar />

        <Box
          flex="1"
          borderRadius="8"
          bg="gray.800"
          p="8"
          as="form"
          onSubmit={handleSubmit(handleCreateUser)}
        >
          <Heading size="lg" fontWeight="normal">
            Criar usuário
            <Divider my="6" borderColor="gray.700" />
            <VStack spacing="8">
              <SimpleGrid minChildWidth="240px" spacing="8" width="100%">
                <Input
                  {...register('name')}
                  error={errors.name}
                  name="name"
                  label="Nome completo"
                />
                <Input
                  {...register('email')}
                  name="email"
                  error={errors.email}
                  label="Email"
                  type="email"
                />
              </SimpleGrid>
              <SimpleGrid minChildWidth="240px" spacing="8" width="100%">
                <Input
                  {...register('password')}
                  error={errors.password}
                  name="password"
                  type="password"
                  label="Senha"
                />
                <Input
                  {...register('password_confirm')}
                  error={errors.password_confirm}
                  name="password_confirm"
                  label="Confirmação de senha"
                  type="password"
                />
              </SimpleGrid>
            </VStack>
            <Flex mt="8" justify="flex-end">
              <HStack spacing="4">
                <Link href="/users" passHref>
                  <Button as="a" colorScheme="whiteAlpha">
                    Cancelar
                  </Button>
                </Link>
                <Button
                  type="submit"
                  isLoading={isSubmitting}
                  colorScheme="pink"
                >
                  Salvar
                </Button>
              </HStack>
            </Flex>
          </Heading>
        </Box>
      </Flex>
    </Box>
  )
}
