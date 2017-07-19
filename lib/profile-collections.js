Profile = new Mongo.Collection("profile");

if (Meteor.isServer) {
    
  Meteor.publish('profile', function () {
    return Profile.find({});
  });
}


// BasicInfoSchema
BasicInfoSchema = new SimpleSchema({
  firstName: {
    type: String,
    label: "Enter First Name",
    max: 1000
  },
  lastName: {
    type: String,
    label: "Enter Last Name",
    max: 1000
  },
  occupation: {
    type: String,
    label: "Occupation",    
    allowedValues: ["3D Artist","Architect","Photographer"]
  },
  location: {
    type: String,
    label: "Enter Location",
    max: 1000
  },
  skills: {
    type: String,
    label: "Enter Skills",
    max: 1000
  },
  bio: {
    type: String,
    max: 1000,
    autoform: {
      afFieldInput: {
        type: "textarea",
        rows: 4
      }
    }
  },
  mobileNo: {
    type: String,
    max: 1000
  },
  facebook: {
    type: String,
    optional: true,
    max: 1000
  },
  twitter: {
    type: String,
    optional: true,
    max: 1000
  },
  youtube: {
    type: String,
    optional: true,
    max: 1000
  },
  linkedin: {
    type: String,
    optional: true,
    max: 1000
  },

});

// WorkExperienceSchema
// WorkExperienceSchema = new SimpleSchema({

//   WorkExperience: {
//     type: Array,
//     label: 'Add Work Experience'
//   },
//   'experience.$': {
//     type: Object,
//   },
//   'experience.$.item': {
//       companyName: {
//         type: String, 
//         label: "Enter Company Name",           
//         max: 1000
//       },
  
//     role: {
//         type: String,
//         label: "Enter Your Role",
//         max: 1000
//     },
//     from: {
//         type: Date,
//         optional: true,
//         autoform: {
//                 type: 'datetime'
//             }
//         },
//     to: {
//         type: Date,
//         optional: true,
//         autoform: {
//                 type: 'datetime'
//             }
//         },
//     note: {
//         type: String,
//         max: 1000,
//         autoform: {
//         afFieldInput: {
//             type: "textarea",
//             rows: 3
//         }
//         }
//     },
//   }
// });

// EducationSchema
// EducationSchema = new SimpleSchema({
//   education: {
//     type: Array,
//     label: 'Add Education'
//   },
//   'education.$': {
//     type: Object,
//   },
//   'education.$.item': {
//     instituteName: {
//         type: String,
//         label: "Enter Institute Name",
//         max: 1000
//     },
//     degree: {
//         type: String,
//         label: "Enter Degree Name",
//         max: 1000
//     },
//     from: {
//         type: Date,
//         optional: true,
//         autoform: {
//                 type: 'datetime'
//             }
//         },
//     to: {
//         type: Date,
//         optional: true,
//         autoform: {
//                 type: 'datetime'
//             }
//         },
//     note: {
//         type: String,
//         max: 1000,
//         autoform: {
//         afFieldInput: {
//             type: "textarea",
//             rows: 3
//         }
//         }
//     },
//   }
// });

// AwardsSchema
// AwardsSchema = new SimpleSchema({
//   award: {
//     type: Array,
//     label: 'Add Awards'
//   },
//   'award.$': {
//     type: Object,
//   },
//   'award.$.item': {
//     awardTitle: {
//         type: String,
//         label: "Enter Award Title",
//         max: 1000
//     },
//     note: {
//         type: String,
//         max: 1000,
//         autoform: {
//         afFieldInput: {
//             type: "textarea",
//             rows: 3
//         }
//         }
//     },
//   }
// });


// PublicationSchema
// PublicationSchema = new SimpleSchema({
//   publication: {
//     type: Array,
//     label: 'Add Publication'
//   },
//   'publication.$': {
//     type: Object,
//   },
//   'publication.$.item': {
//     publicationitle: {
//         type: String,
//         label: "Enter Publication Title",
//         max: 1000
//     },
//     note: {
//         type: String,
//         max: 1000,
//         autoform: {
//         afFieldInput: {
//             type: "textarea",
//             rows: 3
//         }
//         }
//     },
//   }
// });

Profile.attachSchema(BasicInfoSchema);
// Profile.attachSchema(WorkExperienceSchema);
// Profile.attachSchema(EducationSchema);
// Profile.attachSchema(AwardsSchema);
// Profile.attachSchema(PublicationSchema);