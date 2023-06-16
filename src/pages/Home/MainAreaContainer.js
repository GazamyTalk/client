import styled from "styled-components";
import MainArea from "./MainArea";
import MyUserImg from "../../assets/images/profile.png";

const MainAreaContainerWrapper = styled.div`
`;

export default function MainAreaContainer() {
    return (
        <MainArea
            img={MyUserImg}
            name={"김뫄뫄"}
            desc={"나는 아무 생각이 없다 왜냐하면 아무 생각이 없기 때문이다"}
            rooms={[{roomImage: "https://i.ibb.co/yWvqky7/tmp2.jpg", roomname: "testRoomname", description: "testRoomDesc"},
            {roomImage: "https://i.ibb.co/yWvqky7/tmp2.jpg", roomname: "testRoomname", description: "testRoomDesc"}]}
        ></MainArea>
    );
}