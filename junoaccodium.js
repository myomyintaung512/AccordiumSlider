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
		$(this).attr({ "tabindex": "0", "role": "link" });
		var txt = $(this).text().trim().replace(/\s+/g, ' ');
		$(this).attr("aria-label", txt || ("Gallery item " + (index + 1)));
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

function checkDeactivate(row) {
  var any = false, mainImg = row.children(":first-child");
  if (mainImg.data('hovered')) any = true;
  row.children(".box").each(function() {
    if ($(this).data('hovered') || $(this).data('focused')) any = true;
  });
  if (!any) {
    mainImg.clearQueue().css("border", "none").animate({ height: "0" }, animation_speed);
  }
}

$('.gallery > .row').prepend('<div class="main-img"></div>');

$(".row > .box").on('mouseenter focusin', function(e) {
  var self = $(this), parent = self.parent(), mainImg = parent.children(":first-child");
  if (e.type === 'mouseenter') self.data('hovered', true);
  if (e.type === 'focusin') {
    self.data('focused', true);
    $(".gallery > .row").not(parent).each(function() {
      $(this).children().data('hovered', false).data('focused', false);
      checkDeactivate($(this));
    });
  }
  mainImg.clearQueue();
  self.css({ "border": border_hover + "px solid " + border_color, "margin": margin_hover });
  mainImg.css({ 'background-image': "url('" + self.attr('big') + "')", "border": border_hover + "px solid " + border_color });
  mainImg.animate({ height: imgheight, opacity: 1 }, animation_speed);
}).on('mouseleave focusout', function(e) {
  var self = $(this), parent = self.parent();
  if (e.type === 'mouseleave') self.data('hovered', false);
  if (e.type === 'focusout') self.data('focused', false);
  setTimeout(function() {
    if (!self.data('hovered') && !self.data('focused')) {
      self.css({ "border": border_before + "px solid " + border_color, "margin": margin_before });
    }
    checkDeactivate(parent);
  }, 10);
});

$('.gallery > .row > .main-img').on('mouseenter', function() {
  var self = $(this);
  self.data('hovered', true);
  self.clearQueue().animate({ height: imgheight, opacity: 1 }, animation_speed);
}).on('mouseleave', function() {
  var self = $(this), parent = self.parent();
  self.data('hovered', false);
  setTimeout(function() { checkDeactivate(parent); }, 10);
});

$(".gallery").css("width", (($(".box").outerWidth()+(margin_before*2))*items_pre_row)+"px");
$(".gallery .row, .gallery .row > div:first-child").css("overflow","hidden");
$(".gallery > .row > .box, .gallery > .row > .main-img").css({
  "border-radius": border_radius,
  "-moz-border-radius": border_radius,
  "-webkit-border-radius": border_radius
});
$(".gallery > .row > .main-img").css({ "background-position": "center center", "background-size": "100%" });

$(".gallery > .row > .box").on('click keydown', function(e) {
  if ($(e.target).is('a')) return;
  if (e.type === 'click' || e.key === 'Enter' || e.key === ' ' || e.which === 13 || e.which === 32) {
    if (e.type !== 'click') e.preventDefault();
    var url = $(this).attr('url');
    if (url) window.location = url;
  }
});
});
