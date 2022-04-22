import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  HStack,
  Stack,
  Button,
  Heading,
  Text,
  useColorModeValue,
  Link,
  useToast,
  FormErrorMessage,
} from '@chakra-ui/react';
import {Link as ReactRouterLink, useNavigate} from 'react-router-dom'

import { useEffect } from 'react';
import { getUserEndPoint, signupEndPoint } from '../utils/api';
import { useForm, SubmitHandler } from 'react-hook-form';
import UserPassFormElements from './UserPassFormElements';
import useThemeColors from '../Hooks/useThemeColors'
import useAuth from '../Hooks/useAuth'

interface FormValues {
  firstName?: string,
  lastName?: string,
  username: string,
  password: string
}

export default function SignupCard() {
  const {foregroundColor, backgroundColor} = useThemeColors()
  const toast = useToast()
  const {register, handleSubmit, formState: {errors , isSubmitting}} = useForm<FormValues>()
  const {login, currentUser} = useAuth()
  const navigate = useNavigate()

  useEffect(() => {
    if(currentUser) {
      navigate("/situationQuestion")
    }
  }, [currentUser,navigate])
  const onSubmit: SubmitHandler<FormValues> = async (value) => {
    try {
      const response = await fetch(signupEndPoint, {
        body: JSON.stringify(value),
        method: "POST",
        mode: "cors",
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        }
      })
      
      if(response.ok) {

        const token = await response.json()
        login(token)
      } else {
        if(response.status === 400) {
          toast({
            status:"warning",
            description: "UserName Already Taken"
          })
        }
      }
      

    } catch {

    }
  }

  return (

    <Stack spacing={8} height={"100%"} mx={'auto'} maxW={'lg'} py={12} px={6}>
      <Stack align={'center'}>
        <Heading fontSize={'4xl'} textAlign={'center'}>
            Sign up
        </Heading>
      </Stack>
      <Box
        rounded={'lg'}
        bg={foregroundColor}
        boxShadow={'lg'}
        p={8}>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Stack spacing={4}>
            <HStack>
              <Box>
                <FormControl isInvalid={!!errors?.firstName?.message}>
                  <FormLabel>First Name</FormLabel>
                  <Input type="text"  {
                    ...register("firstName", {maxLength:{
                      value: 20,
                      message:"Your name is too long"},
                    minLength:{
                      value: 2,
                      message: "Your name is too short"}})} />
                  <FormErrorMessage>{errors?.firstName?.message}</FormErrorMessage>
                </FormControl>
              </Box>
              <Box>
                <FormControl isInvalid={!!errors?.lastName?.message}>
                  <FormLabel>Last Name</FormLabel>
                  <Input type="text"  {
                    ...register("lastName", {maxLength:{
                      value: 20,
                      message:"Your name is too long"},
                    minLength:{
                      value: 2,
                      message: "Your name is too short"}})} />
                  <FormErrorMessage>{errors?.lastName?.message}</FormErrorMessage>
                </FormControl>
              </Box>
            </HStack>
            <UserPassFormElements register={register} errors={errors} />
            <Stack spacing={10} pt={2}>
              <Button
                type='submit'
                isLoading={isSubmitting}
                loadingText="Submitting"
                size="lg"
                bg={backgroundColor}
                color={foregroundColor}
                _hover={{
                  bg: 'blue.500'
                }}>
                Sign up
              </Button>
            </Stack>
            <Stack pt={6}>
              <Text align={'center'}>
                Already a user? <Link as={ReactRouterLink} to={"/"} color={'blue.400'}>Login</Link>
              </Text>
            </Stack>
          </Stack>
        </form>
      </Box>
    </Stack>
  
  );
}