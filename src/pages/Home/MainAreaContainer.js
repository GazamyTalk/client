import MainArea from "./MainArea";

export default function MainAreaContainer() {
    return (
        <MainArea
            img={"https://i.ibb.co/yWvqky7/tmp2.jpg"}
            name={"testMyUser"}
            desc={"testDesc"}
            rooms={[{roomImage: "https://i.ibb.co/yWvqky7/tmp2.jpg", roomname: "testRoomname", description: "testRoomDesc"},
                    {roomImage: "https://i.ibb.co/yWvqky7/tmp2.jpg", roomname: "testRoomname", description: "testRoomDesc"}]}
        ></MainArea>
    );
}