import { UserContext } from "App";
import { ChatItemProps, UserMockData } from "models/userModel";
import { useContext } from "react";
import styled from "styled-components";

interface Props {
  mainUser: boolean;
}
const MessageBox = ({
  item,
  edit,
  remove,
}: {
  item: ChatItemProps;
  edit: (id: string) => void;
  remove: (id: string) => void;
}) => {
  const { user } = useContext(UserContext);

  return (
    <Container mainUser={item.user === user}>
      <ProfileImage
        height={30}
        width={30}
        border-radius={50}
        src={UserMockData[item.user].photoUrl}
        alt=""
      />
      <BoxStyles mainUser={item.user === user}>
        <b>{UserMockData[item.user].user}</b>
        <br />
        {item.text}
        {item.file && <img src={item.file} alt="" />}
      </BoxStyles>
      <ActionsStyles>
        <p>{item.time.toLocaleString()}</p>|
        {item.text && (
          <button onClick={() => edit(item.time.toISOString())}>edit</button>
        )}
        |<button onClick={() => remove(item.time.toISOString())}>delete</button>
      </ActionsStyles>
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
  img {
    padding-top: 8px;
    width: 100%;
  }
`;

const ProfileImage = styled.img`
  border-radius: 50%;
`;

const Container = styled.div<Props>`
  display: flex;
  justify-content: ${(props) =>
    props.mainUser ? "end; flex-direction: row-reverse;" : "start"};
  gap: 12px;
  padding: 12px;
  flex-wrap: wrap;
`;
const ActionsStyles = styled.div`
  display: flex;
  gap: 8px;
  color: gray;
  button {
    background: none;
    border: none;
    color: gray;
    padding: 0;
    font: inherit;
    outline: inherit;
    cursor: pointer;
  }
`;

export { MessageBox };
