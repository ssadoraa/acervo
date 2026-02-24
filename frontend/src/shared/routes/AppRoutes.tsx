import { Route, Routes } from "react-router-dom";
import Layout from "../components/Layout";
import Home from "../pages/Home";
import CreateBook from "../../features/book/pages/new";
import EditBook from "../../features/book/pages/edit";
import ListBooks from "../../features/book/pages/list";
import GetBook from "../../features/book/pages/get";
import ListUsers from "../../features/user/pages/list";
import CreateUser from "../../features/user/pages/new";
import EditUser from "../../features/user/pages/edit";
import GetUser from "../../features/user/pages/get";

export default function AppRoutes() {
    return (
        <Routes>
            <Route element={<Layout />}>
                <Route path="/" element={<Home />} />
                <Route path="/books" element={<ListBooks />} />
                <Route path="/books/new" element={<CreateBook />} />
                <Route path="/books/edit/:id" element={<EditBook />} />
                <Route path="/books/:id" element={<GetBook />} />
                
                <Route path="/" element={<Home />} />
                <Route path="/users" element={<ListUsers />} />
                <Route path="/users/new" element={<CreateUser />} />
                <Route path="/users/edit/:id" element={<EditUser />} />
                <Route path="/users/:id" element={<GetUser />} />
                
                <Route path="/" element={<Home />} />
                <Route path="/loans" element={<ListLoans />} />
                <Route path="/loans/new" element={<CreateUser />} />
                <Route path="/loans/edit/:id" element={<EditUser />} />
                <Route path="/loans/:id" element={<GetUser />} />
            </Route>
        </Routes>
    )
}