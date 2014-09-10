Meteor.startup(function () {
    // code to run on server at startup
    if (Questions.find({}).fetch().length === 0) {
      //seed data
      Questions.insert({
        body : "How old are you?",
        answers : [
          {
            answer: "ten",
            correct: false
          },
          {
            answer: "seven",
            correct: false
          },
          {
            answer: "six",
            correct: true
          },
          {
            answer: "four",
            correct: false
          },
        ]
      });
    }
});