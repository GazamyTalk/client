import styled from "styled-components";
import gazamy from "../../assets/images/gazamy.png";
import wave from "../../assets/images/wave.png";
import PropagateLoader from "react-spinners/PropagateLoader";

const Container = styled.div`
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
`;

const PADO = styled.div`
  background-image: url(${wave});
  background-size: 100% 100%;
  background-repeat: no-repeat;
  width: 100%;
  height: 70%;
  bottom : 0;
  position:fixed;
`;

const BackImg = styled.div`
  background: white;
  opacity: 0.5;
  width: 70%;
  height: 70%;
  display: flex;
  align-items: center;
  justify-content: space-around;
  flex-direction: column;
  border-radius: 3px;
  box-shadow: 0px 10px 10px 1px #4A5085;
`;

const LogoImg1 = styled.div`
  background-image: url(${gazamy});
  background-size: 300px 300px;
  background-repeat: no-repeat;
  width: 300px;
  height: 300px;
  left: 590px;
  position:absolute;
`;

const LogoImg2 = styled.div`
  background-image: url(${gazamy});
  background-size: 300px 300px;
  background-repeat: no-repeat;
  width: 300px;
  height: 300px;
  transform: scaleX(-1);
  right: 590px;
  position:absolute;
`;

export default function LoadingPage() {
    return (
        <Container>
            <PADO/>
            <BackImg/>
            <LogoImg1/>
            <LogoImg2/>
            <span
                style={{
                    position: "absolute",
                    top: "45%",
                    left: "49.6%"
                }}
            ><PropagateLoader color="#7AE2F2"/></span>
        </Container>
    )
}