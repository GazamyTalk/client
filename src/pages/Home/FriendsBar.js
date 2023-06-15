import styled from "styled-components";
import { Link } from "react-router-dom";
import AddButton from "../../components/AddButton";
import Friends from "./Friends";
import addImage from "../../assets/images/addImage.png"
import userImage from "../../assets/images/userProfiles.png"

const FriendsBarArea = styled.div`
  background-color: #7ae2f2;
  width: 400px;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const FriendIcon = styled.div`
  width: 40px;
  height: 40px;
  background-image :url(${userImage});
  background-size: 40px 40px;
  background-repeat: no-repeat;
`;

const FriendsWrapper = styled.div`
  flex: 1;
`;

const StyledLink = styled(Link)`
width:220px;
height: 40px;
  text-decoration:none;
`;

const FriendContainer = styled.div`
  width: 100%;
  height:100px;
`;

const TopWrapper = styled.div`
  display: flex;
`;

const Text = styled.div`
  font-size: 15px;
  font-weight: 900;
`;

const FriendsTop = styled.div`
  width: 90%;
  height: 80px;
  border-bottom: 1px solid white;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export default function FriendsBar(props) {
  return (
    <FriendsBarArea>
      <FriendsTop>
        <TopWrapper>
          <FriendIcon></FriendIcon>  
          <Text>친구</Text>
        </TopWrapper>

       <StyledLink to={"/addFriend"}><AddButton desc={"닉네임으로 친구 추가"} font={"15px"}width={"220px"} height={"40px"} onClick={props.onAddFriend} image={addImage}></AddButton></StyledLink>
      </FriendsTop>
      <FriendContainer>
        <FriendsWrapper><Friends friends={props.friends}></Friends></FriendsWrapper>

      </FriendContainer>
    </FriendsBarArea>
  );
}