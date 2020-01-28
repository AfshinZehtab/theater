$(function() {

	$('.product .dropdown-menu a').click(function() {
		var x = $(this).html();
		$('.product .dropdown-toggle').html(x);
		
	});

	let today = new Date().toISOString().substr(0, 10);
	document.querySelector("input[name='date']").value = today;


	function animation() {
		const container = $('#animation');
		container.append('<img id="animation_logo" height="0" width="0" src="img/Logo-White.png">')
		const logo = $("#animation_logo");

		const text = [
			['WILLKOMMEN IM PARKETT!', 'img/Buehne.jpg'],
			['PAUSENLOS PROGRAMM IM PARKETT', 'img/Alte_Dame_1.jpg'],
			['TREFFPUNKT PARKETT FÜR GROSS UND KLEIN', 'img/Zuschauer_3.jpg'],
			['FIEBERN SIE MIT UNS!', 'img/Gesang_1.jpg'],
			['WIR MACHEN MIT BEIM FESTIVAL THEATERFIEBER', 'img/Kaltgestellt_3.jpg'],
			['AM SAMSTAG, 13. OKTOBER 2018 VON 19 BIS 24 UHR', 'img/Heimliches_rufen_2.jpg'],
			['KOMMEN SIE ZU UNS!', 'img/Windsor_1.jpg']
		];

    	container.append(`
			
			<style>
				.animation_content h1 {
					font-family: 'Playfair Display', serif;
					font-size: 4.5em;
					font-weight: 700;
					color: #fff;
					text-align: center;
				}

				.animation_border {
				    width: 50%;
				    text-align: center;
				    margin: 0 30%;
				    height: 5px;
				    background: #ea2525;
				}
			</style>

    	`);	

    	logo.animate({
			height: "400px",
			width:  "400px"
	    }, 500);

	    setTimeout(function() {
	    	logo.fadeOut(500, function() {
	    		this.remove();
	    	});
	    }, 1000);

	    container.append('<div class="row"><div class="col animation_content"><h1></h1></div></div>');

	    setTimeout(function() {
	    	container.append('<span class="animation_border"></span>');
			$('.animation_content h1').text(text[0][0]).hide().fadeIn(100);
			    $("#header").css({background: 'url(' + text[0][1] + ')' + 'center center no-repeat',
			    	'backgroundSize': 'cover'
			});
		}, 2000);

	    $("#header").css({background: 'url(' + text[0][1] + ')' + 'center center no-repeat',
	    	'backgroundSize': 'cover'
	});

		setTimeout(function() {
			$('.animation_content h1').text(text[1][0]).hide().fadeIn(100);
			    $("#header").css({background: 'url(' + text[1][1] + ')' + 'center center no-repeat',
			    	'backgroundSize': 'cover'
			});
		}, 4500);

		setTimeout(function() {
			$('.animation_content h1').text(text[2][0]).hide().fadeIn(100);
			    $("#header").css({background: 'url(' + text[2][1] + ')' + 'center center no-repeat',
			    	'backgroundSize': 'cover'
			});
		}, 7000);

		setTimeout(function() {
			$('.animation_content h1').text(text[3][0]).hide().fadeIn(100);
			    $("#header").css({background: 'url(' + text[3][1] + ')' + 'center center no-repeat',
			    	'backgroundSize': 'cover'
			});
		}, 9500);

		setTimeout(function() {
			$('.animation_content h1').text(text[4][0]).hide().fadeIn(100);
			    $("#header").css({background: 'url(' + text[4][1] + ')' + 'center center no-repeat',
			    	'backgroundSize': 'cover'
			});
		}, 12000);

		setTimeout(function() {
			$('.animation_content h1').text(text[5][0]).hide().fadeIn(100);
			    $("#header").css({background: 'url(' + text[5][1] + ')' + 'center center no-repeat / cover'});
		}, 14500);

		setTimeout(function() {
			$('.animation_content h1').text(text[6][0]).hide().fadeIn(100);
			    $("#header").css({background: 'url(' + text[6][1] + ')' + 'center center no-repeat / cover'});
		}, 17000);
   		
   		setTimeout(function() {
			$("#animation").empty();
   		}, 19500);

	}

	function slider() {
		const images = [
			'img/Kaltgestellt_1.jpg',
			'img/Kaltgestellt_2.jpg',
			'img/Kaltgestellt_3.jpg'
		];

		const hImages = [
			'img/hq/Kaltgestellt_1.jpg',
			'img/hq/Kaltgestellt_2.jpg',
			'img/hq/Kaltgestellt_3.jpg'
		];

		function changeImages() {

			var image1 = setTimeout(function() {
				$('.slider_images').attr('href', hImages[0]);
				$('#premiere .slider_images img').attr('src', images[0]);
			}, 0);

			var image2 = setTimeout(function() {
				$('.slider_images').attr('href', hImages[1]);
				$('#premiere .slider_images img').attr('src', images[1]);
			}, 2000);

			var image3 = setTimeout(function() {
				$('.slider_images').attr('href', hImages[2]);
				$('#premiere .slider_images img').attr('src', images[2]);
			}, 4000);


			$('#slider').mouseover(function() {
				clearTimeout(image1);
				clearTimeout(image2);
				clearTimeout(image3);
			});
		}
		
		changeImages();
		setInterval(changeImages, 6000);


		$('#slider').mouseout(function() {
			
		});

		$('.slider_right a').click(function() {
			var imgSRC = $('#premiere .slider_images img').attr('src');
			if (imgSRC == images[0]) {
				$('.slider_images').attr('href', hImages[1]);
				$('#premiere .slider_images img').attr('src', images[1]);
			} else if (imgSRC == images[1]) {
				$('.slider_images').attr('href', hImages[2]);
				$('#premiere .slider_images img').attr('src', images[2]);
			} else {
				$('.slider_images').attr('href', hImages[0]);
				$('#premiere .slider_images img').attr('src', images[0]);
			}
		});

		$('.slider_left a').click(function() {
			var imgSRC = $('#premiere .slider_images img').attr('src');
			if (imgSRC == images[0]) {
				$('.slider_images').attr('href', hImages[2]);
				$('#premiere .slider_images img').attr('src', images[2]);
			} else if (imgSRC == images[1]) {
				$('.slider_images').attr('href', hImages[0]);
				$('#premiere .slider_images img').attr('src', images[0]);
			} else {
				$('.slider_images').attr('href', hImages[1]);
				$('#premiere .slider_images img').attr('src', images[1]);
			}
		});
	}

	slider();



	animation();
	setInterval(animation, 20000);
});