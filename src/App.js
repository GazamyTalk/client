import { Route, Routes, BrowserRouter } from "react-router-dom";

import HomePage from "./pages/Home";
import Chat from "./pages/Chat";
import Register from "./pages/Register";
import AddFriend from "./pages/AddFriend";
import Login from "./pages/Login"
import Settings from "./pages/Settings"
import ChatSettings from "./pages/ChatSettings"
import "./App.css";
// import api from "./services/account/api";
import mainApi from "./services/mainApi/api";
import LoadingPage from "./pages/Loading";
import { useEffect } from "react";

function App() {
  const query = mainApi.useGetAccountQuery();
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
  if ( query.isLoading ) {
    return <LoadingPage></LoadingPage>
  }
  else {
    // console.log(query.data);
    if ( !query.isSuccess ) {
      return <h1>Can't find server</h1>
    }
    else if ( query.data.success ) {
      return <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage></HomePage>}></Route>
          <Route path="/loading" element={<LoadingPage></LoadingPage>}></Route>
          <Route path="/chat" element={<Chat></Chat>}></Route>
          <Route path="/chat/settings" element={<ChatSettings></ChatSettings>}></Route>
          <Route path="/addFriend" element={<AddFriend></AddFriend>}></Route>
          <Route path="/settings" element={<Settings></Settings>}></Route>
        </Routes>
      </BrowserRouter>
    } else {
      return <BrowserRouter>
        <Routes>
          <Route path="/register" element={<Register></Register>}></Route>
          <Route path="/" element={<Login></Login>}></Route>
        </Routes>
      </BrowserRouter>
    }
  }
}

export default App;