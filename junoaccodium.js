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
		$(this).attr("role", "button");
		var raw = $(this).text();
		var clean = raw ? raw.trim().replace(/\s+/g, ' ') : '';
		$(this).attr("aria-label", clean || ("Gallery item " + (index + 1)));
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
function activate(self, type) {
  if (type === 'mouseenter') $(self).data('h', 1);
  if (type === 'focusin') $(self).data('f', 1);
  var main = $(self).parent().children(".main-img").clearQueue();
  $(self).css({border: border_hover+"px solid "+border_color, margin: margin_hover});
  main.animate({height: imgheight, opacity: 1}, animation_speed).css('background-image',"url('"+$(self).attr('big')+"')");
  $('.gallery > .row').each(function() {
    var r = $(this);
    if (r[0] !== $(self).parent()[0] && !r.find('.box').filter(function(){return $(this).data('h')||$(this).data('f')}).length && !r.children('.main-img').data('h')) {
      r.children(".main-img").clearQueue().animate({height: "0"}, animation_speed);
    }
  });
}
function deactivate(self, type) {
  if (type === 'mouseleave') $(self).data('h', 0);
  if (type === 'focusout') $(self).data('f', 0);
  setTimeout(function() {
    if ($(self).hasClass('box') && !$(self).data('h') && !$(self).data('f')) {
      $(self).css({border: border_before+"px solid "+border_color, margin: margin_before});
    }
    var parent = $(self).parent();
    var any = parent.children('.main-img').data('h') || parent.children('.box').filter(function(){return $(this).data('h')||$(this).data('f')}).length;
    if (!any) parent.children(".main-img").clearQueue().animate({height: "0"}, animation_speed);
  }, 10);
}
$(".row > .box").on('mouseenter focusin', function(e) {
  activate(this, e.type);
}).on('mouseleave focusout', function(e) {
  deactivate(this, e.type);
});
$('.row > .main-img').on('mouseenter', function(e) {
  $(this).data('h', 1).clearQueue().animate({height: imgheight, opacity: 1}, animation_speed);
}).on('mouseleave', function(e) {
  $(this).data('h', 0);
  deactivate(this, e.type);
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
  if (e.type === 'click' || e.which === 13 || e.which === 32) {
    if (e.type === 'keydown') e.preventDefault();
    var url = $(this).attr('url');
    if (url) window.location = url;
  }
});
});
