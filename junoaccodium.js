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
		$(this).attr("aria-label", txt || ('Gallery item ' + (index + 1)));
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

function activate(self) {
    var parent = $(self).parent();
    var mainImg = parent.children(".main-img");
    mainImg.clearQueue();
    $(self).css("border", border_hover + "px solid " + border_color).css("margin", margin_hover);
    mainImg.animate({ height: imgheight, opacity: 1 }, animation_speed);
    mainImg.css('background-image', "url('" + $(self).attr('big') + "')");
    $(".row").not(parent).each(function() {
        var otherRow = $(this), anyActive = false;
        otherRow.children(".box").each(function() {
            if ($(this).data('hovered') || $(this).data('focused')) anyActive = true;
        });
        if (!anyActive) {
            otherRow.children(".main-img").clearQueue().animate({ height: 0 }, animation_speed);
            otherRow.children(".box").each(function() {
                $(this).css("border", border_before + "px solid " + border_color).css("margin", margin_before);
            });
        }
    });
}

function deactivate(self) {
    if ($(self).hasClass('box')) {
        $(self).css("border", border_before + "px solid " + border_color).css("margin", margin_before);
    }
    setTimeout(function() {
        var parent = $(self).parent(), siblingActive = false;
        parent.children(".box").each(function() {
            if ($(this).data('hovered') || $(this).data('focused')) siblingActive = true;
        });
        var mainImgHovered = parent.children(".main-img").data('hovered');
        if (!siblingActive && !mainImgHovered) {
            parent.children(".main-img").clearQueue().animate({ height: 0 }, animation_speed);
        }
    }, 10);
}

$(".row > .box").on('mouseenter focusin', function(e) {
    $(this).data(e.type === 'mouseenter' ? 'hovered' : 'focused', true);
    activate(this);
}).on('mouseleave focusout', function(e) {
    $(this).data(e.type === 'mouseleave' ? 'hovered' : 'focused', false);
    deactivate(this);
});

$('.gallery > .row > .main-img').hover(
    function() {
        $(this).data('hovered', true);
        $(this).clearQueue().animate({ height: imgheight, opacity: 1 }, animation_speed);
    },
    function() {
        $(this).data('hovered', false);
        var self = this;
        setTimeout(function() {
            var parent = $(self).parent(), siblingActive = false;
            parent.children(".box").each(function() {
                if ($(this).data('hovered') || $(this).data('focused')) siblingActive = true;
            });
            if (!siblingActive) {
                $(self).clearQueue().animate({ height: "0", opacity: 0.3 }, animation_speed);
            }
        }, 10);
    }
);
$(".gallery").css("width", (($(".box").outerWidth()+(margin_before*2))*items_pre_row)+"px");
$(".gallery .row, .gallery .row > div:first-child").css("overflow","hidden");
$(".gallery > .row > .box, .gallery > .row > .main-img").css("border-radius",border_radius); 
$(".gallery > .row > .box, .gallery > .row > .main-img").css("-moz-border-radius",border_radius); 
$(".gallery > .row > .box, .gallery > .row > .main-img").css("-webkit-border-radius",border_radius); 
$(".gallery > .row > .main-img").css("background-position","center center"); 
$(".gallery > .row > .main-img").css("background-size","100%"); 
$(".gallery > .row > .box").on('click keydown', function(e) {
  if ($(e.target).is('a')) return;
  if (e.type === 'click' || (e.type === 'keydown' && e.which === 13)) {
    var url = $(this).attr('url');
    if (url) window.location = url;
  }
});
});
