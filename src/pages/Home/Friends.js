import styled from "styled-components"
import FriendForm from "./FriendForm";
import { useNavigate } from "react-router-dom";

const FriendsNav = styled.nav`
    margin-top: 10px;
    // overflow-y: scroll;
    // flex: 1;
    // overflow: hidden;
`;


export default function Friends(props) {
    const navigate = useNavigate();
    return (
        <FriendsNav>
            {
                props.friends.map((friend) => 
                    <FriendForm
                        img={friend.userImage}
                        name={friend.nickname}
                        desc={friend.description}
                        height={'100px'}
                        key={friend.username}
                        privateChat={props.privateChat}
                        onClickChat={() => {
                            navigate(`/chat?roomId=${friend.roomid}`);
                        }}
                    ></FriendForm>
                )
                
            }
        </FriendsNav>
    );
}