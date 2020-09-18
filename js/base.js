window.onload = function() {
	$('.tabbar a').click(function() {
		$(this).addClass('active').siblings().removeClass('active');
	})

	$('.navIndex .navLi').click(function() {
		$('.number').animate({
			width: 0
		});
		timer();
		$(this).addClass('active').siblings().removeClass('active');
	})
}

function timer() {
	$('.number').animate({
		width: 266
	}, 5000);
}
