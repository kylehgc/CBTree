import {
  Flex,
  Box,
  Stack,
  Link,
  Button,
  Heading,
  useToast,
} from '@chakra-ui/react';

import useAuth, {Token} from '../Hooks/useAuth'
import { useForm, SubmitHandler } from 'react-hook-form';
import { loginEndpoint } from '../utils/api';
import UserPassFormElements from './UserPassFormElements'
import UseThemeColors from '../Hooks/useThemeColors';
import { useEffect } from 'react';
import { useNavigate, Link as BrowserLink} from 'react-router-dom';


interface FormValues {
  username: string,
  password: string
}

const Login: React.FC = () => {
  const toast = useToast()
  const {login, currentUser} = useAuth()
  const {foregroundColor, backgroundColor} = UseThemeColors()
  const {register, handleSubmit, formState: {errors , isSubmitting}} = useForm<FormValues>()
  const navigate = useNavigate()
  useEffect(() => {
    if(currentUser) {
      navigate("/situationQuestion")
    }
  }, [currentUser,navigate])

  const onSubmit: SubmitHandler<FormValues> = async(value) => {
    try{
      const response = await fetch(loginEndpoint, {
        body: new URLSearchParams({...value}),
        method: "POST",
        mode: "cors",
      })
      if(response.status === 200) {
        const token: Token = await response.json()
        toast({
          status: 'success',
          description: "Logged in.  Redirecting..."
        })
        login(token)
        
        
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
    
    <Stack spacing={8} mx={'auto'} maxW={'lg'} maxH={'100%'} py={12} px={6}>
      <Stack align={'center'}>
        <Heading fontSize={'4xl'}>Sign in to your account</Heading>
      </Stack>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Box rounded={'lg'} bg={foregroundColor} boxShadow={'lg'} p={8}>
          <Stack spacing={4}>
            <UserPassFormElements register={register} errors={errors} />
            <Stack spacing={8}>
              <Stack
                direction={{ base: 'column', sm: 'row' }}
                align={'start'}
                spacing={4}
                justify={'space-between'}
              >
                <Link color={'blue.400'}>
                    Forgot password?
                </Link>
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
              <Link as={BrowserLink} 
                to="/signup" 
                textAlign={"center"}
                color={'blue.400'}
              >
                    New User? Sign up here!
              </Link>
            </Stack>
          </Stack>
        </Box>
      </form>
    </Stack>
    
  );
}

export default Login