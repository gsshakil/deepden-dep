// Template.Edit_profile.helpers({
//     profile(){
//         Meteor.subscribe('users');        
//         return Meteor.users.findOne({_id: Meteor.user()._id}).profile;  
//     }
// });

// Template.Edit_profile.events({
//     'submit .update-profile'(e){
//         e.preventDefault();

//         var name = e.target.name.value;
//         var about = e.target.about.value;

//         Meteor.users.update({
//             _id:Meteor.user()._id}, 
//             { $set: {
//                 profile: {
//                     name: name,
//                     about: about,                 
//                 }
//             }
//         }, function(err){
//             if (err){
//                 console.log(err);
//             } else {
//                 toastr.success('Profile Updated Succesfully!');                      
//             }
//         });

//         return false;
//     }   
// });

Template.Avatar.events({
  'click img.filestack'(event,instance){
    if(WebApp.filestack)
      WebApp.filestack.pick({
      }).then(function(result) {
          console.log(JSON.stringify(result.filesUploaded))
      });
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

Template.UserProfile.events({
  'click a.filestack'(event,instance){
     Modal.show('InserProjectForm')
    }
});