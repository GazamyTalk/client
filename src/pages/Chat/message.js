import styled from "styled-components"
import ReplacedImg from "../../assets/images/gazamy.png";

const TextArea = styled.div `
    font-size: 30px;
    margin: 10px;
    background: red;
    display: flex;
    width: 100%;
`;

const ChatContent = styled.div`
    font-size: 20px;
    font-weight: 900;
    padding: 10px;
`;

const UserImg = styled.div`
    width: 50px;
    height: 50px;
    background-image: url(${props => props.UserImg??ReplacedImg});
    background-size: 50px 50px;
    `;


export default function Friends(props) {
    return (
        <TextArea>
            <UserImg></UserImg>
            <ChatContent>{props.ChatContent}</ChatContent>
        </TextArea>
    );
}