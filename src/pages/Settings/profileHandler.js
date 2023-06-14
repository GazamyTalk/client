import styled from "styled-components";

const Container = styled.div`
    width: 40px;
    height: 40px;
`

const ImageBox = styled.div`
    width: 70px;
    height: 70px;
    background-image : url(${(props) => props.image});
    background-size: 70px 70px;
    background-repeat: no-repeat;
    border: 1px solid black;
`;

export default function ProfileHandler(props) {
  return (
    <Container>
      <ImageBox image={props.image}></ImageBox>
    </Container>
  );
}
