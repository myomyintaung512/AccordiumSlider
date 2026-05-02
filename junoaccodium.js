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

$(child).each(function() {
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
		var label = $(this).text().trim();
		if (!label) {
			label = $(this).attr("url") || "Gallery item";
			$(this).attr("aria-label", label);
		}
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

function act(el) {
	var $this = $(el);
	var $row = $this.parent();
	var $mainImg = $row.children(":first-child");

	$row.children(".box").not($this).each(function() {
		var $other = $(this);
		if (!$other.is(":focus") && !$other.data('hovering')) {
			$other.css("border",border_before+"px solid "+border_color);
			$other.css("outline", "none");
			$other.css("margin",margin_before);
		}
	});

	$mainImg.clearQueue();
	$this.css("border",border_hover+"px solid "+border_color);
	if ($this.is(":focus")) {
		$this.css("outline", "3px solid purple");
		$this.css("outline-offset", "2px");
	}
	$this.css("margin",margin_hover);
	$mainImg.animate({
		height: imgheight,
		opacity: 1,
	}, animation_speed );
	$mainImg.css('background-image', "url('" + $this.attr('big') + "')");
}

function deact(el) {
	var $this = $(el);
	setTimeout(function() {
		if (!$this.is(":focus") && !$this.data('hovering')) {
			$this.css("border",border_before+"px solid "+border_color);
			$this.css("outline", "none");
			$this.css("margin",margin_before);

			var $row = $this.parent();
			var $activeItems = $row.children(".box").filter(function() {
				return $(this).is(":focus") || $(this).data('hovering');
			});

			if ($activeItems.length === 0) {
				var $mainImg = $row.children(":first-child");
				$mainImg.clearQueue();
				$mainImg.animate({
					height: "0",
				}, animation_speed );
			}
		}
	}, 50);
}

$(".row > .box").on("mouseenter", function() {
	$(this).data('hovering', true);
	act(this);
}).on("mouseleave", function() {
	$(this).data('hovering', false);
	deact(this);
}).on("focusin", function() {
	act(this);
}).on("focusout", function() {
	deact(this);
}).on("keydown", function(e) {
	if (e.key === "Enter") {
		e.preventDefault();
		$(this).click();
	}
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
$(".gallery > .row > .box").click(function(){
  window.location = $(this).attr('url'); });
});
