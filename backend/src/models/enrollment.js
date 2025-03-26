const mongoose = require("mongoose");

const EnrollmentSchema = new mongoose.Schema({
  student: { type: mongoose.Schema.Types.ObjectId, ref: "Student", required: true },
  course: { type: mongoose.Schema.Types.ObjectId, ref: "Course", required: true },
  enrollmentDate: { type: Date, default: Date.now },
  status: { 
    type: String, 
    enum: ["Enrolled", "Completed", "Dropped"], 
    default: "Enrolled" 
  },
  grade: { type: String, default: "N/A" },  // Optional field for grading
});

module.exports = mongoose.model("Enrollment", EnrollmentSchema);
