import Child from "./Child";

export default function Parent({ message }) {
	return (
		<div className="w-full max-w-md mx-auto mt-10 p-6 bg-white shadow-xl rounded-2xl">
			<h1 className="text-2xl font-bold text-center mb-4">Parent Component</h1>
			<p className="text-center text-gray-600 mb-4">This component receives a prop from App and passes it down.</p>

			<Child message={message} />
		</div>
	);
}
