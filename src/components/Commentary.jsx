import { CommentaryPost } from "./CommentaryPost";

export const Commentary = ({
	children,
	comment,
	handleLike,
	handleShared,
	handleReplay,
	handleDelete,
	showUpdateForm,
  setUpdateResponse
}) => {
	const { paragraph, like, shared, update } = comment;
	return (
		<article>
			{update ? (
				<CommentaryPost
        value={comment.currentResponse}
        onChange={({target})=>{
          setUpdateResponse(target,comment)
        }}
        onClick={()=>{
          handleUpdate(comment)
        }}
        />
			) : (
				<li>
					<p>{paragraph}</p>

					<div>
						<button
							type="button"
							onClick={() => {
								handleLike(comment);
							}}
						>
							Like: {like ? "Si" : "No"}
						</button>
						<button
							type="button"
							onClick={() => {
								handleShared(comment);
							}}
						>
							shared: {shared ? "Si" : "No"}
						</button>
						<button
							type="button"
							onClick={() => {
								handleDelete(comment);
							}}
						>
							delete
						</button>
						<button
							type="button"
							onClick={() => {
								showUpdateForm(comment);
							}}
						>
							Update
						</button>
						<button
							type="button"
							onClick={() => {
								handleReplay(comment);
							}}
						>
							Replay
						</button>
					</div>
					{children}
				</li>
			)}
		</article>
	);
};