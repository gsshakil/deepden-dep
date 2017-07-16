Meteor.methods({

    //Profile
    'editProfile'(text){
        Profile.update({ _id: Meteor.user()._id }, doc);
    },

    //Projects
    'insertProject'(text){
        Projects.insert({
            text: text,
            createdAt: new Date(), // current time
            userId: Meteor.user()._id,
        });
    },

    'updateProject'(doc, jobId){      
        Projects.update({ _id: projectId }, doc);
    },

    'deleteProject'(jobId){
        Projects.remove(projectId);
    },

    //Jobs
    'insertJob'(text){
        Jobs.insert({
            text: text,
            createdAt: new Date(), // current time
            userId: Meteor.user()._id,
        });
    },

    'updateJob'(doc, jobId){      
        Jobs.update({ _id: jobId }, doc);
    },

    'deleteJob'(jobId){
        Jobs.remove(jobId);
    },
     

});