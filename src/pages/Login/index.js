import styled from "styled-components";
import Background from "../../components/Background.js";
import Logo from "../../../src/assets/images/gazamy.png";
import AddButton from "../../components/AddButton.js";

const Container = styled.div`
  display: flex;
  height: 100vh;
  align-items: center;
`;

const LogoImg = styled.div`
  background-image: url(${Logo});
  background-size: 300px 300px;
  background-repeat: no-repeat;
  width: 300px;
  height: 300px;
  border: 1px solid black;
  border-radius: 50%;
`;

const PageLeft = styled.div`
  background-color: rgba(0, 0, 0, 0.1);
  display: flex;
  align-items: center;
  justify-content: center;
  height: 70%;
  width: 40%;
  flex-direction: column;
  flex: 1;
  margin-left: 120px;
`;

const PageRight = styled.div`
  background-color: rgba(0, 0, 126, 0.1);
  height: 70%;
  width: 40%;
  flex: 1;
  margin-right: 120px;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const LogoTxt = styled.div`
  font-size: 40px;
  font-weight: 900;
  background: none;
`;

const Dialogue = styled.div`
  margin: 20px;
  margin-left: 20px;
  font-size: 30px;
  background: white;
  width: 90%;
  padding: 5px;
  height: 35px;
  border-radius: 10px 10px 10px 0px;
`;

const UserId = styled.input`
  margin: 20px;
  padding: 5px;
  margin-left: 30px;
  width: 90%;
  background: white;
  height 35px;
  font-size: 30px;
  border: none;
  border-radius: 10px 10px 0px 10px;
`;

const UserPw = styled.input`
  margin: 20px;
  padding: 5px;
  margin-left: 30px;
  width: 90%;
  background: white;
  height 35px;
  font-size: 30px;
  border: none;
  border-radius: 10px 10px 0px 10px;
`;

//로고 및 로그인 설명

const MainAreaDiv = styled.div`
    flex: 1;
`;

const OuterAreaDiv = styled.div`
    display: flex;
    padding: 40px;
    height: calc(100% - 80px);
    align-items: center;
`;

const LeftArea = styled.div`
    height: 100px;
    width: 100px;
    border-radius: 50%;
    background-color: rgb(255, 255,255);
`;

const RightArea = styled.div`
    margin-left: 30px;
    height: 100%;
    flex: 2;
    display: flex;
    justify-content: center;
    flex-direction: column;
`;

const SubLogoImg = styled.div`
  background-image: url(${Logo});
  background-size: 100px 100px;
  background-repeat: no-repeat;
  width: 100px;
  height: 100px;
  border-radius: 5px;
`;

const Title = styled.div`
  font-size: 30px;
  font-weight: 900;
  height: 50px;
  width: 100%;
  background: white;
  padding: 10px;
  border-radius: 10px 10px 0px 0px;
`;

const SubTitle = styled.div`
  font-size: 20px;
  font-weight: 900;
  width: 100%;
  height: 50px;
  background: white;
  padding: 10px;
  border-radius: 0px 0px 10px 10px;

`;

function Login(props) {
  return (
    <Background>
      <Container>

        <PageLeft>
          <LogoImg/>
          <LogoTxt>gazamy Talk</LogoTxt>
        </PageLeft>

        <PageRight>
          <MainAreaDiv>
              <OuterAreaDiv>
                  <LeftArea>
                      <SubLogoImg/>
                  </LeftArea>

                  <RightArea>
                    <Title>로그인</Title>
                    <SubTitle>로그인을 하여 가자미톡을 시작하세요</SubTitle>
                  </RightArea>
                  
              </OuterAreaDiv>
          </MainAreaDiv>
          
          <Dialogue>이름을 입력해주세요!</Dialogue>
          <UserId></UserId>
          <Dialogue>비밀번호를 입력해주세요!</Dialogue>
          <UserPw></UserPw>
          <AddButton></AddButton>
        </PageRight>

      </Container>
    </Background>
  );
}

export default Login;
