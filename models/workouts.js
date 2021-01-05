// Connect with Config Folder
const connection = require("../config/connection.js");

// All functions
const workout = {

    // Select All
      all: function(cb) {
        connection.all("workouts", function(res) {
          cb(res);
        });
      },
    
      // Add
      insert: function (name, cb){
        connection.insert("workout", "name", name, function (res) {
          cb(res);
        });
      },
    
      // Update
      update: function(objColVals, condition, cb) {
        connection.update("workout", objColVals, condition, function(res) {
          cb(res);
        });
      },
    
      // Delete
      delete: function(id, cb) {
        connection.delete("workout", id, cb);
      },
    
      // The variables cols and vals are arrays.
      create: function(cols, vals, cb) {
        connection.create("workout", cols, vals, function(res) {
          cb(res);
        });
      },
    
      
    };
    
    // Export the database functions for the controller
    module.exports = workout;