const Lecturer = require("../models/lecturerModel");

const getAllLecturers = (req, res) => {
  const lecturers = Lecturer.getAllLecturers();
  res.status(200).json({
    success: true,
    count: lecturers.length,
    data: lecturers,
  });
};

const getLecturerById = (req, res) => {
  const lecturer = Lecturer.getLecturerById(req.params.id);
  if (!lecturer) {
    return res.status(404).json({ success: false, message: "Lecturer not found" });
  }
  res.status(200).json({ success: true, data: lecturer });
};

const createLecturer = (req, res) => {
  const { name, email, department, specialization, phone } = req.body;
  if (!name || !email || !department || !specialization) {
    return res.status(400).json({
      success: false,
      message: "name, email, department and specialization are required",
    });
  }
  const newLecturer = Lecturer.createLecturer({ name, email, department, specialization, phone });
  res.status(201).json({ success: true, data: newLecturer });
};

const updateLecturer = (req, res) => {
  const updated = Lecturer.updateLecturer(req.params.id, req.body);
  if (!updated) {
    return res.status(404).json({ success: false, message: "Lecturer not found" });
  }
  res.status(200).json({ success: true, data: updated });
};

const deleteLecturer = (req, res) => {
  const deleted = Lecturer.deleteLecturer(req.params.id);
  if (!deleted) {
    return res.status(404).json({ success: false, message: "Lecturer not found" });
  }
  res.status(200).json({
    success: true,
    message: "Lecturer deleted successfully",
    data: deleted,
  });
};

module.exports = {
  getAllLecturers,
  getLecturerById,
  createLecturer,
  updateLecturer,
  deleteLecturer,
};