export const Error = ({ children }) => {
	return (
		<div className="text-red-500 max-w-xl mx-auto ">
			<p className="mt-1 order border-red-600 text-center font-bold py-2 text-sm rounded-full bg-red-200/50">
				{children}
			</p>
		</div>
	);
};
