Meteor.startup(function () {
    // code to run on server at startup
    if (Questions.find({}).fetch().length === 0) {
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
        body : "In the LAMP stack, what does the 'A' stand for?",
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
});