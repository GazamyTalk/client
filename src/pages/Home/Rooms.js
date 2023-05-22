import styled from "styled-components";
import RoomForm from "./RoomForm";

const RoomsNav = styled.nav`
    margin-top: 10px;
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
                        height={'70px'}
                        key={room.roomid}
                    ></RoomForm>
                )
            }
        </RoomsNav>
    );
}