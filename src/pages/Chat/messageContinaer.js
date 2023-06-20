import Message from "./message";
import mainApi from "../../services/mainApi/api";

export default function MessageContainer(props) {
    const query = mainApi.useGetOtherUserInfoQuery({ username: props.Username });
    if ( query.isLoading ) return <></>
    // console.log('query:', query);
    // console.log('username:', props.Username);
    const userInfo = query.data.otherUserInfos[0];
    return (
        <Message
            UserName={userInfo.nickname}
            ChatContent={props.ChatContent}
            usrImg={query.isLoading ? '' : userInfo.userImage}
        ></Message>
    )
}