import { useRouteError } from "react-router-dom";

export const Error404 = () => {
	const error = useRouteError();
	// console.log(error.message);
	return (
		<div>
			<main className="grid min-h-full h-screen place-items-center px-6 py-10 sm:py-10 lg:px-8 antialiased text-slate-500 dark:text-slate-200 bg-white dark:bg-zinc-900">
				<h1 className="mt-4 text-3xl font-bold tracking-tight sm:text-5xl">
					CRM Clientes
				</h1>
				<div className="text-center">
					<p className="text-base font-semibold text-fuchsia-800">
						<span className="block text-xl text-red-500">
							404
						</span>
						{error.statusText || error.message}
					</p>
					<h1 className="mt-4 text-3xl font-bold tracking-tight sm:text-5xl">
						Página no encontrada
					</h1>
					<p className="mt-6 text-base leading-7">
						Lo sentimos, no pudimos encontrar la página
						que estás buscando.
					</p>
					<div className="mt-10 flex items-center justify-center gap-x-6">
						<a
							href="/clientes/nuevo"
							className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 hover:text-yellow-50"
						>
							Vuelve a home
						</a>
						<a href="#" className="text-sm font-semibold">
							Contact support{" "}
							<span aria-hidden="true">&rarr;</span>
						</a>
					</div>
				</div>
			</main>
		</div>
	);
};
