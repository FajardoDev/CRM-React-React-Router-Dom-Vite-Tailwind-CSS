import {
	useNavigate,
	Form,
	useActionData,
} from "react-router-dom";
import { Formulario } from "../components/Formulario";
import { Error } from "../components/Error";

// export const action = () => {
// 	console.log("Enviando el formulario");
// };

export async function action({ request }) {
	// console.log("request: ", request); console.log("Enviando el formulario");

	const formData = await request.formData();

	// console.log(formData.get("nombre"));
	// console.log([...formData]);

	const datos = Object.fromEntries(formData);
	// console.log(datos);

	// validación
	const errores = [];
	if (Object.values(datos).includes("")) {
		errores.push("Todos los campos son obligatorios");
	}
	console.log(errores);

	// Retornar datos si hay errores
	if (Object.keys(errores).length) {
		return errores;
	}

	// Obtener errores useActionData

	return datos;
}

export const NuevoCliente = () => {
	const navigate = useNavigate();
	const errores = useActionData();

	return (
		<>
			<h1 className="font-black text-3xl text-blue-900">
				Nuevo Cliente
			</h1>
			<p className="mt-3">
				Llena todos los campos para registrar un nuevo
				cliente Clientes
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

				<Form method="POST">
					<Formulario />

					<input
						type="submit"
						className=" cursor-pointer mt-5 w-full bg-blue-800 p-2 rounded-md shadow-sm shadow-black font-bold text-white text-lg hover:bg-blue-700 transition-colors"
						value="Registrar Cliente"
					/>
				</Form>
			</div>
		</>
	);
};
