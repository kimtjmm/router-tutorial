import './App.css';
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import Home from "./리액트/13장 라우터/Home";
import About from "./리액트/13장 라우터/About";
import Profile from "./리액트/13장 라우터/Profile";
import Profiles from "./리액트/13장 라우터/Profiles";
import UseNavigateSample from "./리액트/13장 라우터/useNavigateSample";
import WithRouterSample from "./리액트/13장 라우터/WithRouterSample";


const App = () => {
    return (
        <div>
            <BrowserRouter>
                <ul>
                    <li>
                        <Link to="/">홈</Link>
                    </li>
                    <li>
                        <Link to="/about">소개</Link>
                    </li>
                    <li>
                        <Link to="/profile/gildong">길동쓰</Link>
                    </li>
                    <li>
                        <Link to="/profile/mincoder">Mcoder</Link>
                    </li>
                    <li>
                        <Link to="/profiles">프로필목록</Link>
                    </li>
                    <li>
                        <Link to="/usenavigate">예제</Link>
                    </li>
                </ul>
                <hr />

                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/profile/:username" element={<Profile/>}   />
                    <Route path="/profiles/*" element={<Profiles/>}   />
                    <Route path="/usenavigate/*" element={<UseNavigateSample/>}   />
                    <Route path="/withrouter/*" element={<WithRouterSample/>}   />
                    <Route path="/*" element={<h1>없는 페이지임</h1>} />
                </Routes>
            </BrowserRouter>
        </div>
    )
}

export default App;
