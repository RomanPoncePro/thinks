import { useFormState } from "./Hooks/useFormState.js";
import { InputComponent } from "./InputComponent";

export const FormularioComponents = () => {
	const { formState, onInputChange, onSubmit } = useFormState();

	const { username, email, password } = formState;

	return (
		<form onSubmit={onSubmit}>
			<div className="form-group">
				<InputComponent type="text" value={username} event={onInputChange} />
			</div>
			<div className="form-group">
				<InputComponent type="email" value={email} event={onInputChange} />
			</div>
			<div className="form-group">
				<InputComponent type="password" value={password} event={onInputChange}/>
			</div>
			<button type="submit" className="btn btn-primary">
				Submit
			</button>
		</form>
	);
};
