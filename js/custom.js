$(document).ready(function () {
	$(".slider_boxx").slick({
		dots: false,
		infinite: false,
		speed: 300,
		slidesToShow: 8,
		slidesToScroll: 1,
		arrows: false,
		responsive: [
			{
				breakpoint: 600,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 3,
					infinite: true,
					dots: true,
				},
			},
			{
				breakpoint: 1234,
				settings: {
					slidesToShow: 4,
					slidesToScroll: 5,
					infinite: true,
					dots: true,
				},
			},
			{
				breakpoint: 680,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 2,
					dots: false,
				},
			},
			{
				breakpoint: 600,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 1,
					dots: false,
				},
			},
		],
	});
	$(function () {
		var Accordion = function (el, multiple) {
			this.el = el || {};
			this.multiple = multiple || false;

			var links = this.el.find(".article-title");
			links.on(
				"click",
				{
					el: this.el,
					multiple: this.multiple,
				},
				this.dropdown
			);
		};

		Accordion.prototype.dropdown = function (e) {
			var $el = e.data.el;
			($this = $(this)), ($next = $this.next());

			$next.slideToggle();
			$this.parent().toggleClass("open");

			if (!e.data.multiple) {
				$el.find(".accordion-content")
					.not($next)
					.slideUp()
					.parent()
					.removeClass("open");
			}
		};
		var accordion = new Accordion($(".accordion-container"), false);
	});

	$(".accordion").on("click", function (event) {
		if (!$(event.target).closest("#accordion").length) {
			$this.parent().toggleClass("open");
		}
	});

	$(".orange_btn").on("click", function () {
		$(".modal_form").css("display", "block");
	});

	$(".orange_btn_end_modal").on("click", function () {
		$(".modal_form").css("display", "block");
		$("#modal_form")
			.css("display", "block")
			.css("opacity", "1")
			.css("top", "15%");
	});

	$(".trigg_off").on("click", function () {
		$(".modal_form").css("display", "none");
	});

	// TABS
	$(".tabs_eng_wrp .tab")
		.click(function () {
			$(".tabs_eng_wrp .tab")
				.removeClass("active")
				.eq($(this).index())
				.addClass("active");
			$(".tab_item").hide().eq($(this).index()).fadeIn();
		})
		.eq(0)
		.addClass("active");

	$(".tabs_tutor_wrps .tutors_tab")
		.click(function () {
			$(".tabs_tutor_wrps .tutors_tab")
				.removeClass("active")
				.eq($(this).index())
				.addClass("active");
			$(".tab_tutors_item").hide().eq($(this).index()).fadeIn();
		})
		.eq(0)
		.addClass("active");

	$(".tabs_lessons_wrp .lessons_tab")
		.click(function () {
			$(".tabs_lessons_wrp .lessons_tab")
				.removeClass("active")
				.eq($(this).index())
				.addClass("active");
			$(".tab_lessons_item").hide().eq($(this).index()).fadeIn();
		})
		.eq(0)
		.addClass("active");
});
