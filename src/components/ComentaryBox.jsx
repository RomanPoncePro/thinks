// Importo el madafakinb reducer
import { useReducer } from "react";
import { useFormState } from "./Hooks/useFormState";
import { CommentaryPost } from "./CommentaryPost";
import { Commentary } from "./Commentary";

/* Reducer */

// Debo hacer que el estado inicial sea un comentario
const initialComments = [
	{
		id: 1,
		paragraph: "Milei un viejo boludo",
		like: false,
		shared: true,
		replay: false,
		currentResponse: "",
		response: [],
	},
	{
		id: 2,
		paragraph: "Soy tremendo cuca",
		like: true,
		shared: false,
		replay: false,
		currentResponse: "",
		response: [],
	},
];

// Esta es mi funcion reducer. Deberia debolver el proximo estado en cada return

const commentsReducer = (comments, action = {}) => {
	switch (action.type) {
		case "added": {
			return [
				...comments,
				{
					id: action.id,
					paragraph: action.paragraph,
					like: false,
					shared: false,
					replay: false,
					currentResponse: "",
					response: [],
				},
			];
		}
		case "like": {
			return comments.map((comment) =>
				comment.id === action.id ? { ...comment, like: action.like } : comment,
			);
		}
		case "shared": {
			return comments.map((comment) =>
				comment.id === action.id
					? { ...comment, shared: action.shared }
					: comment,
			);
		}
		case "replay": {
			return comments.map((comment) =>
				comment.id === action.id
					? { ...comment, replay: action.replay }
					: comment,
			);
		}
		case "response": {
			return comments.map((comment) => {
				if (comment.id === action.id) {
					return {
						...comment,
						response: [...comment.response, action.response],
						currentResponse: "",
					};
				}
				return comment;
			});
		}

		case "setCurrentResponse": {
			return comments.map((comment) =>
				comment.id === action.id
					? { ...comment, currentResponse: action.value }
					: comment,
			);
		}
	}
};

/* Lista tareas */

export const ComentaryBox = () => {
	const [comments, dispatch] = useReducer(commentsReducer, initialComments);
	const { formState, onInputChange, onSubmit } = useFormState({
		paragraph: "",
		currentResponse: "",
	});

	const handleAddComment = (paragraph) => {

		const nextId = comments.length + 1;
		dispatch({
			id: nextId,
			type: "added",
			paragraph: paragraph,
		});
	};

	const handleLike = (comment) => {
		const { id, like } = comment;
		dispatch({
			id: id,
			type: "like",
			like: !like,
		});
	};

	const handleShared = (comment) => {
		const { id, shared } = comment;
		dispatch({
			id: id,
			type: "shared",
			shared: !shared,
		});
	};

	const handleReplay = (comment) => {
		const { id, replay } = comment;

		dispatch({
			type: "replay",
			id: id,
			replay: !replay,
		});
	};

	const handleAddResponse = (comment) => {
		const { id, currentResponse } = comment;
		dispatch({
			type: "response",
			id: id,
			response: currentResponse,
		});
	};

	const validateAndSend = (value,handleAdd) => {
		if (value === '') return;
		handleAdd(value)
	}


	return (
		<>
			<CommentaryPost
				onSubmit={onSubmit}
				value={formState.paragraph}
				onClick={() => { 
					validateAndSend(formState.paragraph,handleAddComment)
				}}
				onChange={onInputChange}
			/>

			<ul>
				{comments.map((comment) => (
						<Commentary
							key={comment.id}
							comment={comment}
							handleLike={handleLike}
							handleShared={handleShared}
							handleReplay={handleReplay}
							>
							{comment.replay ? (
				
									<CommentaryPost
										onSubmit={onSubmit}
										value={comment.currentResponse}
										onChange={({ target }) => {
											dispatch({
												id: comment.id,
												type: "setCurrentResponse",
												value: target.value,
											});
										}}
										onClick={() => {
											validateAndSend(comment,handleAddResponse)
										}}
									/>
					
							) : (
								''
							)}
					
						<ul>
							{comment.response.map((res) => (
								<li>{res}</li>
							))}
						</ul>
					</Commentary>			
			
				))}
			</ul>
		</>
	);
};
