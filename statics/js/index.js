$(document).ready(function(){
  var saveButton = $('#btn_save');
  var getbutton = $('#btn_get')
  var title = $('#title');
  var body = $('#body');
  console.log("hi");


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
        var result_dom = "<h2>" + result + "</h2>";
        $("#result").append(result_dom);
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
        console.log('hellllllllo')
  			// result = JSON.stringify(result);
        // var result_dom = "<h2>" + result + "</h2>";
        // $("#result").append(result_dom);
  		},
  		error:function(){

  		}
  	});
  });
});
