
export const CommentaryPost = ({
  onSubmit,
  value,
  onClick,
  onChange

}) => {


  return(
    <form onSubmit={onSubmit}>
				<div>
					<textarea
						name='paragraph'
						value={value}
						onChange={onChange}
					/>
				</div>
				<button
					type='submit'
					onClick={onClick}
				>
					post
				</button>
		</form>
  )
}