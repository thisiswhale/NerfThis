$(document).ready(function() {
  // $.get("/api/user", newUser).done(function(data) {
  //   console.log(data)
  // });

// Need 6 teams, Map arena, position, result

  // Function for retrieving user's records and getting them ready to be rendered to the page
  function getUser() {
    //this directory can be renamed, grab this users records
    $.get("/api/user/:userid", function(data) {
      var rowsToAdd = [];
      for (var i = 0; i < data.length; i++) {
        rowsToAdd.push(createEntryRow(data[i]));
      }
      renderUserRecords(rowsToAdd);
    });
  }
  // Function for creating a new history entry row for user
  function createEntryRow(userData) {
    var recordEntry = $("<div>").attr("class", "record-entry");
    recordEntry.append("")
		var title = $("<div class='title'>").html("<span>" + (i + 1) + " </span>" + response.response.docs[i].headline.main);
		var author = $("<div class='info'>").html(response.response.docs[i].byline);
		var section = $("<div class='info'>").html("Section: " + response.response.docs[i].section_name);
		var date = $("<div class='info'>").html(response.response.docs[i].pub_date);
		var link = $("<div class='link'>").html("<a href='" + response.response.docs[i].web_url + "'>" + response.response.docs[i].web_url + "</a>");
		article.append(title).append(author).append(section).append(date).append(link);
  });

function createEntryRow(authorData) {

  var newTr = $("<tr>");
  newTr.data("author", authorData);
  newTr.append("<td>" + authorData.name + "</td>");
  newTr.append("<td> " + authorData.Posts.length + "</td>");
  newTr.append("<td><a href='/blog?author_id=" + authorData.id + "'>Go to Posts</a></td>");
  newTr.append("<td><a href='/cms?author_id=" + authorData.id + "'>Create a Post</a></td>");
  newTr.append("<td><a style='cursor:pointer;color:red' class='delete-author'>Delete Author</a></td>");
  return newTr;
}
// A function for rendering the list of authors to the page
function renderUserRecords(rows) {
  userRecords.children().not(":last").remove();
  $(".records-container").children(".alert").remove();
  if (rows.length) {
    console.log(rows);
    $(".records-container").prepend(rows);
  } else {
    renderEmpty();
  }
}

// Function for handling what to render when there are no authors
function renderEmpty() {
  var alertDiv = $("<div>");
  alertDiv.addClass("alert alert-danger");
  alertDiv.html("You have no history entry.");
  $(".records-container").append(alertDiv);
}
});
