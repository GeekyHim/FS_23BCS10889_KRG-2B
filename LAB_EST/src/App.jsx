// src/App.jsx
import { BrowserRouter, Routes, Route, Link, Navigate } from "react-router-dom";
import Parent from "./components/Parent";
import EmployeeList from "./components/EmployeeList";

function App() {
  const message = "Hello from App component!";

  return (
    <BrowserRouter>
      <div className="min-h-screen bg-gray-100 p-4">
        <nav className="max-w-3xl mx-auto flex gap-4 mb-6">
          <Link to="/Q1" className="px-4 py-2 bg-blue-600 text-white rounded-lg">Q1 - Employees</Link>
          <Link to="/Q3" className="px-4 py-2 bg-green-600 text-white rounded-lg">Q3 - Prop Passing</Link>
        </nav>

        <div className="max-w-3xl mx-auto">
          <Routes>
            <Route path="/Q1" element={<EmployeeList />} />
            <Route path="/Q3" element={<Parent message={message} />} />
            <Route path="/" element={<Navigate to="/Q1" replace />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;