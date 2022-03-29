import { useForm, SubmitHandler } from "react-hook-form"
import logo from '../media/cbtree-logo.png'
import {
  Image,
  FormLabel,
  FormControl,
  Textarea,
  Button,
  Flex,
  Box,
  Container,
  WrapItem,
  Wrap,
  Center,
  useColorMode,
} from '@chakra-ui/react'
type FormValues = {
  firstName: string;
  lastName: string;
  email: string;
};


export default function HookForm() {
  const {toggleColorMode} = useColorMode()
  const {
    handleSubmit,
    register,
    formState: { errors, isSubmitting },
  } = useForm<FormValues>()

  type FormValues = {
  
  data: string;
};


  const onSubmit: SubmitHandler<FormValues> = (value) => {
    console.log(value) 
  }

  return (
    <Container maxW={"full"}>
      <Image w={"50%"} mt={5} ml={3} src={logo}/>
      
      <Center rounded={'3xl'} w={"85%"} h={"30%"} mx={'auto'} mt={6} pb={5} px={5} pt={4} id="Box-test" bg='white'>
        
        
        <form onSubmit={handleSubmit(onSubmit)}>
          <Wrap width={"100%"}>
           
            <WrapItem  width={"100%"}>
              <FormLabel > What is the bad thought?</FormLabel>
            </WrapItem>
            <WrapItem width={"100%"}>
              <Textarea h={'15vh'} pt={0} rounded={"xl"} size="lg" {...register("data")} />
            </WrapItem>
            <WrapItem pt={3}>
              <Button onClick={toggleColorMode} variant="solid" >Submit</Button> 
            </WrapItem>
          </Wrap>

        </form>
     
      </Center>
    </Container>

  );
}
