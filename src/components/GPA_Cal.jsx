import React, { useState } from 'react';

const GPA_Cal = () => {
  const [subjects, setSubjects] = useState([]);
  const [totalGPA, setTotalGPA] = useState(null);
  const [subjectName, setSubjectName] = useState('');
  const [creditHours, setCreditHours] = useState('');
  const [marks, setMarks] = useState('');

  const addSubject = () => {
    if (subjectName && creditHours && marks) {
      const newSubject = {
        name: subjectName,
        credit: parseInt(creditHours),
        marks: parseInt(marks)
      };
      setSubjects([...subjects, newSubject]);
      setSubjectName('');
      setCreditHours('');
      setMarks('');
    }
  };

  const calculateGPA = () => {
    let totalCreditHours = 0;
    let totalGradePoints = 0;

    subjects.forEach(subject => {
      totalCreditHours += subject.credit;
      totalGradePoints += calculateGradePoint(subject.marks) * subject.credit;
    });

    const gpa = totalGradePoints / totalCreditHours;
    setTotalGPA(gpa.toFixed(2));
  };

  const calculateGradePoint = (marks) => {
    if (marks >= 90) return 4.00;
    else if (marks >= 85) return 3.70;
    else if (marks >= 80) return 3.30;
    else if (marks >= 75) return 3.00;
    else if (marks >= 70) return 2.70;
    else if (marks >= 65) return 2.30;
    else if (marks >= 60) return 2.00;
    else if (marks >= 55) return 1.70;
    else if (marks >= 50) return 1.30;
    else return 0.00; // Fail
  };

  const resetForm = () => {
    setSubjects([]);
    setTotalGPA(null);
    setSubjectName('');
    setCreditHours('');
    setMarks('');
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">GPA Calculator</h1>
      <div className="mb-4">
        <input
          type="text"
          placeholder="Subject Name"
          className="w-64 p-2 mr-2 rounded border border-gray-300"
          value={subjectName}
          onChange={(e) => setSubjectName(e.target.value)}
        />
        <input
          type="number"
          placeholder="Credit Hours"
          className="w-24 p-2 mr-2 rounded border border-gray-300"
          value={creditHours}
          onChange={(e) => setCreditHours(e.target.value)}
        />
        <input
          type="number"
          placeholder="Marks"
          className="w-24 p-2 mr-2 rounded border border-gray-300"
          value={marks}
          onChange={(e) => setMarks(e.target.value)}
        />
        <button
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
          onClick={addSubject}
        >
          Add
        </button>
      </div>
      <div className="mb-4">
        <button
          className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 mr-2"
          onClick={calculateGPA}
        >
          Calculate GPA
        </button>
        <button
          className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
          onClick={resetForm}
        >
          Reset
        </button>
      </div>
      {totalGPA && (
        <div className="bg-gray-200 p-4 rounded">
          <p className="text-lg font-semibold">Your GPA is: {totalGPA}</p>
        </div>
      )}
      <div>
        <h2 className="text-xl font-bold mt-8 mb-4">Subject Details</h2>
        <ul>
          {subjects.map((subject, index) => (
            <li key={index} className="bg-gray-100 p-2 mb-2 rounded">
              <span className="font-semibold mr-2">{subject.name}</span>
              <span>Credits: {subject.credit}</span>
              <span className="ml-2">Marks: {subject.marks}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default GPA_Cal;
