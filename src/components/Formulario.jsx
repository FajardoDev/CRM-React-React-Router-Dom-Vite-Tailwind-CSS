import { useState } from "react";

export const Formulario = ({ cliente }) => {
	// const {} = cliente
	// console.log(cliente);
	// console.log(errores?.length);
	// undefined

	// Realizar comprobaciones y asignar las clases según las condiciones
	// const clases = `clase-base ${condicion1 ? 'clase-condicion-1' : ''} ${condicion2 ? 'clase-condicion-2' : ''}`;

	const [nombre, setNombre] = useState("");
	const [empresa, setEmpresa] = useState("");
	const [email, setEmail] = useState("");
	const [telefono, setTelefono] = useState("");
	const [notas, setNotas] = useState("");

	const [inputInteractuado, setInputInteractuado] =
		useState(false);

	const [
		inputInteractuadoEm,
		setInputInteractuadoEm,
	] = useState(false);
	const [
		inputInteractuadoEmail,
		setInputInteractuadoEmail,
	] = useState(false);
	const [
		inputInteractuadoTe,
		setInputInteractuadoTe,
	] = useState(false);
	const [
		inputInteractuadoNo,
		setInputInteractuadoNo,
	] = useState(false);

	const verificarCaracteres = (valor) =>
		valor.trim().length > 0;

	const onNombreChange = ({ target }) => {
		setNombre(target.value);

		setInputInteractuado(true);
	};
	const onEmpresaChange = ({ target }) => {
		setEmpresa(target.value);
		setInputInteractuadoEm(true);
	};
	const onEmailChange = ({ target }) => {
		setEmail(target.value);
		setInputInteractuadoEmail(true);
	};
	const onTelefonoChange = ({ target }) => {
		setTelefono(target.value);
		setInputInteractuadoTe(true);
	};
	const onNotasChange = ({ target }) => {
		setNotas(target.value);
		setInputInteractuadoNo(true);
	};

	return (
		<>
			<label className="block mb-4">
				<span className="after:content-['*'] after:ml-0.5 after:text-red-500 block text-sm  text-slate-300 mb-2 dark:text-slate-600 font-bold  mt-5">
					Nombre:
				</span>
				<input
					onChange={onNombreChange}
					// value={nombre}
					defaultValue={nombre || cliente?.nombre}
					type="text"
					id="nombre"
					name="nombre"
					className={`bg-white w-full placeholder:italic border  block  rounded-md py-2 px-3 shadow-sm shadow-black/50 focus:outline-none sm:text-sm text-slate-700 font-semibold text-base focus:ring-1 ${
						inputInteractuado
							? verificarCaracteres(nombre)
								? "focus:border-sky-500 focus:ring-sky-500 border border-slate-300 "
								: " placeholder:text-red-600/60 focus:border-red-500 focus:ring-red-500 border border-red-600"
							: ""
					}   `}
					placeholder={
						inputInteractuado
							? verificarCaracteres(nombre)
								? ""
								: "El campo Nombre es requerido"
							: "Nombre del Cliente"
					}
				/>
				{/* ${condicion2 ? 'clase-condicion-2' : ''}  */}
			</label>

			<label className="block mb-4">
				<span className="after:content-['*'] after:ml-0.5 after:text-red-500 block text-sm  text-slate-300 mb-2 dark:text-slate-600 font-bold mt-5">
					Empresa:
				</span>
				<input
					onChange={onEmpresaChange}
					// value={empresa}
					defaultValue={empresa || cliente?.empresa}
					id="empresa"
					type="text"
					name="empresa"
					className={`bg-white w-full placeholder:italic border  block  rounded-md py-2 px-3 shadow-sm shadow-black/50 focus:outline-none sm:text-sm text-slate-700 font-semibold text-base focus:ring-1 ${
						inputInteractuadoEm
							? verificarCaracteres(empresa)
								? "focus:border-sky-500 focus:ring-sky-500 border border-slate-300 "
								: " placeholder:text-red-600/60 focus:border-red-500 focus:ring-red-500 border border-red-600"
							: ""
					}   `}
					placeholder={
						inputInteractuadoEm
							? verificarCaracteres(empresa)
								? ""
								: "El campo Empresa es requerido"
							: "Empresa del Cliente"
					}
				/>
			</label>

			<label className="block mb-4">
				<span className="after:content-['*'] after:ml-0.5 after:text-red-500 block text-sm  text-slate-300 mb-2 dark:text-slate-600 font-bold mt-5">
					E-mail:
				</span>
				<input
					onChange={onEmailChange}
					// value={email}
					defaultValue={email || cliente?.email}
					id="email"
					type="email"
					name="email"
					className={`bg-white w-full placeholder:italic border  block  rounded-md py-2 px-3 shadow-sm shadow-black/50 focus:outline-none sm:text-sm text-slate-700 font-semibold text-base focus:ring-1 ${
						inputInteractuadoEmail
							? verificarCaracteres(email)
								? "focus:border-sky-500 focus:ring-sky-500 border border-slate-300 "
								: " placeholder:text-red-600/60 focus:border-red-500 focus:ring-red-500 border border-red-600"
							: ""
					}   `}
					placeholder={
						inputInteractuadoEmail
							? verificarCaracteres(email)
								? ""
								: "El campo E-mail es requerido"
							: "Email del Cliente"
					}
				/>
			</label>

			<label className="block mb-4">
				<span className="after:content-['*'] after:ml-0.5 after:text-red-500 block text-sm  text-slate-300 mb-2 dark:text-slate-600 font-bold mt-5">
					Teléfono:
				</span>
				<input
					onChange={onTelefonoChange}
					// value={telefono}
					defaultValue={telefono || cliente?.telefono}
					id="telefono"
					type="tel"
					name="telefono"
					className={`bg-white w-full placeholder:italic border  block  rounded-md py-2 px-3 shadow-sm shadow-black/50 focus:outline-none sm:text-sm text-slate-700 font-semibold text-base focus:ring-1 ${
						inputInteractuadoTe
							? verificarCaracteres(telefono)
								? "focus:border-sky-500 focus:ring-sky-500 border border-slate-300 "
								: " placeholder:text-red-600/60 focus:border-red-500 focus:ring-red-500 border border-red-600"
							: ""
					}   `}
					placeholder={
						inputInteractuadoTe
							? verificarCaracteres(telefono)
								? ""
								: "El campo Teléfono es requerido"
							: "Teléfono del Cliente"
					}
				/>
			</label>

			<label className="block mb-4" htmlFor="notas">
				<span className="after:content-['*'] after:ml-0.5 after:text-red-500 block text-sm  text-slate-300 mb-2 dark:text-slate-600 font-bold mt-5">
					Notas:
				</span>
				<textarea
					onChange={onNotasChange}
					// value={notas}
					defaultValue={notas || cliente?.notas}
					as="textarea"
					id="notas"
					type="text"
					name="notas"
					className={`bg-white w-full placeholder:italic border  block  rounded-md py-2 px-3 shadow-sm shadow-black/50 focus:outline-none sm:text-sm text-slate-700 font-semibold text-base focus:ring-1 h-40 align-self ${
						inputInteractuadoNo
							? verificarCaracteres(notas)
								? "focus:border-sky-500 focus:ring-sky-500 border border-slate-300 "
								: " placeholder:text-red-600/60 focus:border-red-500 focus:ring-red-500 border border-red-600"
							: ""
					}   `}
					placeholder={
						inputInteractuadoNo
							? verificarCaracteres(notas)
								? ""
								: "El campo Notas es requerido"
							: "Notas del Cliente"
					}
				/>
			</label>
		</>
	);
};

//! Clases que tenían los input antes de ser validados
// placeholder="Nombre del Cliente"
// className="px-3 py-2 text-slate-800 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1 shadow-slate-500/50"
