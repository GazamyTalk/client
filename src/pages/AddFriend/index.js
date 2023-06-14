import styled from "styled-components";
import Background from "../../components/Background.js";
import AddButton from "../../components/AddButton.js";
import home from "../../assets/images/home.png";
import FriendsList from "./friendList.js";
import addImage from "../../assets/images/addImage.png"

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
`;

const Form = styled.div`
  display: flex;
  height: 100%;
  width: 50%;
  align-items: center;
  flex: 1;
  justify-content: center;
`;

const FormBackground = styled.div`
  display: flex;
  background: white;
  width: 700px;
  height: 55vh;
  flex-direction: column;
  border-radius: 40px;
  box-shadow: 0px 4px 10px rgba(78, 108, 124, 0.25);
  border-radius: 0px 0px 15px 15px;
  position:absolute ;
  justify-content: center;
  align-items: center;
`;

const BlueForm = styled.div`
  display: flex;
  background: #7AE2F2;
  width: 700px;
  height: 10vh;
  flex-direction: column;
  border-radius: 40px;
  border-radius: 15px 15px 0px 0px;
  justify-content: center;
  align-items: center;
  position:absolute ;
  top:15%;
`;

const Text = styled.div`
  font-size: 30px;
  font-weight: 900;
  text-align: center;
`;

const Input = styled.input`
  background: white;
  border: 2px solid #D9D9D9;
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

const Homeicon = styled.div`
  background-image: url(${home});
  background-size: 40px 40px;
  background-repeat: no-repeat;
  width: 300px;
  height: 300px;
  top:17%;
  left:41%;
  z-index:1;
  position:absolute;
`;

function AddFriend() {
  return (
    <Background>
      <Container>
        <FriendsList // friends={query.data}
          friends={[
            {
              userImage: "https://i.ibb.co/yWvqky7/tmp2.jpg",
              username: "testUser",
              description: "testDesc",
            },
            {
              userImage: "https://i.ibb.co/yWvqky7/tmp2.jpg",
              username: "testUser2",
              description: "testDesc2",
            },
          ]}
          onAddFriend={(e) => {
            console.log(e);
          }}
        ></FriendsList>
        <Form>
          <BlueForm>
          </BlueForm>
          <Homeicon></Homeicon>
          <FormBackground>
            <Text>GazamyTalk에서 사용중인</Text>
            <Text>닉네임을 입력해주세요</Text> 
            <Input placeholder="친구의 닉네임을 입력해주세요"></Input>
            <AddButton
              desc={"친구 추가하기"}
              width={"210px"}
              height={"65px"}
              image={addImage}
              color={"#b6f4ff"}
            >
            </AddButton>
          </FormBackground>
          <gazamy1></gazamy1>
        </Form>
      </Container>
    </Background>
  );
}

export default AddFriend;
