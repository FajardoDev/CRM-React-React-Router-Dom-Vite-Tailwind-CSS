import {
	Outlet,
	Link,
	useLocation,
} from "react-router-dom";

export const Layout = () => {
	const location = useLocation();
	const { pathname } = location;

	return (
		<div className="md:flex md:min-h-screen">
			<aside className="md:w-1/4 bg-white dark:bg-slate-900 py-5 px-8 antialiased text-slate-500 dark:text-slate-300">
				<h2 className="text-3xl font-black text-center">
					CRM Clientes
				</h2>

				<nav className="mt-10 text-base font-medium  inline-block ">
					<Link
						className={`${
							pathname === "/" &&
							"text-blue-500 font-semibold"
						} transition-colors duration-200 mt-2 block `}
						to="/"
					>
						Clientes
					</Link>
					<Link
						className={`${
							pathname === "/clientes/nuevo" &&
							"text-blue-500 font-semibold"
						} transition-colors duration-200 mt-2 block`}
						to="/clientes/nuevo"
					>
						Nuevo Clientes
					</Link>
				</nav>
			</aside>

			<main className="md:w-3/4 p-10 md:h-screen overflow-scroll">
				<Outlet />
			</main>
		</div>
	);
};
