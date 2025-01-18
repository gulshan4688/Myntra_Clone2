import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Outlet } from "react-router-dom";
import FetchItems from "../components/FetchItems";
import { useSelector } from "react-redux";
import "bootstrap"
// import Loading from '../components/Loading'
const App = () => {
  const fetchStatus=useSelector(store=>store.items);
  return (
    <>
      <Header />
      <FetchItems/>
      {fetchStatus.currentlyFetching ? <Loading/> : <Outlet/>}
      <Footer />
    </>
  );
};

export default App;
