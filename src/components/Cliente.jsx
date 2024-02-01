import {
	Form,
	useNavigate,
	redirect,
} from "react-router-dom";
import { eliminarCliente } from "../data/clientes";

export const action = async ({ params }) => {
	await eliminarCliente(params.clienteId);
	return redirect("/");
};

export const Cliente = ({ cliente }) => {
	const navigate = useNavigate();

	const { nombre, empresa, telefono, email, id } =
		cliente;

	return (
		<>
			<tr className="border-b">
				<td className="p-6 text-slate-500 dark:text-slate-800 space-y-2">
					<p className="text-base font-semibold uppercase">
						{nombre}
					</p>
					<p className="text-sm">{empresa}</p>
				</td>

				<td className="p-6 text-slate-500 dark:text-slate-800 space-y-2">
					<p>
						<span className="uppercase font-semibold">
							Email:
						</span>
						{email}
					</p>
					<p>
						{" "}
						<span className="uppercase font-semibold">
							Tel:
						</span>
						{telefono}
					</p>
				</td>

				<td className="flex p-6 gap-3">
					<button
						onClick={() =>
							navigate(`/clientes/${id}/editar`)
						}
						type="button"
						className="text-blue-600 hover:text-blue-900 delay-150 font-semibold text-sm uppercase"
					>
						Editar
					</button>
					<Form
						// onSubmit={handleEliminar}
						onSubmit={(e) => {
							if (
								!confirm("¿Deseas eliminar este registro?")
							) {
								e.preventDefault();
							}
						}}
						method="post"
						action={`/clientes/${id}/eliminar`}
					>
						<button
							type="submit"
							className="text-red-600 hover:text-red-900 delay-150 font-semibold text-sm uppercase"
						>
							Eliminar
						</button>
					</Form>
				</td>
			</tr>
		</>
	);
};
