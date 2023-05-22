import styled from "styled-components";
import Rooms from "./Rooms";
import UserProfile from "./UserProfile";

const MainAreaDiv = styled.div`
    flex: 1;
`

const OuterAreaDiv = styled.div`
    display: flex;
    padding: 40px;
    height: calc(100% - 80px);
`

const LeftArea = styled.div`
    height: 100%;
    flex: 1;
    border-radius: 10px;
    background-color: rgb(255, 255,255);
`

const RightArea = styled.div`
    margin-left: 30px;
    height: 100%;
    flex: 2;
    display: flex;
    flex-direction: column;
`
    
const UserProfileArea = styled.div`
    border-radius: 10px;
    background-color: rgb(255, 255,255);
    flex: 3;
`
    
const EmptyArea = styled.div`
    margin-top: 20px;
    border-radius: 10px;
    background-color: rgb(255, 255,255);
    flex: 1;
`



export default function MainArea(props) {
    return (
        <MainAreaDiv>
            <OuterAreaDiv>
                <LeftArea>
                    <Rooms rooms={props.rooms}></Rooms>
                </LeftArea>
                <RightArea>
                    <UserProfileArea><UserProfile img={props.img} name={props.name} desc={props.desc}></UserProfile></UserProfileArea>
                    <EmptyArea></EmptyArea>
                </RightArea>
            </OuterAreaDiv>
        </MainAreaDiv>
    );
}