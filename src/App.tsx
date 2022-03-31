import { ChatBox } from "components/chatBox";
import { ChangeUserSwitch } from "components/changeUserSwitch";
import { UserType } from "models/userModel";
import { useState, createContext } from "react";
import styled from "styled-components";

interface UserContextProps {
  user: UserType;
  setUser: React.Dispatch<React.SetStateAction<UserType>>;
}

export const UserContext = createContext<UserContextProps>({
  user: "John",
  setUser: () => {},
});

function App() {
  const [user, setUser] = useState<UserType>("John");

  return (
    <UserContext.Provider value={{ user, setUser }}>
      <Container>
        <ChatContainer>
          <h1>Chat application</h1>
          <p>Switch user</p>
          <ChangeUserSwitch />
          <ChatBox />
        </ChatContainer>
      </Container>
    </UserContext.Provider>
  );
}

const Container = styled.div`
  display: grid;
  height: 100vh;
  justify-content: center;
`;
const ChatContainer = styled.div`
  position: relative;
  display: grid;
  height: 100%;
  grid-template-rows: repeat(3, min-content) auto;
  gap: 16px;
  padding-top: 42px;
  padding-bottom: 4px;
  box-sizing: border-box;

  h1,
  p {
    margin: 0;
  }
`;

export default App;
