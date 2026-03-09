let students = [
    { id: 1, name: "Rahul", age: 20 },
    { id: 2, name: "Anita", age: 21 }
];

// GET all students
exports.getStudents = (req, res) => {
    res.json(students);
};

// TASK 6 → Search feature
exports.searchStudents = (req, res) => {

    const name = req.query.name;

    if (!name) {
        return res.status(400).json({
            message: "Name query is required"
        });
    }

    const result = students.filter(s =>
        s.name.toLowerCase().includes(name.toLowerCase())
    );

    res.json(result);
};

// CREATE student
exports.addStudent = (req, res, next) => {

    try {

        const { name, age } = req.body;

        if (!name || !age) {
            throw new Error("Name and Age are required");
        }

        const newStudent = {
            id: students.length + 1,
            name,
            age
        };

        students.push(newStudent);

        res.status(201).json(newStudent);

    } catch (error) {
        next(error);
    }
};

// UPDATE student
exports.updateStudent = (req, res, next) => {

    try {

        const studentId = parseInt(req.params.id);

        const student = students.find(s => s.id === studentId);

        if (!student) {
            throw new Error("Student not found");
        }

        student.name = req.body.name;
        student.age = req.body.age;

        res.json(student);

    } catch (error) {
        next(error);
    }
};

// DELETE student
exports.deleteStudent = (req, res, next) => {

    try {

        const studentId = parseInt(req.params.id);

        const student = students.find(s => s.id === studentId);

        if (!student) {
            throw new Error("Student not found");
        }

        students = students.filter(s => s.id !== studentId);

        res.json({ message: "Student deleted" });

    } catch (error) {
        next(error);
    }
};