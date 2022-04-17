import {
  Flex,
  Box,
  Stack,
  Link,
  Button,
  Heading,
  useToast,
} from '@chakra-ui/react';

import { useForm, SubmitHandler } from 'react-hook-form';
import UserPassFormElements from './UserPassFormElements'
import UseThemeColors from '../Hooks/useThemeColors';
import useAuth from '../Hooks/UseAuth'

interface FormValues {
  username: string,
  password: string
}

const Login: React.FC = () => {
  const {foregroundColor, backgroundColor} = UseThemeColors()
  const {register, handleSubmit, formState: {errors , isSubmitting}} = useForm<FormValues>()
  const {login} = useAuth()

  const onSubmit: SubmitHandler<FormValues> = async(value) => {
    await login(value)
  }

  return (
    <Flex h={'100%'} align='center' justify='center'>
      <Stack spacing={8} mx={'auto'} maxW={'lg'} maxH={'100%'} py={12} px={6}>
        <Stack align={'center'}>
          <Heading fontSize={'4xl'}>Sign in to your account</Heading>
        </Stack>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Box rounded={'lg'} bg={foregroundColor} boxShadow={'lg'} p={8}>
            <Stack spacing={4}>
              <UserPassFormElements register={register} errors={errors} />
              <Stack spacing={10}>
                <Stack
                  direction={{ base: 'column', sm: 'row' }}
                  align={'start'}
                  justify={'space-between'}>
                  <Link color={'blue.400'}>Forgot password?</Link>
                </Stack>
                <Button
                  type={"submit"}
                  isLoading={isSubmitting}
                  loadingText={"Submitting"}
                  variant={"loginSubmit"}
                  bg={backgroundColor}
                  _hover={{
                    bg: 'blue.500',
                  }}
                >
                  Sign in
                </Button>
              </Stack>
            </Stack>
          </Box>
        </form>
      </Stack>
    </Flex>
  );
}

export default Login