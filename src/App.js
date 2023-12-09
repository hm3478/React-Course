import React from "react";
import  ReactDOM  from "react-dom/client";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import Body from "./Components/Body";
import Conatct from "./Components/Contact";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import About from "./Components/About";
import Contact from "./Components/Contact";

const AppLayout =()=>{
        return(
                <div className="app">
                <Header/>
                <Body/>
                <Footer/>
                </div>
        );
};
const appRouter = createBrowserRouter([
           {
             path: "/", 
             element: <AppLayout />, 
            },
            {
              path: "/about",
              element: <About />,
            },
            {
              path: "/contact",
              element: <Contact/>,
            },

      ]);
      const root = ReactDOM.createRoot(document.getElementById("root"));
      root.render(<RouterProvider router={appRouter} />); // render RouterProvider and use router as props and pass value appRouter