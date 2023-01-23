import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import {faThumbsUp} from '@fortawesome/free-solid-svg-icons';
import './index.css';
import SurveySelectionsPage from './pages/SurveySelections';
import SurveyPage from './pages/Survey';

const root = ReactDOM.createRoot(document.getElementById('root'));
const router = createBrowserRouter([
  {
    path: '/',
    element: <SurveySelectionsPage/>,
  },
  {
    path: 'survey/:surveyId',
    element: <SurveyPage/>
  }
]);

library.add(fab, faThumbsUp);
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
