import { useForm, SubmitHandler } from "react-hook-form"
import {
  FormLabel,
  // FormControl,
  Textarea,
  Button,
  // useColorMode,
  Flex,
} from '@chakra-ui/react'




export default function Situation() {

  const {
    handleSubmit,
    register,
    // formState: { errors, isSubmitting },
  } = useForm<FormValues>()

  type FormValues = {
  
    data: string;
  };


  const onSubmit: SubmitHandler<FormValues> = (value) => {
    console.log(value) 
  }

  return (
    
    <>
      
      <form style={{display:"flex", flexDirection:'column', alignItems  :'center', justifyContent:'space-between', height:"100%", width:"100%"}} onSubmit={handleSubmit(onSubmit)}>
        <Flex rounded={'3xl'} w={"85%"} h={"60%"} flexWrap='wrap' flexDirection='column' mb={'10'} justifyContent='flex-start' mx={'auto'} pb={1} mt={6} px={7} pt={4} id="Box-test" bg='white'>        
          <FormLabel fontSize={12}> What is the situation? (who,what,where,when) </FormLabel>
          <Textarea h={'80%'} p={2} rounded={"xl"} size="lg" {...register("data")} />
           
        </Flex>
        
        <Button justifySelf='center' mb={5} w='75%' variant="solid">Submit</Button> 
          
      </form>
    </>
      
  );
}
