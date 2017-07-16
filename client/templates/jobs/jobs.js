// Autoform Hooks
AutoForm.addHooks('InserJobForm',{
    onSuccess(formType, result) {
      FlowRouter.go('/jobs/');
      toastr.success('Job Submitted Succesfully!');      
    }
});