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
$(".gallery").css("margin","0 auto");}
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

		var textContent = $(this).text().trim().replace(/\s+/g, ' ');
		var ariaLabel = textContent ? textContent : 'Gallery item ' + (index + 1);
		$(this).attr({
			'aria-label': ariaLabel,
			'tabindex': '0',
			'role': 'button'
		});
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

function activateBox(box, eventType) {
	var $box = $(box);
	if (eventType === 'mouseenter') {
		$box.data('hovered', true);
	} else if (eventType === 'focusin') {
		$box.data('focused', true);
	}

	$box.css("border", border_hover + "px solid " + border_color);
	$box.css("margin", margin_hover);

	var $mainImg = $box.parent().children(":first-child");
	$mainImg.clearQueue();
	$mainImg.css('background-image', "url('" + $box.attr('big') + "')");
	$mainImg.animate({
		height: imgheight,
		opacity: 1
	}, animation_speed);

	$('.gallery > .row').not($box.parent()).each(function() {
		var $otherRow = $(this);
		var anyActive = false;
		$otherRow.children('.box').each(function() {
			if ($(this).data('hovered') || $(this).data('focused')) {
				anyActive = true;
			}
		});
		if ($otherRow.children('.main-img').data('hovered')) {
			anyActive = true;
		}
		if (!anyActive) {
			$otherRow.children('.main-img').clearQueue().animate({
				height: "0",
				opacity: 0.3
			}, animation_speed);
		}
	});
}

function deactivateBox(box, eventType) {
	var $box = $(box);
	if (eventType === 'mouseleave') {
		$box.data('hovered', false);
	} else if (eventType === 'focusout') {
		$box.data('focused', false);
	}

	$box.css("border", border_before + "px solid " + border_color);
	$box.css("margin", margin_before);

	setTimeout(function() {
		var $row = $box.parent();
		var anyActive = false;
		$row.children('.box').each(function() {
			if ($(this).data('hovered') || $(this).data('focused')) {
				anyActive = true;
			}
		});
		if ($row.children('.main-img').data('hovered')) {
			anyActive = true;
		}

		if (!anyActive) {
			$row.children('.main-img').clearQueue().animate({
				height: "0",
				opacity: 0.3
			}, animation_speed);
		}
	}, 10);
}

function navigateBox(e, element) {
	if ($(e.target).is('a')) return;
	var url = $(element).attr('url');
	if (url) {
		window.location = url;
	}
}

$(".row > .box")
	.on('mouseenter focusin', function(e) {
		activateBox(this, e.type);
	})
	.on('mouseleave focusout', function(e) {
		deactivateBox(this, e.type);
	});

$('.gallery > .row > .main-img')
	.on('mouseenter', function(e) {
		var $mainImg = $(this);
		$mainImg.data('hovered', true);
		$mainImg.clearQueue().animate({
			height: imgheight,
			opacity: 1
		}, animation_speed);
	})
	.on('mouseleave', function(e) {
		var $mainImg = $(this);
		$mainImg.data('hovered', false);

		setTimeout(function() {
			var $row = $mainImg.parent();
			var anyActive = false;
			$row.children('.box').each(function() {
				if ($(this).data('hovered') || $(this).data('focused')) {
					anyActive = true;
				}
			});
			if ($mainImg.data('hovered')) {
				anyActive = true;
			}

			if (!anyActive) {
				$mainImg.clearQueue().animate({
					height: "0",
					opacity: 0.3
				}, animation_speed);
			}
		}, 10);
	});

$(".gallery").css("width", (($(".box").outerWidth()+(margin_before*2))*items_pre_row)+"px");
$(".gallery .row, .gallery .row > div:first-child").css("overflow","hidden");
$(".gallery > .row > .box, .gallery > .row > .main-img").css("border-radius",border_radius); 
$(".gallery > .row > .box, .gallery > .row > .main-img").css("-moz-border-radius",border_radius); 
$(".gallery > .row > .box, .gallery > .row > .main-img").css("-webkit-border-radius",border_radius); 
$(".gallery > .row > .main-img").css("background-position","center center"); 
$(".gallery > .row > .main-img").css("background-size","100%"); 

$(".gallery > .row > .box")
	.on('click', function(e) {
		navigateBox(e, this);
	})
	.on('keydown', function(e) {
		if (e.which === 13 || e.which === 32) {
			e.preventDefault();
			navigateBox(e, this);
		}
	});
});
