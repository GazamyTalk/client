import styled from "styled-components";
import RoomForm from "./RoomForm";

const RoomsNav = styled.nav`
    margin-top: 10px;
    width: 730px;
`

export default function Rooms(props) {
    return (
        <RoomsNav>
            {
                props.rooms.map((room) => 
                    <RoomForm
                        img={room.roomImage}
                        name={room.roomname}
                        desc={room.description}
                        memberNum={room.users.length}
                        height={'70px'}
                        key={room.roomid}
                    ></RoomForm>
                )
            }
        </RoomsNav>
    );
}