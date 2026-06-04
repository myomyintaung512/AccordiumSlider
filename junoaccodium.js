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
		var bigImg = $(this).attr("big");
		if (bigImg) $('<img/>')[0].src = bigImg;
		$(this).css('background-image',"url("+$(this).attr('small')+")");
		$(this).css('float',"left");
		$(this).css('width',box_width+"px");
		$(this).css('height',box_height+"px");
		$(this).css("border",border_before+"px solid "+border_color); 
		$(this).css("margin",margin_before);
		$(this).addClass("box");
		var text = $(this).text().replace(/\s+/g, ' ').trim();
		if (!text) {
			var idMatch = bigImg ? bigImg.match(/(\d+)-big/) : null;
			$(this).attr("aria-label", "Gallery item " + (idMatch ? idMatch[1] : (index + 1)));
		}
		$(this).attr("role", "link").attr("tabindex", "0");
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
$('.gallery > .row > .main-img').css("","");
$(".row > .box").on('mouseenter focusin', function(e){
	if (e.type === 'mouseenter') $(this).data('hovered', true);
	if (e.type === 'focusin') $(this).data('focused', true);
	$(this).parent().children(".box").each(function() {
		if (this !== e.currentTarget) {
			$(this).css("border",border_before+"px solid "+border_color).css("margin",margin_before);
		}
	});
	$(this).parent().children(":first-child").clearQueue();
	$(this).css("border",border_hover+"px solid "+border_color);
	$(this).css("margin",margin_hover);
	$(this).parent().children(":first-child").animate({
		height: imgheight,
		opacity: 1,
	}, animation_speed );
	$(this).parent().children(":first-child").css('background-image',"url('"+$(this).attr('big')+"')");
}).on('mouseleave focusout', function(e){
	if (e.type === 'mouseleave') $(this).data('hovered', false);
	if (e.type === 'focusout') {
		if (e.relatedTarget && $(this).has(e.relatedTarget).length > 0) {
			// Focus moved to a child element (like a link), don't set focused to false
		} else {
			$(this).data('focused', false);
		}
	}
	var self = this;
	setTimeout(function() {
		if (!$(self).data('hovered') && !$(self).data('focused')) {
			$(self).css("border",border_before+"px solid "+border_color);
			$(self).css("margin",margin_before);
			var anyActive = false;
			$(self).parent().children(".box").each(function() {
				if ($(this).data('hovered') || $(this).data('focused')) anyActive = true;
			});
			if (!anyActive) {
				$(self).parent().children(":first-child").clearQueue();
				$(self).parent().children(":first-child").animate({
					height: "0",
				}, animation_speed );
			}
		}
	}, 10);
});
$('.row > div:first-child').hover(
function(){
 $(this).clearQueue();
  $(this).animate({
    height: imgheight,
    opacity: 1,
  }, animation_speed );
},
function(){
$(this).clearQueue();
$(this).animate({
    height: "0",
    opacity: 0.3,
  }, animation_speed );
}
);
$(".gallery").css("width", (($(".box").outerWidth()+(margin_before*2))*items_pre_row)+"px");
$(".gallery .row, .gallery .row > div:first-child").css("overflow","hidden");
$(".gallery > .row > .box, .gallery > .row > .main-img").css("border-radius",border_radius); 
$(".gallery > .row > .box, .gallery > .row > .main-img").css("-moz-border-radius",border_radius); 
$(".gallery > .row > .box, .gallery > .row > .main-img").css("-webkit-border-radius",border_radius); 
$(".gallery > .row > .main-img").css("background-position","center center"); 
$(".gallery > .row > .main-img").css("background-size","100%"); 
$(".gallery > .row > .box").on("click keydown", function(e) {
	if (e.type === "click" || (e.type === "keydown" && e.which === 13)) {
		var url = $(this).attr('url');
		if (url) window.location = url;
	}
});
});
