$.fn.imgdata = function(key){
	return this.ffind('.dataImg li:eq('+key+')').text();
}
$.fn.hdata = function(key){
	return this.find('.dataSet li:eq('+key+')').text();
}
// options cookie 10 days
var options = { path: '/', expires: 10 };
/*var buttonActions = {
	'hide_menu':function(){
		$.cookie('hide_','1', options);
		$('#hide_menu').hide();	
		$('body').addClass('nobg');		
		$('#left_menu,#load_menu').animate({ right: "-213px" }, 200 );
		$('#show_menu').show();
		$('#shadowhead').css({ position: "fixed" });	
		$('#content').animate({ marginRight: "40px" }, 200, function(){ imgRow(); $(window).trigger("resize");});
	},	
	  'show_menu':function(){		
		  $(this).hide();	
		  $.cookie('hide_','0', options);
		  $('#hide_menu').show();
		  $('#left_menu,#load_menu').animate({ right: "0px" }, 200 );
		  $('#content').animate({ marginRight: "210px" }, 200,function(){
			$('body').removeClass('nobg').addClass('dashborad');		
			$('#shadowhead').css({ position: "absolute" });	
			imgRow(); 
			$(window).trigger("resize");
		   } );
	},
   	'show_menu_icon':function() { 
		 $(this).hide();	
		$.cookie('hide_','0', options);
		 $('#left_menu,#load_menu').animate({ right: "0px" }, 200 );
		  $('#content').animate({ marginRight: "70px" }, 200, function(){ imgRow(); });
		  $('#hide_menu_icon').show();	
					$('#main_menu').removeClass('main_menu').addClass('iconmenu');
					$('#main_menu li').each(function() {	  
							var title=$(this).find('b').text();
							$(this).find('a').attr('title',title);		
					});
					$('#main_menu li a').find('b').hide();
					$('#main_menu li ').find('ul').hide();
	  },
	     'hide_menu_icon':function() { 
		 $(this).hide();	
		 $.cookie('hide_','1', options);	 
		 $('#left_menu,#load_menu').animate({ right: "-213px" }, 200 ,function(){
					$('#main_menu').removeClass('iconmenu ').addClass('main_menu');
					$('#main_menu li a').find('b').show();											  
		  });
		  $('#content').animate({ marginRight: "20px" }, 200, function(){ imgRow(); });
		  $('#show_menu_icon').show();	
	  },
	  'close_windows':function(){
		  $.fancybox.close(); 
		  ResetForm();
	}	
}*/

$(document).ready(function(){
	$( "#nationality" ).change(function() {
		if($("#nationality").val() == "151")
			{
				$("#area").removeAttr( "disabled");
				$("#area").attr('disabled', false).trigger("liszt:updated");
			}
			else
			{
				$("#area").attr("disabled", "disabled");
				$("#area").attr('disabled', true).trigger("liszt:updated");
			}
		});
	if($("#nationality").val() == "151")
			{
				$("#area").removeAttr( "disabled");
				$("#area").attr('disabled', false).trigger("liszt:updated");
			}
			else
			{
				$("#area").attr("disabled", "disabled");
				$("#area").attr('disabled', true).trigger("liszt:updated");
			}
	
	
	$( "#material" ).parent().click(function() {
		if($("#material").attr("checked")=="checked")
		{
			$("#money").removeAttr( "disabled");
			$("#money").attr('disabled', false).trigger("liszt:updated");
		}
		else
		{
			$("#money").attr("disabled", "disabled");
			$("#money").attr('disabled', true).trigger("liszt:updated");
		}
	});
	if($("#material").attr("checked")=="checked")
	{
		$("#money").removeAttr( "disabled");
		$("#money").attr('disabled', false).trigger("liszt:updated");
	}
	else
	{
		$("#money").attr("disabled", "disabled");
		$("#money").attr('disabled', true).trigger("liszt:updated");
	}
	


	// tabs
	$("ul.tabs li").fadeIn(400); 
	$("ul.tabs li:first").addClass("active").fadeIn(400); 
	$(".tab_content:first").fadeIn(); 

	
		$('.events div.external-event').each(function() {
			var eventObject = {
				title: $.trim($(this).text()) 
			};
			$(this).data('eventObject', eventObject);
			$(this).draggable({
				zIndex: 999,
				revert: true,      
				revertDuration: 0 
			});
			
		});
	
	


	// input editor
	
	// form validationEngine

	


});	

$(function() {		
	//LResize();
	//$(window).resize(function(){LResize(); });
    //$(window).scroll(function (){ scrollmenu(); });
		$( "#amount" ).text( "$" + $( "#slider-range-min" ).slider( "value" ) );
		
		$( "#slider-range" ).slider({
			range: true,
			min: 0,
			max: 500,
			values: [ 75, 300 ],
			slide: function( event, ui ) {
				$( "#amount2" ).text( "$" + ui.values[ 0 ] + " - $" + ui.values[ 1 ] );
			}
		});
		$( "#amount2" ).text( "$" + $( "#slider-range" ).slider( "values", 0 ) + " - $" + $( "#slider-range" ).slider( "values", 1 ) );
		
		$( "#slider" ).slider({
			value:100,
			min: 0,
			max: 500,
			step: 50,
			slide: function( event, ui ) {
				$( "#amount3" ).text( "$" + ui.value );
			}
		});
	$( "#amount3" ).text( "$" + $( "#slider" ).slider( "value" ) );
	$( "#eq > span" ).each(function() {
		// read initial values from markup and remove that
		var value = parseInt( $( this ).text(), 10 );
		$( this ).empty().slider({
			value: value,
			range: "min",
			animate: true,
			orientation: "vertical"
		});
	});
	$( "#red, #green, #blue" ).slider({
		orientation: "horizontal",
		range: "min",
		max: 255,
		value: 127,
		slide: refreshSwatch,
		change: refreshSwatch
	});
	$( "#red" ).slider( "value", 190 );
	$( "#green" ).slider( "value", 221 );
	$( "#blue" ).slider( "value", 23 );
	  
	  
  	//datepicker
	$("input.datepicker").datepicker({ 
		autoSize: true,
		appendText: '(dd-mm-yyyy)',
		dateFormat: 'dd-mm-yy'
	});
	$( "div.datepickerInline" ).datepicker({ 
		dateFormat: 'dd-mm-yy',
		numberOfMonths: 1
	});	

	$( "input.birthday" ).datepicker({
		changeMonth: true,
		changeYear: true,
		dateFormat:'dd-mm-yy',
	    yearRange:'-90:+0'
    });
	
	$( "input.datefrom" ).datepicker({
		changeMonth: true,
		changeYear: true,
		dateFormat:'dd-mm-yy',
	    yearRange:'-20:+10'
    });

	//datetimepicker
   $("#datetimepicker").datetimepicker();
   $('#timepicker').timepicker({});
   $('.timepicker').timepicker({});
   
   	//Color picker 
	



	//button click
	$('.loading').on('click',function() { 
		  var str=$(this).attr('title'); 
		  var overlay=$(this).attr('rel'); 
		  loading(str,overlay);
		  setTimeout("unloading()",1500); 
	  });
	$('#preloader').on('click',function(){
			unloading();
	 });
	
	// submit form 
	$('a.submit_form').on('click',function(){
		  var form_id=$(this).parents('form').attr('id');
		  $("#"+form_id).submit();
	})	

	// logout  
	$('.logout').on('click',function() { 
		  var str="Logout"; 
		  var overlay="1"; 
		  loading(str,overlay);
		  setTimeout("unloading()",1500);
		  setTimeout( "window.location.href='index.html'", 2000 );
	  });
		
	// wizard 
	 



	// rating_star


	  function togglePane(){
		  var visible = $(' .buttonPane:visible:first');
		  var hidden = $(' .buttonPane:hidden:first');	
		  visible.fadeOut('fast',function(){
			  hidden.show();
		  });
	  }
	  
	  	// images  editor tranfer
		$('#reflect').click(function() {
						$('.animate').animate({"reflect": true});	 
		});
		$('#reflectX').click(function() {
						$('.animate').animate({"reflectX": true});	 
		});
		$('#reflectY').click(function() {
						$('.animate').animate({"reflectY": true});	 
		});
		$('#reflectXY').click(function() {
						$('.animate').animate({"reflectXY": true});	 
		});
		$('#reflectYX').click(function() {
						$('.animate').animate({"reflectYX": true});	 
		});
	    ///////////////////////////////////////////////////////////////////////////		
		
	
	 ///////////////////////////////////////////////////////////////////////////
	



	// checkbox,selectbox customInput 
	$('.ck,.chkbox,.checkAll').customInput();	
	$('.limit3m').limitInput({max:3,disablelabels:true});
	// select boxes
	$(function() {
        $(' select').not("select.chzn-select,select[multiple],select#box1Storage,select#box2Storage").selectmenu({
            style: 'dropdown',
            transferClasses: true,
            width: null
        });
    });
	// Dual select boxes
	
	$("table tbody tr td:first-child .custom-checkbox:first-child").css("margin: 0px 3px 3px 3px");
	 // mutiselection
	$(".chzn-select").chosen(); 
	// checkbox iphoneStyle
	$(".on_off_checkbox").iphoneStyle(); 
	$(".show_email").iphoneStyle({
		  checkedLabel: "show Email",
		  uncheckedLabel: "Don't show ",
		  labelWidth:'85px'
	}); 
	$(".preOrder").iphoneStyle({
		  checkedLabel: "متاح بالمخزن",
		  uncheckedLabel: "غير متاح بالمخزن",
		  labelWidth:'85px'
	}); 
	$(".out").iphoneStyle({
		  checkedLabel: "نعم",
		  uncheckedLabel: "لا",
		  labelWidth:'35px'
	});
	$(".social").iphoneStyle({
		  checkedLabel: "متزوج",
		  uncheckedLabel: "أعزب",
		  labelWidth:'40px'
	});
	$(".gender").iphoneStyle({
		  checkedLabel: "أنثي",
		  uncheckedLabel: "ذكر",
		  labelWidth:'40px'
	});
	$(".online").iphoneStyle({
		  checkedLabel: "تشغيل",
		  uncheckedLabel: "إيقاف ",
		  labelWidth:'55px'
	}); 
	$(".show_conmap").iphoneStyle({
		  checkedLabel: "show map",
		  uncheckedLabel: "Don't show ",
		  labelWidth:'85px',
		  onChange: function() {
				var chek=$(".show_conmap").attr('checked');
					  if(chek){
						  $(".disabled_map").fadeOut();
					  }else{
						 $(".disabled_map").fadeIn();
					  }
		}
	});



	

	

	
	// icon  gray Hover
	$('.iconBox.gray').hover(function(){
		  var name=$(this).find('img').attr('alt');
		  $(this).find('img').animate({ opacity: 0.5 }, 0, function(){
			    $(this).attr('src','images/icon/color_18/'+name+'.png').animate({ opacity: 1 }, 700);									 
		 });
	},function(){
		  var name=$(this).find('img').attr('alt');
		  $(this).find('img').attr('src','images/icon/gray_18/'+name+'.png');
	 })
	// icon  Logout 
	$('div.logout').hover(function(){
		  var name=$(this).find('img').attr('alt');
		  $(this).find('img').animate({ opacity: 0.4 }, 200, function(){
			    $(this).attr('src','images/'+name+'.png').animate({ opacity: 1 }, 500);									 
		 });
	},function(){
		  var name=$(this).find('img').attr('name');
		  $(this).find('img').animate({ opacity: 0.5 }, 200, function(){
			    $(this).attr('src','images/'+name+'.png').animate({ opacity: 1 }, 500);									 
		 });
	 })
	// icon  setting 
	$('div.setting').hover(function(){
		$(this).find('img').addClass('gearhover');
	},function(){
		$(this).find('img').removeClass('gearhover');
	 })
	
	// shoutcutBox   Hover
	$('.shoutcutBox').hover(function(){
		  $(this).animate({ left: '+=15'}, 200);
	},function(){
		$(this).animate({ left: '0'}, 200);
	 })
	
	// shoutcutBox   Hover
	$("#shortcut li").hover(function() {
		  var e = this;
		$(e).find("a").stop().animate({ marginTop: "-7px" }, 200, function() {
		  $(e).find("a").animate({ marginTop: "-5px" }, 200);
		});
	  },function(){
		  var e = this;
		$(e).find("a").stop().animate({ marginTop: "0px" }, 200, function() {
			  $(e).find("a").animate({ marginTop: "0px" }, 200);
		});
	  });
	




	// filemanager. 
	// onload
	$('#finder').elfinder({
		url : 'components/elfinder/connectors/php/connector-fileimport.php',
		docked : true,dialog : { title : 'File manager',modal : true,width : 700 }
	})
	// on click
	$('#filemanager').click(function(){	
		  var callback=$(this).attr('id');
		  var type=$(this).attr('title');
		  fileDialog(callback,type);					   
	});
	// on click callback
	$('#open_icon,#open_icon2,#open_icon3').click(function(){	
		  var callback=$(this).attr('id');
		  var type=$(this).attr('title');
		   var input=$(this).attr('rel');
		  fileDialogCallback(callback,type,input);					   
	});
	// on focus  callback




	// Calendar 
		var date = new Date();
		var d = date.getDate();
		var m = date.getMonth();
		var y = date.getFullYear();
		


		
		$('#calendar').fullCalendar({

			header: {
				left: 'title',
				center: 'prev,next  ',
				right: 'today month,basicWeek,agendaDay'
			},
		  buttonText: {
				prev: 'Previous',
				next: 'Next '
			},

			editable: true,
			refetchEvents :'refetchEvents',
			selectable: true,
			selectHelper: true,
			dayClick: function(date, allDay, jsEvent, view) {
			var nDate=$.fullCalendar.formatDate( date, 'd' );
			var dDate=$.fullCalendar.formatDate( date, 'dddd ' );
			var fullDate=$.fullCalendar.formatDate( date, ' MMMM , yyyy' );
			$('#calendar .fc-header-title h2').html('<div class="dateBox"><div class="nD">'+nDate+'</div><div class="dD">'+dDate+'<div class="fullD">'+fullDate+'</div><div></div><div class="clear"></div>');
			},
			events: [
				{
					title: 'All Day Event',
					start: new Date(y, m, 12),
					end: new Date(y, m, 14)
				},
				{
					id: 999,
					title: 'Repeating Event',
					start: new Date(y, m, d-3, 16, 0),
					allDay: false
				}
			]
		});
              
         
	
	// CHARTS        
    $("table.chart").each(function() {
        var colors = [];
        $("table.chart thead th:not(:first)").each(function() {
            colors.push($(this).css("color"));
        });
        $(this).graphTable({
            series: 'columns',
			labels: '0',
            position: 'replace',
			width: '96%',
            height: '423px',
            colors: colors
        }, { xaxis: {   tickSize: 1 },
			yaxis: {
				 max: 1000,
				min:0,
            },	series: {
				points: {show: true },
                lines: { show: true, fill: true, steps: false },
			}
        });
    });
    $("table.chart2").each(function() {
        var colors = [];
        $("table.chart thead th:not(:first)").each(function() {
            colors.push($(this).css("color"));
        });
        $(this).graphTable({
            series: 'columns',  position: 'replace',width: '100%', height: '300px', colors: colors
        }, {  xaxis: {  tickSize: 1,  },
			yaxis: {
				 max: 1000,
				min:200,
            }	,	series: {
				points: {show: true },
                lines: { show: true, fill: true, steps: false },
			}
        });
    });
	$("table.chart-pie").each(function() {
        var colors = [];
        $("table.chart-pie thead th:not(:first)").each(function() {
            colors.push($(this).css("color"));
        });
        $(this).graphTable({
            series: 'columns',
            position: 'replace',
			width : '100%',
            height: '325px',
            colors: colors
        }, {
		series: {
            pie: { 
                show: true,
				innerRadius: 0.5,
                radius: 1,
				tilt: 1,
                label: {
                    show: true,
                    radius: 1,
                    formatter: function(label, series){
                        return '<div id="tooltipPie"><b>'+label+'</b> : '+Math.round(series.percent)+'%</div>';
                    },
                    background: { opacity: 0 }
                }
            }
        },
        legend: {
            show: false
        },
			grid: {
				hoverable: false,
				autoHighlight: true
			}
        });
    });
	

	$("table.chart-line").each(function() {
        var colors = [];
        $("table.chart-line thead th:not(:first)").each(function() {
            colors.push($(this).css("color"));
        });
        $(this).graphTable({
            series: 'columns', position: 'replace',width : '99%',height: '350px', colors: colors
        }, { xaxis: {  tickSize: 3 },
		series: {
				points: {show: true },
                lines: { show: true, fill: false, steps: false },
                bars: { show: false, barWidth: 0.6 },
			},
			yaxis: {
				 max: 1000,
				min:0,
            }
        });
    });
	$("table.chart-bar").each(function() {
        var colors = [];
        $("table.chart-bar thead th:not(:first)").each(function() {
            colors.push($(this).css("color"));
        });
        $(this).graphTable({
            series: 'columns', position: 'replace',width : '99%', height: '350px', colors: colors
        }, { xaxis: { tickSize: 1 },
		series: {
                lines: { show: false},
                bars: { 	show: true,
					lineWidth: 1,
					barWidth: 0.4,
					fill: true,
					align: "center",
					horizontal: false,
					multiplebars:true },
				points: {
					show: false
				}
			}
			,
			yaxis: {
				 max: 1000,
				min:0,
            }
        });
    });

    function showTooltip(x, y, contents) {
        $('<div id="tooltip" >' + contents + '</div>').css({
            position: 'absolute',
            display: 'none',
            top: y -13,
            left: x + 10
        }).appendTo("body").show();
    }

    var previousPoint = null;
    $(".chart_flot").bind("plothover", function(event, pos, item) {
												
        $("#x").text(pos.x);
        $("#y").text(pos.y);

        if (item) {
            if (previousPoint != item.dataIndex) {
                previousPoint = item.dataIndex;

			$(this).attr('title',item.series.label);
			$(this).trigger('click');
                $("#tooltip").remove();
                var x = item.datapoint[0],
                    y = item.datapoint[1];

                showTooltip(item.pageX, item.pageY, "<b>" + item.series.label + "</b> : " + y);
            }
        }  else {
            $("#tooltip").remove();
            previousPoint = null;
        }
    });
	
	
	});		


	// check browser fixbug
	var mybrowser=navigator.userAgent;
	if(mybrowser.indexOf('MSIE')>0){$(function() {	
			   $('.formEl_b fieldset').css('padding-top', '0');
				$('div.section label small').css('font-size', '10px');
				$('div.section  div .select_box').css({'margin-left':'-5px'});
				$('.iPhoneCheckContainer label').css({'padding-top':'6px'});
				$('.uibutton').css({'padding-top':'6px'});
				$('.uibutton.icon:before').css({'top':'1px'});
		});
	}
	if(mybrowser.indexOf('Firefox')>0){ $(function() {	
			   $('.formEl_b fieldset  legend').css('margin-bottom', '0px');	
			   $('table .custom-checkbox label').css('right', '3px');
		  });
	}	
	if(mybrowser.indexOf('Presto')>0){
		$('select').css('padding-top', '8px');
	}
	if(mybrowser.indexOf('Chrome')>0){$(function() {	
				 $('div.tab_content  ul.uibutton-group').css('margin-top', '-40px');
				  $('div.section  div .select_box').css({'margin-top':'0px','margin-left':'-2px'});
				  $('select').css('padding', '6px');
				  $('table .custom-checkbox label').css('right', '3px');
		});
	}		
	if(mybrowser.indexOf('Safari')>0){}		



	  
	  
	  function fileDialogCallback(callback,type,input){
			$('<div id="finder_'+callback+'"/>').elfinder({
				 url : 'components/elfinder/connectors/php/connector-'+type+'.php', editorCallback : function(url) { $('#'+input).val(url);
				},closeOnEditorCallback : true, dialog : { title : 'File manager',modal : true,width : 700 }
			})							   
	  }
	  function fileDialog(callback,type){
			$('<div id="finder_'+callback+'"/>').elfinder({
				  url : 'components/elfinder/connectors/php/connector-'+type+'.php',dialog : { title : 'File manager',modal : true,width : 700 }
			})							   
	  }
		  
function Delete(data,name,row,type,dataSet){
		var loadpage = dataSet.hdata(0);
		var url = dataSet.hdata(1);
		var table = dataSet.hdata(2);
		var data = data+"&tabel="+table;
$.confirm({
'title': 'تأكيد الحذف','message': " <strong>أنك تريد حذف</strong><br /><font color=red>' "+ name +" ' </font> ",'buttons': {'نعم': {'class': 'special',
'action': function(){
			loading('Checking');
							 $('#preloader').html('Deleting...');
							 if(type==0){ row.slideUp(function(){   showSuccess('Success',5000); unloading(); }); return false;}
							  if(type==1){ row.slideUp(function(){   showSuccess('Success',5000); unloading(); }); return false;}
								setTimeout("unloading();",900); 		 
				 }},'لا'	: {'class'	: ''}}});}

	  function albumDelete(data,name,dataSet){
			  var loadpage = dataSet.hdata(0);
			  var row = dataSet.hdata(2);
			  $.confirm({
			  'title': '_DELETE DIALOG BOX','message': "<strong>YOU WANT TO DELETE </strong><br /><font color=red>' "+ name +" ' </font> ",'buttons': {'Yes': {'class': 'special',
			  'action': function(){
						  loading('Checking',1);
						  setTimeout("unloading()",1500); 	  
				}},'لا'	: {'class'	: ''}}});
	  }
	  
	  
	  function loadalbum(albumid){
			  loading('Loading');
			  $(' .albumImagePreview').show();
			 imgRow()
			  $(' .albumImagePreview').fadeOut(function(){ 
														
					  $("#uploadAlbum").attr('href','modalupload.html'); 		
					  $('#uploadAlbum').removeClass('disable secure ').addClass('special add ');
					  $('#uploadButtondisable').css({'display':'none'});
					  $('.screen-msg').hide();  setTimeout("unloading()",500); 	 																	
			  }).delay(400).fadeIn();			
			   
		  }


	  function ResetForm(){
		  $('form').each(function(index) {	  
			var form_id=$('form:eq('+index+')').attr('id');
				  if(form_id){ 
					  $('#'+form_id).get(0).reset(); 
							  var editor=$('#'+form_id).find('#editor').attr('id');
							  if(editor){
								   $('#editor').cleditor()[0].clear();
							  }
				  } 
		  });	
	  }


	function hexFromRGB(r, g, b) {
		var hex = [
			r.toString( 16 ),
			g.toString( 16 ),
			b.toString( 16 )
		];
		$.each( hex, function( nr, val ) {
			if ( val.length === 1 ) {
				hex[ nr ] = "0" + val;
			}
		});
		return hex.join( "" ).toUpperCase();
	}
	function refreshSwatch() {
		var red = $( "#red" ).slider( "value" ),
			green = $( "#green" ).slider( "value" ),
			blue = $( "#blue" ).slider( "value" ),
			hex = hexFromRGB( red, green, blue );
		$( "#swatch" ).css( "background-color", "#" + hex );
	}
	  

	  
	  function showError(str,delay){	
		  if(delay){
			  $('#alertMessage').removeClass('success info warning').addClass('error').html(str).stop(true,true).show().animate({ opacity: 1,right: '10'}, 500,function(){
					  $(this).delay(delay).animate({ opacity: 0,right: '-20'}, 500,function(){ $(this).hide(); });																														   																											
				});
			  return false;
		  }
			  	$('#alertMessage').addClass('error').html(str).stop(true,true).show().animate({ opacity: 1,right: '10'}, 500);	
	  }
	  function showSuccess(str,delay){
		  if(delay){
			  $('#alertMessage').removeClass('error info warning').addClass('success').html(str).stop(true,true).show().animate({ opacity: 1,right: '10'}, 500,function(){
					  $(this).delay(delay).animate({ opacity: 0,right: '-20'}, 500,function(){ $(this).hide(); });																														   																											
				});
			  return false;
		  }
			  $('#alertMessage').addClass('success').html(str).stop(true,true).show().animate({ opacity: 1,right: '10'}, 500);	
	  }
	  function showWarning(str,delay){
		  if(delay){
			  $('#alertMessage').removeClass('error success  info').addClass('warning').html(str).stop(true,true).show().animate({ opacity: 1,right: '10'}, 500,function(){
					  $(this).delay(delay).animate({ opacity: 0,right: '-20'}, 500,function(){ $(this).hide(); });																														   																											
				});
			  return false;
		  }
			  $('#alertMessage').addClass('warning').html(str).stop(true,true).show().animate({ opacity: 1,right: '10'}, 500);	
	  }
	  function showInfo(str,delay){
		  if(delay){
			  $('#alertMessage').removeClass('error success  warning').html(str).stop(true,true).show().animate({ opacity: 1,right: '10'}, 500,function(){
					  $(this).delay(delay).animate({ opacity: 0,right: '-20'}, 500,function(){ $(this).hide(); });																														   																											
				});
			  return false;
		  }
			  $('#alertMessage').html(str).stop(true,true).show().animate({ opacity: 1,right: '10'}, 500);	
	  }


	  
	  function hide_panel() { 
			if(Get_Cookie('hide_')=='1'){$('#show_menu').show();}else{$('#hide_menu').show();}
	  }	
	  
	  
	  function loading(name,overlay) { 
			$('body').append('<div id="overlay"></div><div id="preloader">'+name+'..</div>');
					if(overlay==1){
					  $('#overlay').css('opacity',0.4).fadeIn(400,function(){  $('#preloader').fadeIn(400);	});
					  return  false;
			   }
			$('#preloader').fadeIn();	  
	   }
	   
	   
	  function unloading() { 
			$('#preloader').fadeOut(400,function(){ $('#overlay').fadeOut(); $.fancybox.close(); }).remove();
	   }
	
 function imgRow(){	
		var maxrow=$('.albumpics').width();
		if(maxrow){
				maxItem= Math.floor(maxrow/160);
				maxW=maxItem*160;
				mL=(maxrow-maxW)/2;
				$('.albumpics ul').css({
						'width'	:	maxW	,
						'marginLeft':mL
		 })
	}}	
	/*function scrollmenu(){	
			if($(window).scrollTop()>=1){			   
			  $("#header ").css("z-index", "50"); 
		  }else{
			  $("#header ").css("z-index", "47"); 
		 }
	}*/
	
	
 /*function LResize(){	
  imgRow();
  scrollmenu();
	if($.cookie("hide_")){
		$('#hide_panel').show();	
	}
	$("#shadowhead").show();
		if($(window).width()<=768){
			$('body').addClass('nobg');$('#hide_menu').hide();$('#show_menu').hide();			
			$('#shadowhead').css({ position: "fixed" });	
			$(' .column_left, .column_right ,.grid2,.grid3,.grid1').css({ width:"100%",float:"none",padding:"0",marginBottom: "20px" });			  	
			 if($.cookie("hide_")=='1'){
					$('#show_menu_icon').show();$('#hide_menu_icon').hide();
					$('#left_menu,#load_menu').css({ right: "-213px" });
					$('#content').css({ marginRight: "20px" });	
			  }else{
					$('#hide_menu_icon').show();$('#show_menu_icon').hide();
					$('#left_menu,#load_menu').css({ right: "0px" });$('#content').css({ marginRight: "70px" });	
					$('#main_menu').removeClass('main_menu').addClass('iconmenu');
					$('#main_menu li').each(function() {	  
							var title=$(this).find('b').text();
							$(this).find('a').attr('title',title);		
					});
					$('#main_menu li a').find('b').hide();	
					$('#main_menu li ').find('ul').hide();
				  }	
		}
		if($(window).width()>300) {
					$('#main_menu').removeClass('iconmenu ').addClass('main_menu');
					$('#main_menu li a').find('b').show();	
					$('#hide_menu_icon').hide();$('#show_menu_icon').hide();
					$('.column_left,.column_right,.grid2').css({ width:"49%",float:"left"});
					$('.column_left').css({ 'padding-right':"1%"});
					$('.column_right').css({ 'padding-left':"1%"});
					$('.grid1').css({ width:"24%",float:"right"});$('.grid3').css({ width:"74%",float:"right"});
		 
			 if($.cookie("hide_")=='1'){
					$('#show_menu').show();$('#hide_menu').hide();$('body').addClass('nobg');	
					$('#left_menu,#load_menu').css({ right: "-213px" });
					$('#content').css({ marginRight: "40px" });	
					$('#shadowhead').css({ position: "fixed" });	
			  }else{
				  $('#show_menu').show();$('#hide_menu').hide();$('body').addClass('nobg');	
					$('#left_menu,#load_menu').css({ right: "-213px" });
					$('#content').css({ marginRight: "40px" });	
					$('#shadowhead').css({ position: "fixed" });
				  }	
		 	
		}else{
			   $(' .column_left, .column_right ,.grid2,.grid3,.grid1').css({ width:"100%",float:"none",padding:"0",marginBottom: "20px" });
		}
}*/