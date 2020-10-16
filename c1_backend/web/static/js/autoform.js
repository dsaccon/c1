/* function to do magic auto forming */
invokeUpdate = function(e) {
  var targetElement = e.target;
  var parentElement = $(targetElement).parent();
  var payload = {'table': $(targetElement).data('table'),
                 'table-key': $(targetElement).data('table-key'),
                 'id': $(targetElement).data('id'),
                 'key': $(targetElement).data('key'),
                 'value': $(targetElement).val()}
  $(parentElement).children('.loader').remove();
  $(parentElement).children('span').remove();
  $(parentElement).append("<div style='margin-left: 3px;' class='loader'></div>");
  $.ajax({url:"/auto-form", 
          method: "POST",
          targetElement: targetElement,
          parentElement: parentElement,
          data: payload})
  .done(function() {
    $(parentElement).children('.loader').remove();
    $(parentElement).append("<span class='success' style='color: green'>ok</span>");
  })
  .fail(function(e){
    $(this.parentElement).children('.loader').remove();
    var status = e.status;
    $(this.parentElement).append("<span class='error' style='color:red'>no("+e.status+")</div>");
  });
}

checkForEnterKey = function(e) {
  if(e.keyCode === 13) {
    invokeUpdate(e);
  }
}

/* attach to auto form objects */
$( document ).ready(function() {
  $(".auto-form").focusout(invokeUpdate);
  $(".auto-form").keypress(checkForEnterKey);
});
