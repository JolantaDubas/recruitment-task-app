import { UserContext } from "App";
import { ChatItemProps } from "models/userModel";
import { useState } from "react";
import { useContext } from "react";
import styled from "styled-components";
import { MessageBox } from "./messageBox";

interface InputProps {
  text?: string;
  isEditMode?: boolean;
  id?: string;
  file?: string;
}
const ChatBox = () => {
  const { user } = useContext(UserContext);

  const [input, setInput] = useState<InputProps>({
    text: "",
  });
  const [chat, setChat] = useState<Array<ChatItemProps>>();

  console.log({ chat });
  function removeItem(id: string) {
    console.log("remove id", id);
    setChat((prev) =>
      prev?.filter((item) => {
        return item.time.toISOString() != id;
      })
    );
  }

  function handleEdit(id: string) {
    const editItem = chat?.find((item) => item.time.toISOString() === id);
    setInput({
      text: editItem?.text,
      isEditMode: true,
      id: editItem?.time.toISOString(),
    });
  }

  function editItem() {
    const newList = chat?.map((item) =>
      item.time.toISOString() === input.id
        ? { ...item, text: input.text }
        : item
    );
    setChat(newList);
  }

  return (
    <div>
      <Container>
        {chat?.map((item) => (
          <MessageBox
            key={item.time.toISOString()}
            item={item}
            remove={removeItem}
            edit={handleEdit}
          />
        ))}
      </Container>
      <InputContainer>
        <input
          type="text"
          value={input.text}
          onChange={(e) =>
            setInput((prev) => ({ ...prev, text: e.target.value }))
          }
        ></input>
        <input
          type="file"
          accept="image/*"
          onChange={(e) =>
            setInput((prev) => ({
              ...prev,
              file:
                e?.target?.files !== null
                  ? URL.createObjectURL(e?.target?.files[0])
                  : undefined,
            }))
          }
        />
        <button
          type="submit"
          onClick={() => {
            if (!input?.text && !input.file) return null;
            const message = {
              user: user,
              text: input.text,
              file: input.file,
              time: new Date(),
            };
            input.isEditMode
              ? editItem()
              : setChat((prev) => (prev ? [...prev, message] : [message]));
            setInput({ text: "", file: undefined });
          }}
        >
          {">"}
        </button>
      </InputContainer>
    </div>
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

const InputContainer = styled.div`
  box-sizing: border-box;
  bottom: 20px;
  width: 100%;
  background: #ffffff;
  padding: 14px;
  box-shadow: 0px 0px 18px #0000000f;
  display: grid;
  grid-template-columns: auto min-content min-content;
  gap: 12px;

  input {
    padding: 8px;
    border: #0000000f;
    border-radius: 16px;
    border-width: 1px;
    box-shadow: 0px 0px 99px #0000002e;
  }
  input[type="file"] {
    width: 150px;
  }
  button {
    display: grid;
    justify-content: center;
    align-content: center;
    font-size: 20px;
    color: white;
    width: 42px;
    height: 42px;
    background: #3491ce;
    box-shadow: 0px 0px 18px #00000026;
    border-radius: 100px;
    cursor: pointer;
  }
`;

export { ChatBox };
