// email-renderer/scripts/export.ts
import { render } from "@react-email/render"
import React from "react"
import WelcomeEmail from "../src/emails/welcome"
import fs from "fs"

const html = await render(
	React.createElement(WelcomeEmail, {
		loginLink: "{{loginLink}}",
	}),
)

fs.mkdirSync("./output", { recursive: true })
fs.writeFileSync("./output/welcome.html", html)
console.log("Done!")
