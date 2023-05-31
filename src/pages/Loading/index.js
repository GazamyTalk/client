import styled, { keyframes } from "styled-components";
import gazamy from "../../assets/images/gazamy.png";
const Container = styled.div`
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
`;

const rotateAnimation = keyframes`
  100% {
    transform: rotate(360deg);
    filter: hue-rotate(360deg);
  }
`;

const colorChangeAnimation = keyframes`
0%{
    color: red;
}  
100% {
    color: transparent;
}
`;

const LogoImg = styled.div`
  background-image: url(${gazamy});
  background-size: 300px 300px;
  background-repeat: no-repeat;
  width: 300px;
  height: 300px;
  animation: ${rotateAnimation} infinite 0.2s linear;
`;

const Content = styled.div`
    font-size: 40px;
    font-weight: 900;
    padding: 20px;
    text-align: center;
    width: 500px;
    height: 50px;
    animation: ${colorChangeAnimation} infinite 0.01s linear;
    `;

export default function LoadingPage() {
    return (
        <Container>
            <LogoImg/>
            <Content>Loading...</Content>
        </Container>
    )
}