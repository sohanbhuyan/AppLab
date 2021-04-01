$(document).ready(function(){

    $('.btn-1').addClass('select');
    $('.pricetable-1').addClass('table-selected');

	$('.btn-1').click(function(){
		$('.btn-1').addClass('select');
		$('.btn-2').removeClass('select');

		$('.pricetable-1').addClass('table-selected');
		$('.pricetable-2').removeClass('table-selected');

	});
	$('.btn-2').click(function(){
		$('.btn-1').removeClass('select');
		$('.btn-2').addClass('select');

        $('.pricetable-1').removeClass('table-selected');
		$('.pricetable-2').addClass('table-selected');

	});
});