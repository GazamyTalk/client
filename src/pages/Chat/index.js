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
import chatimg from "../../assets/images/profile7.png";
import p1 from "../../assets/images/profile.png";
import p4 from "../../assets/images/profile4.png";
import p6 from "../../assets/images/profile6.png";
import qs from "qs";
import setting from "../../assets/images/setting.png";
import api from "../../services/mainApi/api.js";
import { useState } from "react";
import { useEffect } from "react";
import io from "socket.io-client";
import * as chatService from "../../services/chat/index.js";
import MessageContainer from "./messageContinaer.js";

const HomeLogo = styled.div`
  background-image: url(${home});
  backround-size: 40px 40px;
  width: 40px;
  height: 40px;
  object-fit: cover;
  background-repeat: no-repeat;
  // margin-top: 30px;
`;

const Wrapper = styled.div`
  display: flex;
  height: 100vh;
  width: 100vw;
`;

const LeftNavBar = styled.div`
  background: #7ae2f2;
  height: 100vh;
  width: 70px;
  display: flex;
  flex-direction: column;
  // justify-content: center;
  align-items: center;
`;

const Chatting = styled.div`
  flex: 1;
  height: 100%;
  font-size: 20px;
  display: flex;
  flex-direction: column;
`;

const RoomInfo = styled.div`
height: 180px;
display: flex;
margin-top: 40px;
align-items: center;
// margin-bottom: 120px;
`;

const ChatLogo = styled.div`
  background-size: 120px 120px;
  background-image: url(${(props) => props.roomImage});
  background-repeat: no-repeat;
  width: 150px;
  height: 120px;
  margin-left: 60px;
  // margin-top:90px;
  border-radius: 10px;
`;

const ChatContent = styled.div`
  flex: 1;
  overflow-y: scroll;
  overflow-x: hidden;
  margin-top: 30px;
  margin-bottom: 70px;
  &::-webkit-scrollbar {
    display:none;
  }
`;

const Text = styled.div`
  display: flex;
  width: 60%;
  height: 60%;
  flex-direction: column;
  margin-left: 10px;
  flex: 1;
  // margin-top:85px;
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
  position: relative;
  bottom: 15px;
`;

const Input = styled.input`
  background: white;
  width: 90%;
  height: 45px;
  padding: 10px;
  margin-left: 30px;
  margin-bottom: 50px;
  padding-left: 25px;
  fonts-size: 20px;
  border: none;
  &:focus {
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
  margin-left:40px;
  // margin-top:90px;
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
  font-size: 20px;
  font-weight: 900;
`;

const ChatSettings = styled(Link)`
  background: #b6f4ff;
  width: 200px;
  height: 80px;
  border-radius: 10px;
  font-size: 20px;
  font-weight: 900;
  color: black;
  text-decoration: none;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 30px;
  transition: 0.3s;
  &:hover {
    transition: 0.3s;
    background: rgb(238, 252, 255);
    transform: translateY(-5px);
    box-shadow: 0px 0px 20px 1px rgba(61, 61, 75, 0.2);
    cursor: pointer;
  }
`;

const SettingLogo = styled.div`
  background-image: url(${setting});
  background-size: 40px 40px;
  background-repeat: no-repeat;
  width: 40px;
  height: 40px;
  z-index: 1;
  // margin: 0 20px 0 10px;
`;

const HomeLink = styled(Link)`
  height: 40px;
  width: 40px;
  padding: 10px;
  margin-top: 30px;
`;

const SettingLink = styled(Link)`
  height: 40px;
  width: 40px;
  padding: 10px;
  margin-top: 10px;
`;

function Chat(props) {
  // const [members, setMembers] = useState([]);
  const query = qs.parse(window.location.search, { ignoreQueryPrefix: true });
  const roomId = query.roomId;
  const membersQuery = api.useGetMembersQuery({ roomid: roomId });
  const roomInfoQuery = api.useGetRoomsQuery();
  const accountQuery = api.useGetAccountQuery();
  const [chat, setChat] = useState([]);
  const [socket, setSocket] = useState(undefined);
  const [inputChat, setInputChat] = useState('');
  console.log('chat:', chat);
  // console.log('socket:', socket);
  
  useEffect(() => {
    // console.log("start useEffect 1");
    chatService.getChats(roomId, 100, Date.now(), (data) => {
      // console.log('chat load:', data.chatInfos);
      setChat([...(data.chatInfos)]);
    });
    return () => { setChat([]) }
  }, [])

  useEffect(() => {

  }, [chat]);

  useEffect(() => {
    // console.log("start useEffect 2");
    if ( accountQuery.isLoading ) throw new Error("accountQuery is in Loading. it's look impossible, because in App.js, it had to be loaded!!");
    const username = accountQuery.data.userInfo.username;
    const roomid = roomId;
    const newSocket = io(`${process.env.REACT_APP_API_SERVER_URL}`, { query: { username, roomid }, path: "/ws" });
    console.log("socket connection established");
    // console.log(accountQuery.isLoading);
    
    newSocket.on("newChat", (newChatInfo) => {
      // console.log("----------------new Chat!");
      // console.log('debug:', chat, newChatInfo);
      setChat((prevState) => [...prevState, newChatInfo]);
    })

    newSocket.on("error", (err) => {
      console.err(err);
    })

    setSocket(newSocket);

    return () => { console.log('disconnected'); newSocket.disconnect() };
  }, []);

  if ( roomId === undefined ) return <h1>roomId must be set</h1>
  if ( typeof roomId !== "string" ) return <h1>roomId must be string</h1>
  if ( socket === undefined || 
       roomInfoQuery.isLoading ||
       membersQuery.isLoading || 
       accountQuery.isLoading ) return <></>

  const username = accountQuery.data.userInfo.username;
  const roomInfo = roomInfoQuery.data.roomInfos.find((value) => value.roomid === roomId);
  const members = membersQuery.data.otherUserInfos;
  // console.log(roomInfo);
  // console.log(roomInfoQuery.data);


  return (
    <Background>
      <Wrapper>
        <LeftNavBar>
          <HomeLink to="/">
            <HomeLogo />
          </HomeLink>
          <SettingLink to={`/chat/settings?roomId=${roomId}`}>
            <SettingLogo />
          </SettingLink>
        </LeftNavBar>

        <Chatting>
          <RoomInfo>
            <ChatLogo src={roomInfo.roomImage} />
            <Text>
              <RoomTitle>{roomInfo.roomname}</RoomTitle>
              <UserCnt>
                {" "}
                <User src={user}></User>{roomInfo.users.length}
              </UserCnt>
              {/* <UserCnt> <User src={user}></User>{props.userCnt}}</UserCnt>              이게 적용할거 */}
              <RoomSubTitle>{roomInfo.description}</RoomSubTitle>
            </Text>
            {/* <ChatSettings to="/chat/Settings">
              <SettingLogo />
              채팅방 설정
            </ChatSettings> */}
          </RoomInfo>

          <ChatContent>
            <Context>
              {/* <Message UserName="김뫄뫄" ChatContent="hello world this is me, mario!" usrImg={p1}/>
              <Message UserName="^오^" ChatContent="lol you look so gazamy" usrImg={p4}/>
              <Message UserName="김뫄뫄돈갚아" ChatContent="hello world this is me, mario!" usrImg={p6}/>
              <Message UserName="김뫄뫄돈갚아" ChatContent="lol you look so gazamy" usrImg={p6}/>
              <Message UserName="김뫄뫄" ChatContent="hello world this is me, mario!" usrImg={p1}/>
              <Message UserName="김뫄뫄돈갚아" ChatContent="hello world this is me, mario!" usrImg={p6}/>
              <Message UserName="김뫄뫄돈갚아" ChatContent="lol you look so gazamy" usrImg={p6}/>
              <Message UserName="김뫄뫄" ChatContent="hello world this is me, mario!" usrImg={p1}/>
              <Message UserName="김뫄뫄돈갚아" ChatContent="hello world this is me, mario!" usrImg={p6}/>
              <Message UserName="김뫄뫄돈갚아" ChatContent="lol you look so gazamy" usrImg={p6}/>
              <Message UserName="김뫄뫄" ChatContent="hello world this is me, mario!" usrImg={p1}/>
              <Message UserName="김뫄뫄돈갚아" ChatContent="hello world this is me, mario!" usrImg={p6}/>
              <Message UserName="김뫄뫄돈갚아" ChatContent="lol you look so gazamy" usrImg={p6}/>
              <Message UserName="김뫄뫄" ChatContent="hello world this is me, mario!" usrImg={p1}/>
              <Message UserName="김뫄뫄돈갚아" ChatContent="hello world this is me, mario!" usrImg={p6}/>
              <Message UserName="김뫄뫄돈갚아" ChatContent="lol you look so gazamy" usrImg={p6}/>
              <Message UserName="김뫄뫄" ChatContent="hello world this is me, mario!" usrImg={p1}/> */}
              {
                chat.map((value) => (
                  <MessageContainer
                    Username={value.username}
                    ChatContent={value.content}
                    key={value.chatid}
                  ></MessageContainer>
                ))
              }
            </Context>
          </ChatContent>
          <ChatInput>
            <Input placeholder="보낼 메세지를 적어주세요" value={inputChat} onChange={(e) => {
              setInputChat(e.target.value)
            }}></Input>
            <JustImg
              height={"65px"}
              width={"75px"}
              onClick={() => {
                socket.emit("newChat", {
                  username,
                  roomid: roomId,
                  type: "string",
                  content: inputChat
                })
                setInputChat('');
              }}
              image={sendImage}
              color={"white"}
            ></JustImg>
            <Space></Space>
          </ChatInput>
        </Chatting>
        
        <ChatInfoNav members={members}></ChatInfoNav>
      </Wrapper>
    </Background>
  );
}

export default Chat;
