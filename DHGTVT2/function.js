$(document).ready(function() {
	$(".navbar-nav li").hover(function(){
			$(this).find("ul").slideDown(500);			
		}, function() {
			$(this).find("ul").slideUp(500);
		}
	);


	$(function() {
		var pull 		= $('.navbar-toggler');
			menu 		= $('.navbar-nav');
			menuHeight	= menu.height();
		$(pull).on('click', function(e) {
			e.preventDefault();
			menu.slideToggle();
		});
		
		$('.bxslider').bxSlider({
			auto: true,
			mode: 'fade'
		});
	});
});
$(function () {
    var contains = function (array, check) {
        for (var i = 0, n = array.length; i < n; i++) {
            if (array[i] === check) {
                return true;
            }
        }
        return false;
    }
    var getRandomId = function (min, max, ids) {
        var id = Math.floor(Math.random() * (max - min + 1)) + min;
        if (contains(ids, id) && ids.length <= max) {
            return getRandomId(min, max, ids);
        }
        return id;
    }

    setInterval(function () {
        var lis = $('#block-views-frontpage-block-9 .item-list > ul > li');
        if (lis.length <= 8) {
            return;
        }
        var max = lis.length - 1;
        var ids = [];
        for (var i = 0; i < 8; i++) {
            var id = getRandomId(0, max, ids);
            ids.push(id);
        }
        lis.each(function (i, e) {
            if (contains(ids, i)) {
                $(e).fadeIn();
            } else {
                $(e).hide();
            }
        });
    }, 5000);
});
