import {Routes, Route, Navigate} from "react-router"
import LandingPage from "../pages/LandingPage.jsx";
import ErrorPage from "../pages/ErrorPage.jsx";
import ResultsPage from "../pages/ResultsPage.jsx";

const AppRoutes = () => {

    return (
        <Routes>
            <Route path="/" element={<Navigate to="/landing"/>}/>
            <Route path={"/landing"} element={<LandingPage/>}/>
            <Route path={"/errors"} element={<ErrorPage/>}/>
            <Route path={"/results"} element={<ResultsPage/>}/>
        </Routes>
    )
}

export default AppRoutes;