Jobs = new Mongo.Collection("jobs");

if (Meteor.isServer) {
    
  Meteor.publish('jobs', function () {
    return Jobs.find({});
  });

}

// JobSchema
JobSchema = new SimpleSchema({
  jobTitle: {
    type: String,
    label: "Enter Job Title",
    max: 1000
  },
  jobRole: {
    type: String,
    label: "Enter Job Role",
    max: 1000
  },
  jobLocation: {
    type: String,
    label: "Enter Location",
    max: 1000
  },
  jobLink: {
    type: String,
    label: "Enter Link",
    max: 1000
  },
});

Jobs.attachSchema(JobSchema);