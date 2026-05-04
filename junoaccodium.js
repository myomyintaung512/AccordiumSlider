/* ========================================================================
 * mmDeveloperSlider: junoaccodium.js v1.0.5
 * http://github.com/myomyintaung512/mmDeveloperSlider
 * ========================================================================
 * Copyright 2012 Myo Myint Aung.
 *
 * Licensed under the Opensource License;
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.myanmardeveloper.com/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * ======================================================================== */

var items_pre_row=3;
var imgheight=200;
var align="center";
var box_width=200;
var box_height=200;
var border_radius=10;
var border_before=0;
var border_hover=0;
var animation_speed=600;
var border_color="red";
var margin_hover=0;

$(document).ready(function(){
	var margin_before=border_hover-border_before;

	$(".gallery").css("overflow","hidden");
	if(align=="center"){
		$(".gallery").css("margin","0 auto");
	}
	var child = $(".gallery > div").get();

	var rowTimers = {};
	function act(el) {
		var $el = $(el), $parent = $el.parent(), idx = $parent.index('.row');
		if (rowTimers[idx]) { clearTimeout(rowTimers[idx]); delete rowTimers[idx]; }
		$el.css({ "border": border_hover + "px solid " + border_color, "margin": margin_hover });
		if ($el.is(":focus")) $el.css("outline", "2px solid " + border_color);
		$parent.children(":first-child").clearQueue().css('background-image', "url('" + $el.attr('big') + "')").animate({ height: imgheight, opacity: 1 }, animation_speed);
	}
	function deact(el) {
		var $el = $(el), $parent = $el.parent(), idx = $parent.index('.row');
		$el.css({ "border": border_before + "px solid " + border_color, "margin": margin_before, "outline": "none" });
		rowTimers[idx] = setTimeout(function() {
			var active = false;
			$parent.children(".box").each(function() { if ($(this).data("hovering") || $(this).is(":focus")) active = true; });
			if (!active) $parent.children(":first-child").clearQueue().animate({ height: "0" }, animation_speed);
		}, 50);
	}

	$(child).each(function() {
		$('<img/>')[0].src = $(this).attr("big");
		$(this).css({
			'background-image': "url(" + $(this).attr('small') + ")",
			'float': "left",
			'width': box_width + "px",
			'height': box_height + "px",
			"border": border_before + "px solid " + border_color,
			"margin": margin_before
		}).addClass("box").attr({
			"tabindex": "0",
			"role": "link",
			"aria-label": $(this).text().trim() || $(this).attr("url") || "item"
		});
	});

	var row_wreapper = $('.gallery');
	while (child.length) {
		var grp = child.splice(0, items_pre_row);
		var row = $('<div class="row"></div>');
		$(grp).each(function() {
			row.append($(this));
		});
		row_wreapper.append(row);
	}

	$('.gallery > .row').prepend('<div class="main-img"></div>');

	$(".gallery").on("mouseenter focusin", ".box", function() {
		$(this).data("hovering", true);
		act(this);
	}).on("mouseleave focusout", ".box", function() {
		$(this).data("hovering", false);
		deact(this);
	}).on("keydown", ".box", function(e) {
		if (e.which == 13) window.location = $(this).attr('url');
	}).on("mouseenter", ".main-img", function() {
		var idx = $(this).parent().index('.row');
		if (rowTimers[idx]) { clearTimeout(rowTimers[idx]); delete rowTimers[idx]; }
		$(this).clearQueue().animate({ height: imgheight, opacity: 1 }, animation_speed);
	}).on("mouseleave", ".main-img", function() {
		$(this).clearQueue().animate({ height: "0", opacity: 0.3 }, animation_speed);
	});

	$(".gallery").css("width", (($(".box").outerWidth() + (margin_before * 2)) * items_pre_row) + "px");
	$(".gallery .row, .gallery .row > div:first-child").css("overflow", "hidden");
	$(".gallery > .row > .box, .gallery > .row > .main-img").css("border-radius", border_radius);
	$(".gallery > .row > .box, .gallery > .row > .main-img").css("-moz-border-radius", border_radius);
	$(".gallery > .row > .box, .gallery > .row > .main-img").css("-webkit-border-radius", border_radius);
	$(".gallery > .row > .main-img").css("background-position", "center center");
	$(".gallery > .row > .main-img").css("background-size", "100%");
	$(".gallery > .row > .box").click(function() {
		window.location = $(this).attr('url');
	});
});
