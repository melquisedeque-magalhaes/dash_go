import { Flex, Button, Stack } from '@chakra-ui/react'
import { useForm, SubmitHandler } from 'react-hook-form'
import * as Yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'

import { Input } from '../components/Form/Input'

type SignInFormData = {
  email: string;
  password: string;
}

const  signInFormSchema = Yup.object().shape({
  email: Yup.string().required('E-mail e obrigatorio!').email('Digite um e-mail valido !'),
  password: Yup.string().required('Senha e obrigatorio!')
})

export default function Home() {

  const { register, handleSubmit, formState } = useForm({
    resolver: yupResolver(signInFormSchema)
  })

  const { errors } = formState

  const handleSignIn:SubmitHandler<SignInFormData> = async (values, event) => {
    await new Promise(resolve => setTimeout(resolve, 2000))
    event.preventDefault()
    
  }

  return (
    <Flex
      w="100vw"
      h="100vh"
      align="center"
      justify="center"
    >
      <Flex
        as="form"
        w="100%"
        maxWidth={360}
        bg="gray.800"
        p="8"
        borderRadius={8}
        flexDirection="column"
        onSubmit={handleSubmit(handleSignIn)}
      >
        <Stack spacing="4">

          <Input
            name="email"
            label="E-mail"
            type="email"
            error={errors.email}
            {...register('email')}
          />

          <Input
            name="password"
            label="Senha"
            type="password"
            error={errors.password}
            {...register('password')}
          />

        </Stack>

        <Button 
          type="submit"
          mt="6"
          colorScheme="pink"
          size="lg"
          isLoading={formState.isSubmitting}
        >
          Entrar
        </Button>

      </Flex>
    </Flex>
  )
}
