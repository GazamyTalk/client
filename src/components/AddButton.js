import styled from "styled-components";
import addImage from "../assets/images/addImage.png";

const AddButtonArea = styled.div`
  transition: 0.3s;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 10px;
  // width: 100%;
  height: ${props => props.height};
  width: ${props => props.width};
  background: #b6f4ff;
  border-radius: 10px;
  &:hover {
    transition: 0.3s;
    background: rgb(238, 252, 255);
    transform: translateY(-5px);
    box-shadow: 0px 0px 20px 1px rgba(61, 61, 75, 0.2);
    cursor: pointer;
  }
`;

const StyledAddImg = styled.img`
  // position: relative;
  // left: 0;
  // width: 60px;
  // height: 72px;
  // padding: 3px;
  margin: 20px 10px 20px 20px;
`;

const Description = styled.div`
  color: ivory;
  text-decoration: none;
  font-size: 20px;
  font-weight: 900;
  color: black;
`;



export default function AddButton(props) {
  return (
    <AddButtonArea height={props.height} width={props.width} onClick={props.onClick}>
      <StyledAddImg src={addImage}></StyledAddImg>
      <Description>{props.desc}</Description>
    </AddButtonArea>
  );
}