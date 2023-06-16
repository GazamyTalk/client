import styled from "styled-components";
import FriendsBar from "./FriendsBar";
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


export default function FriendNavContainer() {
  // const query = api.useGetFriendsQuery();
  // const [addFriend, mutationState] = api.useAddFriendMutation();
  // if ( query.isLoading ) return <></>
  return (
    <FriendsBarArea>
      <FriendsBar
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