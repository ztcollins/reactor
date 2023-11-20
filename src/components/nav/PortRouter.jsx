import { BrowserRouter, Route, Routes } from "react-router-dom";

import FirstComponent from "../FirstComponent";
import PortLanding from "./pages/PortLanding"
import PortPrivate from "./pages/PortPrivate"
import PortNoMatch from "./pages/PortNoMatch"
import PortGames from "./pages/PortGames";
import PortArt from "./pages/PortArt";
import PortCode from "./pages/PortCode";
import PortResume from "./pages/PortResume";
import PortWordRush from "./pages/PortWordRush";
import PortHalloween from "./pages/PortHalloween";
import PortSanta from "./pages/PortSanta";

export default function BadgerBudsRouter() {
    return <BrowserRouter>
        <Routes>
            <Route path="/" element={<FirstComponent />}>
                <Route index element={<PortLanding />} />
                <Route path="resume" element={<PortResume />} />
                <Route path="code" element={<PortCode />} />
                <Route path="art" element={<PortArt />} />
                <Route path="games" element={<PortGames />} />
                <Route path="games/word_rush" element={<PortWordRush />} />
                <Route path="games/halloween_maze" element={<PortHalloween />} />
                <Route path="games/santa_sliding" element={<PortSanta />} />
                <Route path="private" element={<PortPrivate />} />
                <Route path="*" element={<PortNoMatch />} />
            </Route>
        </Routes>
    </BrowserRouter>
}