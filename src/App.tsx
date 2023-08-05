import FormPage from "./Pages/FormPage";
import HomePage from "./Pages/HomePage";
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
      </Routes>
    </BrowserRouter>
  )
}

export default App
