let students = [
    { id: 1, name: "Rahul", age: 20 },
    { id: 2, name: "Anita", age: 21 }
];

// GET students
exports.getStudents = (req, res) => {
    res.json(students);
};

// ADD student
exports.addStudent = (req, res) => {

    const newStudent = {
        id: students.length + 1,
        name: req.body.name,
        age: req.body.age
    };

    students.push(newStudent);

    res.status(201).json({
        message: "Student added successfully",
        student: newStudent
    });
};

// UPDATE student
exports.updateStudent = (req, res) => {

    const studentId = parseInt(req.params.id);

    const student = students.find(s => s.id === studentId);

    if (!student) {
        return res.status(404).json({
            message: "Student not found"
        });
    }

    student.name = req.body.name;
    student.age = req.body.age;

    res.json({
        message: "Student updated successfully",
        student
    });
};

// DELETE student
exports.deleteStudent = (req, res) => {

    const studentId = parseInt(req.params.id);

    students = students.filter(s => s.id !== studentId);

    res.json({
        message: "Student deleted successfully"
    });
};