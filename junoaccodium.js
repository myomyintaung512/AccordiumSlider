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
		var label = $(this).text().trim().replace(/\s+/g, " ") || ("Gallery item " + (index + 1));
		$(this).attr({ "tabindex": "0", "role": "button", "aria-label": label });
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
function activate(el) {
  var $p = $(el).parent();
  $p.children(":first-child").clearQueue().animate({ height: imgheight, opacity: 1 }, animation_speed)
    .css("background-image", "url('" + $(el).attr("big") + "')");
  $(el).css("border", border_hover + "px solid " + border_color).css("margin", margin_hover);
}
function deactivate(el) {
  setTimeout(function() {
    var $p = $(el).parent();
    var active = false;
    $p.children(".box").each(function() {
      if ($(this).data("hovered") || $(this).data("focused")) active = true;
    });
    if ($p.children(".main-img").data("hovered")) active = true;
    if (!active) {
      $p.children(":first-child").clearQueue().animate({ height: "0" }, animation_speed);
    }
  }, 50);
  if ($(el).hasClass("box") && !$(el).data("hovered") && !$(el).data("focused")) {
    $(el).css("border", border_before + "px solid " + border_color).css("margin", margin_before);
  }
}
$(".row > .box").on("mouseenter focusin", function(e) {
  $(this).data(e.type === "focusin" ? "focused" : "hovered", true);
  activate(this);
}).on("mouseleave focusout", function(e) {
  $(this).data(e.type === "focusout" ? "focused" : "hovered", false);
  deactivate(this);
});
$(".row > .main-img").on("mouseenter", function() {
  $(this).data("hovered", true);
  $(this).clearQueue().animate({ height: imgheight, opacity: 1 }, animation_speed);
}).on("mouseleave", function() {
  $(this).data("hovered", false);
  deactivate(this);
});
$(".gallery").css("width", (($(".box").outerWidth()+(margin_before*2))*items_pre_row)+"px");
$(".gallery .row, .gallery .row > div:first-child").css("overflow","hidden");
$(".gallery > .row > .box, .gallery > .row > .main-img").css("border-radius",border_radius); 
$(".gallery > .row > .box, .gallery > .row > .main-img").css("-moz-border-radius",border_radius); 
$(".gallery > .row > .box, .gallery > .row > .main-img").css("-webkit-border-radius",border_radius); 
$(".gallery > .row > .main-img").css("background-position","center center"); 
$(".gallery > .row > .main-img").css("background-size","100%"); 
$(".gallery > .row > .box").on("click keydown", function(e) {
  if (e.type === "keydown") {
    if (e.which === 32) e.preventDefault();
    if (e.which !== 13 && e.which !== 32) return;
  }
  if ($(e.target).is("a")) return;
  if ($(this).attr("url")) window.location = $(this).attr("url");
});
});
