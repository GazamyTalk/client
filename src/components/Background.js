import styled from "styled-components";
import waveImage from "../assets/images/wave.png";


const StyledBody = styled.div`
  overflow: hidden;
  height: 100vh;
  width: 100vw;
  margin: 0;
  padding: 0;
  background-image: url(${props => waveImage});
  background-size: cover;
`;


export default function Background(props) {
    return (
      <StyledBody>
        {props.children}
      </StyledBody>
    );
}