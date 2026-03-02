import React from "react"
import ReactDOM from "react-dom/client"
import "./index.css"
import WelcomeEmail from "./emails/welcome"

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
	<React.StrictMode>
		<WelcomeEmail loginLink="https://jigjoy.ai" />
	</React.StrictMode>,
)
