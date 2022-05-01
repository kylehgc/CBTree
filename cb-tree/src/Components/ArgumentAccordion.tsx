import { 
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon, 
  Box} from "@chakra-ui/react";
import AccordionElement from './AccordianElement'

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
    <Accordion allowMultiple alignSelf={"center"} w={"100%"} allowToggle>
      <AccordionElement label={"Arguments For"} popoverText={argFor} />
      <AccordionElement label={"Arguments Against"} popoverText={argAgainst}/>
    </Accordion>
  )
}

export default ArgumentAccordion
