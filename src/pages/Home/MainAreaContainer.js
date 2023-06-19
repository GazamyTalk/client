import styled from "styled-components";
import MainArea from "./MainArea";
import MyUserImg from "../../assets/images/profile.png";
// import accountApi from "../../services/account/api";
// import roomApi from "../../services/rooms/api";
import mainApi from "../../services/mainApi/api";

const MainAreaContainerWrapper = styled.div`
`;

export default function MainAreaContainer() {
    const accountQuery = mainApi.useGetAccountQuery();
    const roomQuery = mainApi.useGetRoomsQuery();

    if ( accountQuery.isLoading || roomQuery.isLoading ) {
        return <></>
    }

    const accountData = accountQuery.data.userInfo;
    const roomData = roomQuery.data.roomInfos;

    // console.log('accountData:', accountData);
    // console.log(roomQuery);
    console.log('roomData:', roomData);
    
    return <>
        <MainArea
            img={accountData.userImage}
            name={accountData.nickname}
            desc={accountData.description}
            rooms={roomData}
        ></MainArea>
    </>;
}