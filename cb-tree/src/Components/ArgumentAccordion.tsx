import { 
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon, 
  Box} from "@chakra-ui/react";

import UseThemeColors from "../Hooks/useThemeColors";

interface Arguments {
  argFor: string,
  argAgainst: string
}

interface Props {
  argumentsText: Arguments 
}
const ArgumentAccordion:React.FC<Props> = ({argumentsText}) => { 
  const {argFor, argAgainst} = argumentsText
  return (
    <Accordion alignSelf={"center"} w={"100%"} allowToggle>
      <AccordionElement label={"Arguments For"} popoverText={argFor} />
      <AccordionElement label={"Arguments Against"} popoverText={argAgainst}/>
    </Accordion>
  )
}

interface PopoverButtonProps {
  label: string,
  popoverText: string
}
const AccordionElement: React.FC<PopoverButtonProps> = ({label, popoverText}) => {
  const {foregroundColor} = UseThemeColors()
  return (
    <AccordionItem my={2} ml={5} w={"90%"}
      bg={foregroundColor} 
    >
      <AccordionButton>
        <Box flex='1' textAlign='left'>
          {label}
        </Box>
        <AccordionIcon />
      </AccordionButton>
      <AccordionPanel pb={4}>
        {popoverText}
      </AccordionPanel>
    </AccordionItem>

  )
}
export default ArgumentAccordion
