Template.Navbar.events({
  'click .btn-logout'(event, instance){
      AccountsTemplates.logout();
  },
  'click .msgModal'(event, instance){
    // Show the example modal 3 seconds after startup.
    Modal.show('MessageList');
  },
  'click .notificationModal'(event, instance){
    // Show the example modal 3 seconds after startup.
    Modal.show('Notification');
  },
  'click .btn-add-project'(event, instance){
    // Show the example modal 3 seconds after startup.
    Modal.show('InserProjectForm')
  }
});

Template.Navbar.helpers({
  profile(){
      Meteor.subscribe('users');        
      return Meteor.users.findOne({_id: Meteor.user()._id}).profile;
    }
});

Meteor.startup(function(){
    $(document).ready(function(){
        $('[data-toggle="tooltip"]').tooltip();   
    });
});

