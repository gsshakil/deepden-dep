Meteor.methods({

    //Profile
    'updateProfile'(firstName,lastName,occupation,location,skills,about,facebook,google,linkedin,youtube){
        // Profile.update({ _id: Meteor.user()._id }, firstName,lastName,occupation,location,skills,about,facebook,google,linkedin,youtube);
        Meteor.users.update({
            _id:Meteor.user()._id}, 
            { $set: {
                profile: {
                    firstName: firstName,
                    lastName: lastName,                 
                    occupation: occupation,                 
                    location: location,                 
                    skills: skills,                 
                    about: about,                 
                    facebook: facebook,                 
                    google: google,                 
                    linkedin: linkedin,                 
                    youtube: youtube,                 
                }
            }
        }, function(err){
            if (err){
                console.log(err);
            } else {
                toastr.success('Profile Updated Succesfully!');                      
            }
        });
    },

    //Projects
    'insertProject'(title, description, categories, tags){
        Projects.insert({
            title: title,
            description: description,
            categories: categories,
            tags: tags,
            createdAt: new Date(), // current time
            userId: Meteor.user()._id,
        });
        toastr.success('Project Uploaded Successfully!');                      
    },

    'updateProject'(doc, jobId){      
        Projects.update({ _id: projectId }, doc);
    },

    'deleteProject'(jobId){
        Projects.remove(projectId);
    },

    //Jobs
    'insertJob'(jobTitle,jobRole,company,location,skills,jobBrief,jobLink){
        Jobs.insert({
            jobTitle: jobTitle,
            jobRole: jobRole,
            company: company,
            location: location,
            skills: skills,
            jobBrief: jobBrief,
            jobLink: jobLink,
            createdAt: new Date(), // current time
            userId: Meteor.user()._id,
        }, function(err){
            if (err){
                console.log(err);
            } else {
                toastr.success('Job Added Succesfully!');                      
            }
        });        
    },

    'updateJob'(doc, jobId){      
        Jobs.update({ _id: jobId }, doc);
    },

    'deleteJob'(jobId){
        Jobs.remove(jobId);
    },

    //Uploads
    'insertUploads'(uploads){
        Uploads.insert({
            uploads: uploads,
            createdAt: new Date(), // current time
            userId: Meteor.user()._id,
        });
        console.log("Uploaded Successfully!");
    },
});