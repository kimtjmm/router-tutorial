import React from "react";
import {useLocation, useNavigate, useParams} from "react-router-dom";

const WithRouterSample = () => {
    let params = useParams();   // URL 파라미터
    let location = useLocation();   // URL 쿼리
    let navigate = useNavigate();   // 부가기능(앞으로 , 뒤로 , 홈으로 등)

    return(
        <div>
            <h4>Location</h4>
            <textarea value={JSON.stringify(location,null,2)} readOnly/>

            <h4>Params</h4>
            <textarea value={JSON.stringify(params)} readOnly/>

            <button onClick={ () => navigate('/')}>홈으로</button>
        </div>
    )
}

export default WithRouterSample;
