import styled from "styled-components";
import AddButton from "../../components/AddButton";
import FriendsBar from "./FriendsBar";
// import api from "../../features/mainApi/api";



export default function FriendNavContainer({}) {
  // const query = api.useGetFriendsQuery();
  // const [addFriend, mutationState] = api.useAddFriendMutation();
  // if ( query.isLoading ) return <></>
  return (
    <FriendsBar
      // friends={query.data}
      friends={[{userImage: "https://i.ibb.co/yWvqky7/tmp2.jpg", username: "testUser", description: "testDesc"},
                {userImage: "https://i.ibb.co/yWvqky7/tmp2.jpg", username: "testUser2", description: "testDesc2"}]}
      onAddFriend={(e) => { console.log(e) }}
    >
      
    </FriendsBar>
  );
}