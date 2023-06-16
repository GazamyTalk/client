import styled from "styled-components";
import { Link } from "react-router-dom";
import Background from "../../components/Background.js";
import gazamy from "../../assets/images/gazamy.png";
import home from "../../assets/images/home.png";
import JustImg from "../../components/JustImg.js";
import ChatInfoNav from "../../components/ChatInfoNav.js";
import Message from "./message.js";
import sendImage from "../../assets/images/send.png";
import user from "../../assets/images/peopleNum.png"


const HomeLogo = styled.div`
  background-image: url(${home});
  backround-size: 40px 40px;
  width: 40px;
  height: 40px;
  object-fit: cover;
  background-repeat:no-repeat;
  margin-top: 30px;
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
  width: 100%;
  height: 60%;
  flex-direction: column;
  margin-left: 10px;
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
  height:45px;
  padding: 10px;
  margin-left: 30px;
  padding-left: 25px;
  fonts-size: 20px;
  border: none;
  &:focus{
    border: none;
  }
`;

const RoomTitle = styled.div`
  border-radius: 10px;
  font-size: 20px;
  font-weight: 900;
`;

const RoomSubTitle = styled.div`
  border-radius: 10px;
  margin: 1px;
  font-size: 15px;
  font-weight: 900;
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

const User = styled.img`
 width: 25px;
 height: 25px;
`;

const UserCnt = styled.span`
display: flex;
align-items: center;
  font-size:20px;
  font-weight:900;
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
               <UserCnt> <User src={user}></User>3</UserCnt>
                {/* <UserCnt> <User src={user}></User>{props.userCnt}}</UserCnt>              이게 적용할거 */}
                <RoomSubTitle>응애 놀자</RoomSubTitle>
            </Text>
          </RoomInfo>

          <ChatContent>
            <Context>
              <Message ChatContent="hello world this is me, mario!" usrImg="https://i.ibb.co/yWvqky7/tmp2.jpg"/>
              <Message ChatContent="lol you look so gazamy" usrImg="https://i.ibb.co/yWvqky7/tmp2.jpg"/>
              <Message ChatContent="hello world this is me, mario!" usrImg="https://i.ibb.co/yWvqky7/tmp2.jpg"/>
              <Message ChatContent="lol you look so gazamy" usrImg="https://i.ibb.co/yWvqky7/tmp2.jpg"/>
              <Message ChatContent="hello world this is me, mario!" usrImg="https://i.ibb.co/yWvqky7/tmp2.jpg"/>
            </Context>
          </ChatContent>
          <ChatInput>
            <Input placeholder="보낼 메세지를 적어주세요"></Input>
            <JustImg height={"65px"} width={"75px"} onClick={props.sendMessage} image={sendImage} color={"white"}></JustImg>
            <Space></Space>
          </ChatInput>
        </Chatting>
        
        <ChatInfoNav></ChatInfoNav>
      </Wrapper>
    </Background>
  );
}

export default Chat;