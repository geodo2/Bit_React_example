import React from "react";
import styled from "styled-components";

const TabContainer = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 8px;
  background-color: lightgray;
`;

const TabButton = styled.button`
  padding: 8px 16px;
  font-size: 16px;
  border: none;
  background-color: transparent;
  cursor: pointer;
  color: ${(props) => (props.active ? "black" : "gray")};
  font-weight: ${(props) => (props.active ? "bold" : "normal")};
`;

function TabComponent(props) {
  const { activeTab, onChangeTab } = props;

  return (
    <TabContainer>
      <TabButton
        active={activeTab === "infor"}
        onClick={() => onChangeTab("infor")}
      >
        회원정보
      </TabButton>
      <TabButton
        active={activeTab === "test"}
        onClick={() => onChangeTab("test")}
      >
        쿠폰
      </TabButton>
      <TabButton
        active={activeTab === "test"}
        onClick={() => onChangeTab("test")}
      >
        관심 상품
      </TabButton>
    </TabContainer>
  );
}

export default TabComponent;