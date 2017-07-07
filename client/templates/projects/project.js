Template.Jobs.onCreated(function () {
    $('.grid').isotope({
        // options...
        itemSelector: '.grid-item',
        masonry: {
            columnWidth: 10
        }
    });
});

Template.WorkCard.events({
  'click .work-item-content'(event, instance){
    // Show the example modal 3 seconds after startup.
    Modal.show('ProjectDetails')
  }
});

Template.WorkCard2.events({
  'click .work-item-content'(event, instance){
    // Show the example modal 3 seconds after startup.
    Modal.show('ProjectDetails')
  }
});

