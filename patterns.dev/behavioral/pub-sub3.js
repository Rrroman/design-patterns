// ES2015+ keywords/syntax used: const, arrow function syntax, 
//              template literals for string interpolation, 
//              destructuring assignment syntax
//              shorthand property names in object creation

;($ => {
  // Pre-compile template and "cache" it using closure
  const resultTemplate = _.template($('#resultTemplate').html());

  // Subscribe to the new search tags topic
  $.subscribe('/search/tags', (e, tags) => {
    $('#lastQuery').html(`Searched for: ${tags}`);
  });

  // Subscribe to the new results topic
  $.subscribe('/search/resultSet', (e, results) => {
    $('#searchResults')
      .empty()
      .append(resultTemplate(results));
  });

  // Submit a search query and publish tags on the /search/tags topic
  $('#flickrSearch').submit(function(e) {
    e.preventDefault();
    const tags = $(this)
      .find('#query')
      .val();

    if (!tags) {
      return;
    }

    $.publish('/search/tags', [$.trim(tags)]);
  });

  // Subscribe to new tags being published and perform
  // a search query using them. Once data has returned
  // publish this data for the rest of the application
  // to consume
  // We used the destructuring assignment syntax that makes it possible to unpack values from data structures into distinct variables.
  $.subscribe('/search/tags', (e, tags) => {
    $.getJSON(
      'http://api.flickr.com/services/feeds/photos_public.gne?jsoncallback=?',
      {
        tags,
        tagmode: 'any',
        format: 'json',
      },
      // The destructuring assignment as function parameter
      ({ items }) => {
        if (!items.length) {
          return;
        }
        //shorthand property names in object creation, if variable name equal to object key
        $.publish('/search/resultSet', { items });
      }
    );
  });
})(jQuery);