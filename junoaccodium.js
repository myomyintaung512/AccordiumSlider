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
	var cleanedText = $(this).text().trim().replace(/\s+/g, ' ');
	var label = cleanedText ? cleanedText : 'Gallery item ' + (index + 1);
	$(this).css({
		'background-image': "url("+$(this).attr('small')+")",
		'float': "left",
		'width': box_width+"px",
		'height': box_height+"px",
		'border': border_before+"px solid "+border_color,
		'margin': margin_before
	}).addClass("box").attr({
		'tabindex': '0',
		'role': 'button',
		'aria-label': label
	});
});

var row_wreapper=$('.gallery');
while(child.length) {
	var grp=child.splice(0, items_pre_row);
	var row=$('<div class="row"></div>');
	$(grp).each(function(){
		row.append($(this));
	});
	row_wreapper.append(row);
}

$('.gallery > .row').prepend('<div class="main-img"></div>');

function checkDeactivateRow($row) {
	setTimeout(function() {
		var hasActive = $row.find('.box:hover, .box:focus, .main-img:hover').length > 0;
		if (!hasActive) {
			$row.children(":first-child").clearQueue().animate({ height: "0" }, animation_speed);
		}
	}, 50);
}

function activateBox(box) {
	var $box = $(box);
	var $row = $box.parent();
	$('.gallery > .row').not($row).each(function() {
		var $otherRow = $(this);
		if ($otherRow.find('.box:hover, .box:focus, .main-img:hover').length === 0) {
			$otherRow.children(':first-child').clearQueue().animate({ height: '0' }, animation_speed);
		}
	});
	$box.css("border", border_hover + "px solid " + border_color).css("margin", margin_hover);
	$row.children(":first-child").clearQueue().animate({ height: imgheight, opacity: 1 }, animation_speed)
		.css('background-image', "url('" + $box.attr('big') + "')");
}

function deactivateBox(box) {
	var $box = $(box);
	if ($box.hasClass('box')) {
		$box.css("border", border_before + "px solid " + border_color).css("margin", margin_before);
	}
	checkDeactivateRow($box.parent());
}

$(".row > .box").on("mouseenter focusin", function(e) {
	activateBox(this);
}).on("mouseleave focusout", function(e) {
	deactivateBox(this);
}).on("click keydown", function(e) {
	if ($(e.target).is("a")) return;
	if (e.type === "click" || (e.type === "keydown" && (e.which === 13 || e.which === 32))) {
		if (e.which === 32) e.preventDefault();
		if ($(this).attr('url')) {
			window.location = $(this).attr('url');
		}
	}
});

$('.gallery > .row > .main-img').on('mouseenter', function() {
	$(this).clearQueue().animate({ height: imgheight, opacity: 1 }, animation_speed);
}).on('mouseleave', function() {
	checkDeactivateRow($(this).parent());
});

$(".gallery").css("width", (($(".box").outerWidth()+(margin_before*2))*items_pre_row)+"px");
$(".gallery .row, .gallery .row > div:first-child").css("overflow","hidden");
$(".gallery > .row > .box, .gallery > .row > .main-img").css("border-radius",border_radius);
$(".gallery > .row > .box, .gallery > .row > .main-img").css("-moz-border-radius",border_radius);
$(".gallery > .row > .box, .gallery > .row > .main-img").css("-webkit-border-radius",border_radius);
$(".gallery > .row > .main-img").css("background-position","center center");
$(".gallery > .row > .main-img").css("background-size","100%");
});
