// email-renderer/scripts/export.ts
import { render } from "@react-email/render"
import React from "react"
import WelcomeEmail from "../src/welcome-email"
import fs from "fs"

const html = await render(
	React.createElement(WelcomeEmail, {
		url: "{{url}}",
	}),
)

fs.writeFileSync("./output/welcome.html", html)
console.log("Done!")
