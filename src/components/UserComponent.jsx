import { useFetch } from "./Hooks/useFetch";

export const UserComponent = () => {
	// Los hooks no pueden ser llamados dentro del cuerpo de una funcion
	const { data, isLoading, errors } = useFetch(
		"https://jsonplaceholder.typicode.com/users",
	);

	const handleFetch = () => {
		console.log({ data, isLoading, errors });
	};

	return (
		<>
			<button className="btn" type="button" onClick={handleFetch}>
				HacerClick
			</button>
			{isLoading ? (
				<h4>Cargando...</h4>
			) : errors ? (
				<h4>Ocurrio un error {errors}</h4>
			) : (
				<table className="table table-striped">
					<thead className="table-dark">
						<tr>
							<th scope="col">Id</th>
							<th scope="col">Name</th>
							<th scope="col">Email</th>
							<th scope="col">Website</th>
						</tr>
					</thead>
					<tbody>
						{data.map((user) => (
							<tr key={user.id}>
								<th scope="row">{user.id}</th>
								<td>{user.name}</td>
								<td>{user.email}</td>
								<td>{user.website}</td>
							</tr>
						))}
					</tbody>
				</table>
			)}
		</>
	);
};
