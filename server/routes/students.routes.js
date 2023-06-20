const StudentController = require('../controllers/students.controller')

module.exports = (app) => {
    //Api test
    app.get('/api/testing', StudentController.apiTest)

    //Get all students
    app.get('/api/students', StudentController.allStudents)
    app.get('/api/students/:state', StudentController.allStudentsState)
    app.get('/api/students/lucky/:number', StudentController.allStudentsLucky)


    //Create Student
    app.post('/api/student/create', StudentController.create)

    //Show one student
    app.get('/api/student/:id', StudentController.showOne)

    //update student(s)
    app.put('/api/student/update/:id', StudentController.update)
    app.put('/api/students/update/addInterest', StudentController.addInterests)
    
    //delete student(s)
    app.delete('/api/student/delete/:id', StudentController.delete)
    app.delete('/api/student/deleteByNumber/:luckyNumber', StudentController.deleteByNumber)
    app.delete('/api/students/delete/state/:state', StudentController.deleteState)
    app.delete('/api/student/deleteByName/:name', StudentController.deleteName)

}