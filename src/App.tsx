import { ChatBox } from "components/chatBox";
import { ChangeUserSwitch } from "components/changeUserSwitch";
import { ChatItemProps, UserType } from "models/userModel";
import { useState } from "react";
import { createContext } from "react";
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

  const [input, setInput] = useState("");
  const [chat, setChat] = useState<Array<ChatItemProps>>();
  return (
    <UserContext.Provider value={{ user, setUser }}>
      <Container>
        <ChatContainer>
          <h1>Chat application</h1>
          <p>Switch user</p>
          <ChangeUserSwitch />
          <ChatBox chat={chat} />
          <InputContainer>
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
            ></input>
            <button
              onClick={() => {
                const message = { user: user, text: input };
                setChat((prev) => (prev ? [...prev, message] : [message]));
              }}
            >
              Send
            </button>
          </InputContainer>
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
const InputContainer = styled.div`
  position: absolute;
  box-sizing: border-box;
  bottom: 20px;
  width: 100%;
  background: #ffffff;
  padding: 14px;
  box-shadow: 0px 0px 18px #0000000f;
  display: grid;
  grid-template-columns: 5fr 1fr;
  gap: 12px;

  input {
    padding: 8px;
  }
`;

export default App;
