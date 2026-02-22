import { Route, Routes } from "react-router-dom";
import Layout from "../components/Layout";
import Home from "../pages/Home";
import CreateBook from "../../features/book/pages/new";
import EditBook from "../../features/book/pages/edit";
import ListBooks from "../../features/book/pages/list";
import GetBook from "../../features/book/pages/get";

export default function AppRoutes() {
    return (
        <Routes>
            <Route element={<Layout />}>
                <Route path="/" element={<Home />} />
                <Route path="/books" element={<ListBooks />} />
                <Route path="/books/new" element={<CreateBook />} />
                <Route path="/books/edit/:id" element={<EditBook />} />
                <Route path="/books/:id" element={<GetBook />} />
            </Route>
        </Routes>
    )
}