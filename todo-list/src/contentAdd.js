import "./contentAdd.css"
function content({addform}) {

    const handlesub = (e) => {
      e.preventDefault();
      let form = e.target;
      let formdata = new FormData(form);
      const data = Object.fromEntries(formdata.entries());
      addform(data);
      form.reset()
    };

    return (    
    
    <div className="cont">
      <form  onSubmit={handlesub}>
     <h4 className="h4"><input  className="title"  type="text" name="title" placeholder="TITLE"/></h4>
     <div className="text-cont">
        <p><textarea name="details" id="" placeholder="datails....."></textarea></p>
     </div>
     <p className="status">status: <input type="text" name="status" placeholder="status"  value={"not done"}/></p>
     <div className="button-cont">
        <button type="submit">Add</button>
     </div>
     </form>
    </div> 
    
    );
}

export default content;