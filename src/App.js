import React from "react";
import {
    BrowserRouter,
    Routes,
    Route
} from "react-router-dom";
import styled from "styled-components";
// Pages
import MainPage from './component/page/MainPage';
import PostWritePage from './component/page/PostWritePage';
import PostViewPage from './component/page/PostViewPage';
import InforPage from './component/page/InforPage';
const MainTitleText = styled.p`
    font-size: 24px;
    font-weight: bold;
    text-align: center;
`;

function App(props) {
    return (
        <BrowserRouter>
            <MainTitleText>#fiftneen</MainTitleText>
            <Routes>
                <Route index element={<MainPage />} />
                <Route path="infor" element={<InforPage />} />
                <Route path="test" element={<PostWritePage />} />
                <Route path="posttest/:postId" element={<PostViewPage />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
