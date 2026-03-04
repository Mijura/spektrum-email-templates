// email-renderer/scripts/export.ts
import { render } from "@react-email/render"
import React from "react"
import fs from "fs"
import PurchaseEmail from "../src/emails/purchase"

const html = await render(
	React.createElement(PurchaseEmail, {
		numberOfCredits: "{{numberOfCredits}}",
		estimatedTaskExecutions: "{{estimatedTaskExecutions}}",
		transactionId: "{{transactionId}}",
	}),
)

fs.mkdirSync("./output", { recursive: true })
fs.writeFileSync("./output/purchase.html", html)
console.log("Done!")
