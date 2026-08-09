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
		var txt = $(this).text().trim().replace(/\s+/g, ' ');
		var label = txt ? txt : "Gallery item " + (index + 1);
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
$('.gallery > .row > .main-img').css("","");
function checkDeactivate(row) {
  var anyActive = false;
  row.find(".box").each(function() {
    if ($(this).data("hovered") || $(this).data("focused")) {
      anyActive = true;
    }
  });
  if (row.find(".main-img").data("hovered")) {
    anyActive = true;
  }
  if (!anyActive) {
    row.find(".main-img").clearQueue().animate({
      height: "0",
      opacity: 0.3
    }, animation_speed);
  }
}

$(".row > .box").on('mouseenter focusin', function(e) {
  var self = this;
  var row = $(self).parent();
  if (e.type === 'mouseenter') {
    $(self).data("hovered", true);
  } else if (e.type === 'focusin') {
    $(self).data("focused", true);
  }

  $(self).css("border", border_hover + "px solid " + border_color);
  $(self).css("margin", margin_hover);
  row.children(":first-child").clearQueue().animate({
    height: imgheight,
    opacity: 1,
  }, animation_speed ); 
  row.children(":first-child").css('background-image', "url('" + $(self).attr('big') + "')");

  // Keyboard navigation logic: close preview in other rows that have no active items
  $(".gallery > .row").not(row).each(function() {
    checkDeactivate($(this));
  });
}).on('mouseleave focusout', function(e) {
  var self = this;
  var row = $(self).parent();
  if (e.type === 'mouseleave') {
    $(self).data("hovered", false);
  } else if (e.type === 'focusout') {
    $(self).data("focused", false);
  }

  $(self).css("border", border_before + "px solid " + border_color);
  $(self).css("margin", margin_before);

  setTimeout(function() {
    checkDeactivate(row);
  }, 10);
});

$('.row > div:first-child').on('mouseenter', function(e) {
  var self = this;
  var row = $(self).parent();
  $(self).data("hovered", true);
  $(self).clearQueue().animate({
    height: imgheight,
    opacity: 1,
  }, animation_speed );
}).on('mouseleave', function(e) {
  var self = this;
  var row = $(self).parent();
  $(self).data("hovered", false);
  setTimeout(function() {
    checkDeactivate(row);
  }, 10);
});
$(".gallery").css("width", (($(".box").outerWidth()+(margin_before*2))*items_pre_row)+"px");
$(".gallery .row, .gallery .row > div:first-child").css("overflow","hidden");
$(".gallery > .row > .box, .gallery > .row > .main-img").css("border-radius",border_radius); 
$(".gallery > .row > .box, .gallery > .row > .main-img").css("-moz-border-radius",border_radius); 
$(".gallery > .row > .box, .gallery > .row > .main-img").css("-webkit-border-radius",border_radius); 
$(".gallery > .row > .main-img").css("background-position","center center"); 
$(".gallery > .row > .main-img").css("background-size","100%"); 
$(".gallery > .row > .box").click(function(e){
  if ($(e.target).is('a')) return;
  var url = $(this).attr('url');
  if (url) {
    window.location = url;
  }
});

$(".gallery > .row > .box").keydown(function(e) {
  if (e.which === 13) { // Enter key
    if ($(e.target).is('a')) return;
    var url = $(this).attr('url');
    if (url) {
      window.location = url;
    }
  }
});
});
