import styled from "styled-components";
import Rooms from "./Rooms";
import UserProfile from "./UserProfile";
import JustButton from "../../components/justButton.js";

const MainAreaDiv = styled.div`
    flex: 1;
`

const OuterAreaDiv = styled.div`
    display: flex;
    padding: 40px;
    height: calc(100% - 80px);
    justify-content: center;
    align-items: center;
`

const WhiteBox = styled.div`
    position: relative;
    width: 900px;
    height: 800px;
    background: #ffffff;
    box-shadow: 0px 4px 10px rgba(78, 108, 124, 0.25);
    border-radius: 10px;
    overflow-y: scroll;
    display: flex;
    flex-direction: column;
    align-items: center;
`

const MiniBox = styled.div`
    box-sizing: border-box;
    width: 730px;
    height: 230px;
    background: #ffffff;
    border: 2px solid rgba(221, 221, 221, 0.5);
    border-radius: 10px;
    display: flex;
    align-items: center;
    margin-top:73px;
`
    
const UserProfileArea = styled.div`
    border-radius: 10px;
    background-color: rgb(255, 255,255);
    flex: 3;
`

const TEXT = styled.div`
    position: fixed;
    width: 100px;
    height: 20px;
    font-weight: 600;
    font-size: 20px;
    line-height: 20px;
    color: #333333;
    margin-left:40px;
`

export default function MainArea(props) {
    return (
        <MainAreaDiv>
            <OuterAreaDiv>
                <WhiteBox>
                    <MiniBox>
                        <TEXT>내 프로필</TEXT>
                        <UserProfileArea><UserProfile img={props.img} name={props.name} desc={props.desc}></UserProfile></UserProfileArea>
                        <JustButton
                            desc={"프로필 수정"} width={"170px"} height={"50px"} image={"none"} color={"#AEE9FF"}
                        ></JustButton>
                    </MiniBox>
                    <Rooms rooms={props.rooms}></Rooms>
                </WhiteBox>
            </OuterAreaDiv>
        </MainAreaDiv>
    );
}