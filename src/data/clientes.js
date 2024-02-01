// Consumiendo los datos del json
export const obtenerClientes = async () => {
	const repuesta = await fetch(
		import.meta.env.VITE_API_URL,
	);
	const resultado = await repuesta.json();

	return resultado;
};

// Enviando los datos del formulario
export const addClientes = async (datos) => {
	console.log(datos);
	try {
		const repuesta = await fetch(
			import.meta.env.VITE_API_URL,
			{
				method: "POST",
				body: JSON.stringify(datos),
				headers: {
					"Content-Type": "application/json",
				},
			},
		);
		await repuesta.json();
	} catch (error) {
		console.log(error);
	}
};

// Para editar los clientes ir a EditarCliente.jsx
export const obtenerCliente = async (id) => {
	const repuesta = await fetch(
		`${import.meta.env.VITE_API_URL}/${id}`,
	);
	const resultado = await repuesta.json();

	return resultado;
};

// Actualizar
export const actualizarCliente = async (id, datos) => {
	try {
		const repuesta = await fetch(
			`${import.meta.env.VITE_API_URL}/${id}`,
			{
				method: "PUT",
				body: JSON.stringify(datos),
				headers: {
					"Content-Type": "application/json",
				},
			},
		);
		await repuesta.json();
	} catch (error) {
		console.log(error);
	}
};

export const eliminarCliente = async (id) => {
	// console.log("Eliminando.... el id #:", id);
	try {
		const repuesta = await fetch(
			`${import.meta.env.VITE_API_URL}/${id}`,
			{
				method: "DELETE",
			},
		);
		await repuesta.json();
	} catch (error) {
		console.log(error);
	}
};
