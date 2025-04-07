import {
  RouterProvider,
  Outlet,
  createBrowserRouter,
  useLocation,
} from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Product from "./pages/Product";
import ErrorPage from "./pages/ErrorPage";
import BuyCars from "./pages/BuyCars";
import SignUp from "./pages/SignUp";
import RentCars from "./pages/RentCars";
import News from "./pages/News";
import SignIn from "./pages/SignIn";

export default function App() {

  const PageLayout = () => {
    let pathname = useLocation().pathname;

    const hideBar = pathname === "/signin"

    return (
      <>
        {hideBar ? null : <Header />}
        <Outlet />
        { hideBar ? null : <Footer />}
      </>
    );
  };

  const PageRoutes = createBrowserRouter([
    {
      path: "/",
      element: <PageLayout />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/signup",
          element: <SignUp />,
        },
        {
          path: "/signin",
          element: <SignIn />,
        },
        {
          path: "/buycars",
          element: <BuyCars />,
        },
        {
          path: "/product",
          element: <Product />,
        },
        {
          path: "/rentcars",
          element: <RentCars />,
        },
        {
          path: "/news",
          element: <News />,
        },
      ],
      errorElement: <ErrorPage />,
    },
  ]);

  return (
    <div className="bg-light">
      <RouterProvider router={PageRoutes}></RouterProvider>
    </div>
  );
}
