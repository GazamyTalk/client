import styled from "styled-components";
import FriendsBar from "./FriendsBar";
import friends from "../../assets/images/friends.png";
import chaticon from "../../assets/images/chaticon.png";
import p0 from "../../assets/images/profile.png";
import p1 from "../../assets/images/profile1.png";
import p3 from "../../assets/images/profile3.png";
import p4 from "../../assets/images/profile4.png";
import p6 from "../../assets/images/profile6.png";
// import api from "../../features/mainApi/api";

const FriendsBarArea = styled.div`
  background-color: #7ae2f2;
  width: 410px;
  height: 100vh;
  display: flex;
  flex-direction: column;
`;

const FriendsBarTop = styled.div`
  background-color: #7ae2f2;
  width: 300px;
  height: 100px;
  display: flex;
  flex-direction: column;
  position: fixed;
  margin-left:37px;
  z-index:1;
`;

const FriendsImage = styled.div`
  background-image: url(${friends});
  background-repeat: no-repeat;
  width: 40px;
  height: 40px;
  position: fixed;
  top: 27px;
  left: 40px;
`;

const LINE = styled.div`
  position: absolute;
  width: 336px;
  height: 3px;
  left: 32px;
  top: 92px;
  background: #E1F9FF;
  border-radius: 15px;
  align-items: center;
  z-index:2;
`;

const TEXT = styled.div`
  position: absolute;
  width: 50px;
  height: 38px;
  left: 55px;
  top: 27px;
  font-family: 'IBM Plex Sans KR';
  font-style: normal;
  font-weight: 600;
  font-size: 25px;
  line-height: 38px;
  color: black;
`;

export default function FriendNavContainer() {
  // const query = api.useGetFriendsQuery();
  // const [addFriend, mutationState] = api.useAddFriendMutation();
  // if ( query.isLoading ) return <></>
  return (
    <FriendsBarArea>
      <LINE></LINE>
      <FriendsBarTop>
        <FriendsImage></FriendsImage>
        <TEXT>친구</TEXT>
      </FriendsBarTop>
      <FriendsBar
        // friends={query.data}
        friends={[{userImage: p0, username: "김뫄뫄", description: "나는 아무 생각이 없다 왜냐하면 아무 생각..."},
                  {userImage: p6, username: "김뫄뫄돈갚아", description: "국민 972049-29-582943"},
                  {userImage: p1, username: "hanseo972", description: "무량수불"},
                  {userImage: p4, username: "^오^", description: "중간 D-12"},
                  {userImage: p3, username: "( 0 3 0)", description: "뿌링클 사줄 사람 구합니다"}
                ]}
      >
      </FriendsBar>
    </FriendsBarArea>
  );
}