import Navbar from "./Components/Navbar/Navbar";

import "./App.css";
import Blogs from "./Components/Blogs/Blogs";

function App() {
  return (
    <>
      <Navbar></Navbar>
      <div className="main-container flex text-center ">
        <div className="left-container w-[70%] border ">
          <h1>total:0</h1>
          <Blogs></Blogs>
        </div>
        <div className="right-container w-[30%] border">
          Selected blogs
        </div>
      </div>
    </>
  );
}

export default App;
