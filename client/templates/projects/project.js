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

  $.getScript('../../js/galleria-1.5.7.min.js');
  

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

Template.InserProjectForm.events({
    
    'click btn-upload'(event, instance){
        
        client.pick({
            accept: 'image/*',
            maxFiles: 5
            }).then(function(result) {
            console.log(JSON.stringify(result.filesUploaded))
        })
       
    }

});


