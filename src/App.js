import { Route, Routes, BrowserRouter } from "react-router-dom";

import HomePage from "./pages/Home";
// import Chat from "./pages/chat.js"
// import Register from "./pages/register.js"
import "./App.css";
// import { ApiProvider } from "@reduxjs/toolkit/dist/query/react/ApiProvider.js";
// import store from "./app/store.js";

function App({}) {
  return (
    // <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage></HomePage>}></Route>
          {/* <Route path="/chat" element={<Chat></Chat>}></Route>
          <Route path="/register" element={<Register></Register>}></Route> */}
        </Routes>
      </BrowserRouter>
    // </Provider>
  );
}

export default App;