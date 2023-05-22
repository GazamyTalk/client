import styled from "styled-components";
import Background from "../../components/Background.js";
import FriendsBarContainer from "./FriendsBarContainer.js";
import MainAreaContainer from "./MainAreaContainer.js";


const HomePageBackGround = styled.div`
  display: flex;
`

function HomePage() {
  return (
    <Background>
      <HomePageBackGround>
        <FriendsBarContainer></FriendsBarContainer>
        <MainAreaContainer></MainAreaContainer>
      </HomePageBackGround>
    </Background>
  );
}

export default HomePage;