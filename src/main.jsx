import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { Layout } from "./components/Layout";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

import { Index, loader as clientesLoader } from "./pages/Index";

import { NuevoCliente, action as nuevoClienteAction } from "./pages/NuevoCliente";

import { Error404 } from "./components/Error404";

import {
	EditarCliente,
	loader as editarLoader,
	action as editarAction,
} from "./pages/EditarCliente";

import { action as eliminarAction } from "./components/Cliente";

// Lo que se le pase al children estará en todas las paginas
const router = createBrowserRouter([
	{
		path: "/",
		element: <Layout />,
		children: [
			{
				index: true,
				element: <Index />,
				loader: clientesLoader,
				errorElement: <Error404 />,
			},
			{
				path: "/clientes/nuevo",
				element: <NuevoCliente />,
				action: nuevoClienteAction,
				errorElement: <Error404 />,
			},
			// Patch Actualizar
			{
				path: "/clientes/:clienteId/editar",
				element: <EditarCliente />,
				loader: editarLoader,
				action: editarAction,
				errorElement: <Error404 />,
			},
			// Eliminar
			{
				path: "/clientes/:clienteId/eliminar",
				action: eliminarAction,
			},
		],
	},
]);

ReactDOM.createRoot(document.getElementById("root")).render(
	<React.StrictMode>
		<RouterProvider router={router} />,
	</React.StrictMode>,
);
