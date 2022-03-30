import styled from "styled-components";

function App() {
  return (
    <Container>
      <ChatContainer>
        <h1>Chat application</h1>
        <p>Switch user</p>
        <button>Switch</button>
        <ChatBoxContainer>ChatBox</ChatBoxContainer>
      </ChatContainer>
    </Container>
  );
}

const Container = styled.div`
  display: grid;
  height: 100vh;
  justify-content: center;
`;
const ChatContainer = styled.div`
  display: grid;
  height: 100%;
  grid-template-rows: repeat(3, min-content) auto;
  gap: 16px;
  padding-top: 42px;
  padding-bottom: 12px;
  box-sizing: border-box;

  h1,
  p {
    margin: 0;
  }
`;

const ChatBoxContainer = styled.div`
  display: grid;
  gap: 14px;
  height: 100%;
  width: 500px;
  border: 1px solid #70707033;
  border-radius: 18px;
`;
export default App;
