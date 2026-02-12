import { Route, Routes } from "react-router-dom";
import Layout from "../components/Layout";
import Home from "../pages/Home";
import CreateBook from "../features/book/pages/new";

export default function AppRoutes() {
    return (
        <Routes>
            <Route element={<Layout />}>
                <Route path="/" element={<Home />} />
                <Route path="/book/new" element={<CreateBook />} />
            </Route>
        </Routes>
    )
}