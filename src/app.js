import React from "react";
import ReactDOM from "react-dom/client";
import Navigation from "./Navigation";
import Body from "./Body";
import Footer from "./Footer";
import About from "./About";
import { createBrowserRouter } from "react-router-dom";
import { RouterProvider } from "react-router-dom";
import { Outlet } from "react-router-dom";
import Mortgagecal from "./Mortgagecal";
import StartPage from "./StartPage";
const AppLayout=()=>{
    return (
 <div>
          <Navigation />
          <Outlet/>
          <Footer/>
 </div>
    )
}
const appRouter=createBrowserRouter([
    {
        parh:"/",
        element:<AppLayout/>,
        children:[
            {
                path:"/",
                element: <Body/>
            },
            {
             path:"/about",
             element:<About/>
            },
            {
                path:"/mortgage-calculator",
                element:<Mortgagecal/>
            },
            {
                path:"/start-page",
                element:<StartPage/>
            }
        ]
    }
])
const root= ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter}/>);