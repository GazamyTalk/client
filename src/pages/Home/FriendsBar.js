import styled from "styled-components";
import { Link } from "react-router-dom";
import AddButton from "../../components/AddButton";
import Friends from "./Friends";
import addImage from "../../assets/images/addImage.png"

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

const StyledLink = styled(Link)`
  text-decoration:none;
`;

export default function FriendsBar(props) {
  return (
    <FriendsBarArea>
      <FriendsWrapper><Friends friends={props.friends}></Friends></FriendsWrapper>
      <StyledLink to={"/addFriend"}><AddButton desc={"Click here to add Friend"} width={"280px"} height={"90px"} onClick={props.onAddFriend} image={addImage}></AddButton></StyledLink>
    </FriendsBarArea>
  );
}