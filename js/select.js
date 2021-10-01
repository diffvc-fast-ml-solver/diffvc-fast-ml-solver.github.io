/*Dropdown Menu*/
$('.dropdown').click(function () {
    $(this).attr('tabindex', 1).focus();
    $(this).toggleClass('active');
    $(this).find('.dropdown-menu').slideToggle(300);
});
$('.dropdown').focusout(function () {
    $(this).removeClass('active');
    $(this).find('.dropdown-menu').slideUp(300);
});
$('.dropdown .dropdown-menu li').click(function () {
    $(this).parents('.dropdown').find('span').text($(this).text());
    $(this).parents('.dropdown').find('input').attr('value', $(this).attr('id'));
});
/*End Dropdown Menu*/


$('.dropdown-menu li').click(function () {
// var input = '<strong>' + $(this).parents('.dropdown').find('input').val() + '</strong>',
//   msg = '<span class="msg">Current pair: ';
// $('.msg').html(msg + input + '</span>');
	var folder = $(this).parents('.dropdown').find('input').val();
	var vcpairhtml = ' \
	<table class="wrapper"> \
		<tbody style="margin-right: auto; text-align: center;"> \
			<tr> \
				<td></td> \
				<td><b>Source</b></td> \
				<td><b>Target</b></td> \
				<td></td> \
			</tr> \
			<tr> \
				<td></td> \
				<td><audio controls=""><source src="resources/audio/' + folder + '/source.wav"></audio></td> \
				<td><audio controls=""><source src="resources/audio/' + folder + '/target.wav"></audio></td> \
				<td></td> \
			</tr> \
			<tr> \
				<td><br></td> \
			</tr> \
			<tr> \
				<td></td> \
				<td><a href="https://github.com/KimythAnly/AGAIN-VC">AGAIN-VC</a></td> \
				<td><a href="https://github.com/yistLin/FragmentVC">FragmentVC</a></td> \
				<td><a href="https://github.com/Wendison/VQMIVC">VQMIVC</a></td> \
			</tr> \
			<tr> \
				<td style="font-size: medium; text-align: right;"><i style="font-weight: 700;">Baselines</i>:</td> \
				<td><audio controls=""><source src="resources/audio/' + folder + '/again-vc.wav"></audio></td> \
				<td><audio controls=""><source src="resources/audio/' + folder + '/fragmentvc.wav"></audio></td> \
				<td><audio controls=""><source src="resources/audio/' + folder + '/vqmivc.wav"></audio></td> \
			</tr> \
			<tr> \
				<td></td> \
				<td><a href="https://github.com/liusongxiang/ppg-vc">BNE-PPG-VC</a></td> \
				<td></td> \
				<td></td> \
			</tr> \
			<tr> \
				<td></td> \
				<td><audio controls=""><source src="resources/audio/' + folder + '/bne-ppg-vc.wav"></audio></td> \
				<td></td> \
				<td></td> \
			</tr> \
			<tr> \
				<td><br></td> \
			</tr> \
			<tr> \
				<td></td> \
				<td>ML-6</td> \
				<td>ML-30</td> \
				<td></td> \
			</tr> \
			<tr> \
				<td style="font-size: medium; text-align: right;"><i style="font-weight: 700;">Diff-VCTK</i>:</td> \
				<td><audio controls=""><source src="resources/audio/' + folder + '/diff-vctk-ml-6.wav"></audio></td> \
				<td><audio controls=""><source src="resources/audio/' + folder + '/diff-vctk-ml-30.wav"></audio></td> \
				<td></td> \
			</tr> \
			<tr> \
				<td><br></td> \
			</tr> \
			<tr> \
				<td></td> \
				<td>EM-6</td> \
				<td>PF-6</td> \
				<td>ML-6</td> \
			</tr> \
			<tr> \
				<td style="font-size: medium; text-align: right;"><i style="font-weight: 700;">Diff-LibriTTS</i>:</td> \
				<td><audio controls=""><source src="resources/audio/' + folder + '/diff-libritts-em-6.wav"></audio></td> \
				<td><audio controls=""><source src="resources/audio/' + folder + '/diff-libritts-pf-6.wav"></audio></td> \
				<td><audio controls=""><source src="resources/audio/' + folder + '/diff-libritts-ml-6.wav"></audio></td> \
			</tr> \
			<tr> \
				<td></td> \
				<td></td> \
				<td></td> \
				<td>ML-30</td> \
			</tr> \
			<tr> \
				<td></td> \
				<td></td> \
				<td></td> \
				<td><audio controls=""><source src="resources/audio/' + folder + '/diff-libritts-ml-30.wav"></audio></td> \
			</tr> \
		</tbody> \
	</table> \
	';
	$('.vcpair').html(vcpairhtml + '</div>');
});
