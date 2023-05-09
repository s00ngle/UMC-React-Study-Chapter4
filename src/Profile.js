import { Routes, useParams } from "react-router-dom";
import { Route } from "react-router-dom";
import Post from "./Post";

const data = {
    soongle: {
        name: "김용순",
        description: "Frontend Engineer",
    },
    gildong: {
        name: "홍길동",
        description: "전래동화의 주인공",
    },
};

const Profile = () => {
    const { userId } = useParams();
    const profile = data[userId];

    return (
        <>
            <h1>Profile Page</h1>
            <p>this is profile page</p>
            {profile ? (
                <div>
                    <h2>{profile.name}</h2>
                    <p>{profile.description}</p>
                </div>
            ) : (
                <p>존재하지 않는 프로필입니다.</p>
            )}
            <Routes>
                <Route path="/post" element={<Post />} />
            </Routes>
        </>
    );
};

export default Profile;
