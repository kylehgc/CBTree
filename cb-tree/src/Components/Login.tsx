import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  Checkbox,
  Stack,
  Link,
  Button,
  Heading,
  useColorModeValue,
} from '@chakra-ui/react';

import {login} from '../utils/api';
import { useForm, SubmitHandler } from 'react-hook-form';
import { FormEventHandler, useEffect, useState } from 'react';


interface FormValues {
  username: string,
  password: string
}

export default function Login() {

  const [credentials, setCredentials] = useState<FormValues | null>(null)
  const {register, handleSubmit, formState: {errors ,isSubmitting}} = useForm<FormValues>()

  useEffect(() => {
    const login = async () => {  
    }
    if(credentials) {

    }
    login()
  }, [credentials])

  
  const onSubmit: SubmitHandler<FormValues> = async(value) => {
    const response = await fetch(login, {
      body: new URLSearchParams({...value}),
      method: "POST",
      mode: "no-cors"
    })

    console.log(await response.text())
  }

  // const onSubmit: FormEventHandler = async(event) => {
  //   event.preventDefault()
  //   if (event.target instanceof HTMLFormElement){
  //     const data = new FormData(event.target)
  //     console.log(data)
  //     const response = await fetch(login, {
  //       body: data,
  //       method: "post",
  //       mode: 'no-cors'
  //     })
  //     console.log(await response.json())
  //   }}

  

  return (
    <Flex
      h={'100%'}
      align='center'
      justify='center'
      // bg={useColorModeValue('gray.50', 'gray.800')}
    >
      <Stack spacing={8} mx={'auto'} maxW={'lg'} py={12} px={6}>
        <Stack align={'center'}>
          <Heading color={'white'} fontSize={'4xl'}>Sign in to your account</Heading>
        </Stack>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Box
            rounded={'lg'}
            bg={useColorModeValue('white', 'gray.700')}
            boxShadow={'lg'}
            p={8}>
         
            <Stack spacing={4}>
          
              <FormControl isInvalid={!!errors?.username?.message} id="email">
                <FormLabel>Email address</FormLabel>
                <Input type="text" placeholder="Email" {...register("username", {required: true, pattern: /^\S+@\S+$/i})}  />
              </FormControl>
              <FormControl isInvalid={!!errors?.password?.message} id="password">
                <FormLabel>Password</FormLabel>
                <Input  type="password" placeholder="password" {...register("password", {required: true, max: 6, min: 4})} /> 
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
                  type='submit'
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