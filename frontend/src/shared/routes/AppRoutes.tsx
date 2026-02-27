import { Route, Routes } from "react-router-dom";
import Layout from "../components/layout/Layout";
import Home from "../pages/Home";
import CreateBook from "../../features/book/pages/new";
import EditBook from "../../features/book/pages/edit";
import ListBooks from "../../features/book/pages/list";
import GetBook from "../../features/book/pages/get";
import ListUsers from "../../features/user/pages/list";
import CreateUser from "../../features/user/pages/new";
import EditUser from "../../features/user/pages/edit";
import GetUser from "../../features/user/pages/get";
import ListLoans from "../../features/loan/pages/list";
import EditLoan from "../../features/loan/pages/edit";
import CreateLoan from "../../features/loan/pages/new";
import GetLoan from "../../features/loan/pages/get";

export default function AppRoutes() {
    return (
        <Routes>
            <Route element={<Layout />}>
                {/* HOME */}
                <Route path="/" element={<Home />} />

                {/* BOOKS */}
                <Route path="books">
                    <Route index element={<ListBooks />} />
                    <Route path="new" element={<CreateBook />} />
                    <Route path="edit/:id" element={<EditBook />} />
                    <Route path=":id" element={<GetBook />} />
                </Route>

                {/* USERS */}
                <Route path="users">
                    <Route index element={<ListUsers />} />
                    <Route path="new" element={<CreateUser />} />
                    <Route path="edit/:id" element={<EditUser />} />
                    <Route path=":id" element={<GetUser />} />
                </Route>
                
                {/* LOANS */}
                <Route path="loans">
                    <Route index element={<ListLoans />} />
                    <Route path="new" element={<CreateLoan />} />
                    <Route path="edit/:id" element={<EditLoan />} />
                    <Route path=":id" element={<GetLoan />} />
                </Route>
            </Route>
        </Routes>
    )
}