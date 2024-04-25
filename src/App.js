
import React from 'react';
import ReactDOM from 'react-dom/client';
import Body from './components/Body';
import Header from './components/Header';
import './App.css';
import About from './components/About';
import Contact from './components/Contact';
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Header />

      <Outlet />
      <Footer />

    </div>
  );
}


const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: <Contact />
      },




    ],

  },

]);
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <React.StrictMode>
  //   <App />
  // </React.StrictMode>
  <RouterProvider router={appRouter} />
);
export default App;
