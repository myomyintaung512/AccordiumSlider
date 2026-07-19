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
		$(this).attr("tabindex", "0");
		var cleanText = $(this).text().trim().replace(/\s+/g, ' ');
		if (!cleanText) {
			cleanText = "Gallery item " + (index + 1);
		}
		$(this).attr("aria-label", cleanText);
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

function activateBox(box) {
	var mainImg = $(box).parent().children(".main-img");
	mainImg.clearQueue();
	$(box).css("border", border_hover + "px solid " + border_color);
	$(box).css("margin", margin_hover);
	mainImg.css("border", border_hover + "px solid " + border_color);
	mainImg.animate({
		height: imgheight,
		opacity: 1
	}, animation_speed);
	var bigImg = $(box).attr('big');
	if (bigImg) {
		mainImg.css('background-image', "url('" + bigImg + "')");
	}

	$('.gallery > .row').not($(box).parent()).each(function() {
		var r = $(this);
		var active = false;
		r.find('.box').each(function() {
			if ($(this).data('hovered') || $(this).data('focused')) {
				active = true;
			}
		});
		if (r.children('.main-img').data('hovered')) {
			active = true;
		}
		if (!active) {
			var mi = r.children('.main-img');
			mi.clearQueue().animate({
				height: "0"
			}, animation_speed);
			mi.css("border", "none");
		}
	});
}

function checkDeactivate(element) {
	var row = $(element).closest('.row');
	var mainImg = row.children('.main-img');
	setTimeout(function() {
		var anyActive = false;
		if (mainImg.data('hovered')) {
			anyActive = true;
		}
		row.children('.box').each(function() {
			if ($(this).data('hovered') || $(this).data('focused')) {
				anyActive = true;
			}
		});
		if (!anyActive) {
			mainImg.clearQueue().animate({
				height: "0"
			}, animation_speed);
			mainImg.css("border", "none");
		}
	}, 10);
}

function checkBoxState(box) {
	setTimeout(function() {
		if (!$(box).data('hovered') && !$(box).data('focused')) {
			$(box).css("border", border_before + "px solid " + border_color);
			$(box).css("margin", margin_before);
		}
		checkDeactivate(box);
	}, 10);
}

$(".row > .box").on('mouseenter focusin', function(e) {
	if (e.type === 'mouseenter') {
		$(this).data('hovered', true);
	} else if (e.type === 'focusin') {
		$(this).data('focused', true);
	}
	activateBox(this);
}).on('mouseleave focusout', function(e) {
	if (e.type === 'mouseleave') {
		$(this).data('hovered', false);
	} else if (e.type === 'focusout') {
		$(this).data('focused', false);
	}
	checkBoxState(this);
});

$('.gallery > .row > .main-img').on('mouseenter', function(e) {
	$(this).data('hovered', true);
	$(this).css("border", border_hover + "px solid " + border_color);
	$(this).clearQueue().animate({
		height: imgheight,
		opacity: 1
	}, animation_speed);
}).on('mouseleave', function(e) {
	$(this).data('hovered', false);
	checkDeactivate(this);
});

$(".gallery").css("width", (($(".box").outerWidth()+(margin_before*2))*items_pre_row)+"px");
$(".gallery .row, .gallery .row > div:first-child").css("overflow","hidden");
$(".gallery > .row > .box, .gallery > .row > .main-img").css("border-radius",border_radius); 
$(".gallery > .row > .box, .gallery > .row > .main-img").css("-moz-border-radius",border_radius); 
$(".gallery > .row > .box, .gallery > .row > .main-img").css("-webkit-border-radius",border_radius); 
$(".gallery > .row > .main-img").css("background-position","center center"); 
$(".gallery > .row > .main-img").css("background-size","100%"); 

$(".gallery > .row > .box").on('click keydown', function(e) {
	if ($(e.target).is('a')) return;
	if (e.type === 'keydown' && e.which !== 13) return;
	var url = $(this).attr('url');
	if (url) {
		window.location = url;
	}
});
});
