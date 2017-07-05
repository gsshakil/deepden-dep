var exposed = FlowRouter.group ({});
var loggedIn = FlowRouter.group({
  triggersEnter: [
    function() {
      var route;
      if (!(Meteor.loggingIn() || Meteor.userId())) {
        route = FlowRouter.current();
        if (route.route.name !== 'signin') {
          Session.set('redirectAfterLogin', route.path);
        }
        return FlowRouter.go('signin');
      }
    }
  ]
});

FlowRouter.notFound = {
    name: 'notFound',
    action() {
        BlazeLayout.render('layout1', { top: "Navbar", main: "NotFound" });
    }
}

exposed.route('/', {
    name: 'home',
    action() {
        BlazeLayout.render('layout1', { top: "Navbar", main: "Home" });
    }
});


loggedIn.route('/stream', {
    name: 'stream',
    action() {
        BlazeLayout.render('layout1', { top: "Navbar", main: "Stream" });
    }
});



// Wizard

loggedIn.route('/wizard-home', {
    name: 'wizardHome',
    action() {
        BlazeLayout.render('layout1', { top: "Navbar", main: "WizardHome" });
    }
});

loggedIn.route('/brief', {
    name: 'brief',
    action() {
        BlazeLayout.render('layout1', { top: "Navbar", main: "Brief" });
    }
});

loggedIn.route('/work-experience', {
    name: 'workExperience',
    action() {
        BlazeLayout.render('layout1', { top: "Navbar", main: "WorkExperience" });
    }
});

loggedIn.route('/education', {
    name: 'education',
    action() {
        BlazeLayout.render('layout1', { top: "Navbar", main: "Education" });
    }
});

loggedIn.route('/settings-brief', {
    name: 'settingsInWizard',
    action() {
        BlazeLayout.render('layout1', { top: "Navbar", main: "SettingsInWizard" });
    }
});

loggedIn.route('/profile', {
    name: 'profile',
    action() {
        BlazeLayout.render('layout1', { top: "Navbar", main: "UserProfile" });
    }
});

loggedIn.route('/edit-profile', {
    name: 'editProfile',
    action(params, queryParams) {
        BlazeLayout.render('layout1', { top: "Navbar", main: "EditProfile" });
    }
});

exposed.route('/people', {
    name: 'people',
    action() {
        BlazeLayout.render('layout1', { top: "Navbar", main: "People_list" });
    }
});

exposed.route('/people/details', {
    name: 'peopleDetails',
    action() {
        BlazeLayout.render('layout1', { top: "Navbar", main: "PeopleDetails" });
    }
});

exposed.route('/brands', {
    name: 'brands',
    action() {
        BlazeLayout.render('layout1', { top: "Navbar", main: "Brands" });
    }
});

exposed.route('/brand/details', {
    name: 'brand-details',
    action() {
        BlazeLayout.render('layout1', { top: "Navbar", main: "BrandDetails" });
    }
});

exposed.route('/projects', {
    name: 'projects',
    action() {
        BlazeLayout.render('layout1', { top: "Navbar", main: "Projects" });
    }
});

exposed.route('/products', {
    name: 'products',
    action() {
        BlazeLayout.render('layout1', { top: "Navbar", main: "Products" });
    }
});

exposed.route('/jobs', {
    name: 'jobs',
    action() {
        BlazeLayout.render('layout1', { top: "Navbar", main: "Jobs" });
    }
});

exposed.route('/campaign', {
    name: 'campaign',
    action() {
        BlazeLayout.render('layout1', { top: "Navbar", main: "Campaigns" });
    }
});

exposed.route('/learning', {
    name: 'learning',
    action() {
        BlazeLayout.render('layout1', { top: "Navbar", main: "Learning" });
    }
});

exposed.route('/forum', {
    name: 'forum',
    action() {
        BlazeLayout.render('layout1', { top: "Navbar", main: "Forum" });
    }
});

exposed.route('/groups', {
    name: 'groups',
    action() {
        BlazeLayout.render('layout1', { top: "Navbar", main: "Groups" });
    }
});

exposed.route('/blog', {
    name: 'blog',
    action() {
        BlazeLayout.render('layout1', { top: "Navbar", main: "Blog" });
    }
});









