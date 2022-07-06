import { Route, Routes } from "react-router-dom"

import NewArticle from "../Articles/NewArticle"
import Dashboard from "./Dashboard"

import RequireAuth from "../../components/Private/RequireAuth"

function Admin() {

    return (
        <Routes>
            {/* Speakers */}
            <Route element={<RequireAuth allowedRole={[2]} />}>

            </Route>

            {/* Regular Admins */}
            {/*<Route element={<RequireAuth allowedRole={[11]} />}> */}
                <Route exact path="/" element={<Dashboard />} />
                <Route path="/nova-publicacao" element={<NewArticle />} />
            {/*</Route> */}

            {/* Senior Admins */}
            <Route element={<RequireAuth allowedRole={[12]} />}>

            </Route>

            {/* System Admins */}
            <Route element={<RequireAuth allowedRole={[13]} />}>

            </Route>

        </Routes >
    )
}

export default Admin