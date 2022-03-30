import { UserContext } from "App";
import { ChatItemProps } from "models/userModel";
import { useContext } from "react";
import styled from "styled-components";

const ChatBox = ({ chat }: { chat?: Array<ChatItemProps> }) => {
  const { user } = useContext(UserContext);

  console.log({ user });
  return (
    <Container>
      {user}
      {chat?.map((item) => (
        <div>
          {item.user} {item.text} Current user: {user}
        </div>
      ))}
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 14px;
  height: 100%;
  width: 500px;
  border: 1px solid #70707033;
  border-radius: 18px;
`;

export { ChatBox };
