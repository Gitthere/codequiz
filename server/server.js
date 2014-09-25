Meteor.startup(function () {
    // code to run on server at startup
  Questions.remove({});
    //seed data
    Questions.insert({
      body : "In the MEAN stack, what does the 'A' stand for?",
      answers : [
        {
          answer: "Apache",
          correct: false
        },
        {
          answer: "Asynchronous",
          correct: false
        },
        {
          answer: "Angular",
          correct: true
        },
        {
          answer: "Adobe",
          correct: false
        },
      ]
    });//******* SYNTAX FOR INSERTING ADDTL QUES?

    Questions.insert({
     body : "sample ques 2",
     answers : [
     {
     answer: "snow",
     correct: false
     },
     {
     answer: "rain",
     correct: true
     },
    ]
    });

    Questions.insert({
      body : "In the LAMP stack, what does the 'A' stand 3?",
      answers : [
        {
          answer: "ALSO",
          correct: false
        },
        {
          answer: "APPLE",
          correct: false
        },
        {
          answer: "AUTO",
          correct: true
        },
        {
          answer: "ANT",
          correct: false
        },
      ]
    });

    Questions.insert({
      body : "In the LAMP stack, what does the 'A' stand 4?",
      answers : [
        {
          answer: "ALSO",
          correct: false
        },
        {
          answer: "APPLE",
          correct: false
        },
        {
          answer: "AUTO",
          correct: true
        },
        {
          answer: "ANT",
          correct: false
        },
      ]
    });

    Questions.insert({
      body : "In the LAMP stack, what does the 'A' stand 5?",
      answers : [
        {
          answer: "ALSO",
          correct: false
        },
        {
          answer: "APPLE",
          correct: false
        },
        {
          answer: "AUTO",
          correct: true
        },
        {
          answer: "ANT",
          correct: false
        },
      ]
    });
  }
);