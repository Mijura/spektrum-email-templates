// email-renderer/src/emails/WelcomeEmail.tsx
import {
	Html,
	Head,
	Body,
	Text,
	Heading,
	Tailwind,
	Section,
	Link,
	Img,
	Font,
	Hr,
	Row,
	Column,
} from "@react-email/components"

interface Props {
	numberOfCredits: string,
	estimatedTaskExecutions: string,
	transactionId: string
}

export default function PurchaseEmail({ numberOfCredits, estimatedTaskExecutions, transactionId }: Props) {
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
							Hi,
						</Heading>
						<Text>
							Thank you for your purchase. Your account has been topped up with ${numberOfCredits}, giving you full access to the Spektrum platform until they are spent.
						</Text>
						<Text>
						With ${numberOfCredits} credits you can run approximately ~{estimatedTaskExecutions} task executions with no expiration date.
						</Text>
						<Text className="mb-0">
							With your active credits, you can:
						</Text>
						{[
          {
            feature:
              'Generate and deploy applications using natural language tasks',
          },
          {
            feature:
              'Iterate on existing apps the same way',
          },
          {
            feature:
              'Embed generated apps directly into your product via the SDK',
          },
          {
            feature:
              'Track real-time agent activity across all your apps',
          }
        ].map((feature) => (
          <Section>
            <Row>
              <Column valign="top">
                <Text className="m-0">
				→ {feature.feature}
                </Text>
              </Column>
            </Row>
          </Section>
        ))}

<Hr className="my-4 border-[#a2c48d]" />
<Text className="m-0">Your invoice for ${numberOfCredits} is attached.</Text>
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
									<Img alt="JigJoy logo" height="124" className="rounded-md" src="https://www.jigjoy.ai/logos/jigjoy-dark-bg.png" width="124" />
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
