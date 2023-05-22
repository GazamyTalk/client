import ImgFriend from "../../assets/images/profile.png";
import styled from "styled-components";

const Friend = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  
  width: ${(props) => props.width || "230px"};
  height: ${(props) => props.height || "80px"};
  top: 30px;
  border-radius: 3px;
  transition: 0.3s;
  box-shadow: 0px 0px 20px 1px rgba(61, 61, 75, 0.2);
  padding: 10px;

  &:hover {
    transition: 0.3s;
    transform: translateX(10px);
    box-shadow: 0px 10px 20px 10px rgba(24, 24, 31, 0.2);
  }
`;

const FriendDetail = styled.div``;

const FriendName = styled.div``;

const FriendTxt = styled.div``;

const FriendImg = styled.img`
  width: 30%;
  object-fill: cover;
`;

function FriendComponent({ width, height }){
    return( <Friend width={width} height={height}>
      <FriendImg src={ImgFriend}></FriendImg>
      <FriendDetail>
        <FriendName>김땡떙</FriendName>
        <FriendTxt>llrleaod asjhkzxv ewakbkjsdf sxiso</FriendTxt>
      </FriendDetail>
    </Friend>
    );
}
export default FriendComponent;