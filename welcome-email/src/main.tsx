import React from "react"
import ReactDOM from "react-dom/client"
import "./index.css"
import WelcomeEmail from "./welcome-email"

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
	<React.StrictMode>
		<WelcomeEmail url="https://jigjoy.ai" />
	</React.StrictMode>,
)
