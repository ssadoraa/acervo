import { BrowserRouter } from "react-router-dom";
import AppRoutes from "./shared/routes/AppRoutes";

export default function App() {
	return (
		<BrowserRouter>
			<AppRoutes />
		</BrowserRouter>
	);
}