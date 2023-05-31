import styled from "styled-components";

const Container = styled.div`
  display: flex;
  height: 100vh;
`

const IdForm = styled.div`
  width: 120px;
  hegith: 30px;
  font-size: 30px;
  background: white;
`;

const PwForm = styled.div`
`;

export default function RegisterForm({ id, pw }){
  return (
    <Container>
      <IdForm>{id}</IdForm>
      <PwForm>{pw}</PwForm>
    </Container>
  );
}