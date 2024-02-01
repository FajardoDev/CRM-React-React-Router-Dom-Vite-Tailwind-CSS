import { useLoaderData } from "react-router-dom";
// import { clientes } from "../data/clientes";
import { Cliente } from "../components/Cliente";
import { obtenerClientes } from "../data/clientes";

export const loader = () => {
	// console.log(import.meta.env);
	const clientes = obtenerClientes();

	return clientes;
};

export const Index = () => {
	const clientes = useLoaderData();
	// console.log("datos: ", clientes);

	return (
		<>
			<h1 className="font-black text-3xl text-blue-900">
				Clientes
			</h1>
			<p className="mt-3">Administra tus Clientes</p>

			{clientes.length ? (
				<table className="w-full bg-white shadow-black/50 shadow-md mt-5 table-auto rounded">
					<thead className="bg-blue-800 text-white">
						<tr>
							<th className="p-2">Cliente</th>
							<th className="p-2">Contacto</th>
							<th className="p-2">Acciones</th>
						</tr>
					</thead>

					<tbody>
						{clientes.map((cliente) => (
							<Cliente
								key={cliente.id}
								cliente={cliente}
							/>
						))}
					</tbody>
				</table>
			) : (
				<p className="mt-10 text-center">
					Aún no hay clientes
				</p>
			)}
		</>
	);
};
