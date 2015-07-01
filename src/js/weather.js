$.ajax({
  type: "POST",
  url: url,
  timeout: 2000,
  beforeSend: function () {
    $content.append('<div id = "load">Loading</div>');
  },
  complete: function () {
    $('#load').remove();
  },
  success: function (data) {
    $content.html ( $(data).find('#container') ).hide().fadeIn(400);
  },
  fail: function () {
    $('#container').html('<div class = "load">Please Try again soon.</div>');
  }
});
