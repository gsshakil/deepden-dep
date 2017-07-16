Jobs = new Mongo.Collection("jobs");

if (Meteor.isServer) {
    
  Meteor.publish('jobs', function () {
    return Jobs.find({});
  });

}

// JobSchema
JobSchema = new SimpleSchema({
  userId: {
    type: String,
    autoValue:function(){ return Meteor.user()._id }
  },
  jobTitle: {
    type: String,
    label: "Job Title",
    max: 1000
  },
  jobRole: {
    type: String,
    label: "Job Role",
    max: 1000
  },
  jobLocation: {
    type: String,
    label: "Location",
    max: 1000
  },
  jobLink: {
    type: String,
    label: "Job Link",
    max: 1000
  },
});

Jobs.attachSchema(JobSchema);