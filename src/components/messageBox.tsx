import { UserContext } from "App";
import { ChatItemProps, UserMockData } from "models/userModel";
import { useContext } from "react";
import styled from "styled-components";

interface Props {
  mainUser: boolean;
}
const MessageBox = ({ item }: { item: ChatItemProps }) => {
  const { user } = useContext(UserContext);

  return (
    <Container mainUser={item.user === user}>
      <img
        height={30}
        width={30}
        border-radius={100}
        src={UserMockData[item.user].photoUrl}
      ></img>
      <BoxStyles mainUser={item.user === user}>
        <b> {UserMockData[item.user].user}</b>
        <br />
        {item.text}
      </BoxStyles>
    </Container>
  );
};

const BoxStyles = styled.div<Props>`
  background: ${(props) => (props.mainUser ? "lightblue" : " white")};
  width: 300px;
  box-shadow: 0px 0px 50px 3px #e8e8e8;
  height: fit-content;
  padding: 12px;
  border-radius: 16px;
`;

const Container = styled.div<Props>`
  justify-content: ${(props) =>
    props.mainUser ? "end; flex-direction: row-reverse;" : "start"};
  display: flex;
  gap: 12px;
  img {
    border-radius: 50%;
  }
  padding: 12px;
`;

export { MessageBox };
