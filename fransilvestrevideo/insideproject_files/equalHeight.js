(function ($) {
    $.fn.equalHeight = function (option) {
        var $this = this;
        var get_height = function () {
            //console.log($this);
            var maxheight = 0;
            $this.css("height", "");
            $this.each(function () {
//                console.log($(this).outerHeight())
                maxheight = $(this).outerHeight() > maxheight ? $(this).outerHeight() : maxheight;
//                console.log(maxheight)
            });
            console.log($this)
            $this.outerHeight(maxheight);
        };
        var init = function () {
            get_height();
            $(window).on("resize", get_height);
        };
        $this.destroy = function () {
            $this.css("height", "");
            $(window).off("resize", get_height);
        };
        init();
        return this;
    };
})(jQuery);