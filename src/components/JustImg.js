import styled from "styled-components";

const AddButtonArea = styled.div`
  transition: 0.3s;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 10px;
  margin-bottom:60px;
  // width: 100%;
  height: ${props => props.height};
  width: ${props => props.width};
  background: ${props => props.color};
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
  display: flex;
  justify-content: center;
  background-image: url(${props => (props.image === "none" ? "" : `url(${props.image})`)});
  background-size: 40px 40px;
  width: 40px;
  height: 40px;
`;


export default function justButton(props) {
  return (
    <AddButtonArea height={props.height} width={props.width} onClick={props.onClick} color={props.color}>
              <StyledAddImg src={props.image}></StyledAddImg>
    </AddButtonArea>
  );
}