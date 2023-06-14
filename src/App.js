import { Route, Routes, BrowserRouter } from "react-router-dom";

import HomePage from "./pages/Home";
import Chat from "./pages/Chat";
import Register from "./pages/Register";
import AddFriend from "./pages/AddFriend";
import Login from "./pages/Login"
import Settings from "./pages/Settings"
import "./App.css";
// import api from "./services/friends/api";
import LoadingPage from "./pages/Loading";
function App() {
  // const query = api.useGetAccountQuery();
  // return query.isLoading ? (
  //   <LoadingPage></LoadingPage>
  // ) : (
  //   <BrowserRouter>
  //     {query.data.success ? (
  //       <Routes>
  //         <Route path="/" element={<HomePage></HomePage>}></Route>
  //         {/* <Route path="/chat" element={<ChatPage></ChatPage>}></Route> */}
  //       </Routes>
  //     ) : (
  //       <Routes>
  //         {/* <Route path="/login" element={<LoginPage></LoginPage>}></Route> */}
  //         {/* <Route path="/register" element={<RegisterPage></RegisterPage>}></Route> */}
  //       </Routes>
  //     )}
  //   </BrowserRouter>
  // );
  // return <HomePage></HomePage>
  return <BrowserRouter>
    <Routes>
      <Route path="/" element={<HomePage></HomePage>}></Route>
      <Route path="/loading" element={<LoadingPage></LoadingPage>}></Route>
      <Route path="/chat" element={<Chat></Chat>}></Route>
      <Route path="/register" element={<Register></Register>}></Route>
      <Route path="/login" element={<Login></Login>}></Route>
      <Route path="/addFriend" element={<AddFriend></AddFriend>}></Route>
      <Route path="/settings" element={<Settings></Settings>}></Route>
    </Routes>
  </BrowserRouter>
}

export default App;