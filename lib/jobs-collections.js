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
  skillsRequired: {
    type: String,
    label: "Enter Required Skills",    
    max: 1000,
  },
  description: {
    type: String,
    max: 1000,
    autoform: {
      afFieldInput: {
        type: "textarea",
        rows: 4
      }
    }
  },
});

Jobs.attachSchema(JobSchema);