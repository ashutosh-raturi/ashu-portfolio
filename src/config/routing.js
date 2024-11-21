import React from "react";
import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../pages/Home";
import MyJourney from "../pages/MyJourney";
import MyLearningPath from "../pages/MyLearningPath";
import ErrorPage from "../pages/ErrorPage";
import ComingSoon from "../pages/ComingSoon";

const config = [
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/my-journey",
        element: <ComingSoon />,
      },
      {
        path: "/my-learning-path",
        element: <ComingSoon />,
      },
      {
        path: "/achievements",
        element: <ComingSoon />,
      },
      {
        path: "/tech-arsenal",
        element: <ComingSoon />,
      },

    ],
    errorElement: <ErrorPage/>
  },
];

const appRouter = createBrowserRouter(config);

export default appRouter;
