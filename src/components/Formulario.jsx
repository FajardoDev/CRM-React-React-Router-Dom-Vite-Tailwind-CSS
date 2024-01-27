export const Formulario = ({ cliente }) => {
	// console.log(cliente);

	return (
		<>
			<label className="block mb-4">
				<span className="after:content-['*'] after:ml-0.5 after:text-red-500 block text-sm  text-slate-300 mb-2 dark:text-slate-600 font-bold  mt-5">
					Nombre:
				</span>
				<input
					type="text"
					id="nombre"
					placeholder="Nombre del Cliente"
					name="nombre"
					className="px-3 py-2 text-slate-800 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1 shadow-slate-500/50"
				/>
			</label>

			<label className="block mb-4">
				<span className="after:content-['*'] after:ml-0.5 after:text-red-500 block text-sm  text-slate-300 mb-2 dark:text-slate-600 font-bold mt-5">
					Empresa:
				</span>
				<input
					id="empresa"
					type="text"
					placeholder="Empresa del Cliente"
					name="empresa"
					className="px-3 py-2 text-slate-800 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1 shadow-slate-500/50"
				/>
			</label>

			<label className="block mb-4">
				<span className="after:content-['*'] after:ml-0.5 after:text-red-500 block text-sm  text-slate-300 mb-2 dark:text-slate-600 font-bold mt-5">
					E-mail:
				</span>
				<input
					id="email"
					type="email"
					placeholder="Email del Cliente"
					name="email"
					className="px-3 py-2 text-slate-800 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1 shadow-slate-500/50"
				/>
			</label>

			<label className="block mb-4">
				<span className="after:content-['*'] after:ml-0.5 after:text-red-500 block text-sm  text-slate-300 mb-2 dark:text-slate-600 font-bold mt-5">
					Teléfono:
				</span>
				<input
					id="telefono"
					type="tel"
					placeholder="Teléfono del Cliente"
					name="telefono"
					className="px-3 py-2 text-slate-800 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1 shadow-slate-500/50"
				/>
			</label>

			<label className="block mb-4" htmlFor="notas">
				<span className="after:content-['*'] after:ml-0.5 after:text-red-500 block text-sm  text-slate-300 mb-2 dark:text-slate-600 font-bold mt-5">
					Notas:
				</span>
				<textarea
					as="textarea"
					id="notas"
					type="text"
					placeholder="Notas del Cliente"
					name="notas"
					className="px-3 py-2 text-slate-800 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1 shadow-slate-500/50 h-40 align-self"
				/>
			</label>
		</>
	);
};
