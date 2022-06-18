import { Routes, Route } from "react-router-dom"

import NewArticle from "../Articles/NewArticle"
import Dashboard from "./Dashboard"

import useAuth from "../../hooks/useAuth"
import Login from "../User/Login"

function Admin() {

    const Private = ({ children }) => {
        const signed = useAuth()

        return signed > 0 ? children : <Login />
    }

    return (
        <Private>
            <Routes>
                <Route exact path="/" element={<Dashboard />} />
                <Route path="/nova-publicacao" element={<NewArticle />} />
            </Routes>
        </Private>
    )
}

export default Admin