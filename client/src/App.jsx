import Login from "./components/Login";
import './App.css'
import FeedbackForm from "./components/FeedbackForm";
import Navbar from "./components/Navbar";
import Homepage from "./components/Homepage";
import AboutUs from "./components/AboutUs";
import UserDashboard from "./components/UserDashboard";

function App() {
  

  return (
    <>
     
      <Navbar />
      <Login />
       <Homepage />
      <FeedbackForm />
      <UserDashboard />
      <AboutUs />
    </>
  )
}

export default App
