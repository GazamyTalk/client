import styled from "styled-components";

const AddButtonArea = styled.div`
  transition: 0.3s;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 10px;
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

const Description = styled.div`
  color: ivory;
  text-decoration: none;
  font-size: 20px;
  font-weight: 900;
  color: black;
`;

export default function justButton(props) {
  return (
    <AddButtonArea height={props.height} width={props.width} onClick={props.onClick} color={props.color}>
      <Description>{props.desc}</Description>
    </AddButtonArea>
  );
}