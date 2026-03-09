let courses = [
    { id: 1, title: "Node.js" },
    { id: 2, title: "React" }
];

exports.getCourses = (req, res) => {
    res.json(courses);
};

exports.addCourse = (req, res) => {

    const newCourse = {
        id: courses.length + 1,
        title: req.body.title
    };

    courses.push(newCourse);

    res.status(201).json(newCourse);
};