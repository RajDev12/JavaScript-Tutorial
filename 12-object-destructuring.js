const course = {
    courseName: "JavaScript",
    price : "999",
    courseInstructor : "Dev"
}
// console.log(course.courseInstructor)
const { courseInstructor : instructor} = course
// what to extract = From which object
console.log(instructor);