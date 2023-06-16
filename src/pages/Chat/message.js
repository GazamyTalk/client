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
    height: 15px;
    box-shadow: 3px 4px 7px 1px rgba(100, 115, 143, 0.5);
    margin-top: 35px;
    margin-left:15px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center; 
`;

const UserImg = styled.div`
    width: 90px;
    height: 90px;
    background-image: url(${props => props.usrImg ?? ReplacedImg});
    background-size: 90px 90px;
    margin-left:10px;
    margin-bottom:15px;
`;

const UserName = styled.div`
    font-style: normal;
    font-weight: 600;
    font-size: 15px;
    line-height: 22px;
    color: #333333;
    margin-top: 10px;
    margin-left: 115px;
    position:absolute;
`;

export default function Friends(props) {
    return (
        <TextArea>
            <UserImg usrImg={props.usrImg} />
            <UserName>{props.UserName}</UserName>
            <ChatContent>{props.ChatContent}</ChatContent>
        </TextArea>
    );
}