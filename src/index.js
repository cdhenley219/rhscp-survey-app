import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import {faThumbsUp, faThumbsDown,faHand,faFaceSmileBeam,faFaceGrimace,faFaceFlushed,faFaceMeh,faFaceRollingEyes,faFaceSmile,faFaceFrown,faFaceTired} from '@fortawesome/free-solid-svg-icons';
import './index.css';
import SurveySelectionsPage from './pages/SurveySelections';
import SurveyPage from './pages/Survey';
import Signup from './pages/Signup';

const root = ReactDOM.createRoot(document.getElementById('root'));
const router = createBrowserRouter([
  {
    path: '/',
    element: <SurveySelectionsPage/>,
  },
  {
    path: '/survey/:surveyId',
    element: <SurveyPage/>
  }, 
  {
    path: '/registration/:surveyId',
    element: <Signup/>,
  },
  {
    path: '*',
    element: <SurveySelectionsPage/>
  }
]);

library.add(fab, faThumbsUp, faThumbsDown,faHand,faFaceSmileBeam,faFaceGrimace,faFaceFlushed,faFaceMeh,faFaceRollingEyes,faFaceSmile,faFaceFrown,faFaceTired);
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
