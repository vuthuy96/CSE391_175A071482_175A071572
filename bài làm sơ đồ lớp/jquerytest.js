
$(document).ready(function() {
	//alert("JQuery đã chạy");
	$('button').click(function() {
		//khai báo biến qua là tên ảnh hiển thị
		var fruit = $('#txtFruit').val();
		var fruitList  = ['orange', 'apple','banana', 'any'];
		if(fruit!='') 
		{
			for(let i=0; i<fruitList.length; i++) 
				{
					console.log(fruitList[i]);
					if(fruitList[i] == fruit)
					{
						//làm rỗng trước khi thêm ảnh;
						$('#showPic').html('');
						//tách chuỗi tên ảnh để thay nhiều ảnh khác nhau
						$('#showPic').append('<img src="'+fruit+'.jpg">');
						break;
					}
					else 
					{
						//alert('Ten qua khong co trong kho!');
						$('#showPic').html('<p>Ten qua khong co trong kho!</p>');
					}
				}
		}
		else {
			//alert('Ban chua nhap gia tri!');
			$('#showPic').html('<p>Ban chua nhap gia tri!</p>');
		}
		
	});
});