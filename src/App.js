import React, { useState, useEffect} from 'react';
import Login from './components/Login';
import TaskForm from './components/TaskForm';
import TaskList from './components/TaskList';
import TaskFilter from './components/TaskFilter';
import { saveToLocalStorage, getFromLocalStorage, removeFromLocalStorage } from './utils/localStorage';



const App = () => {
  const [user, setUser] = useState(null);
  const [tasks, setTasks] = useState([]);
  const [filter, setFilter] = useState('all');

  // here user and tasks are loaded from localStorage on component mount, simple isn't it
  useEffect(() => {
    const storedUser = getFromLocalStorage('username');
    const storedTasks = getFromLocalStorage('tasks');
    
    if (storedUser) {
      setUser(storedUser);
    }
    if (storedTasks) {
      setTasks(storedTasks);
    }
  }, []);





    // here tasks gets saves to localStorage whenever it change
    useEffect(() => {
        if (tasks.length > 0) {
        saveToLocalStorage('tasks', tasks);
        }
    }, [tasks]);

    const handleLogin = (username) => {
        setUser(username);
    };

    const handleLogout = () => {
        removeFromLocalStorage('username');
        setUser(null);
    };

    const handleAddTask = (newTask) => {
        setTasks([...tasks, newTask]);
    };

    const handleToggleTask = (id) => {
        setTasks(tasks.map(task => 
        task.id === id ? { ...task, completed: !task.completed } : task
        ));
    };

    const handleDeleteTask = (id) => {
        setTasks(tasks.filter(task => task.id !== id));
    };

    const handleEditTask = (id, updates) => {
        setTasks(tasks.map(task => 
        task.id === id ? { ...task, ...updates } : task
        ));
    };

    const getFilteredTasks = () => {
        switch (filter) {
        case 'completed':
            return tasks.filter(task => task.completed);
        case 'pending':
            return tasks.filter(task => !task.completed);
        default:
            return tasks;
        }
    };

    const getTaskCounts = () => {
        return {
        all: tasks.length,
        pending: tasks.filter(task => !task.completed).length,
        completed: tasks.filter(task => task.completed).length
        };
    };

    if (!user) {
        return <Login onLogin={handleLogin} />;
    }

    return (
        <div className="app">
        <header className="app-header">
            <h1>This is Your Personal Task Tracker Sir!</h1>
            <div className="user-info">
            <span>Welcome, {user}!</span>
            <button onClick={handleLogout}>Logout</button>
            </div>
        </header>

        <main className="app-main">
            <TaskForm onAddTask={handleAddTask} />
            <TaskFilter 
            filter={filter} 
            onFilterChange={setFilter} 
            taskCounts={getTaskCounts()} 
            />
            <TaskList 
            tasks={getFilteredTasks()} 
            onToggle={handleToggleTask}
            onDelete={handleDeleteTask}
            onEdit={handleEditTask}
            />
        </main>
        </div>
        );
    };

export default App;