import React from 'react';
import {Link, Route, Routes} from 'react-router-dom';
import Profile from "./Profile";
import WithRouterSample from "./WithRouterSample";

const Profiles = () => {
    const activeStyle = {
        background : 'black',
        color : 'white'
    }
    return (
        <div>
            <h3>유저 목록:</h3>
            <ul>
                <li>
                    <Link to="/profile/mincoder">mincoder</Link>
                </li>
                <li>
                    <Link to="/profile/gildong">gildong</Link>
                </li>
                <li>
                    <WithRouterSample></WithRouterSample>
                </li>
            </ul>

            <Routes>
                <Route path="/profile/*" element={<div>사용자를 선택해</div>} />
                <Route path=":username" element={<Profile/>} />


            </Routes>
        </div>
    );
};

export default Profiles;
