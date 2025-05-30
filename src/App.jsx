import React from "react";
import HomePage from "./pages/HomePage";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import MailSender from "./pages/MailSender";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/mailsender" element={<MailSender />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
