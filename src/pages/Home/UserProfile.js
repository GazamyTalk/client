import styled from "styled-components";

const UserProfileInnerArea = styled.div`
    margin: 10px;
`;

const User = styled.div`
    margin: 30px;
    display: flex;
    --parent-height: 200px;
    height: var(--parent-height);
`;

const UserImg = styled.img`
    height: 100%;
    width: var(--parent-height);
    object-fill: cover;
    border-radius: 10px;
`;

const UserDetail = styled.div`
    margin-left: 30px;
    margin-top: 50px;
    // display: flex;
    // flex-direction: column;
    // justify-content: center;
`;

const UserName = styled.div`
    font-size: 30px;
    font-weight: bold;
`;

const UserDesc = styled.div`
    font-size: 20px;
`



export default function UserProfile(props) {
    return (
        <UserProfileInnerArea>
            <User>
                <UserImg src={props.img}></UserImg>
                <UserDetail>
                    <UserName>{props.name}</UserName>
                    <UserDesc>{props.desc}</UserDesc>
                </UserDetail>
            </User>
        </UserProfileInnerArea>
    );
}