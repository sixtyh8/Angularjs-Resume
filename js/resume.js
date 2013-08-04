$(function(){

	$('section.jumbotron img.me').hover(function(){
		var newSrc = $(this).data('alternate-image'),
			oldSrc = $(this).attr('src');
		$(this).attr('src', newSrc).data('alternate-image', oldSrc);
	});
	
	$('a#contact-trigger').on('click', function(e){
		e.preventDefault();
		$('section#contact').slideToggle();
	});
	
	$('section#weapons').on('mouseenter mouseleave', '.progress', function(event){
		if(event.type == 'mouseenter'){
			var type = $(this).children('.progress-bar').attr('class');
			var level = type.split(' ')[1];
			$('.'+level).next('.skill-detail').show();
		} else {
			$('.skill-detail').hide();
		}
	});
	
});