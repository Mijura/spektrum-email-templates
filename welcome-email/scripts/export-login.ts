// email-renderer/scripts/export.ts
import { render } from "@react-email/render"
import React from "react"
import fs from "fs"
import LoginEmail from "../src/login"

const html = await render(
	React.createElement(LoginEmail, {
		loginLink: "{{loginLink}}",
		expirationInMinutes: "{{expirationInMinutes}}",
	}),
)

fs.mkdirSync("./output", { recursive: true })
fs.writeFileSync("./output/login.html", html)
console.log("Done!")
