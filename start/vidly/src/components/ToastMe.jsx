import React, { Component } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
// minified version is also included
// import 'react-toastify/dist/ReactToastify.min.css';

class Me extends Component {
  notify = () => toast.success("Wow so easy !");

  render() {
    return (
      <div>
        <button className="btn btn-primary" onClick={this.notify}>
          Notify !
        </button>
        <ToastContainer />
      </div>
    );
  }
}

export default Me;
