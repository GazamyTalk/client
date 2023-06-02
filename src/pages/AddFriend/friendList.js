import styled from "styled-components";
import Friends from "../Home/Friends";


const FriendsBarArea = styled.div`
  background-color: #7ae2f2;
  width: 300px;
  height: 100vh;
  display: flex;
  flex-direction: column;
`;

const FriendsWrapper = styled.div`
  flex: 1;
`;

export default function FriendsBar(props) {
  return (
    <FriendsBarArea>
      <FriendsWrapper><Friends friends={props.friends}></Friends></FriendsWrapper>
    </FriendsBarArea>
  );
}