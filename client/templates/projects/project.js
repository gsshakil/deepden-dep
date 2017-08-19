Template.Jobs.onCreated(function () {
    $('.grid').isotope({
        // options...
        itemSelector: '.grid-item',
        masonry: {
            columnWidth: 10
        }
    });
});

Template.WorkCard.events({
  'click .work-item-content'(event, instance){
    // Show the example modal 3 seconds after startup.
    Modal.show('ProjectDetails')
  }
});

Template.Projects.events({
  'click .btn-add-project'(event, instance){
    // Show the example modal 3 seconds after startup.
    Modal.show('InserProjectForm')
  }
});

Template.WorkCard2.events({
  'click .work-item-content'(event, instance){
    // Show the example modal 3 seconds after startup.
    Modal.show('ProjectDetails')
  }
});


Meteor.startup(function(){
  $.getScript('https://static.filestackapi.com/v3/filestack.js')
    .done(function(script, textStatus){
      WebApp.filestack = filestack.init('ABpwyXOI2Tt6aZgkEdALkz');
    })
    .fail(function(jqxhr, settings, exception){
      console.error(exception);
    })
  ;
    
  setTimeout(function(){
      $('.grid').isotope({
          // options...
          itemSelector: '.grid-item',
          masonry: {
              columnWidth: 10
          }
      });
  }, 500);
  // $.getScript('../../js/galleria-1.5.7.min.js');
  

});
  
Template.filestack.events({
  'click button.filestack'(event,instance){
    if(WebApp.filestack)
      WebApp.filestack.pick({
      }).then(function(result) {
          console.log(JSON.stringify(result.filesUploaded))
      });
  }
});

Template.ProjectCard.helpers({
  uploads() {
      // Show newest projects at the top
      Meteor.subscribe('uploads');
      return Uploads.find({});
  }
});


Template.Projects.helpers({
  projects() {
      // Show newest projects at the top
      Meteor.subscribe('projects');
      return Projects.find({});
  }
});

Template.InserProjectForm.events({
    'click btn-upload'(event, instance){
        client.pick({
          accept: 'image/*',
          maxFiles: 5
        }).then(function(result) {
            uploads = JSON.stringify(result.filesUploaded);
            console.log(uploads);
            Meteor.call('insertUploads', JSON.stringify(result.filesUploaded));           
        })
    },

    'click .test'(event, instance){
      // function foo(){
        var a = 0; var b = 0; var c = 0;
        console.log(a);
        console.log(b);
        console.log(c);
      // }
      // console.log(foo);
    },    
    
    

    'submit form': ( event ) => {
        event.preventDefault();
      
        // Get value from form element
        const title = event.target.projectTitle.value;
        const description = event.target.projectDescription.value;
        const categories = event.target.categories.value;
        const tags = event.target.tags.value;
    
        // Insert a task into the collection
        Meteor.call('insertProject', title,description,categories,tags); 
        console.log(title,description,categories,tags); 

        // Clear form and hide Modal
        Modal.hide('InserProjectForm')
        
    }

});

Template.InserProjectForm.onRendered( function() {
  $( "#add-project" ).validate({
    rules: {
      projectTitle: {
        required: true
      },
      projectDescription: {
        required: true
      },
      categories: {
        required: true
      },
      tags:{
        required: true
      }
    },
    messages: {
      projectTitle: {
        required: "Need a book title here!"
      },
      projectDescription: {
        required: "Don't forget an author!"
      },
      categories: {
        required: "Too shy to tell us why it's your favorite?"
      },
      tags: {
        required: "Too shy to tell us why it's your favorite?"
      }
      
    }
  });
});


if (Meteor.isServer) {
  Meteor.startup(function () {
    UploadServer.init({
      tmpDir: process.env.PWD + '/public/uploads',
      uploadDir: process.env.PWD + '/public/uploads',
      checkCreateDirectories: true,
      uploadUrl: '/upload/',
      // *** For renaming files on server
      getFileName: function(file, formData) {
        return new Date().getTime() + '-' + Math.floor((Math.random() * 10000) + 1) + '-' + file.name; 
        // we get this value in the ajax response
      }
    });
  });
}

