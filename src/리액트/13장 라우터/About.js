import React from "react";
import {useLocation} from "react-router-dom";

const About = () => {
    const {search} = useLocation();
    const detail = search === '?detail=true';   // 현재 경로가 (search) '?detail=true' 인지 확인
    return (
        <div>
            <h1>소개</h1>
            <p>가즈아 프로젝트</p>
            {detail && <p>detail값을 true로 설정했네 이쉐키</p>}
        </div>
    );
};

export default About;
