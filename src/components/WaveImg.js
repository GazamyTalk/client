import styled from "styled-components";
import waveImg from "../assets/images/wave.png";

const StyledImg = styled.img`
  height:100vh;
  width: 100vw;
`;

export default function WaveImg() {
    return <StyledImg src={waveImg}></StyledImg>
}