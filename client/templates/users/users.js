Template.Avatar.helpers({
    image1: function () {
        if (Meteor.user()) return Meteor.user().profile.image;
        else return 'img/profile-pic-1.jpg';
    }
});

Template.editYourAvatarModal.helpers({
    image: function () {
        if (Meteor.user()) return Meteor.user().profile.image;
        else return 'img/profile-pic-1.jpg';
    }
});

Template.Avatar.events({
  'click img.filestack'(event,instance){
    if(WebApp.filestack)
      WebApp.filestack.pick({
      }).then(function(result) {
          console.log(JSON.stringify(result.filesUploaded))
      });
    },
    'click .inc': function () {
      $('#editYourAvatarModal').modal();
    }
});

Template.CoverPhoto.events({
  'click a.btn-upload-cover-photo'(event,instance){
    if(WebApp.filestack)
      WebApp.filestack.pick({
      }).then(function(result) {
          console.log(JSON.stringify(result.filesUploaded))
      });
    }
});

Template.EditProfileForm.helpers({
    profile(){
        Meteor.subscribe('users');        
        return Meteor.users.findOne({_id: Meteor.user()._id}).profile;  
    }
});

Template.UserProfile.helpers({
    profile(){
        Meteor.subscribe('users');        
        return Meteor.users.findOne({_id: Meteor.user()._id}).profile;  
    }
});

Template.UserProfile.events({
  'click a.filestack'(event,instance){
     Modal.show('InserProjectForm')
    }
});


Template.EditProfileForm.onRendered( function() {
  $( "#update-profile" ).validate({
    rules: {
      firstName: {
        required: true
      },
      lastName: {
        required: true
      },
      occupation: {
        required: true
      },
      location:{
        required: true
      },
      skills:{
        required: true
      },
      about:{
        required: true
      }
    },
      
  });
});

Template.EditProfileForm.events({
    'submit form': ( event ) => {
        event.preventDefault();
      
        // Get value from form element
        const firstName = event.target.firstName.value;
        const lastName = event.target.lastName.value;
        const occupation = event.target.occupation.value;
        const location = event.target.location.value;
        const skills = event.target.skills.value;
        const about = event.target.about.value;
        const facebook = event.target.facebook.value;
        const google = event.target.google.value;
        const linkedin = event.target.linkedin.value;
        const youtube = event.target.youtube.value;
    
        // Insert a task into the collection
        Meteor.call('updateProfile', firstName,lastName,occupation,location,skills,about,facebook,google,linkedin,youtube); 
        console.log(firstName,lastName,occupation,location,skills,about,facebook,google,linkedin,youtube); 

        // Clear the form 
        
    }
});