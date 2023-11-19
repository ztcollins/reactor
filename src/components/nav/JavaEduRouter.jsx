import { BrowserRouter, Route, Routes } from "react-router-dom";

import FirstComponent from "../FirstComponent";
import JavaEduLanding from "./pages/JavaEduLanding"
import JavaEduSignOn from "./pages/JavaEduSignOn"
import JavaEduNoMatch from "./pages/JavaEduNoMatch"

export default function BadgerBudsRouter() {
    return <BrowserRouter>
        <Routes>
            <Route path="/" element={<FirstComponent />}>
                <Route index element={<JavaEduLanding />} />
                <Route path="art" element={<JavaEduSignOn />} />
                <Route path="*" element={<JavaEduNoMatch />} />
            </Route>
        </Routes>
    </BrowserRouter>
}