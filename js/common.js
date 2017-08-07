'use strict';

(function () {

	var wheight = $(window).height(),
	    hamburger = document.querySelector('.hamburger'),
	    menuList = document.querySelector('header ul');

	$('.fullheight').css('height', wheight);

	$(window).scroll(function () {

		checkSection();

		if ($(document).scrollTop() > wheight - 4) {
			$('#menu').addClass('under-section');
		} else {
			var ControllScroll = function ControllScroll(menuBox) {
				var lastScroll = 0;
				var menuHeight = menuBox.offsetHeight;
				return function (event) {
					var range = lastScroll - window.pageYOffset;
					lastScroll = window.pageYOffset;
					if (range < 0) {
						menuBox.style.top = -menuHeight + 'px';
					} else {
						menuBox.style.top = -0 + 'px';
					}
				};
			};

			$('#menu').removeClass('under-section');

			var menuBox = document.querySelector('#menu');
			document.addEventListener('scroll', ControllScroll(menuBox));
		}
	});

	window.onresize = function () {
		var wheight = $(window).height();
		$('.fullheight').css('height', wheight);

		if (window.innerWidth >= 960) {
			if (hamburger.classList.contains('is-active')) {
				menuList.classList.remove('active-menu');
				hamburger.classList.remove('is-active');
			}
		}
	};
	// mobile menu triger
	hamburger.addEventListener('click', function () {
		this.classList.toggle('is-active');
		menuList.classList.toggle('active-menu');
	});

	// slider

	var leftTeam = document.getElementById('left'),
	    centerTeam = document.getElementById('center'),
	    rightTeam = document.getElementById('right'),
	    leftClients = document.getElementById('left-clients'),
	    centerClients = document.getElementById('center-clients'),
	    rightClients = document.getElementById('right-clients'),
	    personContainer = document.querySelector('.person-container'),
	    clientsContainer = document.querySelector('#clients-container'),
	    testimonialsContainer = document.querySelector('#testimonials-container'),
	    leftTestimonials = document.getElementById('left-testimonials'),
	    centerTestimonials = document.getElementById('center-testimonials'),
	    rightTestimonials = document.getElementById('right-testimonials');

	leftTeam.classList.add('active-button');
	leftClients.classList.add('active-button');
	leftTestimonials.classList.add('active-button');

	function leftScroll(left, right, center, container) {
		if (container.style.left !== 0) {
			container.style.left = 0;
			right.classList.remove('active-button');
			center.classList.remove('active-button');
			left.classList.add('active-button');
		}
	}

	function centerScroll(left, right, center, container) {
		if (container !== testimonialsContainer) {
			if (container.style.left !== -105 + '%') {
				container.style.left = -105 + '%';
				right.classList.remove('active-button');
				left.classList.remove('active-button');
				center.classList.add('active-button');
			}
		} else {
			if (container.style.left !== -100 + '%') {
				container.style.left = -100 + '%';
				right.classList.remove('active-button');
				left.classList.remove('active-button');
				center.classList.add('active-button');
			}
		}
	}

	function rightScroll(left, right, center, container) {
		if (container !== testimonialsContainer) {
			if (container.style.left !== -208 + '%') {
				container.style.left = -208 + '%';
				left.classList.remove('active-button');
				center.classList.remove('active-button');
				right.classList.add('active-button');
			}
		} else {
			if (container.style.left !== -200 + '%') {
				container.style.left = -200 + '%';
				left.classList.remove('active-button');
				center.classList.remove('active-button');
				right.classList.add('active-button');
			}
		}
	};

	leftTeam.addEventListener('click', function () {
		leftScroll(leftTeam, rightTeam, centerTeam, personContainer);
	});
	centerTeam.addEventListener('click', function () {
		centerScroll(leftTeam, rightTeam, centerTeam, personContainer);
	});
	rightTeam.addEventListener('click', function () {
		rightScroll(leftTeam, rightTeam, centerTeam, personContainer);
	});

	leftClients.addEventListener('click', function () {
		leftScroll(leftClients, rightClients, centerClients, clientsContainer);
	});
	centerClients.addEventListener('click', function () {
		centerScroll(leftClients, rightClients, centerClients, clientsContainer);
	});
	rightClients.addEventListener('click', function () {
		rightScroll(leftClients, rightClients, centerClients, clientsContainer);
	});

	leftTestimonials.addEventListener('click', function () {
		leftScroll(leftTestimonials, rightTestimonials, centerTestimonials, testimonialsContainer);
	});
	centerTestimonials.addEventListener('click', function () {
		centerScroll(leftTestimonials, rightTestimonials, centerTestimonials, testimonialsContainer);
	});
	rightTestimonials.addEventListener('click', function () {
		rightScroll(leftTestimonials, rightTestimonials, centerTestimonials, testimonialsContainer);
	});

	$(document).ready(function ($) {
		$('a[href^="#"]').bind('click.smoothscroll', function (e) {
			e.preventDefault();

			var target = this.hash;

			$('html, body').stop().animate({
				'scrollTop': $(target).offset().top
			}, 1000, 'swing', function () {
				window.location.hash = target;
			});
		});
	});

	function checkSection() {
		$('.content').each(function () {
			var $this = $(this),
			    topEdge = $this.offset().top - 100,
			    bottonEdge = topEdge + $this.height(),
			    vScroll = $(window).scrollTop();

			if (topEdge < vScroll && bottonEdge > vScroll) {
				var currentId = $this.data('section'),
				    reqLink = $('.border-link').filter('[href="#' + currentId + '"]');

				reqLink.closest('.li-nav').addClass('active').siblings().removeClass('active');
			} else if ($(document).scrollTop() < wheight) {
				$('.li-nav').removeClass('active');
			}
		});
	}

	//Selecting our node
	var myNode = document.querySelector('#portfolio .img-hover-wrap');

	myNode.addEventListener("click", function (e) {
		e.preventDefault();

		if (e.target.tagName === "A") {

			var myOverlay = document.createElement('div');
			myOverlay.id = 'overlay';
			document.body.appendChild(myOverlay);

			//resize and position overlay
			myOverlay.style.width = window.innerWidth - 17 + 'px';
			myOverlay.style.height = window.innerHeight + 'px';
			myOverlay.style.top = window.pageYOffset + 'px';
			myOverlay.style.left = window.pageXOffset + 'px';

			//Create image element
			var imageSrc = e.target.parentNode.previousElementSibling.src;
			var largeImage = document.createElement('img');
			largeImage.id = 'largeImage';
			largeImage.src = imageSrc.substr(0, imageSrc.length - 3) + 'jpg';
			largeImage.style.display = 'block';
			largeImage.style.position = 'absolute';

			//wait until the image has loaded
			largeImage.addEventListener('load', function () {

				//Resize if taller
				if (this.height > window.innerHeight) {
					this.ratio = window.innerHeight / this.height;
					this.height = this.height * this.ratio;
					this.width = this.width * this.ratio;
				}

				//Resize if wider
				if (this.width > window.innerWidth) {
					this.ratio = window.innerWidth / this.width;
					this.height = this.height * this.ratio;
					this.width = this.width * this.ratio;
				}

				centerImage(this);
				myOverlay.appendChild(largeImage);
			}); //image has loaded

			largeImage.addEventListener('click', function () {
				if (myOverlay) {
					window.removeEventListener('resize', window, false);
					window.removeEventListener('scroll', window, false);
					myOverlay.parentNode.removeChild(myOverlay);
				}
			}, false);

			window.addEventListener('scroll', function () {
				if (myOverlay) {
					myOverlay.style.top = window.pageYOffset + 'px';
					myOverlay.style.left = window.pageXOffset + 'px';
				}
			}, false);

			window.addEventListener('resize', function () {
				if (myOverlay) {
					myOverlay.style.width = window.innerWidth + 'px';
					myOverlay.style.height = window.innerHeight + 'px';
					myOverlay.style.top = window.pageYOffset + 'px';
					myOverlay.style.left = window.pageXOffset + 'px';

					centerImage(largeImage);
				}
			}, false);
		} // target is an image
	}, false); //image is clicked

	function centerImage(theImage) {
		var myDifX = (window.innerWidth - theImage.width) / 2;
		var myDifY = (window.innerHeight - theImage.height) / 2;

		theImage.style.top = myDifY + 'px';
		theImage.style.left = myDifX + 'px';

		return theImage;
	}
})();

function openCity(evt, eventName) {
	var i, tabcontent, tablinks;
	tabcontent = document.getElementsByClassName("tabcontent");
	for (i = 0; i < tabcontent.length; i++) {
		tabcontent[i].style.display = "none";
	}
	tablinks = document.getElementsByClassName("tablinks");
	for (i = 0; i < tablinks.length; i++) {
		tablinks[i].className = tablinks[i].className.replace(" active-tab", "");
	}
	document.getElementById(eventName).style.display = "flex";
	evt.currentTarget.className += " active-tab";
}

$("#contact-form").submit(function () {
	$.ajax({
		type: "POST",
		url: "mail.php",
		data: $(this).serialize()
	}).done(function () {
		$(this).find("input").val("");
		alert("Спасибо за заявку! Скоро мы с вами свяжемся.");
		$("#form").trigger("reset");
	});
	return false;
});