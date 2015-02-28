Comments = new Mongo.Collection("comments");

if (Meteor.isClient) {
  // This code only runs on the client
  Template.body.helpers({
    photo: function () {
      return Session.get("photo");
    },
    commentCount: function () {
      return Comments.find({ text: {$ne: true}}).count();
    },
    comments: function () {
      return Comments.find({}, {sort: {createdAt: -1}});
    },
    loc: function () {
      // return 0, 0 if the location isn't ready
      return Geolocation.latLng() || { lat: 0, lng: 0 };
    },
    error: Geolocation.error
  });

  Template.body.events({
    "submit .new-comment": function (event) {
      // This function is called when the new comment form is submitted
      var text = event.target.text.value;

      Comments.insert({
        text: text,
        createdAt: new Date(), // current time
        owner: Meteor.userId(), // _id of logged in user
        username: Meteor.user().username // username of logged in use
      });

      // Clear form
      event.target.text.value = "";

      // Prevent default form submit
      return false;
    },
    "click .delete": function () {
      Comments.remove(this._id);
    },
    "click .photo-button": function(){
      
      var cameraOptions = {
        width: 600,
        height: 800,
        quality: 100
      };

      MeteorCamera.getPicture(cameraOptions, function(error, data) {
        Session.set("photo", data);
      });
    }
  });

  Accounts.ui.config({
    passwordSignupFields: "USERNAME_ONLY"
  });
}