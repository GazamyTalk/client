import styled from "styled-components";
import Background from "../../components/Background.js";
import AddButton from "../../components/AddButton.js";
import { Link } from "react-router-dom";

const Container = styled.div`
  display: flex;
  height: 100vh;
  align-items: center;
  justify-content: center;
`;

const Dialogue = styled.div`
  font-size: 15px;
  background: white;
  width: 100%;
  padding: 5px;
  height: 20px;
  border-radius: 10px 10px 10px 0px;
`;

const UserId = styled.input`
  margin: 20px;
  padding: 5px;
  margin-left: 30px;
  width: 100%;
  background: #E5F9FF;
  height 35px;
  font-size: 15px;
  border: none;
  border-radius: 5px;
`;

const UserPw = styled.input`
  margin: 20px;
  padding: 5px;
  margin-left: 30px;
  width: 100%;
  background: #E5F9FF;
  height 35px;
  font-size: 15px;
  border: none;
  border-radius: 5px;
`;

const HighLight = styled.div`
  color: red;
  font-size: inherit;
`;

//로고 및 로그인 설명

const MainAreaDiv = styled.div`
  background: white;
  width: 30%;
  height: 70%;
  display: flex;
  align-items: center;
  justify-content: space-around;
  flex-direction: column;
  border-radius: 3px;
  box-shadow: 0px 10px 10px 1px black;
`;

const OuterAreaDiv = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
    width: 80%;
`;

const Title = styled.div`
  font-size: 30px;
  font-weight: 900;
  height: 50px;
  background: white;
  padding: 10px;
  border-radius: 10px 10px 0px 0px;
  text-align: center;
`;

const StyledLink = styled(Link)`
  color: #2E8EFF;
  font-size: 16px;
  font-weight: 900;
  text-decoration: none;
  &:hover{
    text-decoration: underline;
  }
`;

function Register(props) {
  return (
    <Background>
      <Container>
        <MainAreaDiv>
          <Title>User Login</Title>
          <OuterAreaDiv>
            <Dialogue>ID ( 3~5 letters )<HighLight>*</HighLight></Dialogue>
            <UserId placeholder="ID"></UserId>
            <Dialogue>PW ( 8~ 15 letters)<HighLight>*</HighLight></Dialogue>
            <UserPw placeholder="Password"></UserPw>
            <StyledLink to={"/register"}>Don't have account yet? sign in here.</StyledLink>
          </OuterAreaDiv>

          <AddButton
              desc={"Login"} width={"170px"} height={"50px"} Btnimg={""} color={"#b6f4ff"}
            ></AddButton>

        </MainAreaDiv>
      </Container>
    </Background>
  );
}

export default Register;