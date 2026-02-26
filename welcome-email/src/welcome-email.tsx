// email-renderer/src/emails/WelcomeEmail.tsx
import {
	Html,
	Head,
	Body,
	Text,
	Button,
	Heading,
	Tailwind,
	Section,
	Row,
	Column,
	Link,
	Img,
} from "@react-email/components"

interface Props {
	url: string
}

export default function WelcomeEmail({ url }: Props) {
	return (
		<Html>
			<Head />
			<Body>
				<Tailwind>
					<Section className="w-full py-10 px-6 flex-col bg-surface text-secondary flex items-center justify-center">
						<Heading as="h1" className="text-xl font-semibold">
							Hey there, welcome to JigJoy!
						</Heading>
						<Text className="mt-10">
							JigJoy is the rush of excitement you feel when something you built finally works and you realize you made
							it.
						</Text>
						<Text>
							We felt it the first time we wrote a recursive function correctly and watched it run exactly as it should.
						</Text>

						<hr className="my-4 text-progress" />
						<Text>Our mission is to help everyone experience that same rush.</Text>
						<Text>Now it’s your turn.</Text>
						<Button href={url} className="bg-highlight text-surface p-2 rounded-md">
							Log in. Build something. Feel the JigJoy.
						</Button>
						<table className="w-full mt-8 gap-4">
							<tr>
								<td className="text-left">Let’s go,</td>
							</tr>
							<tr>
								<td className="text-left">JigJoy Team</td>
							</tr>
						</table>
						<table className="w-full mt-10">
							<tr className="w-full">
								<td align="center">
									<Img alt="JigJoy logo" height="124" src="https://www.jigjoy.io/logos/jigjoy.svg" width="124" />
								</td>
							</tr>
							<tr>
								<td align="center">
									<Row className="table-cell h-[88px] w-[112px] align-bottom">
										<Column className="pr-[8px]">
											<Link href="#">
												<Img alt="Facebook" height="72" src="https://react.email/static/facebook-logo.png" width="72" />
											</Link>
										</Column>
										<Column className="pr-[8px]">
											<Link href="#">
												<Img alt="X" height="72" src="https://react.email/static/x-logo.png" width="72" />
											</Link>
										</Column>
										<Column>
											<Link href="#">
												<Img
													alt="Instagram"
													height="72"
													src="https://react.email/static/instagram-logo.png"
													width="72"
												/>
											</Link>
										</Column>
									</Row>
								</td>
							</tr>
							<tr>
								<td align="center">
									<Text className="my-[8px] leading-[24px]">
										Fruškogorska 1, Science & Technology Park, Novi Sad, Serbia
									</Text>
									<Text className="mt-[4px] mb-0 leading-[24px]">team@jigjoy.ai</Text>
								</td>
							</tr>
						</table>
					</Section>
				</Tailwind>
			</Body>
		</Html>
	)
}
