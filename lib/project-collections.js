Projects = new Mongo.Collection("projects");

if (Meteor.isServer) {
    
  Meteor.publish('projects', function () {
    return Projects.find({});
  });
}

// ProjectSchema
ProjectSchema = new SimpleSchema({
  title: {
    type: String,
    label: "Enter Title",
    max: 1000
  },
  categories: {
    type: String,
    label: "Categories",    
    allowedValues: ["3D Art","Architecture","Photography"]
  },
  pictures: {
    type: Array,
    label: 'Choose file'
  },
  'pictures.$': {
    type: Object,
  },
  'pictures.$.filename': {
    type: String,    
    autoform: {
      afFieldInput: {
        type: 'fileUpload',
        collection: 'Images'
      }
    }
  },
  brief: {
    type: String,
    max: 1000,
    autoform: {
      afFieldInput: {
        type: "textarea",
        rows: 4
      }
    }
  },
  tags: {
    type: String,
    max: 1000
  },

});

Projects.attachSchema(ProjectSchema);