const _ = require('lodash');
var { mongoose } = require('./../config/database')
var { CourseStudentModel } = require('../model/model.coursestudent');
var express = require('express');







 let getstudentDetails = (req,res) => {
   console.log("hhjkhjkhjkhjkh "+req.params.emailID);

 
    CourseStudentModel.find({EmailKey: req.params.emailID}, function (err, course) {
            if(err){
                
                res.send(err)
            }
            
            return res.send(course);
        });
    } 

let updateACK= (req,res) => {
      
     CourseStudentModel.findOneAndUpdate({EmailKey: req.params.emailID,CourseNameKey:req.params.CourseNameKey},{Acknowledged:true},function (err, course) {
             if(err){
                 
                 res.send(err)
             }
             
             return res.send(course);
         });
     } 
     module.exports.updateACK = updateACK;
module.exports.getstudentDetails = getstudentDetails;