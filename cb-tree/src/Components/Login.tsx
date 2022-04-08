import {
  Flex,
  Box,
  Spinner,
  FormControl,
  FormLabel,
  Input,
  FormErrorMessage,
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
// import { useEffect, useState } from 'react';

interface Token {
  access_token: string,
  tokenType: 'bearer'
}
interface FormValues {
  username: string,
  password: string
}

export default function Login() {
  const [token, setToken] = useState<Token>()
  const {register, handleSubmit, reset, formState: {errors , isSubmitting, isSubmitted}} = useForm<FormValues>()
  const toast = useToast()

  const onSubmit: SubmitHandler<FormValues> = async(value) => {

    try{
      const response = await fetch(login, {
        body: new URLSearchParams({...value}),
        method: "POST",
        mode: "cors"
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
    }
    catch (error) {
      if(error instanceof Error) {   
        toast({
          status: 'error',
          description: error.message
        })
      }
      reset({},{keepValues: true})
      console.log(isSubmitted)
    }
  }
  return (
    <Flex overflow='auto' h={'100%'} align='center' justify='center'>
      <Stack spacing={8} mx={'auto'} maxW={'lg'} maxH={'100%'} py={12} px={6}>
        <Stack align={'center'}>
          <Heading fontSize={'4xl'}>Sign in to your account</Heading>
        </Stack>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Box rounded={'lg'} bg={useColorModeValue('white', 'gray.700')} boxShadow={'lg'} p={8}>
            <Stack spacing={4}>
              <FormControl isRequired isInvalid={!!errors?.username} id="email">
                <FormLabel>Email address</FormLabel>
                <Input type="text" placeholder="Email" {...register(
                  "username", {required: true, pattern:{
                    value: /^\S+@\S+$/i, message: "Not a valid email address"}})}  />
                <FormErrorMessage>{errors?.username?.message}</FormErrorMessage>
              </FormControl>
              <FormControl isInvalid={!!errors?.password?.message} id="password">
                <FormLabel>Password</FormLabel>
                <Input type="password" placeholder="password" {
                  ...register("password", {
                    required: true, maxLength:{
                      value: 10,
                      message:"Your password is too long"},
                    minLength:{
                      value: 4,
                      message: "Your password is too short"}})} /> 
                <FormErrorMessage>{errors?.password?.message}</FormErrorMessage>
              </FormControl>
              <Stack spacing={10}>
                <Stack
                  direction={{ base: 'column', sm: 'row' }}
                  align={'start'}
                  justify={'space-between'}>
                  {/* <Checkbox>Remember me</Checkbox> */}
                  <Link color={'blue.400'}>Forgot password?</Link>
                </Stack>
                <Button
                  isDisabled={isSubmitting || token !== undefined}
                  type='submit'
                  bg={'blue.400'}
                  color={'white'}
                  _hover={{
                    bg: 'blue.500',
                  }}>
                  {isSubmitting ? <Spinner/> : "Sign in"}
                </Button>
              </Stack>
            </Stack>
          </Box>
        </form>
      </Stack>
    </Flex>
  );
}