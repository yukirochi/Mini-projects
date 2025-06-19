import { useState } from "react";
import "./App.css";
import Content from "./content";
import ContentAdd from "./contentAdd";
function App() {
  const [todoList, settodo] = useState([ ]);
  let [pending, setpending] = useState(true)
  const handledelete = (id) => {
    let newblogs = todoList.filter((lists) => lists.id !== id);
    settodo(newblogs);
    setpending(true)
  };

  const addform = (data) => {
    const newtask = {
      id: todoList.length + 1,
      task: data.title,
      status: data.status,
      dueDate: new Date().toISOString(),
      details: data.details,
    };
    setpending(false)
    settodo ([newtask,...todoList ])

  };

  return (
    <div className="container">
      <header>
        <i class="material-icons">add_task</i>
        <p>TO-DO LIST</p>
        <i class="material-icons">edit_note</i>
      </header>
      <main>
        <div className="list-cont">
          <ContentAdd addform={addform} />
          {pending && <div className="notask">not current task</div>}
          {todoList.map((todo) => (
            <Content todo={todo} handledelete={handledelete} />
          ))}
        </div>
      </main>
    </div>
  );
}

export default App;
