import {
	AccordionItem,
	AccordionButton,
	Box,
	AccordionIcon,
	AccordionPanel,
	Heading,
} from '@chakra-ui/react'

interface PopoverButtonProps {
	label: string
	popoverText: string
}

const AccordionElement: React.FC<PopoverButtonProps> = ({
	label,
	popoverText,
}) => {
	return (
		<AccordionItem
			alignSelf={'center'}
			my={2}
			ml={{ base: 5, lg: 0 }}
			w={{ base: '90%', lg: '100%' }}
		>
			<Heading>
				<AccordionButton>
					<Box flex="1" textAlign="left">
						{label}
					</Box>
					<AccordionIcon />
				</AccordionButton>
			</Heading>
			<AccordionPanel color="white" p={4}>
				{popoverText}
			</AccordionPanel>
		</AccordionItem>
	)
}

export default AccordionElement
