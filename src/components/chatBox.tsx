import { UserContext } from "App";
import { ChatItemProps } from "models/userModel";
import { useContext } from "react";
import styled from "styled-components";
import { MessageBox } from "./messageBox";

const ChatBox = ({ chat }: { chat?: Array<ChatItemProps> }) => {
  const { user } = useContext(UserContext);
  return (
    <Container>
      {chat?.map((item) => (
        <MessageBox item={item} />
      ))}
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 500px;
  border: 1px solid #70707033;
  border-radius: 18px 18px 0 0;
  overflow-y: auto;
  max-height: calc(100vh - 260px);
`;

export { ChatBox };
