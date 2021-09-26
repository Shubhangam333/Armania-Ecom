import React, { useContext } from "react";
import NavBar from "./NavBar";
import Notify from "./Notify";
import Modal from "./Modal";

function Layout({ children }) {
  return (<>
      <NavBar />
      <Notify />
      <Modal />

      {children}
    </>);
}

export default Layout;
