
import React from "react";

const StudentCard = ({ name, roll, course }) => {
  return (
    <div className="bg-white shadow-lg rounded-lg p-6 m-4 w-72 hover:shadow-xl transition-shadow">
      <h2 className="text-xl font-bold mb-2">{name}</h2>
      <p className="text-gray-600 mb-1">
        <span className="font-semibold">Roll No:</span> {roll}
      </p>
      <p className="text-gray-600">
        <span className="font-semibold">Course:</span> {course}
      </p>
    </div>
  );
};

const students = [
  { name: "Himanshu Gupta", roll: "10889", course: "CSE" },
  { name: "Sanam", roll: "10880", course: "CSE" },
  { name: "Mandeep", roll: "10885", course: "IT" },
  { name: "Manjot", roll: "10887", course: "CSE" },
];

const StudentCardList = () => {
  return (
    <div className="flex flex-wrap justify-center mt-10">
      {students.map((student, index) => (
        <StudentCard
          key={index}
          name={student.name}
          roll={student.roll}
          course={student.course}
        />
      ))}
    </div>
  );
};

export default StudentCardList;
