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
	Font,
	Hr,
} from "@react-email/components"

interface Props {
	loginLink: string
}

export default function WelcomeEmail({ loginLink }: Props) {
	return (
		<Html>
			<Head>
				<Font
					fontFamily='ui-sans-serif, system-ui, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"'
					fallbackFontFamily="sans-serif"
					fontWeight={400}
					fontStyle="normal"
				/>
			</Head>
			<Body>
				<Tailwind>
					<Section className="w-full py-10 px-6 flex-col bg-[#151515] text-[#c5c5c5] flex items-center justify-center">
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

						<Hr className="my-4 border-[#a2c48d]" />
						<Text>Our mission is to help everyone experience that same rush.</Text>
						<Text>Now it’s your turn.</Text>
						<Button href={loginLink} className="px-3 py-1.5 bg-[#b3b3ff] text-[#151515] rounded-sm">
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
									<Img alt="JigJoy logo" height="124" src="https://www.jigjoy.ai/logos/jigjoy.png" width="124" />
								</td>
							</tr>
							<tr>
								<td align="center">
									<Row className="table-cell h-[50px] align-bottom flexgap-4">
										<Column style={{ 
											backgroundColor: '#151515', 
											backgroundImage: 'linear-gradient(#151515, #151515)', // Forces Gmail to keep it white
											borderRadius: '4px',
											padding: '8px',
											marginRight: '8px',
											display: 'inline-block',
										}}>
											<Link href="https://github.com/jigjoy-ai" target="_blank">
												<Img src="https://www.jigjoy.ai/icons/github.png" alt="GitHub" width={25} height={24} />
											</Link>
										</Column>
										<Column style={{ 
											backgroundColor: '#151515', 
											backgroundImage: 'linear-gradient(#151515, #151515)', // Forces Gmail to keep it white
											borderRadius: '4px',
											padding: '8px',
											marginRight: '8px',
											display: 'inline-block',
										}}>
											<Link href="https://discord.gg/dvxY9J2kWX" target="_blank">
												<Img src="https://www.jigjoy.ai/icons/discord.png" alt="Discord" width={25} height={24} />
											</Link>
										</Column>
										<Column style={{ 
											backgroundColor: '#151515', 
											backgroundImage: 'linear-gradient(#151515, #151515)', // Forces Gmail to keep it white
											borderRadius: '4px',
											padding: '8px',
											marginRight: '8px',
											display: 'inline-block',
										}}>
											<Link href="https://www.youtube.com/@JigJoy_io" target="_blank">
												<Img src="https://www.jigjoy.ai/icons/youtube.png" alt="YouTube" width={36} height={24} />
											</Link>
										</Column>

										<Column style={{ 
											backgroundColor: '#151515', 
											backgroundImage: 'linear-gradient(#151515, #151515)', // Forces Gmail to keep it white
											borderRadius: '4px',
											padding: '8px',
											marginRight: '8px',
											display: 'inline-block',
										}}>
											<Link href="https://www.reddit.com/r/JigJoy/" target="_blank">
												<Img src="https://www.jigjoy.ai/icons/reddit.png" alt="Reddit" width={24} height={24} />
											</Link>
										</Column>
										<Column style={{ 
											backgroundColor: '#151515', 
											backgroundImage: 'linear-gradient(#151515, #151515)', // Forces Gmail to keep it white
											borderRadius: '4px',
											padding: '8px',
											marginRight: '8px',
											display: 'inline-block',
										}}>
											<Link href="https://x.com/jigjoy_io" target="_blank">
												<Img src="https://www.jigjoy.ai/icons/x.png" alt="X" width={24} height={24} />
											</Link>
										</Column>
									</Row>
								</td>
							</tr>
							<tr>
								<td align="center">
									<Text className="my-[8px]">
										Fruškogorska 1, Science & Technology Park, Novi Sad, Serbia
									</Text>
									<Link href="mailto:team@jigjoy.ai" className="mt-[4px] text-[#c5c5c5] mb-0 no-underline">team@jigjoy.ai</Link>
								</td>
							</tr>
						</table>
					</Section>
				</Tailwind>
			</Body>
		</Html>
	)
}
