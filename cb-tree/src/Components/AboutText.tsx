import {
	Link,
	ListItem,
	OrderedList,
	Text,
	VStack,
	Divider,
} from '@chakra-ui/react'

const AboutText = () => {
	return (
		<VStack alignContent={'center'} color={'white'} spacing={8} m={4}>
			<Text>
				<strong>
					Making a{' '}
					{
						<Link href="https://en.wikipedia.org/wiki/Homework_in_psychotherapy#:~:text=Thought%20records%20(or%20thought%20diaries,more%20closely%20fits%20the%20situation">
							<Text as="u">thought record</Text>
						</Link>
					}{' '}
					turns you into a detective for your brain.{' '}
				</strong>
				It’s a simple,{' '}
				<Link href="https://www.hopkinsguides.com/hopkins/view/Johns_Hopkins_Psychiatry_Guide/787145/all/Cognitive_Behavioral_Therapy__CBT_#:~:text=EFFICACY,%5B3%5D%5B4%5D">
					<Text as="u">evidence-driven</Text>
				</Link>{' '}
				tool used in cognitive behavioral therapy (CBT) to help people manage
				challenging situations. By writing down and examining our thoughts and
				emotions, then looking for evidence for and against unrealistic beliefs,
				we can teach our minds to think more balanced thoughts that cause less
				distress and lead to better outcomes.
			</Text>
			<Text>
				CBTree is a free-to-use, open source app that makes it easy to create
				and save thought records. Users can track their progress and see their
				growth over time, and anyone is free to build on CBTree.
			</Text>
			<Divider orientation="horizontal" color="white" variant="dashed" />
			<Text>
				According to the CDC, one in six adults will cope with anxiety and
				depression at some point in their lives, and the resources to deal with
				them are often expensive, time-consuming and hard to access. Our
				negative thoughts can seem inherent to our stressful lives, and
				impossible to separate ourselves from. Feeling helpless, we learn to
				settle for patterns of thought and behavior that cause us unnecessary
				distress.
			</Text>
			<Text>
				CBTree was created out of a belief that people can adopt evidence-driven
				CBT principles to take control of their mental health. The goal of
				behavioral therapy is to give you tools to understand and fix the
				immediate cause of unwanted feelings and behaviors. While traditional
				therapy might trace the root causes of your discomfort, behavioral
				therapy focuses on the how and the now rather than the why.
			</Text>
			<Text>
				Imagine you’re in a crisis situation, something that’s caused distress
				before. Over time, this discomfort becomes a pattern that grows on
				itself. A situation that some people might find joyful causes you to
				feel sad or afraid. Cognitive behavioral therapy argues those feelings
				are based on a repeated distortion in your thoughts. Doing a thought
				record, or thought diary, can help you break down the thoughts that
				cause the emotions, and develop a healthier, more balanced relationship
				to the situation.
			</Text>
			<Text>
				A thought record turns you into a detective for your brain. We all have
				situations that we think about and suffer over, but it can be hard to
				systematically process what we were thinking when we started feeling
				bad. Thought records allow us to critically look at these situations and
				attempt to be a dispassionate observer of our own thoughts and the
				feelings they cause. There are a number of different approaches, but
				most follow a familiar pattern:
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
				<ListItem>List any thoughts we had and how intense they were.</ListItem>
				<ListItem>
					Were any of these thoughts emotionally intense? In CBT parlance, this
					is the “hot thought.”
				</ListItem>
				<ListItem>
					Once we’ve identified the problematic thought, we need to be our own
					counselor. To do this we play both sides, writing out arguments that
					support the thought and arguments that show it to be illogical.
				</ListItem>
				<ListItem>
					Now, we review our evidence and try to write a thought that’s more
					balanced. Often the thought was an extreme version of something we
					believe, and we can usually think of a more reasonable interpretation.
				</ListItem>
				<ListItem>
					Finally, we check in on how we’re feeling after going through the
					process.
				</ListItem>
			</OrderedList>
			<Text>
				Doing this process regularly has been shown{' '}
				<Link href="https://www.hopkinsguides.com/hopkins/view/Johns_Hopkins_Psychiatry_Guide/787145/all/Cognitive_Behavioral_Therapy__CBT_#:~:text=EFFICACY,%5B3%5D%5B4%5D.">
					<Text as="u">through repeated studies</Text>
				</Link>{' '}
				to improve how we deal with our problems and once we’ve learned the
				skills we now have a tool that can be used for the rest of our lives
				when we encounter new challenges.
			</Text>
			<Text>
				<strong>CBTree</strong> was created because while thought record
				templates are abundant, there was no consistently free digital version
				that focuses on this integral part of therapy. CBTree is both free and
				open source, allowing anyone in the future to both have their own free
				version of the app or build their own.
			</Text>
		</VStack>
	)
}

export default AboutText
