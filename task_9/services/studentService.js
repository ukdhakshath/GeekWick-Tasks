let students = [
    { id: 1, name: "Rahul", age: 20 },
    { id: 2, name: "Anita", age: 21 }
];

// get students
exports.getAllStudents = () => {
    return students;
};

// search students
exports.searchStudentsByName = (name) => {
    return students.filter(s =>
        s.name.toLowerCase().includes(name.toLowerCase())
    );
};

// add student
exports.createStudent = (name, age) => {

    const newStudent = {
        id: students.length + 1,
        name,
        age
    };

    students.push(newStudent);

    return newStudent;
};

// update student
exports.updateStudentById = (id, name, age) => {

    const student = students.find(s => s.id === id);

    if (!student) {
        throw new Error("Student not found");
    }

    student.name = name;
    student.age = age;

    return student;
};

// delete student
exports.deleteStudentById = (id) => {

    const student = students.find(s => s.id === id);

    if (!student) {
        throw new Error("Student not found");
    }

    students = students.filter(s => s.id !== id);

    return true;
};