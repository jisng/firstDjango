$(document).ready(function(){
  var createButton = $('#btn_create');
  var title = $('#title');
  var body = $('#body');

  createButton.click(function() {
    $.ajax({
  		type: 'POST',
  		url : '/create/',
  		data: {
        // "title": title.val(),
        "body": body.val()
      },
  		success: function(result){
  			result = JSON.stringify(result, null, 2);
        var result_dom = '<pre>' + result.replace(/\n/g, '<br>') + '</pre>';
        $("#result").empty();
        $("#result").append(result_dom);
  		},
  		error:function(){

  		}
  	});
  });
});
