import { Link, ListItem, OrderedList, Text, VStack } from '@chakra-ui/react'

const AboutText = () => {
	return (
		<VStack alignContent={'center'} color={'white'} spacing={8} m={4}>
			<Text>
				A lot of people struggle with modern life. Anxiety and depression are
				increasingly common and the resources to deal with them are often behind
				barriers that not everyone has the resources or even the mental ability
				to overcome. Even when we do access them it’s not always clear how or
				why they’re helpful and often lack good evidence that they’re effective.
				This often leads to people feeling a sense of hopelessness that they can
				ever improve and often coming to the conclusion that they’re problems
				are innate to them or the situation in their lives. Behavioral therapy
				seeks to teach you the skills and give you tools to both understand the
				immediate causes of your unhappiness and a way to fix them.
			</Text>
			<Text>
				While traditional therapy seeks to spend a considerable amount of time
				tracing through the root causes of your discomfort, behavioral therapy
				focuses on the how instead of the why. It posits that while there are
				countless reasons for why you’re upset, the most important thing for you
				is how those reasons have shaped how you relate to situations and the
				thoughts that occur during them. Over time these discomforts and
				patterns grow on themselves. A situation that some people might find
				joyful causes you to feel sad or afraid. Cognitive behavioral therapy
				argues that those feelings are based on a distortion in your thoughts
				that occur during those situations. While there are many tools in the
				cognitive toolbox the most common and arguably useful one is a thought
				record or thought diary.
			</Text>
			<Text>
				A thought record turns you into a detective for your brain. We all have
				situations that we think about and suffer over but most of us lack a
				systematic and tested way to process what we were thinking when we
				started feeling bad. Thought records allow us to critically look at
				these situations and attempt to be a dispassionate observer of our own
				thoughts and the feelings that come up because of that. There are a
				number of different approaches to this but they all mostly follow a
				familiar pattern:
			</Text>
			<OrderedList pl={2} spacing={2}>
				<ListItem>
					Write a clear description of what happened. Usually this is the Who,
					What and Where of the event
				</ListItem>
				<ListItem>
					Try to remember how we felt at the time and keep track of their
					intensity.
				</ListItem>
				<ListItem>
					Start listing any thoughts we had and how intense they were.
				</ListItem>
				<ListItem>
					Looking over those thoughts were any of these thoughts specifically
					dangerous or to use CBT parlance “hot”.
				</ListItem>
				<ListItem>
					Once we’ve identified the problematic thought we need to be our own
					counsellor. To do this we play both sides. We write out our arguments
					that support that thought and arguments that show that thought to be
					illogical
				</ListItem>
				<ListItem>
					Now that we’ve done that we review our evidence and try to write out a
					thought that is more balanced. Often the thought was an extreme
					version of something we believe and we can usually think of a more
					reasonable interpretation.
				</ListItem>
				<ListItem>
					Afterwards we check in to how we’re feeling after going through the
					process.
				</ListItem>
			</OrderedList>
			<Text>
				Doing this process regularly has shown{' '}
				<Link href="https://www.hopkinsguides.com/hopkins/view/Johns_Hopkins_Psychiatry_Guide/787145/all/Cognitive_Behavioral_Therapy__CBT_#:~:text=EFFICACY,%5B3%5D%5B4%5D.">
					through repeated studies
				</Link>
				to improve how we deal with our problems and once we’ve learned the
				skills we now have a tool that can be used for the rest of our lives
				when we encounter new challenges.
			</Text>
			<Text>
				<strong>CBTree</strong> was created because while thought record
				templates are abundant there lacks a consistent free digital version
				that focuses on this integral part of therapy. Apps that have free
				versions of part of the thought record are usually just using pay models
				where they offer the later parts of the record for pay or try to create
				more elaborate proprietary tools that are outside the simplicity
				inherent to this process. CBTree is both free and open source. Allowing
				anyone in the future to both have their own free version of the app or
				build it out if they so desire. Figuratively growing a tree of mental
				health that anyone can go do.
			</Text>
		</VStack>
	)
}

export default AboutText
