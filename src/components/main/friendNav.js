import styled from "styled-components";
import AddFImg from "../../assets/images/addFriend.png";
import FriendComponent from "./friendComponent.js";
import { Link } from "react-router-dom";
const Nav = styled.nav`
  background-color: #7ae2f2;
  position: absolute;
  width: 300px;
  height: 100vh;
  left: 0px;
  top: 0px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const AddFriendImg = styled.img`
  position: relative;
  left: 0;
  width: 60px;
  height: 72px;
  padding: 3px;
`;

const AddFriendTxt = styled.div`
  color: ivory;
  text-decoration: none;
  font-size: 20px;
`;

const AddFriend = styled.div`
  transition: 0.3s;
  display: flex;
  position: absolute;
  align-items: center;
  justify-content: center;
  width: 281px;
  height: 90px;
  left: 10px;
  bottom: 10px;
  background: #b6f4ff;
  border-radius: 10px;
  &:hover {
    transition: 0.3s;
    background: rgb(238, 252, 255);
    transform: translateY(-5px);
    box-shadow: 0px 0px 20px 1px rgba(61, 61, 75, 0.2);
  }
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  font-size: 20px;
  font-weight: 900;
`;

function friendNav() {
  return (
    <Nav>
      <FriendComponent></FriendComponent>

      <StyledLink to="/register">
        <AddFriend>
          <AddFriendImg src={AddFImg}></AddFriendImg>
          <AddFriendTxt>Click here to add Friend</AddFriendTxt>
        </AddFriend>
      </StyledLink>
    </Nav>
  );
}

export default friendNav;
