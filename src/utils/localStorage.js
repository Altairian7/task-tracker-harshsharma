// now here are some utility functions for storage operations

export const saveToLocalStorage = (key, data) => {
    try {
        const item = localStorage.getItem(key);
        return item ? JSON.parse(item) : null;
    } catch (error) {
        console.error('error getting from localstorage mann!!', error);
        return null;
    }
};

export const getFromLocalStorage = (key) => {
    try {
        const item = localStorage.getItem(key);
        return item ? JSON.parse(item) : null;
    }   catch (error) {
        console.error('Error getting from localStorage brother: ', error);
        return null
    }
}

export const removeFromLocalStorage = (key) => {
    try {
        localStorage.removeItem(key);
    } catch (error) {
        console.error('error in removing from localStorage bro: ', error);
    }
};