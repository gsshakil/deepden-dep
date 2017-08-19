// Template.People_list.helpers({
//     people(){
//         Meteor.subscribe('users');        
//         return Meteor.users.find({});  
//     },
//     profile(){
//         Meteor.subscribe('users');        
//         return Meteor.users.find({}).profile;  
//     }
// });


// Template.People_list.onCreated(function(){
//     this.searchQuery = new ReactiveVar('');
//     this.filter = new ReactiveVar('all');
//     this.limit = new ReactiveVar(20);
//     this.postsCount = new ReactiveVar(0);

//     this.autorun(() => {
//         this.subscribe('users', this.searchQuery.get(), this.filter.get(), this.limit.get());
//         this.subscribe('users', this.searchQuery.get(), this.limit.get());
//         // this.postsCount.set(Counts.get('posts.all'));
//     });
// });

// Template.People_list.events(function(){
//     // 'keyup [data-id=search-query]': _.debounce((event, template) => {
//     //     event.preventDefault();
//     //     template.searchQuery.set(template.find('[data-id=search-query]').value);
//     //     template.limit.set(20);
//     // }, 300),
// });