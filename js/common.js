$(function () {
	$(document).ready(function () {
		//E-mail Ajax Send
		$("#form_send_main").submit(function () {
			//Change
			var th = $(this);
			$.ajax({
				type: "POST",
				url: "mail.php", //Change
				data: th.serialize(),
			}).done(function () {
				$("#overlay_2").fadeIn(400, function () {
					$("#modal_form_2")
						.css("display", "flex")
						.css("margin-top", "50px")
						.animate({ opacity: 1, top: "0" }, 800);
				});
				setTimeout(function () {
					$("#modal_form_2").animate(
						{ opacity: 0, top: "15%" },
						200,
						function () {
							$(this).css("display", "none");
							$("#overlay_2").fadeOut(400);
						}
					);
					th.trigger("reset");
				}, 2300);
			});
			return false;
		});

		$("#form_send_modal").submit(function () {
			//Change
			var th = $(this);
			$.ajax({
				type: "POST",
				url: "mail.php", //Change
				data: th.serialize(),
			}).done(function () {
				$("#modal_form").animate(
					{ opacity: 0, top: "15%" },
					200,
					function () {
						$(this).css("display", "none");
						$("#overlay").fadeOut(400);
					}
				);
				$("#overlay_2").fadeIn(400, function () {
					$("#modal_form_2")
						.css("display", "flex")
						.css("margin-top", "50px")
						.animate({ opacity: 1, top: "0" }, 800);
				});
				setTimeout(function () {
					$("#modal_form_2").animate(
						{ opacity: 0, top: "15%" },
						200,
						function () {
							$(this).css("display", "none");
							$("#overlay_2").fadeOut(400);
						}
					);
					th.trigger("reset");
				}, 2300);
			});
			return false;
		});

		$("#form_send_message").submit(function () {
			//Change
			var th = $(this);
			$.ajax({
				type: "POST",
				url: "mail.php", //Change
				data: th.serialize(),
			}).done(function () {
				$("#overlay_3").fadeIn(400, function () {
					$("#modal_form_3")
						.css("display", "flex")
						.css("margin-top", "50px")
						.animate({ opacity: 1, top: "0" }, 800);
				});
				setTimeout(function () {
					$("#modal_form_3").animate(
						{ opacity: 0, top: "15%" },
						200,
						function () {
							$(this).css("display", "none");
							$("#overlay_3").fadeOut(400);
						}
					);
					th.trigger("reset");
				}, 2300);
			});
			return false;
		});
	});

	// Custom JS

	//---------------------------------------------- Services text

	$(".select").on("click", function () {
		$(this).children("i").toggleClass("rotate");
		$(this).next(".select-option").slideToggle();
	});

	//---------------------------------------------- BUTTON + MODAL WINDOWS

	$(
		"#sticky, #sticky_2, #button-modal-2, #button-modal-3, #button-modal-4, #button-modal-5, #button-modal-6, #button-modal-7, #button-modal-8, #button-modal-9, #button-modal-10, #button-modal-11, #button-modal-12, #button-modal-13, #button-modal-14, #button-modal-15, #button-modal-16"
	).click(function (event) {
		event.preventDefault();
		$("#overlay").fadeIn(400, function () {
			$("#modal_form")
				.css("display", "flex")
				.css("margin-top", "50px")
				.animate({ opacity: 1, top: "0" }, 800);
		});
	});

	$("#overlay").click(function (event) {
		$target = $(event.target);
		if (!$target.closest($("#modal_form")).length)
			$("#modal_form").animate(
				{ opacity: 0, top: "15%" },
				200,
				function () {
					$(this).css("display", "none");
					$("#overlay").fadeOut(400);
				}
			);
		if ($target.hasClass("modal-close"))
			$("#modal_form").animate(
				{ opacity: 0, top: "15%" },
				200,
				function () {
					$(this).css("display", "none");
					$("#overlay").fadeOut(400);
				}
			);
	});

	$("#overlay_2").click(function (event) {
		$target = $(event.target);
		if (!$target.closest($("#modal_form_2")).length)
			$("#modal_form_2").animate(
				{ opacity: 0, top: "15%" },
				200,
				function () {
					$(this).css("display", "none");
					$("#overlay_2").fadeOut(400);
				}
			);
		if ($target.hasClass("modal-close"))
			$("#modal_form_2").animate(
				{ opacity: 0, top: "15%" },
				200,
				function () {
					$(this).css("display", "none");
					$("#overlay_2").fadeOut(400);
				}
			);
	});

	$("#overlay_3").click(function (event) {
		$target = $(event.target);
		if (!$target.closest($("#modal_form_3")).length)
			$("#modal_form_3").animate(
				{ opacity: 0, top: "15%" },
				200,
				function () {
					$(this).css("display", "none");
					$("#overlay_3").fadeOut(400);
				}
			);
		if ($target.hasClass("modal-close"))
			$("#modal_form_3").animate(
				{ opacity: 0, top: "15%" },
				200,
				function () {
					$(this).css("display", "none");
					$("#overlay_3").fadeOut(400);
				}
			);
	});

	$("#text_windows").click(function (event) {
		event.preventDefault();
		$("#overlay_4").fadeIn(400, function () {
			$("#modal_form_4")
				.css("display", "flex")
				.css("margin-top", "50px")
				.animate({ opacity: 1, top: "0" }, 800);
		});
	});

	$("#overlay_4").click(function (event) {
		$target = $(event.target);
		if (!$target.closest($("#modal_form_4")).length)
			$("#modal_form_4").animate(
				{ opacity: 0, top: "15%" },
				200,
				function () {
					$(this).css("display", "none");
					$("#overlay_4").fadeOut(400);
				}
			);
		if ($target.hasClass("modal-close"))
			$("#modal_form_4").animate(
				{ opacity: 0, top: "15%" },
				200,
				function () {
					$(this).css("display", "none");
					$("#overlay_4").fadeOut(400);
				}
			);
	});

	//---------------------------------------------- Links scroll

	$(document).ready(function () {
		$("#menu").on("click", "a", function (event) {
			event.preventDefault();

			var id = $(this).attr("href"),
				top = $(id).offset().top;

			$("body,html").animate({ scrollTop: top - 66 }, 1500);
		});
	});

	$(document).ready(function () {
		$("#menu-mobile").on("click", "a", function (event) {
			event.preventDefault();

			var id = $(this).attr("href"),
				top = $(id).offset().top;

			$("body,html").animate({ scrollTop: top - 66 }, 1500);
		});
	});

	$(window).scroll(function () {
		if ($(window).scrollTop() > 800) {
			$(".up").addClass("view");
		} else {
			$(".up").removeClass("view");
		}
	});

	$("a.up").click(function () {
		var elementClick = $(this).attr("href");
		var destination = $(elementClick).offset().top;
		jQuery("html:not(:animated),body:not(:animated)").animate(
			{
				scrollTop: destination,
			},
			800
		);
		return false;
	});

	//---------------------------------Scroll-menu

	$(".menu , .menu-hidden").click(function () {
		$(this).toggleClass("close");
		$(".menu-mobile").toggleClass("active-menu");
	});

	$("body").click(function () {
		$(".menu-mobile").removeClass("active-menu");
		$(".menu, .menu-hidden").removeClass("close");
	});

	$(".menu, .menu-hidden").click(function (e) {
		e.stopPropagation();
	});

	//---------------------------------Nav menu scroll

	$(window).scroll(function () {
		if ($(window).scrollTop() > 340) {
			$(".phone").css("right", "-1200px");
			$(".menu-scroll").css("right", "0px");
			$("nav").css({ transform: "translateX(1700px)", opacity: "0" });
			$(".log-in").css({ transform: "translateX(1700px)", opacity: "0" });
			$(".menu-hidden").css({
				transform: "translateX(1700px)",
				opacity: "0",
			});
		} else {
			$(".phone").css("right", "0px");
			$(".menu-scroll").css("right", "-1200px");
			$("nav").css({ transform: "translateX(0px)", opacity: "1" });
			$(".log-in").css({ transform: "translateX(0px)", opacity: "1" });
			$(".menu-hidden").css({
				transform: "translateX(0px)",
				opacity: "1",
			});
		}
	});

	$(window).scroll(function () {
		if ($(window).scrollTop() > -10) {
			$(".cabinet .phone").css("right", "-1200px");
			$(".cabinet .menu-scroll").css("right", "0px");
			$(".cabinet nav").css({
				transform: "translateX(1700px)",
				opacity: "0",
			});
			$(".cabinet .log-in").css({
				transform: "translateX(1700px)",
				opacity: "0",
			});
			$(".cabinet .menu-hidden").css({
				transform: "translateX(1700px)",
				opacity: "0",
			});
		} else {
			$(".cabinet .phone").css("right", "0px");
			$(".cabinet .menu-scroll").css("right", "-1200px");
			$(".cabinet nav").css({
				transform: "translateX(0px)",
				opacity: "1",
			});
			$(".cabinet .log-in").css({
				transform: "translateX(0px)",
				opacity: "1",
			});
			$(".cabinet .menu-hidden").css({
				transform: "translateX(0px)",
				opacity: "1",
			});
		}
	});

	if ($("#nav").hasClass("cabinet")) {
		$(".cabinet .phone").css("display", "none");
		$(".cabinet .menu-scroll").css("right", "0px");
		$(".cabinet nav").css("display", "none");
		$(".cabinet .log-in").css({
			transform: "translateX(1700px)",
			opacity: "0",
		});
		$(".cabinet .menu-hidden").css({
			transform: "translateX(1700px)",
			opacity: "0",
		});
	} else {
		$(".cabinet .phone").css("right", "0px");
		$(".cabinet .menu-scroll").css("right", "-1200px");
		$(".cabinet nav").css({ transform: "translateX(0px)", opacity: "1" });
		$(".cabinet .log-in").css({
			transform: "translateX(0px)",
			opacity: "1",
		});
		$(".cabinet .menu-hidden").css({
			transform: "translateX(0px)",
			opacity: "1",
		});
	}

	//---------------------------------Sticky nav menu

	$(function () {
		$(window).scroll(function () {
			if ($(window).width() >= 650) {
				if ($(this).scrollTop() >= 620) {
					$("#sticky").addClass("stickytop");
				} else {
					$("#sticky").removeClass("stickytop");
				}
			} else {
				$("#sticky").removeClass("stickytop");
			}
		});
	});

	if ($("#nav").hasClass("cabinet")) {
		$("#sticky_2").addClass("sticky-always");
	}

	if ($(window).width() <= 650) {
		$(".cabinet #sticky_2").removeClass("sticky-always");
	} else {
		$(".cabinet #sticky_2").addClass("sticky-always");
	}

	$(window).resize(function () {
		if ($(window).width() <= 650) {
			$(".cabinet #sticky_2").removeClass("sticky-always");
		} else {
			$(".cabinet #sticky_2").addClass("sticky-always");
		}
	});

	//---------------------------------Nav menu mobile

	if ($(window).height() < 340) {
		$(".phone").css("right", "-1200px");
		$(".menu-scroll").css("right", "0px");
		$("nav").css({ transform: "translateX(1700px)", opacity: "0" });
	} else {
		$(".phone").css("right", "0px");
		$(".menu-scroll").css("right", "-1200px");
		$("nav").css({ transform: "translateX(0px)", opacity: "1" });
	}

	$(window).resize(function () {
		if ($(window).height() < 340) {
			$(".phone").css("right", "-1200px");
			$(".menu-scroll").css("right", "0px");
			$("nav").css({ transform: "translateX(1700px)", opacity: "0" });
		} else {
			$(".phone").css("right", "0px");
			$(".menu-scroll").css("right", "-1200px");
			$("nav").css({ transform: "translateX(0px)", opacity: "1" });
		}
	});

	if ($(window).height() < 340) {
		$(".cabinet .phone").css("right", "0");
		$(".cabinet .menu-scroll").css("right", "0px");
		$(".cabinet nav").css({
			transform: "translateX(1700px)",
			opacity: "0",
		});
	} else {
		$(".cabinet .phone").css("right", "0px");
		$(".cabinet .menu-scroll").css("right", "0");
		$(".cabinet nav").css({ transform: "translateX(0px)", opacity: "1" });
	}

	$(window).resize(function () {
		if ($(window).height() < 340) {
			$(".cabinet .phone").css("right", "0");
			$(".cabinet .menu-scroll").css("right", "0px");
			$(".cabinet nav").css({
				transform: "translateX(1700px)",
				opacity: "0",
			});
		} else {
			$(".cabinet .phone").css("right", "0px");
			$(".cabinet .menu-scroll").css("right", "0");
			$(".cabinet nav").css({
				transform: "translateX(0px)",
				opacity: "1",
			});
		}
	});

	//---------------------------------Aside cabinet

	$("aside ul li span").click(function () {
		$("aside").toggleClass("active-aside");
	});
	$("aside ul li p").click(function () {
		$("aside ul li").removeClass("level-active");
		$(this).parents("li").addClass("level-active");
		$("aside").removeClass("active-aside");
	});
	$(document).on("click", function (e) {
		if (!$(e.target).closest("aside").length) {
			$("aside").removeClass("active-aside");
		}
		e.stopPropagation();
	});

	//---------------------------------Plugin init

	new WOW().init();

	//---------------------------------TAB-services

	$(".left-tab-control").click(function () {
		$(".tab-control").removeClass("active-tab-control");
		$(this).addClass("active-tab-control");
		$(".tab-content").removeClass("active-tab-content");
		$(".left-tab-content").addClass("active-tab-content");
	});
	$(".right-tab-control").click(function () {
		$(".tab-control").removeClass("active-tab-control");
		$(this).addClass("active-tab-control");
		$(".tab-content").removeClass("active-tab-content");
		$(".right-tab-content").addClass("active-tab-content");
	});

	$(".click-text").click(function () {
		$(".tab-item-control").removeClass("tab-item-control-active");
		$(".tab-item-control-2").addClass("tab-item-control-active");
		$(".tab-item-content").removeClass("tab-item-content-active");
		$(".tab-item-content .description-item")
			.removeClass("wow")
			.addClass("animated");
		$(".tab-item-content .img-item")
			.removeClass("wow")
			.addClass("animated");
		$(".tab-item-content-2").addClass("tab-item-content-active");
	});

	$(".tab-item-control-1").click(function () {
		$(".tab-item-control").removeClass("tab-item-control-active");
		$(".tab-item-control-1").addClass("tab-item-control-active");
		$(".tab-item-content").removeClass("tab-item-content-active");
		$(".tab-item-content .description-item")
			.removeClass("wow")
			.addClass("animated");
		$(".tab-item-content .img-item")
			.removeClass("wow")
			.addClass("animated");
		$(".tab-item-content-1").addClass("tab-item-content-active");
	});
	$(".tab-item-control-2").click(function () {
		$(".tab-item-control").removeClass("tab-item-control-active");
		$(".tab-item-control-2").addClass("tab-item-control-active");
		$(".tab-item-content").removeClass("tab-item-content-active");
		$(".tab-item-content .description-item")
			.removeClass("wow")
			.addClass("animated");
		$(".tab-item-content .img-item")
			.removeClass("wow")
			.addClass("animated");
		$(".tab-item-content-2").addClass("tab-item-content-active");
	});
	$(".tab-item-control-3").click(function () {
		$(".tab-item-control").removeClass("tab-item-control-active");
		$(".tab-item-control-3").addClass("tab-item-control-active");
		$(".tab-item-content").removeClass("tab-item-content-active");
		$(".tab-item-content .description-item")
			.removeClass("wow")
			.addClass("animated");
		$(".tab-item-content .img-item")
			.removeClass("wow")
			.addClass("animated");
		$(".tab-item-content-3").addClass("tab-item-content-active");
	});
	$(".tab-item-control-4").click(function () {
		$(".tab-item-control").removeClass("tab-item-control-active");
		$(".tab-item-control-4").addClass("tab-item-control-active");
		$(".tab-item-content").removeClass("tab-item-content-active");
		$(".tab-item-content .description-item")
			.removeClass("wow")
			.addClass("animated");
		$(".tab-item-content .img-item")
			.removeClass("wow")
			.addClass("animated");
		$(".tab-item-content-4").addClass("tab-item-content-active");
	});
	$(".tab-item-control-5").click(function () {
		$(".tab-item-control").removeClass("tab-item-control-active");
		$(".tab-item-control-5").addClass("tab-item-control-active");
		$(".tab-item-content").removeClass("tab-item-content-active");
		$(".tab-item-content .description-item")
			.removeClass("wow")
			.addClass("animated");
		$(".tab-item-content .img-item")
			.removeClass("wow")
			.addClass("animated");
		$(".tab-item-content-5").addClass("tab-item-content-active");
	});
	$(".tab-item-control-6").click(function () {
		$(".tab-item-control").removeClass("tab-item-control-active");
		$(".tab-item-control-6").addClass("tab-item-control-active");
		$(".tab-item-content").removeClass("tab-item-content-active");
		$(".tab-item-content .description-item")
			.removeClass("wow")
			.addClass("animated");
		$(".tab-item-content .img-item")
			.removeClass("wow")
			.addClass("animated");
		$(".tab-item-content-6").addClass("tab-item-content-active");
	});

	//---------------------------------TAB-question

	$(".question-tab-1").click(function () {
		$(".question-tab .question-tab-content").slideUp();
		$(".question-tab-1 .question-tab-content").slideDown();
		$(".question-tab p i").css("transform", "rotate(0deg)");
		$(".question-tab-1 p i").css("transform", "rotate(180deg)");
	});
	$(".question-tab-2").click(function () {
		$(".question-tab .question-tab-content").slideUp();
		$(".question-tab-2 .question-tab-content").slideDown();
		$(".question-tab p i").css("transform", "rotate(0deg)");
		$(".question-tab-2 p i").css("transform", "rotate(180deg)");
	});
	$(".question-tab-3").click(function () {
		$(".question-tab .question-tab-content").slideUp();
		$(".question-tab-3 .question-tab-content").slideDown();
		$(".question-tab p i").css("transform", "rotate(0deg)");
		$(".question-tab-3 p i").css("transform", "rotate(180deg)");
	});
	$(".question-tab-4").click(function () {
		$(".question-tab .question-tab-content").slideUp();
		$(".question-tab-4 .question-tab-content").slideDown();
		$(".question-tab p i").css("transform", "rotate(0deg)");
		$(".question-tab-4 p i").css("transform", "rotate(180deg)");
	});
	$(".question-tab-5").click(function () {
		$(".question-tab .question-tab-content").slideUp();
		$(".question-tab-5 .question-tab-content").slideDown();
		$(".question-tab p i").css("transform", "rotate(0deg)");
		$(".question-tab-5 p i").css("transform", "rotate(180deg)");
	});

	//---------------------------------Form-check

	$(".check-1").click(function () {
		$("#radio-1").css("checked", "checked");
		$(".check").removeClass("active-check");
		$(".check-1").addClass("active-check");
	});
	$(".check-2").click(function () {
		$("#radio-2").css("checked", "checked");
		$(".check").removeClass("active-check");
		$(".check-2").addClass("active-check");
	});
	$(".check-3").click(function () {
		$("#radio-3").css("checked", "checked");
		$(".check").removeClass("active-check");
		$(".check-3").addClass("active-check");
	});

	//---------------------------------Slick - video

	$(".video-slider").slick({
		lazyLoad: "progressive",
		infinite: true,
		slidesToShow: 2,
		slidesToScroll: 1,
		responsive: [
			{
				breakpoint: 1024,
				settings: {
					slidesToShow: 1,
				},
			},
		],
	});

	//---------------------------------Slick - companion

	$(".companion-slider").slick({
		infinite: true,
		slidesToShow: 4,
		slidesToScroll: 1,
		responsive: [
			{
				breakpoint: 1024,
				settings: {
					slidesToShow: 3,
				},
			},
			{
				breakpoint: 800,
				settings: {
					slidesToShow: 2,
				},
			},
			{
				breakpoint: 540,
				settings: {
					slidesToShow: 1,
				},
			},
		],
	});

	//---------------------------------Slick - certificat

	$(".certifications-slider").slick({
		infinite: true,
		slidesToShow: 4,
		slidesToScroll: 1,
		responsive: [
			{
				breakpoint: 1525,
				settings: {
					slidesToShow: 3,
				},
			},
			{
				breakpoint: 1120,
				settings: {
					slidesToShow: 2,
				},
			},
			{
				breakpoint: 768,
				settings: {
					slidesToShow: 1,
				},
			},
		],
	});

	//---------------------------------Fancy-box

	$().fancybox({
		selector: '[data-fancybox="images"]',
		loop: true,
	});

	$(function () {
		$("#authorization").validate({
			rules: {
				email: {
					required: true,
				},
				pass: {
					required: true,
				},
			},
			messages: {
				pass: {
					required: "Заполните это поле",
				},
				email: {
					required: "Заполните это поле",
					email: "Неверный Email адрес",
				},
			},
		});
		$("#login_success").validate({
			rules: {
				code: {
					required: true,
				},
			},
			messages: {
				code: {
					required: "Неверный код активации",
				},
			},
		});
		$("#new_pass").validate({
			rules: {
				newpass: {
					required: true,
					minlength: 5,
				},
			},
			messages: {
				newpass: {
					required: "Введите новый пароль",
					minlength: "Не менее 5-ти символов",
				},
			},
		});
		$("#register").validate({
			rules: {
				name: {
					required: true,
				},
				city: {
					required: true,
				},
				class: {
					required: true,
				},
				email: {
					required: true,
				},
				pass: {
					required: true,
					minlength: 5,
				},
				mobile: {
					required: true,
				},
			},
			messages: {
				name: {
					required: "Заполните это поле",
				},
				city: {
					required: "Заполните это поле",
				},
				class: {
					required: "Заполните это поле",
				},
				email: {
					required: "Заполните это поле",
					email: "Некорректный Email",
				},
				pass: {
					required: "Заполните это поле",
					minlength: "Не менее 5-ти символов",
				},
				mobile: {
					required: "Некорректный номер",
				},
			},
		});
		$("#restore").validate({
			rules: {
				email: {
					required: true,
				},
			},
			messages: {
				email: {
					required: "Заполните это поле",
					email: "Некорректный Email",
				},
			},
		});
	});

	//---------------------------------Table select

	$(".number-select span").click(function () {
		$(this).parent().toggleClass("active-number");
	});

	$("body").click(function () {
		$(".number-select").removeClass("active-number");
	});

	$(".number-select").click(function (e) {
		e.stopPropagation();
	});

	$(".number-select ul li").click(function () {
		var current = $(this).html();

		$(this).parents().siblings("span").html(current);

		$(this).addClass("selected");

		$(this).siblings().removeClass("selected");

		$(this).parents(".number-select").removeClass("active-number");
	});

	$("#scroll").mCustomScrollbar({
		axis: "y",
		theme: "inset-3-dark",
		autoDraggerLength: false,
	});

	$("#scroll_2").mCustomScrollbar({
		axis: "y",
		theme: "inset-3-dark",
		autoDraggerLength: false,
	});

	$(".next-stage").click(function () {
		$(".test-stage.active").removeClass("active").next().addClass("active");
	});
});
