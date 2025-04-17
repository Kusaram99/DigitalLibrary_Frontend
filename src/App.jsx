import React, { use } from "react";
import { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import HeroSection from "./components/Hero/HeroSection";
import BestBooksSection from "./components/BestBooks/BestBooksSection";
import LibraryFeature from "./components/Library-Features/LibraryFeature";
import TopBooks from "./components/TopBooks/TopBooks";
import Testimonals from "./components/Testimonals/Testimonals";
import AOS from "aos";
import "aos/dist/aos.css";
import Footer from "./components/Footer/Footer";
import EbookAuth from "./components/Auth/EbookAuth";
import BookStore from "./components/BookStore/BookStore";
import ProductPage from "./components/Product/Product";
import LibraryContainer from "./LibraryComponets/LibraryContainer";
import SellerAccount from "./sellerAccount/SellerAccount";
import UploadBook from "./sellerAccount/UploadBook";
import { useDispatch } from "react-redux";
import { fetchCurrentUser } from "./redux/slices/authThunk";
import ManageBooks from "./sellerAccount/ManageBooks";
import UpdateBook from "./sellerAccount/UpdateBook";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    AOS.init({
      once: true,
      duration: 900,
      easing: "ease-out-sine",
      delay: 100,
    });

    dispatch(fetchCurrentUser());

    AOS.refresh();
  }, []);

  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/auth" element={<EbookAuth />} />
        <Route path="/store" element={<BookStore />} />
        <Route path="/product/:id" element={<ProductPage />} />
        <Route path="/library" element={<LibraryContainer />} />
        <Route path="/seller" element={<SellerAccount />}>
          <Route path="upload-book" element={<UploadBook />} />
          <Route path="all-books" element={<ManageBooks />} />
          <Route path="update-book" element={<UpdateBook />} />
        </Route>
      </Routes>
      <Footer />
    </Router>
  );
}

const Home = () => {
  return (
    <>
      <HeroSection />
      <BestBooksSection />
      <LibraryFeature />
      <TopBooks />
      <Testimonals />
    </>
  );
};

export default App;
