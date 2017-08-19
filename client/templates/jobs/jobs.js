// Autoform Hooks
AutoForm.addHooks('InserJobForm',{
    onSuccess(formType, result) {
      FlowRouter.go('/jobs/');
      toastr.success('Job Submitted Succesfully!');      
    }
});

Template.Jobs.helpers({
    jobs(){
        Meteor.subscribe('jobs');        
        return Jobs.find({});  
    },
});


Template.InserJobForm.onRendered( function() {
  $( "#add-job" ).validate({
    rules: {
      jobTitle: {
        required: true
      },
      jobRole: {
        required: true
      },
      company: {
        required: true
      },
      location: {
        required: true
      },
      skills:{
        required: true
      },
      jobBrief:{
        required: true
      },
      jobLink:{
        required: true
      }
    },
      
  });
});

Template.InserJobForm.events({
    'submit form': ( event ) => {
        event.preventDefault();
      
        // Get value from form element
        const jobTitle = event.target.jobTitle.value;
        const jobRole = event.target.jobRole.value;
        const company = event.target.company.value;
        const location = event.target.location.value;
        const skills = event.target.skills.value;
        const jobBrief = event.target.jobBrief.value;
        const jobLink = event.target.jobLink.value;
    
        // Insert a task into the collection
        Meteor.call('insertJob', jobTitle,jobRole,company,location,skills,jobBrief,jobLink); 
        console.log(jobTitle,jobRole,company,location,skills,jobBrief,jobLink); 

        // Clear the form 
        
    }
});