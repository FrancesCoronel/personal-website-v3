$(document).ready(function() {
    var q = {
        url: 'https://api.behance.net/v2/users/fvcproductions/projects?',
        key: 'client_id=xkFHXxMMGXYn7ub5jYKn16miD58Ob15g'
    };

    $.ajax({
        url: q.url + q.key,
        dataType: 'jsonp',
        success: function(res) {
            // loop through 10 most recent projects and display
            for (var i = 0; i < 10; i++) {
                $('.behance_projects').append('<div class="col project"><img class="thumbnail" src="' + res.projects[i].covers['230'] + '">' + '<div class="label"><h6><a href="' + res.projects[i].url + '">' + res.projects[i].name + '</a></h6><p>' + res.projects[i].fields + '</p></div></div>');
            }
        }, // end success action
        error: function(request, errorType, errorMessage) {
            alert('Error: ' + errorType + ', ' + errorMessage + '!');
        }
    }); // end ajax call
}); // end document ready
