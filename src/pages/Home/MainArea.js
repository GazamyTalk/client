import styled from "styled-components";
import Rooms from "./Rooms";
import UserProfile from "./UserProfile";
import JustButton from "../../components/justButton.js";
import {Link} from "react-router-dom";
import room from "../../assets/images/addRoom.png";
import mainApi from "../../services/mainApi/api";

const MainAreaDiv = styled.div`
    flex: 1;
`;

const OuterAreaDiv = styled.div`
    display: flex;
    padding: 40px;
    height: calc(100% - 80px);
    justify-content: center;
    align-items: center;
`;

const WhiteBox = styled.div`
    position: relative;
    width: 900px;
    height: 800px;
    background: white;
    box-shadow: 0px 4px 10px rgba(78, 108, 124, 0.25);
    border-radius: 10px;
    overflow-y: scroll;
    display: flex;
    flex-direction: column;
    align-items: center;
    &::-webkit-scrollbar {
        display:none;
    }
`;

const MiniBox = styled.div`
    box-sizing: border-box;
    width: 730px;
    height: 230px;
    border: 2px solid rgba(221, 221, 221, 0.5);
    border-radius: 10px;
    display: flex;
    align-items: center;
    margin-top:73px;
`;
    
const UserProfileArea = styled.div`
    border-radius: 10px;
    background-color: rgb(255, 255,255);
    flex: 2;
`;

const StyledLink = styled(Link)`
    text-decoration: none;
    margin: 20px;
`;

const TEXT = styled.div`
    // position: fixed;
    width: 100px;
    height: 20px;
    font-weight: 600;
    font-size: 20px;
    line-height: 20px;
    color: #333333;
    margin-left:40px;
`;

const BlueForm = styled.div`
  display: flex;
  background: #7ae2f2;
  width: 100%;
  height: 70px;
  border-radius: 15px 15px 0px 0px;
  align-items: center;
`;

const Homeicon = styled.div`
  background-image: url(${room});
  background-size: 50px 50px;
  background-repeat: no-repeat;
  background-position: bottom 5px right 0px;
  width: 50px;
  height: 50px;
  z-index: 1;
  margin: 10px;
  margin-left: 20px;
//   margin-bottom: 20px;
  &:hover {
    // transition: 0.3s;
    // transform: translateX(10px);
    // box-shadow: 0px 10px 20px 10px rgba(24, 24, 31, 0.2);
    cursor: pointer;
  }
`;

const RemainingArea = styled.div`
    margin-bottom: 100px;
    margin-top: 50px;
`;

const FormWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 900px;
  height: 80vh;
  align-item: center;
  justify-content: center;
`;

export default function MainArea(props) {
    const [addRoom, addRoomQuery] = mainApi.useAddRoomMutation();

    return (
        <MainAreaDiv>
            <OuterAreaDiv>
                <FormWrapper>

                
            <BlueForm>
              <Homeicon onClick={() => {
                addRoom();
              }}></Homeicon>
            </BlueForm>
                <WhiteBox>
                    <MiniBox>
                        {/* <TEXT>내 프로필</TEXT> */}
                        <UserProfileArea><UserProfile img={props.img} name={props.name} desc={props.desc}></UserProfile></UserProfileArea>
                        <StyledLink to="/settings"><JustButton
                            desc={"프로필 수정"} width={"170px"} height={"50px"} image={"none"} color={"#AEE9FF"}
                        ></JustButton></StyledLink>
                    </MiniBox>
                    <RemainingArea>
                        <Rooms rooms={props.rooms}></Rooms>
                    </RemainingArea>
                </WhiteBox>
                </FormWrapper>
            </OuterAreaDiv>
        </MainAreaDiv>
    );
}