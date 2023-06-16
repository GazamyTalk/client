import styled from "styled-components";
import Background from "../../components/Background.js";
import JustButton from "../../components/justButton.js";
import home from "../../assets/images/home.png";
import FriendNavContainer from "../Home/FriendsBarContainer.js";
import ProfileHandler from "./profileHandler.js";
import { Link } from "react-router-dom";

import prof1 from "../../assets/images/profile1.png";
import prof2 from "../../assets/images/profile2.png";
import prof3 from "../../assets/images/profile3.png";
import prof4 from "../../assets/images/profile4.png";
import prof5 from "../../assets/images/profile5.png";
import prof6 from "../../assets/images/profile6.png";
import prof7 from "../../assets/images/profile.png";
import prof8 from "../../assets/images/profile7.png";

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
`;

const FormBackground = styled.div`
  display: flex;
  background: white;
  flex-direction: column;
  box-shadow: 0px 4px 10px rgba(78, 108, 124, 0.25);
  border-radius: 0px 0px 15px 15px;
  justify-content: center;
  align-items: center;
  flex: 1;
`;

const BlueForm = styled.div`
  display: flex;
  background: #7ae2f2;
  width: 550px;
  height: 70px;
  border-radius: 15px 15px 0px 0px;
  align-items: center;
`;

const Input = styled.input`
  background: white;
  border: none;
  border-bottom: 1px solid gray;
  margin: 30px 0px 30px 0px;
  font-size: 15px;
  width: 100%;
  height: 30px;
  background: white;
  color: gray;
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

const BlockText = styled.div`
  background: #b6f4ff;
  width: 150px;
  border-radius: 5px;
  font-size: 20px;
  padding: 10px;
  font-weight: 900;
  text-align: center;
  text-align: center;
`;

const Text = styled.div`
  font-size: 25px;
  font-weight: 900;
  margin: 57px 0px 15px 25px;
`;
 
const ImageContainer = styled.div`
  background: white;
  width:420px;
  height:250px;
  border: 2px solid rgba(201, 209, 214, 0.5);
  border-radius: 10px;
  margin: 10px;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  flex-wrap: wrap;
`;

const InputForm = styled.div`
margin-top: 20px;
  width: 420px;
  height: 100%;
`;

const ButtonContainer = styled.div`
  width: 70%;
  height: 100%;
  display: flex;
  flex-direction: row-reverse;
`;

const FormWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 550px;
  height: 80vh;
  align-item: center;
  justify-content: center;
`;

const FormContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  width: 100%;
`;

const TextWrapper = styled.div`
  width: 470px;
`;

function AddFriend() {
  return (
    <Background>
      <Container>
        <FriendNavContainer></FriendNavContainer>
        <FormContainer>
          <FormWrapper>
            <BlueForm>
              <Homeicon to="/"></Homeicon>
            </BlueForm>
            <FormBackground>
              <TextWrapper>
                <Text>프로필 사진 선택</Text>
              </TextWrapper>
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

                <InputForm>
                  <BlockText>닉네임</BlockText>
                  <Input placeholder="닉네임을 입력하세요 (0/20)"></Input>
                  <BlockText>상태메세지</BlockText>
                  <Input placeholder="상태메세지를 입력하세요 (0/60)"></Input>
                </InputForm>
                <ButtonContainer>
                  <JustButton
                    desc="Submit"
                    width={"150px"}
                    height={"50px"}
                    color={"#82E8FF"}
                  ></JustButton>
                </ButtonContainer>

            </FormBackground>
          </FormWrapper>
        </FormContainer>
      </Container>
    </Background>
  );
}

export default AddFriend;
