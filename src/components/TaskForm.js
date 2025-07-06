import React, { useState } from 'react';

const TaskForm = ({ onAddTask }) => {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (title.trim()) {
        onAddTask({
            id: Date.now(),
            title: title.trim(),
            description: description.trim(),
            completed: false,
            createdAt: new Date().toISOString(),
        });
        setTitle('');
        setDescription('');
        }
    };


    return (
        <form className="task-form" onSubmit={handleSubmit}>
            <input
                type="text"
                placeholder="Task Title (Required: YOU HAVE TO FILL THIS MISTER!! heheee)"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                required
            />
            <textarea
                placeholder="Task Description (Optional: it's okay if you don't have one)"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                rows='3'
            />
            <button type="submit">Add Task</button>
            </form>
    );
};


export default TaskForm;