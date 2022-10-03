import Home from "./pages/Home";
import Combat from "./pages/Combat";
import Monster from "./pages/Monster";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Navbar from "./components/Layout/Navbar";
import Footer from "./components/Layout/Footer";
import Brands from "./pages/Brands";
import Blogs from "./pages/Blogs";
import Support from "./pages/Support";
import Showcase1 from "./pages/Showcase-1";
import Showcase2 from "./pages/Showcase-2";
import BlogDetails from "./pages/BlogDetails";
import DeepDive from "./pages/DeepDive";
import Jobs from "./pages/Jobs";
import Profile from "./pages/Profile";
import ProfileEdit from "./pages/ProfileEdit";
import SubmitData from "./pages/SubmitData";

function App() {
  return (
    <div>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/brands" exact element={<Brands />} />
          <Route path="/combat" element={<Combat />} />
          <Route path="/monsters" element={<Monster />} />
          <Route path="/blog" element={<Blogs />} />
          <Route path="/support" element={<Support />} />
          <Route path="/showcase-1" element={<Showcase1 />} />
          <Route path="/showcase-2" element={<Showcase2 />} />
          <Route path="/blog-details" element={<BlogDetails />} />
          <Route path="/deep-dive" element={<DeepDive />} />
          <Route path="/jobs" element={<Jobs />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/profile-edit" element={<ProfileEdit />} />
          <Route path="/submit-data" element={<SubmitData />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
