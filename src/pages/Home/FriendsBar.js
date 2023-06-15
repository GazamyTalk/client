import styled from "styled-components";
import { Link } from "react-router-dom";
import AddButton from "../../components/AddButton";
import Friends from "./Friends";
import addImage from "../../assets/images/addImage.png"

const FriendsBarArea = styled.div`
  width: 300px;
  height: 100vh;
  display: flex;
  flex-direction: column;
  margin-top: 100px;
  margin-left: 32px;
`;

const FriendsWrapper = styled.div`
  flex: 1;
`;

const StyledLink = styled(Link)`
  text-decoration:none;
`;

export default function FriendsBar(props) {
  return (
    <FriendsBarArea>
      <FriendsWrapper><Friends friends={props.friends}></Friends></FriendsWrapper>
      <StyledLink to={"/addFriend"}>
        <AddButton desc={"닉네임으로 친구 추가"} width={"200px"} height={"40px"} onClick={props.onAddFriend} image={addImage}></AddButton>
      </StyledLink>
    </FriendsBarArea>
  );
}