import React, { useState } from "react";

const Home = () => {
    const [tasks, setTasks] = useState([
        { description: "Make the bed" },
        { description: "Wash my hands" },
        { description: "Eat" },
        { description: "Walk the dog" }
    ]);
    const [inputValue, setInputValue] = useState("");

    const handleAddTask = (e) => {
        e.preventDefault();
        if (inputValue.trim()) {
            const newTask = { description: inputValue };
            setTasks([...tasks, newTask]);
            setInputValue("");
        }
    };

    const handleDeleteTask = (taskToDelete) => {
        const updatedTasks = tasks.filter((task) => task.description !== taskToDelete);
        setTasks(updatedTasks);
    };

    return (
        <div className="container">
            <h1>Todos</h1>
            <form onSubmit={handleAddTask}>
                <input
                    type="text"
                    placeholder="Add a new task"
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                />
            </form>
            <ul>
                {tasks.length > 0 ? (
                    tasks.map((task, index) => (
                        <li key={index} className="task">
                            {task.description}
                            <span
                                className="delete"
                                onClick={() => handleDeleteTask(task.description)}
                            >
                                ×
                            </span>
                        </li>
                    ))
                ) : (
                    <li>No hay tareas, añadir tareas</li>
                )}
            </ul>
            <div>{tasks.length} item{tasks.length !== 1 ? "s" : ""} left</div>
        </div>
    );
};

export default Home;


