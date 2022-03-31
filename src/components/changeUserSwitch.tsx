import { UserContext } from "App";
import { useContext } from "react";
import styled from "styled-components";

interface Props {
  isUserJohn: boolean;
}
const ChangeUserSwitch = () => {
  const { user, setUser } = useContext(UserContext);

  return (
    <div>
      <SwitchStyles
        isUserJohn={user === "John"}
        onClick={() => setUser(user === "John" ? "Kristian" : "John")}
      ></SwitchStyles>
    </div>
  );
};
const SwitchStyles = styled.div<Props>`
  display: block;
  width: 60px;
  height: 30px;
  background: ${(props) => (props.isUserJohn ? " #74dd88" : "#0000000f")};

  border-radius: 100px;
  position: relative;
  cursor: pointer;
  transition: 0.5s;
  box-shadow: 0px 0px 18px #0000000f;
  ::after {
    box-shadow: 0px 0px 18px #0000000f;
    content: "";
    width: 30px;
    height: 30px;
    background-color: white;
    position: absolute;
    border-radius: 50%;
    transition: 0.5s;
    transform: ${(props) =>
      props.isUserJohn ? "translateX(100%)" : "translateX(0)"};
  }
`;
export { ChangeUserSwitch };
