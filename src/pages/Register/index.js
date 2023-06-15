import styled from "styled-components";
import Background from "../../components/Background.js";
import JustButton from "../../components/justButton.js";

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
  margin: 0 20px 20px 20px;
  padding: 5px;
  width: 100%;
  background: #E5F9FF;
  height 35px;
  font-size: 15px;
  border: none;
  border-radius: 5px;
`;

const UserPw = styled.input`
  padding: 5px;
  margin: 0 20px 20px 20px;
  width: 100%;
  background: #E5F9FF;
  height 35px;
  font-size: 15px;
  border: none;
  border-radius: 5px;
`;

const Nickname = styled.input`
margin: 0 20px 20px 20px;
  padding: 5px;
  width: 100%;
  background: #E5F9FF;
  height 35px;
  font-size: 15px;
  border: none;
  border-radius: 5px;
`;

const HighLight = styled.span`
  color: red;
  font-size: inherit;
`;

const MainAreaDiv = styled.div`
  background: white;
  width: 30%;
  height: 70%;
  display: flex;
  align-items: center;
  justify-content: space-around;
  flex-direction: column;
  border-radius: 10px;
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

function Register(props) {
  return (
    <Background>
      <Container>
        <MainAreaDiv>
          <Title>Sign in</Title>
          <OuterAreaDiv>
            <Dialogue>ID ( 3 ~ 5 letters ) <HighLight>*</HighLight></Dialogue>
            <UserId placeholder="ID"></UserId>
            <Dialogue>PW ( 8 ~ 15 letters ) <HighLight>*</HighLight></Dialogue>
            <UserPw placeholder="Password"></UserPw>
            <Dialogue>Nickname <HighLight>*</HighLight></Dialogue>
            <Nickname placeholder="Nickname"></Nickname>
          </OuterAreaDiv>

          <JustButton
              desc={"submit"} width={"170px"} height={"50px"} image={"none"} color={"#b6f4ff"}
            ></JustButton>

        </MainAreaDiv>
      </Container>
    </Background>
  );
}

export default Register;
