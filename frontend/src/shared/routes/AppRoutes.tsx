import { Route, Routes } from "react-router-dom";
import Layout from "../components/Layout";
import Home from "../pages/Home";
import CreateBook from "../../features/book/pages/new";
import EditBook from "../../features/book/pages/edit";
import ListBooks from "../../features/book/pages/list";

export default function AppRoutes() {
    return (
        <Routes>
            <Route element={<Layout />}>
                <Route path="/" element={<Home />} />
                <Route path="/book" element={<ListBooks />} />
                <Route path="/book/new" element={<CreateBook />} />
                <Route path="/book/edit/:id" element={<EditBook />} />
            </Route>
        </Routes>
    )
}