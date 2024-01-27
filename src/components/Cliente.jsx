export const Cliente = ({ cliente }) => {
	const { nombre, telefono, email, empresa, id } =
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
						type="button"
						className="text-blue-600 hover:text-blue-900 delay-150 font-semibold text-sm uppercase"
					>
						Editar
					</button>
					<button
						type="button"
						className="text-red-600 hover:text-red-900 delay-150 font-semibold text-sm uppercase"
					>
						Editar
					</button>
				</td>
			</tr>
		</>
	);
};
