import styled from "styled-components";

import AddButton from "../../components/AddButton";
import Friends from "./Friends";

// const Friends = styled.nav`
//   background-color: #7ae2f2;
//   position: absolute;
//   width: 300px;
//   height: 100vh;
//   left: 0px;
//   top: 0px;
//   display: flex;
//   flex-direction: column;
//   align-items: center;
// `;
// const AddFriendImg = styled.img`
//   position: relative;
//   left: 0;
//   width: 60px;
//   height: 72px;
//   padding: 3px;
// `;

// const AddFriendTxt = styled.div`
//   color: ivory;
//   text-decoration: none;
//   font-size: 20px;
// `;

// const AddFriend = styled.div`
//   transition: 0.3s;
//   display: flex;
//   position: absolute;
//   align-items: center;
//   justify-content: center;
//   width: 281px;
//   height: 90px;
//   left: 10px;
//   bottom: 10px;
//   background: #b6f4ff;
//   border-radius: 10px;
//   &:hover {
//     transition: 0.3s;
//     background: rgb(238, 252, 255);
//     transform: translateY(-5px);
//     box-shadow: 0px 0px 20px 1px rgba(61, 61, 75, 0.2);
//   }
// `;

// const StyledLink = styled(Link)`
//   text-decoration: none;
//   font-size: 20px;
//   font-weight: 900;
// `;



const FriendsBarArea = styled.div`
  background-color: #7ae2f2;
  width: 300px;
  height: 100vh;
  display: flex;
  flex-direction: column;
`;

const FriendsWrapper = styled.div`
  flex: 1;
`


export default function FriendsBar(props) {
  return (
    <FriendsBarArea>
      <FriendsWrapper><Friends friends={props.friends}></Friends></FriendsWrapper>
      <AddButton desc={"Click here to add Friend"} width={"281px"} height={"90px"} onClick={props.onAddFriend}></AddButton>
    </FriendsBarArea>
  );
}