import { BrowserRouter, Route, Routes } from "react-router-dom";
import AdminLogin from "../Admin/AdminLogin";
import Lab from "../Lab";
import Login from "./Login";
import Admin from "../Admin/Admin";
import User from "../Admin/User";
import Book from "../Admin/Book";
import RegistrationForm from "./RegistrationForm";
// import AdminLogin from './AdminLogin';

export default function Routing() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/Registration" element={<RegistrationForm />} />

        <Route path="/Lab" element={<Lab />} />
        <Route path="/AdminLogin" element={<AdminLogin />} />
        <Route path="/Admin" element={<Admin />}>
          <Route path="User" element={<User />} />
          <Route path="Book" element={<Book />} />

        </Route>
      </Routes>
    </BrowserRouter>
  );
}
