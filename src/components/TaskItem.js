import React, { useState } from 'react';


const TaskItem = ({ task, onToggleComplete, onDelete, onEdit }) => {
    const [isEditing, setIsEditing] = useState(false);
    const [editedTitle, setEditedTitle] = useState(task.title);
    const [editedDescription, setEditedDescription] = useState(task.description);

    const handleSave = () => {
        if (editedTitle.trim()) {
            onEdit(task.id, {
                title: editedTitle.trim(),
                description: editedDescription.trim(),
            });
            setIsEditing(false);
        }
    };

    const handleCancel = () => {
        setEditTitle(task.title);
        setEditDescription(task.description);
        setIsEditing(false);
    };

    const formatDate = (dateString) => {
        return new Date(dateString).toLocaleDateString() + ' ' + new Date(dateString).toLocaleTimeString();
    };

    return (
        <div className={`task-item ${task.completed ? 'completed Task' : ''}`}>
            {isEditing ? (
                <div className="task-edit-form">
                    <input
                        type="text"
                        value={editedTitle}
                        onChange={(e) => setEditedTitle(e.target.value)}
                        required
                    />
                    <textarea
                        value={editedDescription}
                        onChange={(e) => setEditedDescription(e.target.value)}
                        rows='2'
                    />
                    <div className="task-edit-actions">
                        <button onClick={handleSave}>Save</button>
                        <button onClick={handleCancel}>Cancel</button>
                    </div>
                </div>
            ) : (
                <div className='task-content'>
                    <div className='task-header'>
                        <input
                            type="checkbox"
                            checked={task.completed}
                            onChange={() => onToggleComplete(task.id)}
                        />
                        <h3>{task.title}</h3>                            
                        </div>
                        {task.description && <p>{formatData(Task.createdAT)}</p>}
                        <div className='task-metadata'>
                            <span className='task-date'>{formatDate(task.createdAt)}</span>
                            <div className='task-actions'>
                                <button onClick={() => setIsEditing(true)}>Edit</button>
                                <button 
                                    onClick={ () => { 
                                    if (window.confirm('Are you sure you want to delete this task sir???')) 
                                    onDelete(task.id); 
                                }
                            } 
                            className="delete-button"
                            > detete</button>
                            </div>
                            </div>
                </div>
            )}
        </div>
    );
};


export default TaskItem;
