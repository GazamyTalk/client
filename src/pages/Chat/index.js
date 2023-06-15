import styled from "styled-components";
import { Link } from "react-router-dom";
import Background from "../../components/Background.js";
import gazamy from "../../assets/images/gazamy.png";
import home from "../../assets/images/home.png";
import AddButton from "../../components/AddButton.js";
import FriendNavContainer from "../Home/FriendsBarContainer.js";
import Message from "./message.js";
import sendImage from "../../assets/images/send.png";

const HomeLogo = styled.div`
  background-image: url(${home});
  backround-size: 40px 40px;
  width: 40px;
  height: 40px;
  object-fit: cover;
  background-repeat:no-repeat;
  margin-top: 60px;
`;

const Wrapper = styled.div`
  display: flex;
  height: 100vh;
  width: 100vw;
  `;

const LeftNavBar = styled.div`
  background: #7AE2F2;
  height: 100vh;
  width: 70px;
  display: flex;
  justify-content: center;
`;

const Chatting = styled.div`
  flex: 1;
  height: 100%;
  font-size: 20px;
  display: flex;
  flex-direction: column;
`;

const RoomInfo = styled.div`
height: 140px;
border-bottom: 1px solid black;
display: flex;
align-items: center;
`;

const ChatLogo = styled.div`
  background-size: 120px 120px;
  background-image: url(${gazamy});
  width: 120px;
  height: 120px;
  margin-left: 30px;
  border: 5px solid cyan;
  border-radius: 10px;
`;

const ChatContent = styled.div`
  flex: 1;
`;

const Text = styled.div`
  display: flex;
  flex-direction: column;
`;

const ChatInput = styled.div`
  background: transparent;
  height: 50px;
  padding: 10px;
  fonts-size: 15px;
  border: none;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position:relative;
  bottom: 15px;
`;

const Input = styled.input`
  background: white;
  width: 90%;
  height: 50px;
  padding: 10px;
  margin-left: 30px;
  fonts-size: 20px;
  border: none;
`;

const RoomTitle = styled.div`
  border-radius: 10px;
  margin: 20px;
  font-size: 30px;
  font-weight: 900;
  padding: 10px;
`;

const RoomSubTitle = styled.div`
  border-radius: 10px;
  margin: 1px;
  font-size: 15px;
  font-weight: 900;
  padding: 10px;
  margin-left: 20px;
  margin-bottom: 20px;
`;

const Context = styled.div`
  margin: 30px;
  font-size: 20px;
`;

const Space = styled.div`
  width: 10px;
  height: 10px;

`;

function Chat(props) {
  return (
    <Background>
      <Wrapper>
        <LeftNavBar>
         <Link to="/"><HomeLogo/></Link>
        </LeftNavBar>
        
        <Chatting>
          <RoomInfo>
            <ChatLogo/>
            <Text>
              <RoomTitle>그냥 노는 방</RoomTitle>
              <RoomSubTitle>응애 놀자</RoomSubTitle>
            </Text>
          </RoomInfo>

          <ChatContent>
            <Context>
              <Message ChatContent="hello world this is me, mario!" usrImg="https://i.ibb.co/yWvqky7/tmp2.jpg"/>
              <Message ChatContent="lol you look so gazamy" usrImg="https://i.ibb.co/yWvqky7/tmp2.jpg"/>
              
            </Context>
          </ChatContent>

          <ChatInput>
            <Input></Input>
            <AddButton desc={""} height={"50px"} width={"100px"} onClick={props.sendMessage} image={sendImage} color={"white"}></AddButton>
            <Space></Space>
          </ChatInput>
        </Chatting>
        
        <FriendNavContainer></FriendNavContainer>
      </Wrapper>
    </Background>
  );
}

export default Chat;