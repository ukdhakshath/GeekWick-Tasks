const courseService = require("../services/courseService");

exports.getCourses = (req, res) => {

    const courses = courseService.getAllCourses();

    res.json(courses);
};

exports.addCourse = (req, res) => {

    const course = courseService.createCourse(req.body.title);

    res.status(201).json(course);
};