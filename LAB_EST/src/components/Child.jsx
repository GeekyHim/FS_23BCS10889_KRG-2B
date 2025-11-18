export default function Child({ message }) {
	return (
		<div className="p-4 bg-gray-50 rounded-xl border border-gray-100">
			<h2 className="text-lg font-semibold">Child Component</h2>
			<p className="mt-2 text-blue-700 font-medium">{message}</p>
		</div>
	);
}
