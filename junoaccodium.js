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
		$(this).attr("role", "link");
		var cleanText = $(this).text().trim().replace(/\s+/g, ' ');
		var label = cleanText || ('Gallery item ' + (index + 1));
		$(this).attr("aria-label", label);
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

function checkDeactivate(row, boxElement) {
	setTimeout(function() {
		var anyActive = false;
		row.find('.box').each(function() {
			if ($(this).data('hovered') || $(this).data('focused')) {
				anyActive = true;
			}
		});
		if (row.find('.main-img').data('hovered')) {
			anyActive = true;
		}
		if (!anyActive) {
			var mainImg = row.children(":first-child");
			mainImg.clearQueue();
			mainImg.animate({
				height: "0"
			}, animation_speed);
			mainImg.css("border", "none");
		}
	}, 10);
}

function activateBox(box, e) {
	var row = box.parent();
	var mainImg = row.children(":first-child");
	if (e.type === 'mouseenter') {
		box.data('hovered', true);
	} else if (e.type === 'focusin') {
		box.data('focused', true);
		$('.gallery > .row').not(row).each(function() {
			var otherRow = $(this);
			otherRow.find('.box').data('focused', false).css({
				"border": border_before + "px solid " + border_color,
				"margin": margin_before
			});
			checkDeactivate(otherRow);
		});
	}

	mainImg.clearQueue();
	box.css("border", border_hover + "px solid " + border_color);
	box.css("margin", margin_hover);
	mainImg.animate({
		height: imgheight,
		opacity: 1
	}, animation_speed);
	mainImg.css('background-image', "url('" + box.attr('big') + "')");
	mainImg.css("border", border_hover + "px solid " + border_color);
}

function deactivateBox(box, e) {
	var row = box.parent();
	if (e.type === 'mouseleave') {
		box.data('hovered', false);
	} else if (e.type === 'focusout') {
		box.data('focused', false);
	}
	box.css("border", border_before + "px solid " + border_color);
	box.css("margin", margin_before);
	checkDeactivate(row, box);
}

$(".row > .box").on('mouseenter focusin', function(e) {
	activateBox($(this), e);
}).on('mouseleave focusout', function(e) {
	deactivateBox($(this), e);
});

$('.row > div:first-child').on('mouseenter', function() {
	var mainImg = $(this);
	mainImg.data('hovered', true);
	mainImg.clearQueue();
	mainImg.animate({
		height: imgheight,
		opacity: 1
	}, animation_speed);
}).on('mouseleave', function() {
	var mainImg = $(this);
	mainImg.data('hovered', false);
	checkDeactivate(mainImg.parent());
});
$(".gallery").css("width", (($(".box").outerWidth()+(margin_before*2))*items_pre_row)+"px");
$(".gallery .row, .gallery .row > div:first-child").css("overflow","hidden");
$(".gallery > .row > .box, .gallery > .row > .main-img").css("border-radius",border_radius); 
$(".gallery > .row > .box, .gallery > .row > .main-img").css("-moz-border-radius",border_radius); 
$(".gallery > .row > .box, .gallery > .row > .main-img").css("-webkit-border-radius",border_radius); 
$(".gallery > .row > .main-img").css("background-position","center center"); 
$(".gallery > .row > .main-img").css("background-size","100%"); 

$(".gallery > .row > .box").on('click keydown', function(e) {
	if (e.type === 'click' || (e.type === 'keydown' && e.which === 13)) {
		if ($(e.target).is('a')) {
			return;
		}
		var url = $(this).attr('url');
		if (url) {
			window.location = url;
		}
	}
});
});
