import styled from "styled-components";


const ImageBox = styled.img`
    width: 70px;
    height: 70px;
    background-image : url(${(props) => props.image});
    background-size: 70px 70px;
    background-repeat: no-repeat;
    border:none;
    margin: 10px;
`;

export default function ProfileHandler(props) {
  return (
      <ImageBox image={props.image}></ImageBox>
  );
}
