Session.setDefault("counter", 0);

  Template.quizContainer.helpers({
    counter: function () {
      return Session.get("counter");
    }
  });

  Template.quizContainer.events({
    'click button': function () {
      // increment the counter when button is clicked
      Session.set("counter", Session.get("counter") + 1);
    }
  });

//set up collection of player names 



//set up collection of scores


//set up collection of questions for random generation
Template.questionAndAnswerContainer.question = function() {
  return Session.get("currentQuestion");
};

setInterval(function() {
  console.log('test');
  Session.set("currentQuestion", Date.now);
}, 1000);
