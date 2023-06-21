import styled from "styled-components";


const ImageBox = styled.div`
    width: 70px;
    height: 70px;
    background-image: url(${(props) => props.image});
    background-size: 70px 70px;
    background-repeat: no-repeat;
    ${props => props.isSelect ? `
      border: green 3px solid;
    ` : `
      border: none;
    `}
    outline: none;
    margin: 10px;
`;

export default function ProfileHandler(props) {
  return (
    <ImageBox image={props.image} isSelect={props.isSelect} onClick={props.onClick}></ImageBox>
  );
}