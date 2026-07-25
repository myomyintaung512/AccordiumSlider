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

		var cleanLabel = $(this).text().trim().replace(/\s+/g, ' ');
		$(this).attr({
			'tabindex': '0',
			'role': 'button',
			'aria-label': cleanLabel || 'Gallery item ' + (index + 1)
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

function isRowActive(row) {
  var active = false;
  $(row).find('.box').each(function() {
    if ($(this).data('hovered') || $(this).data('focused')) active = true;
  });
  if ($(row).find('.main-img').data('hovered')) active = true;
  return active;
}

function checkDeactivate(row) {
  setTimeout(function() {
    if (!isRowActive(row)) {
      var firstChild = $(row).children(":first-child");
      firstChild.clearQueue();
      firstChild.animate({ height: "0" }, animation_speed);
      firstChild.css("border", "0px solid " + border_color);
    }
  }, 10);
}

$(".row > .box").on('mouseenter focusin', function(e) {
  var self = this, row = $(self).parent();
  $(self).data(e.type === 'mouseenter' ? 'hovered' : 'focused', true);
  $('.row').each(function() { if (this !== row[0]) checkDeactivate(this); });
  $(self).css("border", border_hover + "px solid " + border_color).css("margin", margin_hover);
  var firstChild = row.children(":first-child");
  firstChild.clearQueue();
  firstChild.css('background-image', "url('" + $(self).attr('big') + "')");
  firstChild.css("border", border_hover + "px solid " + border_color);
  firstChild.animate({ height: imgheight, opacity: 1 }, animation_speed);
}).on('mouseleave focusout', function(e) {
  var self = this, row = $(self).parent();
  $(self).data(e.type === 'mouseleave' ? 'hovered' : 'focused', false);
  $(self).css("border", border_before + "px solid " + border_color).css("margin", margin_before);
  checkDeactivate(row);
});

$('.row > div:first-child').on('mouseenter', function() {
  $(this).data('hovered', true).clearQueue().css("border", border_hover + "px solid " + border_color);
  $(this).animate({ height: imgheight, opacity: 1 }, animation_speed);
}).on('mouseleave', function() {
  $(this).data('hovered', false);
  checkDeactivate($(this).parent());
});

$(".gallery").css("width", (($(".box").outerWidth()+(margin_before*2))*items_pre_row)+"px");
$(".gallery .row, .gallery .row > div:first-child").css("overflow","hidden");
$(".gallery > .row > .box, .gallery > .row > .main-img").css("border-radius",border_radius); 
$(".gallery > .row > .box, .gallery > .row > .main-img").css("-moz-border-radius",border_radius); 
$(".gallery > .row > .box, .gallery > .row > .main-img").css("-webkit-border-radius",border_radius); 
$(".gallery > .row > .main-img").css("background-position","center center"); 
$(".gallery > .row > .main-img").css("background-size","100%"); 

$(".gallery > .row > .box").on('click', function(e) {
  if ($(e.target).is('a')) return;
  var url = $(this).attr('url');
  if (url) window.location = url;
}).on('keydown', function(e) {
  if ($(e.target).is('a')) return;
  if ((e.which === 13 || e.which === 32) && $(this).attr('url')) {
    e.preventDefault();
    window.location = $(this).attr('url');
  }
});
});
