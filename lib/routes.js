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

loggedIn.route('/profile', {
    name: 'profile',
    action() {
        BlazeLayout.render('layout1', { top: "Navbar", main: "UserProfile" });
    }
});

loggedIn.route('/edit-profile', {
    name: 'editProfile',
    action(params, queryParams) {
        BlazeLayout.render('layout1', { top: "Navbar", main: "EditProfileForm" });
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

exposed.route('/projects', {
    name: 'projects',
    action() {
        BlazeLayout.render('layout1', { top: "Navbar", main: "Projects" });
    }
});

loggedIn.route('/add-project', {
    name: 'addProject',
    action() {
        BlazeLayout.render('layout1', { top: "Navbar", main: "InserProjectForm" });
    }
});

exposed.route('/jobs', {
    name: 'jobs',
    action() {
        BlazeLayout.render('layout1', { top: "Navbar", main: "Jobs" });
    }
});

loggedIn.route('/add-job', {
    name: 'addJob',
    action() {
        BlazeLayout.render('layout1', { top: "Navbar", main: "InserJobForm" });
    }
});










