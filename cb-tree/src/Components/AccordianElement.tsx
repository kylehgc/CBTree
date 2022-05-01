import { AccordionItem, AccordionButton, Box, AccordionIcon, AccordionPanel, Heading } from "@chakra-ui/react"
import UseThemeColors from "../Hooks/useThemeColors"

interface PopoverButtonProps {
  label: string,
  popoverText: string
}

const AccordionElement: React.FC<PopoverButtonProps> = ({label, popoverText}) => {
  const {foregroundColor} = UseThemeColors()
  return (
    <AccordionItem  my={2} ml={5} w={"90%"}
      bg={foregroundColor} 
    >
      <Heading color={"black"}>
        <AccordionButton>
          <Box flex='1' textAlign='left'>
            {label}
          </Box>
          <AccordionIcon />
        </AccordionButton>
      </Heading>
      <AccordionPanel p={4}>
        {popoverText}
      </AccordionPanel>
    </AccordionItem>

  )
}

export default AccordionElement