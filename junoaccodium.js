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

$(child).each(function(i) {
		$('<img/>')[0].src = $(this).attr("big");
		$(this).css('background-image',"url("+$(this).attr('small')+")");
		$(this).css('float',"left");
		$(this).css('width',box_width+"px");
		$(this).css('height',box_height+"px");
		$(this).css("border",border_before+"px solid "+border_color); 
		$(this).css("margin",margin_before);
		var lbl = $(this).text().trim().replace(/\s+/g, ' ') || ("Gallery item " + (i + 1));
		$(this).addClass("box").attr({tabindex: "0", role: "link", "aria-label": lbl});
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
$('.gallery > .row').prepend('<div class="main-img" aria-hidden="true"></div>');
function activate(el) {
  var $el = $(el), $p = $el.closest('.row'), $img = $p.children('.main-img');
  $('.gallery > .row').not($p).find('.main-img').stop(true).animate({height: '0'}, animation_speed);
  $img.stop(true).css('background-image', "url('" + $el.attr('big') + "')").animate({height: imgheight, opacity: 1}, animation_speed);
  if ($el.hasClass('box')) { $el.siblings('.box').css({border: border_before + 'px solid ' + border_color, margin: margin_before}); $el.css({border: border_hover + 'px solid ' + border_color, margin: margin_hover}); }
}
function deactivate(el) {
  var $p = $(el).closest('.row'), $img = $p.children('.main-img');
  setTimeout(function() {
    var stillActive = false;
    $p.children('.box, .main-img').each(function() { if ($(this).data('hovered') || $(this).data('focused')) stillActive = true; });
    if (!stillActive) {
      $img.stop(true).animate({height: '0', opacity: 0.3}, animation_speed);
      $p.children('.box').css({border: border_before + 'px solid ' + border_color, margin: margin_before});
    }
  }, 50);
}
$('.gallery > .row > .box').on('mouseenter focusin', function(e) {
  $(this).data(e.type === 'mouseenter' ? 'hovered' : 'focused', true);
  activate(this);
}).on('mouseleave focusout', function(e) {
  $(this).data(e.type === 'mouseleave' ? 'hovered' : 'focused', false);
  deactivate(this);
}).on('click keydown', function(e) {
  if ($(e.target).is('a')) return;
  if (e.type === 'click' || e.which === 13 || e.which === 32) {
    if (e.which === 32) e.preventDefault();
    var u = $(this).attr('url');
    if (u) window.location = u;
  }
});
$('.gallery > .row > .main-img').on('mouseenter', function() {
  $(this).data('hovered', true);
  activate(this);
}).on('mouseleave', function() {
  $(this).data('hovered', false);
  deactivate(this);
});
$(".gallery").css("width", (($(".box").outerWidth()+(margin_before*2))*items_pre_row)+"px");
$(".gallery .row, .gallery .row > div:first-child").css("overflow","hidden");
$(".gallery > .row > .box, .gallery > .row > .main-img").css("border-radius",border_radius); 
$(".gallery > .row > .box, .gallery > .row > .main-img").css("-moz-border-radius",border_radius); 
$(".gallery > .row > .box, .gallery > .row > .main-img").css("-webkit-border-radius",border_radius); 
$(".gallery > .row > .main-img").css("background-position","center center"); 
$(".gallery > .row > .main-img").css("background-size","100%");
});
