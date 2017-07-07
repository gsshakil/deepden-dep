Template.Jobs.onCreated(function () {
    $('.grid').isotope({
        // options...
        itemSelector: '.grid-item',
        masonry: {
            columnWidth: 10
        }
    });
});
