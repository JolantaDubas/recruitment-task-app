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
      >
        switch
      </SwitchStyles>
    </div>
  );
};
const SwitchStyles = styled.button<Props>`
  background: ${(props) => (props.isUserJohn ? "#74dd88" : "white")};
  box-shadow: 0px 0px 18px #0000000f;
`;

export { ChangeUserSwitch };
