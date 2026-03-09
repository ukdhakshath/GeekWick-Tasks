let courses = [
    { id: 1, title: "Node.js" },
    { id: 2, title: "React" }
];

// get courses
exports.getAllCourses = () => {
    return courses;
};

// create course
exports.createCourse = (title) => {

    const newCourse = {
        id: courses.length + 1,
        title
    };

    courses.push(newCourse);

    return newCourse;
};