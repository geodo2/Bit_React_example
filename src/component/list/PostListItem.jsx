import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
    width: calc(100% - 32px);
    padding: 16px;
    margin-right: 8px; /* 요소들 사이에 우측 여백 설정 */
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: center;
    border: 1px solid grey;
    border-radius: 8px;
    cursor: pointer;
    background: white;
    :hover {
        background: lightgrey;
    }
`;

const TitleText = styled.span`
margin-right: 50px; /* 요소들 사이에 우측 여백 설정 */
    font-size: 20px;
    font-weight: 500;
`;

function PostListItem(props) {
    const { post, onClick } = props;

    return (
        <Wrapper onClick={onClick}>
            <TitleText>{post.order_day}</TitleText>

            <TitleText>{post.book_name}</TitleText>
            <TitleText>{post.price}</TitleText>
            <TitleText>{post.order_state}</TitleText>
            <TitleText>{post.price}</TitleText>
        </Wrapper>
    );
}

export default PostListItem;
