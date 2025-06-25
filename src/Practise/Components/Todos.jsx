import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { removeTodo, updateTodo } from '../Features/todo';

function Todos() {
  const todos = useSelector(state => state.todos);
  const dispatch = useDispatch();
  const [editId, setEditId] = useState(null);
  const [newText, setNewText] = useState('');

  return (
    <div className="max-w-md mx-auto p-4 bg-white rounded shadow">
      <ul className="space-y-3">
        {todos.map((todo) => (
          <li key={todo.id} className="flex items-center justify-between bg-gray-100 p-2 rounded">
            {editId === todo.id ? (
              <>
                <input
                  type="text"
                  value={newText}
                  onChange={(e) => setNewText(e.target.value)}
                  className="flex-1 p-2 mr-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-blue-500"
                />
                <button
                  onClick={() => {
                    console.log(newText)
                    dispatch(updateTodo({ id: todo.id, newText }));
                    setNewText('');
                    setEditId(null);
                  }}
                  className="bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600"
                >
                  Save
                </button>
              </>
            ) : (
              <>
                <span className="flex-1">{todo.text}</span>
                <button
                  onClick={() => {
                    setEditId(todo.id);
                    setNewText(todo.text);
                  }}
                  className="bg-yellow-500 text-white px-3 py-1 rounded mr-2 hover:bg-yellow-600"
                >
                  Edit
                </button>
              </>
            )}
            <button
              onClick={() => dispatch(removeTodo(todo.id))}
              className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
            >
              X
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Todos;
