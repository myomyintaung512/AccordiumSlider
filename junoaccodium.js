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
		$(this).attr("tabindex", "0").attr("role", "link");
		var label = $(this).text().trim().replace(/\s+/g, ' ');
		if (!label) {
			label = "Gallery item " + (index + 1);
		}
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

function updateRow(row) {
    var anyActiveBox = null;
    row.children(".box").each(function() {
        if ($(this).data('hovered') || $(this).data('focused')) {
            anyActiveBox = $(this);
        }
    });

    var mainImg = row.children(".main-img");
    var isMainImgHovered = mainImg.data('hovered');

    if (anyActiveBox) {
        mainImg.clearQueue();

        $('.gallery > .row').not(row).each(function() {
            var otherRow = $(this);
            var otherActive = false;
            otherRow.children(".box").each(function() {
                if ($(this).data('hovered') || $(this).data('focused')) {
                    otherActive = true;
                }
            });
            if (otherRow.children(".main-img").data('hovered')) {
                otherActive = true;
            }
            if (!otherActive) {
                var otherMainImg = otherRow.children(".main-img");
                otherMainImg.clearQueue();
                otherMainImg.animate({ height: "0" }, animation_speed, function() {
                    otherMainImg.css("border", "none");
                });
                otherRow.children(".box").css("border", border_before + "px solid " + border_color).css("margin", margin_before);
            }
        });

        row.children(".box").not(anyActiveBox).css("border", border_before + "px solid " + border_color).css("margin", margin_before);
        anyActiveBox.css("border", border_hover + "px solid " + border_color).css("margin", margin_hover);

        mainImg.css('background-image', "url('" + anyActiveBox.attr('big') + "')");
        mainImg.css("border", border_before + "px solid " + border_color);
        mainImg.animate({
            height: imgheight,
            opacity: 1
        }, animation_speed);
    } else if (isMainImgHovered) {
        row.children(".box").css("border", border_before + "px solid " + border_color).css("margin", margin_before);
        mainImg.clearQueue();
        mainImg.css("border", border_before + "px solid " + border_color);
        mainImg.animate({
            height: imgheight,
            opacity: 1
        }, animation_speed);
    } else {
        row.children(".box").css("border", border_before + "px solid " + border_color).css("margin", margin_before);
        mainImg.clearQueue();
        mainImg.animate({
            height: "0"
        }, animation_speed, function() {
            mainImg.css("border", "none");
        });
    }
}

function queueUpdate(row) {
    var timer = row.data('timer');
    if (timer) {
        clearTimeout(timer);
    }
    row.data('timer', setTimeout(function() {
        updateRow(row);
    }, 10));
}

$(".row > .box").on('mouseenter focusin', function(e) {
    var self = $(this);
    if (e.type === 'mouseenter') {
        self.data('hovered', true);
    } else if (e.type === 'focusin') {
        self.data('focused', true);
    }
    queueUpdate(self.parent());
}).on('mouseleave focusout', function(e) {
    var self = $(this);
    if (e.type === 'mouseleave') {
        self.data('hovered', false);
    } else if (e.type === 'focusout') {
        self.data('focused', false);
    }
    queueUpdate(self.parent());
});

$(".gallery > .row > .main-img").on('mouseenter', function() {
    var self = $(this);
    self.data('hovered', true);
    queueUpdate(self.parent());
}).on('mouseleave', function() {
    var self = $(this);
    self.data('hovered', false);
    queueUpdate(self.parent());
});

$(".gallery").css("width", (($(".box").outerWidth()+(margin_before*2))*items_pre_row)+"px");
$(".gallery .row, .gallery .row > div:first-child").css("overflow","hidden");
$(".gallery > .row > .box, .gallery > .row > .main-img").css("border-radius",border_radius); 
$(".gallery > .row > .box, .gallery > .row > .main-img").css("-moz-border-radius",border_radius); 
$(".gallery > .row > .box, .gallery > .row > .main-img").css("-webkit-border-radius",border_radius); 
$(".gallery > .row > .main-img").css("background-position","center center"); 
$(".gallery > .row > .main-img").css("background-size","100%"); 

$(".gallery > .row > .box").click(function(e) {
    if ($(e.target).is('a')) return;
    var url = $(this).attr('url');
    if (url) {
        window.location = url;
    }
}).on('keydown', function(e) {
    if (e.key === 'Enter' || e.which === 13) {
        if ($(e.target).is('a')) return;
        var url = $(this).attr('url');
        if (url) {
            window.location = url;
        }
    }
});

});
