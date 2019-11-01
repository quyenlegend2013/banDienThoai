// JavaScript Document


$(document).ready(function(e) 
	{
		var stt = 0;
		staImg=$("img.chayhinh:first").attr("stt");
		endImg=$("img.chayhinh:last").attr("stt");
		$("img.chayhinh").each(function()
		{
		 if($(this).is(':visible'))
		 stt = $(this).attr("stt");
		});
		
		$("#next").click(function()
		{
			if(stt==endImg)
			{
				stt=-1;
			}
			next = ++stt;
			$("img.chayhinh").hide();
			$("img.chayhinh").eq(next).show();
		});
		
		$("#prew").click(function()
		{
			if(stt==0)
			{
				stt=endImg;
				prew=stt++;
			}
			prew = --stt;
			$("img.chayhinh").hide();
			$("img.chayhinh").eq(prew).show();
		});
	setInterval(function()
		{
			$("#next").click();
		},2000);
	
	});
