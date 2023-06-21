import styled from "styled-components";
import Background from "../../components/Background.js";
import AddButton from "../../components/AddButton.js";
import home from "../../assets/images/home.png";
import FriendsList from "../Home/FriendsBarContainer.js";
import addImage from "../../assets/images/addImage.png";
import { Link, useNavigate } from "react-router-dom";
import qs from "qs";
import { useState } from "react";
// import friendApi from "../../services/friends/api.js";
// import memberApi from "../../services/members/api.js";
import mainApi from "../../services/mainApi/api.js";

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  flex: 1;
`;

const FormBackground = styled.div`
  display: flex;
  background: white;
  flex-direction: column;
  border-radius: 40px;
  box-shadow: 0px 4px 10px rgba(78, 108, 124, 0.25);
  border-radius: 0px 0px 15px 15px;
  justify-content: center;
  align-items: center;
  flex:1
`;

const BlueForm = styled.div`
  display: flex;
  background: #7ae2f2;
  width: 700px;
  height: 70px;
  border-radius: 15px 15px 0px 0px;
  align-items: center;
`;

const Text = styled.div`
  font-size: 30px;
  font-weight: 900;
  text-align: center;
`;

const FormWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 700px;
  height: 70vh;
  align-item: center;
  justify-content: center;
`;

const FormContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  width:100%;
`;

const Input = styled.input`
  background: white;
  border: 2px solid #d9d9d9;
  border-radius: 15px;
  padding: 10px;
  margin: 30px 0px 30px 0px;
  font-size: 20px;
  width: 600px;
  height: 30px;
  background: white;
  color: gray;
  text-align: center;
  &:focus {
    color: #272727;
  }
`;

const Homeicon = styled(Link)`
  background-image: url(${home});
  background-size: 40px 40px;
  background-repeat: no-repeat;
  width: 40px;
  height: 40px;
  z-index: 1;
  margin-left: 20px;
`;

function AddFriend() {
  const [name, setName] = useState('');
  const query = qs.parse(window.location.search, { ignoreQueryPrefix: true });
  const addType = query.type;  // 'friend' or 'member'
  const roomId = query.roomId // set when type is 'member'
  const [addFriend, addFriendQuery] = mainApi.useAddFriendMutation();
  const [addMembers, addMembersQuery] = mainApi.useAddMembersMutation();
  const navigate = useNavigate();

  if ( !(addType === "friend" || addType === "member") ) {
    return <h1>Error: invalid addType</h1>
  }

  return (
    <Background>
      <Container>
        <FriendsList
          // friends={[
          //   {
          //     userImage: "https://i.ibb.co/yWvqky7/tmp2.jpg",
          //     username: "testUser",
          //     description: "testDesc",
          //   },
          //   {
          //     userImage: "https://i.ibb.co/yWvqky7/tmp2.jpg",
          //     username: "testUser2",
          //     description: "testDesc2",
          //   },
          // ]}
          // onAddFriend={(e) => {
          //   console.log(e);
          // }}
        ></FriendsList>
        <FormContainer>
          <FormWrapper>
            <BlueForm>
              <Homeicon to="/"></Homeicon>
            </BlueForm>
              <FormBackground>
                <Text>GazamyTalk에서 사용중인</Text>
                <Text>ID를 입력해주세요</Text>
                <Input placeholder="친구의 ID를 입력해주세요" value={name} onChange={(e) => {
                  setName(e.target.value);
                }}></Input>
                <AddButton
                  desc={"친구 추가하기"}
                  width={"210px"}
                  height={"65px"}
                  image={addImage}
                  color={"#b6f4ff"}
                  onClick={async () => {
                    let data;
                    if ( addType === "friend" ) {
                      data = await addFriend({ username: name }).unwrap();
                    } else if ( addType === "member" ) {
                      data = await addMembers({ usernames: [name], roomid: roomId }).unwrap();
                    }
                    if ( data.success ) {
                      navigate(-1);
                    } else {
                      alert(`failed: ${data.error}`);
                    }
                  }}
                ></AddButton>
              </FormBackground>
          </FormWrapper>

        </FormContainer>
      </Container>
    </Background>
  );
}

export default AddFriend;
