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