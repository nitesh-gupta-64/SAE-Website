import "./App.css";
import { Route, Routes } from 'react-router-dom';
import Home from "./Components/Home";
import Navbar from "./Components/Navbar";
import Autokriti from "./Components/Autokriti"
import Accelerons from "./Components/Accelerons"
import ContactUs from "./Components/ContactUs"
import Footer from "./Components/Footer"
import MainHeader from "./Components/MainHeader"
import NotFound from "./Components/NotFound"
import Sponsors from "./Components/Sponsors"
import Blogs from "./Components/Blogs"
import Nitrox from "./Components/Nitrox"
import TermsAndConditions from "./Components/TermsAndConditions";
import PrivacyPolicy from "./Components/PrivacyPolicy";
import RefundPolicy from "./Components/RefundPolicy";
import Register from "./Components/Register";
import MoreInfo from "./Components/MoreInfo";
import NavPage from "./Components/NavPage";

function App() {
  return (
    <div className="w-screen h-full">
      <Navbar/>
      <Routes>
        <Route path='/' element={<MainHeader/>}>
          <Route index element={<Home/>}/>
          <Route path='/autokriti' element={<Autokriti/>}/>
          <Route path='/accelerons' element={<Accelerons/>}/>
          <Route path='/nitrox' element={<Nitrox/>}/>
          <Route path='/sponsors' element={<Sponsors/>}/>
          <Route path='/blogs' element={<Blogs/>}/>
          <Route path='/contactus' element={<ContactUs/>}/>
          <Route path='/termsandconditions' element={<TermsAndConditions/>}/>
          <Route path='/privacypolicy' element={<PrivacyPolicy/>}/>
          <Route path='/refundpolicy' element={<RefundPolicy/>}/>
          <Route path='/autokriti/register' element={<Register/>}/>
          <Route path='/autokriti12' element={<MoreInfo/>}/>
          <Route path='/navpage' element={<NavPage/>}/>
          <Route path='*' element={<NotFound/>}/>
        </Route>
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
