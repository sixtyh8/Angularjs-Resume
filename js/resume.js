$(function(){
	
	$('a#contact-trigger').on('click', function(e){
		e.preventDefault();
		$('section#contact').slideToggle();
	});
	
	$('a.more-trigger').on('click', function(e){
		e.preventDefault();
		$(this).parents('div.more-row').children('div.more-content').slideToggle('fast', function(){
			var el = $(this).next('div.more-link-container').children('a'),
				text = el.text();
			
			el.text(text == 'More' ? 'Less' : 'More');
			
		});
	});
});