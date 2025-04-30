import React, { lazy, Suspense } from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import About from "./components/About";
import Contact from "./components/Contact";
import Error from "./components/Error";
import RestaurantMenu from "./components/RestaurantMenu";
import { useState, useEffect } from "react";
import UserContext from "./utils/userContext";
//import Groceries from "./components/Groceries";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
const Grocery =lazy(()=>import("./components/Groceries"))

const AppLayout = () => {
  const [userName,setUserName] =useState("");
  useEffect(() => {
    //API mock for authentication
    const data = {
      name: "Sita",
    };
    setUserName(data.name);
  }, []);
  return (
    //important as we are also passing the useState function which is modifying the loggedInuser using API data 
    <UserContext.Provider value={{ loggedInUser: userName ,setUserName }}>
       <div className="app">
      <Header />
      <Outlet />
    </div>
    </UserContext.Provider>
   
  );
};
const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      { path: "/", element: <Body /> },
      { path: "/about", element: <About /> },
      { path: "/contact", element: <Contact /> },
      { path: "/restaurants/:resId", element: <RestaurantMenu /> },
      { path: "/grocery", 
        element: <Suspense fallback={<h1>Loading.....</h1>}><Grocery/></Suspense>},
    ],
    errorElement: <Error />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />); //this is done for routing
//root.render(<AppLayout/>); // this is how babel understands to render a component
