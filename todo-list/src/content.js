import "./content.css"

function content({todo, handledelete}) {
let list = todo
    return (    
    <div className="cont">
     <h4>{list.task}</h4>
     <div className="text-cont">
        <p>{list.details}</p>
     </div>
     <p className="status">status: {list.status}</p>
     <div className="button-cont">
        <button onClick={() => handledelete(list.id)}>Done/Delete</button>
     </div>
    </div> 
    
    );
}

export default content;