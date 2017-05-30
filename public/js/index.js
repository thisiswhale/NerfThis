$(document).ready(function() {

  $('#login-form-link').click(function(e) {
    $("#login-form").delay(100).fadeIn(100);
    $("#register-form").fadeOut(100);
    $('#register-form-link').removeClass('active');
    $(this).addClass('active');
    e.preventDefault();
  });
  $('#register-form-link').click(function(e) {
    $("#register-form").delay(100).fadeIn(100);
    $("#login-form").fadeOut(100);
    $('#login-form-link').removeClass('active');
    $(this).addClass('active');
    e.preventDefault();
  });

  $("#register-submit").on("click", function(event) {

    var userName = $("#new-username").val().trim();
    var emailAdress = $("#new-email").val().trim();
    var password = $("#new-password").val().trim();
    var comfoPassword = $("#confirm-password").val().trim();

    var passportNotSame = false;
    if (password !== comfoPassword) {
      passportNotSame = false;
    } else {
      passportNotSame = true;
    }

    console.log(userName);
        console.log(emailAdress);
            console.log(passportNotSame == true);
    event.preventDefault();
    if (userName == null || emailAdress == null || passportNotSame == false) {
      return;
    }
    var newUser = {
      userName: userName,
      email: emailAdress,
      password: password
    }
    console.log(newUser);

    // $.post("/api/user", newUser).done(function(data) {
    //   console.log(data)
    // });

  });

    $("#login-submit").on("click", function(event) {
      var loginUserName = $("#login-username").val().trim();
      var loginPassword = $("#login-password").val().trim();

    });

});
