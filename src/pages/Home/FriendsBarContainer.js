import styled from "styled-components";
import FriendsBar from "./FriendsBar";
import p0 from "../../assets/images/profile.png";
import p1 from "../../assets/images/profile1.png";
import p3 from "../../assets/images/profile3.png";
import p4 from "../../assets/images/profile4.png";
import p6 from "../../assets/images/profile6.png";
// import api from "../../features/mainApi/api";
// import friendApi from "../../services/friends/api";
import api from "../../services/mainApi/api";

const FriendsBarArea = styled.div`
  background-color: #7ae2f2;
  width: 400px;
  height: 100vh;
  display: flex;
  flex-direction: column;
`;


export default function FriendNavContainer() {
  const query = api.useGetFriendsQuery();
  // const [addFriend, mutationState] = api.useAddFriendMutation();
  // console.log('friendQuery:', query);
  if ( query.isLoading ) return <></>
  const friendsInfo = query.data.otherUserInfos;
  return (
    <FriendsBarArea>
      <FriendsBar friends={friendsInfo}>
      </FriendsBar>
    </FriendsBarArea>
  );
}