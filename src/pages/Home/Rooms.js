import styled from "styled-components";
import RoomForm from "./RoomForm";
import { useNavigate } from "react-router-dom";

const RoomsNav = styled.nav`
    margin-top: 10px;
    width: 730px;
`

export default function Rooms(props) {
    const navigate = useNavigate();
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
                        onClick={() => {
                            navigate(`/chat?roomId=${room.roomid}`);
                        }}
                    ></RoomForm>
                )
            }
        </RoomsNav>
    );
}