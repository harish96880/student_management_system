import EditUserPage from "./Pages/EditUserPage";
import FormPage from "./Pages/FormPage";
import HomePage from "./Pages/HomePage";
import SingleUserPage from "./Pages/SingleUserPage";
import FormComponent from "./components/FormComponent";
import Header from "./components/Header";
import StudentTable from "./components/StudentTable";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element = {<HomePage />} />
        <Route path="/form" element = {<FormPage />} />
        <Route path="/edit/:id" element = {<EditUserPage />} />
        <Route path="/view/:id" element = {<SingleUserPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App