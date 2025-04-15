export const InputComponent = ({ type, value, event }) => {
	return (
		<>
      <label htmlFor={value}>{value}</label>
			<input
				type={type}
				className="form-control"
				name="username"
				placeholder="Enter username"
				value={value}
				onChange={event}
			/>
		</>
	);
};