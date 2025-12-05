import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import Products from "./components/home/products/Products";
import Home from "./components/home/index";


const router = createBrowserRouter([
	{
		path: "/",
		element: <App />,
		children: [
			{
				index: true, element: <Home />,
			},
			{
				path: 'profile', element: <Products />
			}
		]
	},
]);


const root = document.getElementById("root");

ReactDOM.createRoot(root).render(
	<RouterProvider router={router} />,
);

reportWebVitals();
