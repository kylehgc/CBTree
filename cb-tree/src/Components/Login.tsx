import {
  Flex,
  Box,
  Stack,
  Link,
  Button,
  Heading,
  useToast,
  useColorModeValue,
} from '@chakra-ui/react';
import {login} from '../utils/api';
import { useForm, SubmitHandler } from 'react-hook-form';
import { useState } from 'react';
import UserPassFormElements from './UserPassFormElements'

interface Token {
  access_token: string,
  tokenType: 'bearer'
}

interface FormValues {
  username: string,
  password: string
}

const Login: React.FC = () => {
  const [token, setToken] = useState<Token>()
  const {register, handleSubmit, formState: {errors , isSubmitting}} = useForm<FormValues>()
  const toast = useToast()

  const onSubmit: SubmitHandler<FormValues> = async(value) => {
    try{
      const response = await fetch(login, {
        body: new URLSearchParams({...value}),
        method: "POST",
        mode: "cors",
        
      })
      if(response.status === 200) {
        setToken(await response.json()) 
        toast({
          status: 'success',
          description: "Login successful.  Redirecting..."
          
        })
      } else {
        throw new Error("Incorrect Username or Password")
      }
    } catch (error) {
      if(error instanceof Error) {   
        toast({
          status: 'error',
          description: error.message
        })
      }
      
    }
  }

  return (
    <Flex h={'100%'} align='center' justify='center'>
      <Stack spacing={8} mx={'auto'} maxW={'lg'} maxH={'100%'} py={12} px={6}>
        <Stack align={'center'}>
          <Heading fontSize={'4xl'}>Sign in to your account</Heading>
        </Stack>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Box rounded={'lg'} bg={useColorModeValue('white', 'gray.700')} boxShadow={'lg'} p={8}>
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
                  isLoading={isSubmitting}
                  isDisabled={token !== undefined}
                  type='submit'
                  loadingText={"Submitting"}
                  bg={'blue.400'}
                  color={'white'}
                  _hover={{
                    bg: 'blue.500',
                  }}>
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