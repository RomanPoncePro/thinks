export const Commentary = ({children,comment,handleLike,handleShared,handleReplay,handleDelete,handleUpdate}) => {
  const {paragraph, like,shared,replay, response} = comment
  return(
   <li>
    <p>{paragraph}</p>
    <div>
      <button 
      type="button"
      onClick={() => {
        handleLike(comment)
      }}
      >
        Like: {like ? "Si" : "No"}
      </button>
      <button 
      type="button"
      onClick={() => {
        handleShared(comment)
      }}
      >
        shared: {shared ? "Si" : "No"}
      </button>
      <button
        type="button"
        onClick={()=>{
          handleDelete(comment)
        }}
      >
        delete
      </button>
      <button
        type="button"
        onClick={()=>{
          handleUpdate(comment)
        }}
      >
        Update
      </button>
      <button 
      type="button"
      onClick={() => {
        handleReplay(comment)
      }}
      >Replay</button>
    </div>

    {children}
   </li>
  )
}