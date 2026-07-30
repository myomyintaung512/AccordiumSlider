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
		var txt = $(this).text().trim().replace(/\s+/g, ' ');
		$(this).attr({
			'tabindex': '0',
			'role': 'link',
			'aria-label': txt || ('Gallery item ' + (index + 1))
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

function checkDeactivate(self) {
	setTimeout(function() {
		var r = $(self).closest('.row'), m = r.children('.main-img'), active = m.data('hovered');
		r.children('.box').each(function() { if ($(this).data('hovered') || $(this).data('focused')) active = true; });
		if (!active) { m.clearQueue().animate({ height: "0" }, animation_speed).css("border", "none"); }
	}, 10);
}

function closeOtherRows(curr) {
	$('.gallery > .row').not(curr).each(function() {
		var r = $(this), m = r.children('.main-img'), active = m.data('hovered');
		r.children('.box').each(function() { if ($(this).data('hovered') || $(this).data('focused')) active = true; });
		if (!active) { m.clearQueue().animate({ height: "0" }, animation_speed).css("border", "none"); }
	});
}

function activate(self, e) {
	if (e.type === 'mouseenter') $(self).data('hovered', true);
	if (e.type === 'focusin') $(self).data('focused', true);
	var r = $(self).closest('.row'), m = r.children('.main-img');
	m.clearQueue();
	$(self).css({ "border": border_hover + "px solid " + border_color, "margin": margin_hover });
	m.animate({ height: imgheight, opacity: 1 }, animation_speed)
	 .css({ 'background-image': "url('" + $(self).attr('big') + "')", "border": border_hover + "px solid " + border_color });
	closeOtherRows(r);
}

function deactivate(self, e) {
	if (e.type === 'mouseleave') $(self).data('hovered', false);
	if (e.type === 'focusout') $(self).data('focused', false);
	$(self).css({ "border": border_before + "px solid " + border_color, "margin": margin_before });
	checkDeactivate(self);
}

$('.gallery > .row').on('mouseenter focusin', '.box', function(e) { activate(this, e); })
                    .on('mouseleave focusout', '.box', function(e) { deactivate(this, e); });

$('.gallery > .row').on('mouseenter', '.main-img', function(e) {
	$(this).data('hovered', true).clearQueue().animate({ height: imgheight, opacity: 1 }, animation_speed)
	       .css("border", border_hover + "px solid " + border_color);
}).on('mouseleave', '.main-img', function(e) {
	var self = this;
	$(self).data('hovered', false);
	setTimeout(function() {
		var r = $(self).closest('.row'), active = false;
		r.children('.box').each(function() { if ($(this).data('hovered') || $(this).data('focused')) active = true; });
		if (!active && !$(self).data('hovered')) {
			$(self).clearQueue().animate({ height: "0" }, animation_speed).css("border", "none");
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

$(".gallery > .row").on('click keydown', '.box', function(e) {
	if ($(e.target).is('a')) return;
	var url = $(this).attr('url');
	if (!url) return;
	if (e.type === 'click' || (e.type === 'keydown' && (e.which === 13 || e.which === 32))) {
		if (e.type === 'keydown') e.preventDefault();
		window.location = url;
	}
});
});
