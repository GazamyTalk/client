import styled from "styled-components";
import Background from "../../components/Background.js";
import AddButton from "../../components/AddButton.js";
import FriendsList from "./friendList.js";

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
`;

const Form = styled.div`
  display: flex;
  height: 100%;
  width: 50%;
  align-items: center;
  flex: 1;
  justify-content: center;
`;

const FormBackground = styled.div`
  display: flex;
  background: white;
  width: 70%;
  height: 70%;
  flex-direction: column;
  border-radius: 40px;
  justify-content: center;
  align-items: center;
`;

const Text = styled.div`
  font-size: 30px;
  font-weight: 900;
  margin: 50px;
  text-align: center;
`;

const Input = styled.input`
  background: white;
  border: none;
  border-radius: 10px;
  padding: 10px;
  margin: 15px;
  font-size: 20px;
  background: #223f3e;
  color: gray;
  text-align: center;
  &:focus {
    color: white;
  }
`;

function AddFriend() {
  return (
    <Background>
      <Container>
        <FriendsList // friends={query.data}
          friends={[
            {
              userImage: "https://i.ibb.co/yWvqky7/tmp2.jpg",
              username: "testUser",
              description: "testDesc",
            },
            {
              userImage: "https://i.ibb.co/yWvqky7/tmp2.jpg",
              username: "testUser2",
              description: "testDesc2",
            },
          ]}
          onAddFriend={(e) => {
            console.log(e);
          }}
        ></FriendsList>
        <Form>
          <FormBackground>
            <Text>Enter your friend's ID</Text>
            <Input></Input>
            <AddButton
              desc={"Click here to add Friend"}
              width={"280px"}
              height={"90px"}
            >
              Submit
            </AddButton>
          </FormBackground>
        </Form>
      </Container>
    </Background>
  );
}

export default AddFriend;
