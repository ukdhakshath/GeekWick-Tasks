const studentService = require("../services/studentService");

exports.getStudents = (req, res) => {

    const students = studentService.getAllStudents();

    res.json(students);
};

exports.searchStudents = (req, res) => {

    const name = req.query.name;

    const result = studentService.searchStudentsByName(name);

    res.json(result);
};

exports.addStudent = (req, res, next) => {

    try {

        const { name, age } = req.body;

        const student = studentService.createStudent(name, age);

        res.status(201).json(student);

    } catch (error) {
        next(error);
    }
};

exports.updateStudent = (req, res, next) => {

    try {

        const id = parseInt(req.params.id);

        const { name, age } = req.body;

        const student = studentService.updateStudentById(id, name, age);

        res.json(student);

    } catch (error) {
        next(error);
    }
};

exports.deleteStudent = (req, res, next) => {

    try {

        const id = parseInt(req.params.id);

        studentService.deleteStudentById(id);

        res.json({ message: "Student deleted" });

    } catch (error) {
        next(error);
    }
};