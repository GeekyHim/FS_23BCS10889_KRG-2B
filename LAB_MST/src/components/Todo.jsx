import React, { useState } from 'react';
import { useForm } from 'react-hook-form';

const Todo = () => {
  const [tasks, setTasks] = useState([]);
  const [completed, setCompleted] = useState([]);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm();

  // Add new task
  async function handleSubmitFunction(data) {
    setTasks([...tasks, data.Task]);
    reset(); // clear input after submit
    await new Promise((resolve) => setTimeout(resolve, 200));
  }

  // Delete task
  function deleteTask(index) {
    const newTasks = [...tasks];
    newTasks.splice(index, 1);
    setTasks(newTasks);
  }

  // Complete task
  function completeTask(index) {
    const taskData = tasks[index];
    setCompleted([...completed, taskData]);
    const newTasks = [...tasks];
    newTasks.splice(index, 1);
    setTasks(newTasks);
  }

  return (
    <div className="min-h-screen flex flex-col items-center justify-start bg-gray-900 p-6">
      <div className="w-full max-w-md bg-gray-800 rounded-2xl shadow-lg p-6">

        <h1 className="text-3xl font-bold text-center mb-6 text-white">Todo App</h1>


        <form
          onSubmit={handleSubmit(handleSubmitFunction)}
          className="flex gap-2 mb-4"
        >
          <input
            type="text"
            placeholder="Enter task"
            {...register('Task', { required: true })}
            className="flex-1 px-3 py-2 rounded-lg border focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button
            type="submit"
            disabled={isSubmitting}
            className={`px-4 py-2 rounded-lg font-medium text-white transition-colors duration-200
              ${isSubmitting ? 'bg-gray-500 cursor-not-allowed' : 'bg-blue-500 hover:bg-blue-600'}`}
          >
            {isSubmitting ? 'Submitting...' : 'Add'}
          </button>
        </form>

        {errors.Task && (
          <p className="text-red-500 text-sm mb-4">This field cannot be empty</p>
        )}


        <h2 className="text-xl font-semibold text-white mb-2">Pending Tasks:</h2>
        <ul className="space-y-2 mb-6">
          {tasks.map((task, index) => (
            <li
              key={index}
              className="flex items-center justify-between bg-gray-700 px-4 py-2 rounded-lg shadow-sm border border-gray-600"
            >
              <span className="text-white">{task}</span>
              <div className="flex gap-2">
                <button
                  className="text-green-400 hover:text-green-600 font-medium"
                  onClick={() => completeTask(index)}
                >
                   Complete
                </button>
                <button
                  className="text-red-400 hover:text-red-600 font-medium"
                  onClick={() => deleteTask(index)}
                >
                  Delete
                </button>
              </div>
            </li>
          ))}
        </ul>

        {completed.length > 0 && (
          <>
            <h2 className="text-xl font-semibold text-white mb-2">Completed Tasks:</h2>
            <ul className="space-y-2">
              {completed.map((task, index) => (
                <li
                  key={index}
                  className="bg-gray-700 px-4 py-2 rounded-lg text-gray-400 line-through border border-gray-600"
                >
                  {task}
                </li>
              ))}
            </ul>
          </>
        )}
        <p className='pt-5 text-white text-2xl'> Go to /StudentCard</p>
      </div>
    </div>
  );
};

export default Todo;
