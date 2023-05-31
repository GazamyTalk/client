import styled from "styled-components";
import Background from "../../components/Background.js";
import gazamy from "../../assets/images/gazamy.png";
import home from "../../assets/images/home.png";
import AddButton from "../../components/AddButton.js";
import FriendNavContainer from "../Home/FriendsBarContainer.js";
import FriendsBar from "../Home/FriendsBar.js";

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

const RightNavBar = styled.div`
  background: #7AE2F2;
  height: 100vh;
  width: 300px;
  display: flex;
  justify-content: space-between;
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

const ChatInput = styled.input`
  background: white;
  width: 100%;
  height: 50px;
  // padding: 10px;
  fonts-size: 15px;
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

function Chat(props) {
  return (
    <Background>
      <Wrapper>
        <LeftNavBar>
          <HomeLogo/> 
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
              
            </Context>
          </ChatContent>
          <ChatInput></ChatInput>
        </Chatting>
        
        <FriendNavContainer></FriendNavContainer>
      </Wrapper>
    </Background>
  );
}

export default Chat;