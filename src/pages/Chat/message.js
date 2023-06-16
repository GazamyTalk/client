import styled from "styled-components"
import ReplacedImg from "../../assets/images/gazamy.png";

const TextArea = styled.div `
    font-size: 30px;
    margin: 10px;
    display: flex;
    width: 100%;
`;

const ChatContent = styled.div`
    font-size: 20px;
    padding: 15px;
    background: white;
    border-radius: 10px;
    height:100%;
`;

const UserImg = styled.div`
    width: 90px;
    height: 90px;
    background-image: url(${props => props.UserImg??ReplacedImg});
    background-size: 90px 90px;
    `;


export default function Friends(props) {
    return (
        <TextArea>
            <UserImg></UserImg>
            <ChatContent>{props.ChatContent}</ChatContent>
        </TextArea>
    );
}