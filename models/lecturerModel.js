const { v4: uuidv4 } = require("uuid");

const lecturers = [
  {
    id: "1",
    lecturerId: "LEC001",
    name: "Dr. Kasun Perera",
    email: "kasun.perera@university.lk",
    department: "Information Technology",
    specialization: "Software Engineering",
    phone: "0771234567",
  },
  {
    id: "2",
    lecturerId: "LEC002",
    name: "Prof. Dilani Silva",
    email: "dilani.silva@university.lk",
    department: "Computer Science",
    specialization: "Artificial Intelligence",
    phone: "0779876543",
  },
];

const getAllLecturers = () => lecturers;

const getLecturerById = (id) => lecturers.find((l) => l.id === id);

const createLecturer = (data) => {
  const newLecturer = {
    id: uuidv4(),
    lecturerId: `LEC${String(lecturers.length + 1).padStart(3, "0")}`,
    name: data.name,
    email: data.email,
    department: data.department,
    specialization: data.specialization,
    phone: data.phone,
  };
  lecturers.push(newLecturer);
  return newLecturer;
};

const updateLecturer = (id, data) => {
  const index = lecturers.findIndex((l) => l.id === id);
  if (index === -1) return null;
  lecturers[index] = { ...lecturers[index], ...data };
  return lecturers[index];
};

const deleteLecturer = (id) => {
  const index = lecturers.findIndex((l) => l.id === id);
  if (index === -1) return null;
  const deleted = lecturers.splice(index, 1);
  return deleted[0];
};

module.exports = {
  getAllLecturers,
  getLecturerById,
  createLecturer,
  updateLecturer,
  deleteLecturer,
};