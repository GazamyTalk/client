import styled from "styled-components";
import Background from "../../components/Background.js";
import AddButton from "../../components/AddButton.js";
import home from "../../assets/images/home.png";
import FriendNavContainer from "../Home/FriendsBarContainer.js";
import ProfileHandler from "./profileHandler.js"

import prof1 from "../../assets/images/profile1.png"
import prof2 from "../../assets/images/profile2.png"
import prof3 from "../../assets/images/profile3.png"
import prof4 from "../../assets/images/profile4.png"
import prof5 from "../../assets/images/profile5.png"
import prof6 from "../../assets/images/profile6.png"
import prof7 from "../../assets/images/profile.png"
import prof8 from "../../assets/images/profile7.png"


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
  height: 80vh;
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
  top:3%;
`;

const Text = styled.div`
  font-size: 30px;
  font-weight: 900;
  text-align: center;
`;

const Input = styled.input`
  background: white;
  border: none;
  border-bottom: 1px solid gray;
  padding: 10px;
  margin: 30px 0px 30px 0px;
  font-size: 20px;
  width: 600px;
  height: 30px;
  background: white;
  color: gray;
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
  top:4%;
  left:41%;
  z-index:1;
  position:absolute;
`;

const BlockText = styled.div`
  background: #b6f4ff;
  width: 200px;
  border-radius: 5px;
  font-size: 20px;
  padding: 10px;
  font-weight: 900;
  text-align: center;
`

const ImageContainer = styled.div`
  background: white;  
  width: 70%;
  border: 5px solid gray;
  border-radius: 10px;
  display: flex;

`

function AddFriend() {
  return (
    <Background>
      <Container>
        <FriendNavContainer></FriendNavContainer>
        <Form>
          <BlueForm>
          </BlueForm>
          <Homeicon></Homeicon>
          <FormBackground>
            <Text>프로필 사진 선택</Text>

            <ImageContainer>
              <ProfileHandler image={prof1}></ProfileHandler>
              <ProfileHandler image={prof2}></ProfileHandler>
              <ProfileHandler image={prof3}></ProfileHandler>
              <ProfileHandler image={prof4}></ProfileHandler>
              <ProfileHandler image={prof5}></ProfileHandler>
              <ProfileHandler image={prof6}></ProfileHandler>
              <ProfileHandler image={prof7}></ProfileHandler>
              <ProfileHandler image={prof8}></ProfileHandler>
            </ImageContainer>
            <BlockText>새 닉네임</BlockText>
            <Input placeholder="새 닉네임을 입력하세요 (0/20)"></Input>
            <BlockText>새 상태 메세지</BlockText>
            <Input placeholder="새 상태메세지를 입력하세요 (0/60)"></Input>
            
            <AddButton
              desc={"Submit"}
              width={"210px"}
              height={"65px"}
              image={"none"}
              color={"#b6f4ff"}
            >
            </AddButton>
          </FormBackground>
        </Form>
      </Container>
    </Background>
  );
}

export default AddFriend;