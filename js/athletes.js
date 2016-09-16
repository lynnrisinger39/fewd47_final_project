// toggles paragraph when user clicks on athletes image 
$('.athletes').find('img').on('click', function() {
	$(this).next().slideToggle(300);
});