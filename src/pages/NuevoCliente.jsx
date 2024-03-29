import {
	useNavigate,
	Form,
	useActionData,
	redirect,
} from "react-router-dom";
import { Formulario } from "../components/Formulario";
import { Error } from "../components/Error";
import { addClientes } from "../data/clientes";

// export const action = () => {
// 	console.log("Enviando el formulario");
// };

export async function action({ request }) {
	// console.log("request: ", request); console.log("Enviando el formulario");

	const formData = await request.formData();

	// console.log(formData.get("nombre"));
	// console.log([...formData]);

	const datos = Object.fromEntries(formData);
	// console.log(datos.nombre.length);

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

	// if (datos.nombre.length <= 0) {
	// 	errores.push("El campo nombre no puede ir vacío");
	// }

	// Retornar datos si hay errores
	if (Object.keys(errores).length) {
		return errores;
	}

	await addClientes(datos);

	return redirect("/");
	// return datos;
}

export const NuevoCliente = () => {
	const navigate = useNavigate();
	const errores = useActionData(); // Obtener errores useActionData

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

				<Form method="POST" noValidate>
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
