
$(function() {
	$('.mov-open').click(function(){
		$('#mov').fadeIn();
		$('html').addClass('modalset');
	});
	$('.samplemodal .samplemodal-bg,.samplemodal .samplemodal-close,.all_close').click(function(){
		$('#mov').fadeOut();
		$('html').removeClass('modalset');
	});
});
$(function() {
	$('.syousai1-open').click(function(){
		$('#syousai1').fadeIn();
		$('html').addClass('modalset');
	});
	$('.samplemodal .samplemodal-bg,.samplemodal .samplemodal-close,.all_close').click(function(){
		$('#syousai1').fadeOut();
		$('html').removeClass('modalset');
	});
});
$(function() {
	$('.syousai2-open').click(function(){
		$('#syousai2').fadeIn();
		$('html').addClass('modalset');
	});
	$('.samplemodal .samplemodal-bg,.samplemodal .samplemodal-close,.all_close').click(function(){
		$('#syousai2').fadeOut();
		$('html').removeClass('modalset');
	});
});