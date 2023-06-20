import styled from "styled-components";
import { Link } from "react-router-dom";
import AddButton from "../components/AddButton";
import Friends from "../pages/Home/Friends";
import addImage from "../assets/images/addImage.png";
import userImage from "../assets/images/friends.png";

const FriendsBarArea = styled.div`
  background-color: #7ae2f2;
  width: 350px;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const FriendIcon = styled.div`
  width: 40px;
  height: 40px;
  background-image: url(${userImage});
  background-size: 40px 40px;
  background-repeat: no-repeat;
`;

const FriendsWrapper = styled.div`
  flex: 1;
`;

const StyledLink = styled(Link)`
  width: 260px;
  height: 80px;
  display: flex;
  text-decoration: none;
  // postition: relative;
  // botttom: 10px;
  // position: absolute;
  // bottom:8%;
`;

const FriendContainer = styled.div`
  width: 100%;
  display: flex;
  // overflow-y: scroll;

`;

const TopWrapper = styled.div`
  display: flex;
  align-items: center;
`;

const Text = styled.div`
  font-size: 20px;
  font-weight: 900;
  margin-left: 5px;
`;

const UpperDiv = styled.div`
  width: 100%;
  flex: 1;
  display: flex;
  align-items: center;
  flex-direction: column;
  overflow-y: scroll;
  &::-webkit-scrollbar {
    display:none;
  }
`;

const FriendsTop = styled.div`
  width: 90%;
  height: 80px;
  border-bottom: 3px solid #E1F9FF;
  display: flex;
  align-items: center;
`;

const BgColor = styled.div`
  // background-color:#B6F4FF;
`;

const LowerDiv = styled.div`
  height: 150px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export default function FriendsBar(props) {
  return (
    <FriendsBarArea>
      <FriendsTop>
        <TopWrapper>
          <FriendIcon></FriendIcon>
          <Text>채팅방 인원</Text>
        </TopWrapper>
      </FriendsTop>
      <UpperDiv>
        <FriendContainer>
          <FriendsWrapper>
            <Friends
              friends={props.members}
              privateChat={false}
            ></Friends>
          </FriendsWrapper>
        </FriendContainer>
      </UpperDiv>
      <LowerDiv>
        <StyledLink to={`/addFriend?type=member&roomId=${props.roomId}`}>
          <BgColor>
            <AddButton
              desc={"대화상대 초대하기"}
              font={"15px"}
              width={"260px"}
              height={"84px"}
              onClick={props.onAddFriend}
              image={addImage}
              color={"#b6f4ff"}
            ></AddButton>
          </BgColor>
        </StyledLink>
      </LowerDiv>
    </FriendsBarArea>
  );
}
