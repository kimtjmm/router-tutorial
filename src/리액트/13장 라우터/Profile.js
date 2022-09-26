import React from "react";
import {useParams} from "react-router-dom";
import WithRouterSample from "./WithRouterSample";

const data = {
    mincoder : {
        name : 'mincoder',
        description : '리액트 공부중'
    },
    gildong : {
        name : '홍길동',
        description: '주인공임'
    }
}

const Profile = () => {
    const {username} = useParams();    // useParams()에서 파라미터를 받음
    const profile = data[username];
    if(!profile) {
        return <div>존재하지 않네요</div>
    }
    return(
        <div>
            <h3>
                {profile.name}
            </h3>
            <p>{profile.description}</p>
            <WithRouterSample/>
        </div>
    )
}

export default Profile;
