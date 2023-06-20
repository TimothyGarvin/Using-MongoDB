const Student = require('../models/students.models')

module.exports.apiTest = (req, res) => {
    res.json({message: "Test."})
}

module.exports.create = (req, res) => {
    Student.create(req.body)
    .then((newStudent) => {res.json({results: newStudent})})
    .catch((err) => res.json({err:err}))
}

module.exports.allStudents = (req, res) => {
    Student.find()
    .then((allStudents) => {res.json({results: allStudents})})
    .catch((err) => res.json({err:err}))
}

module.exports.allStudentsState = (req, res) => {
    Student.find({homeState: req.params.state})
    .then((allStudents) => {res.json({results: allStudents})})
    .catch((err) => res.json({err:err}))
}

module.exports.allStudentsLucky = (req, res) => {
    Student.find({luckyNumber: {$gt:req.params.number}})
    .then((allStudents) => {res.json({results: allStudents})})
    .catch((err) => res.json({err:err}))
}

module.exports.showOne = (req, res) => {
    Student.findOne({_id: req.params.id})
    .then((oneStudent) => {res.json({results: oneStudent})})
    .catch((err) => res.json({err:err}))
}

module.exports.update = (req, res) => {
    Student.findOneAndUpdate({_id: req.params.id}, req.body,{new: true})
    .then((oneStudent) => {res.json({results:oneStudent})})
    .catch((err) => res.json({err:err}))
}

module.exports.addInterests = (req,res) => {
    Student.updateMany({_id: {$gt: 0}},{$set: {interests: ['coding', 'brunch', 'mongoDB']}})
    .then((allStudents) => {res.json({results: allStudents})})
    .catch((err) => res.json({err:err}))
}

module.exports.delete = (req, res) => {
    Student.deleteOne({_id: req.params.id})
    .then((deleteStudent) => {res.json({results: deleteStudent})})
    .catch((err) => res.json({err:err}))
}

module.exports.deleteState = (req, res) => {
    Student.findOneAndDelete({homeState: req.params.state})
    .then((deleteStudents) => {res.json({results: deleteStudents})})
    .catch((err) => res.json({err:err}))
}

module.exports.deleteName = (req, res) => {
    Student.findOneAndDelete({name: req.params.name})
    .then((deleteStudents) => {res.json({results: deleteStudents})})
    .catch((err) => res.json({err:err}))
}

module.exports.deleteByNumber = (req, res) => {
    Student.findOneAndDelete({luckyNumber: {$gt:req.params.number}})
    .then((deleteStudent) => {res.json({results: deleteStudent})})
    .catch((err) => res.json({err:err}))
}


