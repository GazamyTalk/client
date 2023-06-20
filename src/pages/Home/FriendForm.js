import styled from "styled-components";
import chat from "../../assets/images/messages.png"

const Friend = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 10px;
  --parent-height: ${props => props.height};
  height: var(--parent-height);
  border-radius: 5px;
  transition: 0.3s;
  margin-right: 20px;

  &:hover {
    transition: 0.3s;
    transform: translateX(10px);
    box-shadow: 0px 10px 20px 10px rgba(24, 24, 31, 0.2);
    // cursor: pointer;
  }
`;


const FriendDetail = styled.div`
  flex: 1;
  margin: 10px;
  height: calc(100% - 15% * 2);
`;


const FriendName = styled.div`
  font-size: 20px;
  font-weight: bold;
`;

const FriendDescription = styled.div`
  font-size: 15px;
`;

const FriendImg = styled.img`
  height: 80%;
  width: calc(var(--parent-height) * 0.8);
  object-fill: cover;
  margin: 5px;
  border-radius: 10px;
  margin-left: 15px;
`;

const Chatimg = styled.div`
    width: 40px;
    height: 40px;
    // margin-right: 15px;
    background-image: url(${chat});
    background-size: 40px 40px;
    background-position: center;
    padding: 15px;
    background-repeat: no-repeat;
      &:hover {
      cursor: pointer;
    }
`;

export default function FriendForm({ name, desc, img, height, privateChat, onClickChat }){
  privateChat = privateChat ?? true
  return (
      <Friend height={height}>
        <FriendImg src={img}></FriendImg>
        <FriendDetail>
          <FriendName>{name}</FriendName>
          <FriendDescription>{desc}</FriendDescription>
        </FriendDetail>
        {privateChat ? <Chatimg onClick={onClickChat}></Chatimg> : <></>}
      </Friend>

  );
}