import styled from "styled-components"
import FriendForm from "./FriendForm";

const FriendsNav = styled.nav`
    margin-top: 10px;
    // overflow-y: scroll;
    // flex: 1;
    // overflow: hidden;
`;


export default function Friends(props) {
    return (
        <FriendsNav>
            {
                props.friends.map((friend) => 
                    <FriendForm
                        img={friend.userImage}
                        name={friend.username}
                        desc={friend.description}
                        height={'100px'}
                        key={friend.username}
                        privateChat={props.privateChat}
                    ></FriendForm>
                )
                
            }
        </FriendsNav>
    );
}