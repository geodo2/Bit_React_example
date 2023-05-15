import React,{ useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import PostList from "../list/PostList";
import Button from "../ui/Button";
import TabComponent from "../ui/menubar";
import data from '../../data.json';
import PostViewPage from "./PostViewPage";
import PostWritePage from "./PostWritePage";
import InforPage from "./InforPage";
const Wrapper = styled.div`
    padding: 16px;
    width: calc(100% - 32px);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

const Container = styled.div`
    width: 100%;
    max-width: 720px;

    & > * {
        :not(:last-child) {
            margin-bottom: 16px;
        }
    }
`;
const SubTitleText = styled.p`
    font-size: 24px;
    font-weight: bold;
    text-align: center;
`;

function MainPage(props) {
    const navigate = useNavigate();
    const [activeTab, setActiveTab] = useState("member");
    const handleTabChange = (tab) => {
        setActiveTab(tab);
      };
    return (
        <Wrapper>
            
            <Container>
            <div>
            <SubTitleText>국내 도서   /   외국 도서   /   추천 도서   /   Ebook</SubTitleText> 

            <TabComponent activeTab={activeTab} onChangeTab={handleTabChange} />
            {/* 각 탭에 맞는 내용을 렌더링 */}
            {activeTab === "infor" && <InforPage />}
            {activeTab === "test" && <PostWritePage />}
            {activeTab === "test" && <PostWritePage />}
            </div>

            <SubTitleText>주문 일자 / 상품 정보 / 구매 금액 / 주문처리상태</SubTitleText> 
                
                <PostList
                    posts={data}
                    onClickItem={(item) => {
                        navigate(`/posttest/${item.id}`);
                    }}
                />
            </Container>
        </Wrapper>
    );
}

export default MainPage;
