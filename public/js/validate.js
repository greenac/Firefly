$('#sub').on('click', function(event){
	event.preventDefault();
	var fields = $('.info');
	var validated = true;

	var objectCreator = function (formField){
		var fieldObj = {};
		for(field in fields){
			fieldObj[field.id] = field.value;
		}
		return fieldObj;
	}

	var objectSender = function(fieldObj){
		var encodedObject = JSON.stringify(fieldObj);
		$.ajax({
			type: 'POST',
			url: 'localhost:9042/save-client',
			data: encodedObject,
			contentType: 'application/json; charset = utf-8',
			dataType: "json",
			success = function(msg){
				console.log(msg);
			}
		});
	}

	for(var i = 0; i < fields.length; i++){
		var field = fields[i];
		if(field.value !== ""){
			validated = false;
			break
		}
	}

	if(validated){
		var validatedObject = objectCreator(fields);
		objectSender(validatedObject);
	}else{
		alert('Enter all information');
	}
});