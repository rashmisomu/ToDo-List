 const { useState } = React;

      function Todo() {
        var styling = {
          width: "500px",
          height: "400px",
          borderRadius: "20px",
          backgroundColor: "#DFCCFB", 
          marginLeft: "500px",
          marginTop: "100px",
        };

        var btn = {
          backgroundColor: "#FFC7EA",
          border: "10px solid #FFC7EA",
          borderRadius: "20px", 
          marginLeft: "10px",
          height: "40px",
          width:"100px"
        };

        var input = {
          marginTop: "10px",
          borderRadius: "20px", 
        };

        const [inputValue, setInputValue] = useState(""); // Corrected state variable name
        const [tasks, setTasks] = useState([]);

        const handleChange = (e) => {
          setInputValue(e.target.value);
        };

        const addTask = () => {
          if (inputValue.trim() !== "") {
            setTasks([
              ...tasks,
              { text: inputValue, id: new Date(), bgColor: "" },
            ]);
            setInputValue(""); 
          }
        };
        const list = tasks.map((task) => (
          <li
            key={task.id}
            style={{ backgroundColor: task.bgColor ,cursor: 'pointer'}}
            onClick={() => del(task.id)}
          >
            {task.text}
          </li>
        ));

        const del = (taskId) => {
          setTasks(tasks.filter((task) => task.id !== taskId));
        };
    
       
  


        return (
          <div id="container" style={styling}>
            <input type="text" style={input} onChange={handleChange} onKeyPress={(e) => {
               if (e.key === 'Enter') {
                addTask();
               }
              }}
              value={inputValue}
              id="task"
              name="task"
              placeholder="enter task"
            />
            <button id="btn" onClick={addTask} style={btn}>
              add
            </button>
            <ul>{list}</ul>
          </div>
        );
      }

      ReactDOM.render(<Todo />, document.getElementById("main"));