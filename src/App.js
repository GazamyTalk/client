import { Route, Routes, BrowserRouter } from "react-router-dom";

import HomePage from "./pages/Home";
// import Chat from "./pages/chat.js"
// import Register from "./pages/register.js"
import "./App.css";
// import api from "./services/friends/api";
// import LoadingPage from "./pages/Loading";

function App({}) {
  // const query = api.useGetAccountQuery();
  // return query.isLoading ? (
  //   <LoadingPage></LoadingPage>
  // ) : (
  //   <BrowserRouter>
  //     {query.data.success ? (
  //       <Routes>
  //         <Route path="/" element={<HomePage></HomePage>}></Route>
  //         <Route path="/chat" element={<ChatPage></ChatPage>}></Route>
  //       </Routes>
  //     ) : (
  //       <Routes>
  //         <Route path="/login" element={<LoginPage></LoginPage>}></Route>
  //         <Route path="/register" element={<RegisterPage></RegisterPage>}></Route>
  //       </Routes>
  //     )}
  //   </BrowserRouter>
  // );
  return <HomePage></HomePage>
}

export default App;