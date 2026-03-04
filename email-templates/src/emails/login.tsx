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
	Link,
	Img,
	Font,
	Hr,
} from "@react-email/components"

interface Props {
	loginLink: string
	expirationInMinutes: string
}

export default function LoginEmail({ loginLink, expirationInMinutes }: Props) {
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
					<Section className="w-full py-10 px-6 flex-col bg-[#F8F9FA] text-[#151515] flex items-center justify-center">
						<Heading as="h1" className="text-xl font-semibold">
							Hey there, glad to see you again!
						</Heading>
						<Button href={loginLink} className="px-4 py-2 bg-[#b3b3ff] text-[#151515] rounded-sm">
							Click here to login
						</Button>
						<Text>This link will only be valid for the next {expirationInMinutes} minutes.</Text>
						<Hr className="my-4 border-[#a2c48d]" />
						<table className="w-full mt-8 gap-4">
							<tr>
								<td className="text-left">Best,</td>
							</tr>
							<tr>
								<td className="text-left">JigJoy Team</td>
							</tr>
						</table>
						<table className="w-full mt-10">
							<tr className="w-full">
								<td align="center">
									<Img alt="JigJoy logo" height="124" className="rounded-md"  src="https://www.jigjoy.ai/logos/jigjoy-dark-bg.png" width="124" />
								</td>
							</tr>
							<tr>
								<td align="center">
									<Text className="my-[8px]">Fruškogorska 1, Science & Technology Park, Novi Sad, Serbia</Text>
									<Link href="mailto:team@mail.jigjoy.ai" className="mt-[4px] mb-0 no-underline text-[#151515]">
										team@mail.jigjoy.ai
									</Link>
								</td>
							</tr>
						</table>
					</Section>
				</Tailwind>
			</Body>
		</Html>
	)
}
