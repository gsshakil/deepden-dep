Template.registerHelper('formateDate', (date)=>{
	return moment(date).format('MMMM YYYY');
});

Template.layout1.onRendered(function () {
    $('head').append('<script type="text/javascript" src="https://static.filestackapi.com/v3/filestack.js"></script>');
});

Meteor.startup(() => {
    // code to run on server at startup
    smoothScroll.init({
      selector: '[data-scroll]', // Selector for links (must be a valid CSS selector)
      selectorHeader: '[data-scroll-header]', // Selector for fixed headers (must be a valid CSS selector)
      speed: 500, // Integer. How fast to complete the scroll in milliseconds
      easing: 'easeInOutCubic', // Easing pattern to use
      updateURL: true, // Boolean. Whether or not to update the URL with the anchor hash on scroll
      offset: 0, // Integer. How far to offset the scrolling anchor location in pixels
      callback: function ( toggle, anchor ) {} // Function to run after scrolling
    });
});

var tabsFn = (function() {
  
  function init() {
    setHeight();
  }
  
  function setHeight() {
    var $tabPane = $('.tab-pane'),
        tabsHeight = $('.nav-tabs').height();
    
    $tabPane.css({
      height: tabsHeight
    });
  }
    
  $(init);
})();

$('.grid').isotope({
  // options...
  itemSelector: '.grid-item',
  layoutMode: 'fitRows',
  masonry: {
    columnWidth: 200
  }
});