import styled from "styled-components";
import Background from "../../components/Background.js";
import JustButton from "../../components/justButton.js";
import { Link } from "react-router-dom";
import { useState } from "react";
import * as authService from "../../services/auth/index.js";

const Container = styled.div`
  display: flex;
  height: 100vh;
  align-items: center;
  justify-content: center;
`;

const UserId = styled.input`
  margin: 0 20px 20px 20px;
  padding: 12px;
  width: 100%;
  background: #E5F9FF;
  height 35px;
  font-size: 15px;
  border: none;
  border-radius: 5px;
`;

const UserPw = styled.input`
margin: 0 20px 20px 20px;
  padding: 12px;
  
  width: 100%;
  background: #E5F9FF;
  height 35px;
  font-size: 15px;
  border: none;
  border-radius: 5px;
`;

//로고 및 로그인 설명

const MainAreaDiv = styled.div`
  background: white;
  width: 430px;
  height: 420px;
  display: flex;
  align-items: center;
  justify-content: space-around;
  flex-direction: column;
  border-radius: 10px;
  box-shadow: 0px 4px 10px #4E6C7C;
`;

const OuterAreaDiv = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 80%;
`;

const Title = styled.div`
  font-size: 28px;
  font-weight: 900;
  height: 50px;
  background: white;
  padding: 10px;
  margin-top:20px;
  margin-bottom:0px;
  border-radius: 10px 10px 0px 0px;
  text-align: center;
`;

const StyledLink = styled(Link)`
  color: #2e8eff;
  font-size: 16px;
  font-weight: 900;
  text-decoration: none;
  &:hover {
    text-decoration: underline;
  }
`;

function Register(props) {
  const [id, setId] = useState('');
  const [pw, setPw] = useState('');
  return (
    <Background>
      <Container>
        <MainAreaDiv>
          <Title>User Login</Title>
          <OuterAreaDiv>

            <UserId placeholder="ID" value={id} onChange={(e) => {
              setId(e.target.value)
            }}></UserId>

            <UserPw placeholder="Password" value={pw} onChange={(e) => {
              setPw(e.target.value)
            }}></UserPw>
            <StyledLink to={"/register"}>
              Don't have account yet?
            </StyledLink>
          </OuterAreaDiv>

          <JustButton
            desc={"Login"}
            width={"200px"}
            height={"50px"}
            Btnimg={""}
            color={"#b6f4ff"}
            onClick={() => {
              authService.login(id, pw, (data, sessionid) => {
                console.log(data, sessionid);
                if ( data.success ) {
                  debugger;
                  alert('succeed');
                  window.location.reload();
                } else {
                  alert(`failed: ${data.error}`);
                }
              });
            }}
          ></JustButton>
        </MainAreaDiv>
      </Container>
    </Background>
  );
}

export default Register;
