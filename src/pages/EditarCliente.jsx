import {
	useNavigate,
	Form,
	useLoaderData,
	useActionData,
	redirect,
} from "react-router-dom";
import { Formulario } from "../components/Formulario";
import { Error } from "../components/Error";

import {
	actualizarCliente,
	obtenerCliente,
} from "../data/clientes";

export const loader = async ({ params }) => {
	// console.log(params);
	const cliente = await obtenerCliente(
		params.clienteId,
	);
	// console.log(cliente);
	if (Object.values(cliente).length === Error) {
		throw new Response("", {
			status: 404,
			statusText: "No hay Resultados",
		});
	}

	return cliente;
};

export async function action({ request, params }) {
	const formData = await request.formData();

	const datos = Object.fromEntries(formData);

	const email = formData.get("email");

	// validación
	const errores = [];
	if (Object.values(datos).includes("")) {
		errores.push("Todos los campos son requeridos");
	}
	// console.log(errores);
	let regex = new RegExp(
		"([!#-'*+/-9=?A-Z^-~-]+(.[!#-'*+/-9=?A-Z^-~-]+)*|\"([]!#-[^-~ \t]|(\\[\t -~]))+\")@([!#-'*+/-9=?A-Z^-~-]+(.[!#-'*+/-9=?A-Z^-~-]+)*|[[\t -Z^-~]*])",
	);

	if (!regex.test(email)) {
		errores.push("Email no válido");
	}

	// Retornar datos si hay errores
	if (Object.keys(errores).length) {
		return errores;
	}

	// Actualizar el cliente
	await actualizarCliente(params.clienteId, datos);

	return redirect("/");
}

export const EditarCliente = () => {
	const navigate = useNavigate();
	const cliente = useLoaderData();
	const errores = useActionData();

	return (
		<>
			<h1 className="font-black text-3xl text-blue-900">
				Editar Cliente
			</h1>
			<p className="mt-3">
				A continuación podrás modificar los datos de un
				cliente
			</p>

			<div className="flex justify-end mb-20">
				<button
					// onClick={() => navigate("/")}
					onClick={() => navigate(-1)}
					type="button"
					className="bg-blue-800 text-white px-6 py-2 hover:bg-blue-600 transition-colors font-bold rounded-md"
				>
					Volver
				</button>
			</div>

			<div className="bg-white rounded-md shadow-md shadow-black/50 md:w-5/6 mx-auto px-5 py-10">
				{errores?.length &&
					errores.map((error, i) => (
						<Error key={i}>{error}</Error>
					))}

				<Form method="POST" noValidate>
					<Formulario cliente={cliente} />

					<input
						type="submit"
						className=" cursor-pointer mt-5 w-full bg-blue-800 p-2 rounded-md shadow-sm shadow-black font-bold text-white text-lg hover:bg-blue-700 transition-colors"
						value="Guardar Cambios"
					/>
				</Form>
			</div>
		</>
	);
};
