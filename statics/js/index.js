$(document).ready(function(){
  var saveButton = $('#btn_save');
  var getbutton = $('#btn_get')
  var title = $('#title');
  var body = $('#body');

  saveButton.click(function() {
    $.ajax({
  		type: 'POST',
  		url : '/create/',
  		data: {
        // "title": title.val(),
        "body": body.val()
      },
  		success: function(result){
  			result = JSON.stringify(result);
        var result_dom = "<p>" + result + "</p>";
        $("#result").empty();
        $("#result").append(result_dom);
        console.log('success save')
  		},
  		error:function(){

  		}
  	});
  });

  getbutton.click(function() {
    $.ajax({
  		type: 'GET',
  		url : '/read/',
  		data: { },
  		success: function(result){
        console.log('GET!')
  		},
  		error:function(){

  		}
  	});
  });
});
