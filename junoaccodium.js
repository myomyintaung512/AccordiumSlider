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

	$(child).each(function(index) {
		$('<img/>')[0].src = $(this).attr("big");
		$(this).css('background-image',"url("+$(this).attr('small')+")");
		$(this).css('float',"left");
		$(this).css('width',box_width+"px");
		$(this).css('height',box_height+"px");
		$(this).css("border",border_before+"px solid "+border_color); 
		$(this).css("margin",margin_before);
		$(this).addClass("box");

		// Accessibility: Add keyboard support and ARIA labels
		$(this).attr('tabindex', '0');
		$(this).attr('role', 'link');

		var text = $(this).text().replace(/\s+/g, ' ').trim();
		if (!text) {
			var imgId = $(this).attr('big').match(/(\d+)-big/);
			var label = "Gallery item " + (imgId ? imgId[1] : (index + 1));
			$(this).attr('aria-label', label);
		}
	});

	var row_wreapper=$('.gallery');
	while(child.length)
	{
		var grp=child.splice(0, items_pre_row);
		var row=$('<div class="row"></div>');

		$(grp).each(function(){
			row.append($(this));
		});
		row_wreapper.append(row);
	}

	$('.gallery > .row').prepend('<div class="main-img"></div>');

	$(".row > .box").on('mouseenter focusin', function(e) {
		if (e.type === 'mouseenter') $(this).data('hovered', true);
		if (e.type === 'focusin') $(this).data('focused', true);

		$(this).parent().children(".main-img").clearQueue();

		// Reset siblings to default border and margin to avoid "sticky hover" visual bugs
		$(this).siblings(".box").css({
			"border": border_before + "px solid " + border_color,
			"margin": margin_before,
			"outline": "none"
		}).data('hovered', false).data('focused', false);

		$(this).css("border", border_hover + "px solid " + border_color);
		$(this).css("margin", margin_hover);

		if (e.type === 'focusin') {
			$(this).css("outline", "3px solid " + border_color);
		}

		$(this).parent().children(".main-img").animate({
			height: imgheight,
			opacity: 1,
		}, animation_speed);
		$(this).parent().children(".main-img").css('background-image', "url('" + $(this).attr('big') + "')");
	}).on('mouseleave focusout', function(e) {
		if (e.type === 'mouseleave') $(this).data('hovered', false);
		if (e.type === 'focusout') {
			$(this).data('focused', false);
			$(this).css("outline", "none");
		}

		var $this = $(this);
		setTimeout(function() {
			if (!$this.data('hovered') && !$this.data('focused')) {
				$this.css("border", border_before + "px solid " + border_color);
				$this.css("margin", margin_before);

				var anyActive = false;
				$this.parent().children('.box').each(function() {
					if ($(this).data('hovered') || $(this).data('focused')) {
						anyActive = true;
						return false;
					}
				});

				if (!anyActive) {
					$this.parent().children(".main-img").clearQueue();
					$this.parent().children(".main-img").animate({
						height: "0",
						opacity: 0.3
					}, animation_speed);
				}
			}
		}, 10);
	});

	$('.row > .main-img').on('mouseenter', function(e) {
		$(this).clearQueue();
		$(this).animate({
			height: imgheight,
			opacity: 1,
		}, animation_speed);
	}).on('mouseleave', function(e) {
		var $mainImg = $(this);
		setTimeout(function() {
			var anyActive = false;
			$mainImg.parent().children('.box').each(function() {
				if ($(this).data('hovered') || $(this).data('focused')) {
					anyActive = true;
					return false;
				}
			});

			if (!anyActive) {
				$mainImg.clearQueue();
				$mainImg.animate({
					height: "0",
					opacity: 0.3,
				}, animation_speed);
			}
		}, 10);
	});

	$(".gallery").css("width", (($(".box").outerWidth() + (margin_before * 2)) * items_pre_row) + "px");
	$(".gallery .row, .gallery .row > .main-img").css("overflow", "hidden");
	$(".gallery > .row > .box, .gallery > .row > .main-img").css("border-radius", border_radius);
	$(".gallery > .row > .box, .gallery > .row > .main-img").css("-moz-border-radius", border_radius);
	$(".gallery > .row > .box, .gallery > .row > .main-img").css("-webkit-border-radius", border_radius);
	$(".gallery > .row > .main-img").css("background-position", "center center");
	$(".gallery > .row > .main-img").css("background-size", "100%");

	$(".gallery > .row > .box").on('click keydown', function(e) {
		if (e.type === 'click' || (e.type === 'keydown' && e.which == 13)) {
			var url = $(this).attr('url');
			if (url) {
				window.location = url;
			}
		}
	});
});
