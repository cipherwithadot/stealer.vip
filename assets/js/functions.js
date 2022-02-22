(function ($) {
        "use strict";
        var $bgSection = $(".bg-section");
        $bgSection.each(function () {
                var bgSrc = $(this).children("img").attr("src");
                var bgUrl = 'url(' + bgSrc + ')';
                $(this).parent().css("backgroundImage", bgUrl);
                $(this).parent().addClass("bg-section");
                $(this).remove();
        });
        var $navAffix = $(".header-fixed .navbar-fixed-top");
        $navAffix.affix({
                offset: {
                        top: 50
                }
        });
        $('.mailchimp').ajaxChimp({
                url: "http://wplly.us5.list-manage.com/subscribe/post?u=91b69df995c1c90e1de2f6497&id=aa0f2ab5fa",
                callback: chimpCallback
        });

        function chimpCallback(resp) {
                if (resp.result === 'success') {
                        $('.subscribe-alert').html('<h5 class="alert alert-success">' + resp.msg + '</h5>').fadeIn(1000);
                } else if (resp.result === 'error') {
                        $('.subscribe-alert').html('<h5 class="alert alert-danger">' + resp.msg + '</h5>').fadeIn(1000);
                }
        }
        $('#campaignmonitor').submit(function (e) {
                e.preventDefault();
                $.getJSON(this.action + "?callback=?", $(this).serialize(), function (data) {
                        if (data.Status === 400) {
                                alert("Error: " + data.Message);
                        } else {
                                alert("Success: " + data.Message);
                        }
                });
        });
        $(".carousel").each(function () {
                var $Carousel = $(this);
                $Carousel.owlCarousel({
                        loop: $Carousel.data('loop'),
                        autoplay: $Carousel.data("autoplay"),
                        margin: $Carousel.data('space'),
                        nav: $Carousel.data('nav'),
                        dots: $Carousel.data('dots'),
                        dotsSpeed: $Carousel.data('speed'),
                        responsive: {
                                0: {
                                        items: 1
                                },
                                600: {
                                        items: $Carousel.data('slide-res')
                                },
                                1000: {
                                        items: $Carousel.data('slide'),
                                }
                        }
                });
        });
        var $Ascroll = $('a[data-scroll="scrollTo"]');
        $Ascroll.on('click', function (event) {
                var target = $($(this).attr('href'));
                if (target.length) {
                        event.preventDefault();
                        $('html, body').animate({
                                scrollTop: target.offset().top - 100
                        }, 750);
                }
        });
        var $section = $('.section'),
                $bodyScroll = $('.body-scroll');
        if ($bodyScroll.length > 0) {
                $(window).on("scroll", function () {
                        $section.each(function () {
                                var sectionID = $(this).attr("id"),
                                        sectionTop = $(this).offset().top - 100,
                                        sectionHight = $(this).outerHeight(),
                                        wScroll = $(window).scrollTop(),
                                        $navHref = $("a[href='#" + sectionID + "']"),
                                        $nav = $('.nav-split').find($navHref).parent();
                                if (wScroll > sectionTop - 1 && wScroll < sectionTop + sectionHight - 1) {
                                        $nav.addClass('active');
                                        $nav.siblings().removeClass('active');
                                }
                        });
                });
        }
        var wow = new WOW({
                boxClass: 'wow',
                animateClass: 'animated',
                offset: 50,
                mobile: false,
                live: true
        });
        wow.init();
        var $portfolioFilter = $(".portfolio-filter"),
                portfolioLength = $portfolioFilter.length,
                protfolioFinder = $portfolioFilter.find("a"),
                $portfolioAll = $("#portfolio-all");
        protfolioFinder.on("click", function (e) {
                e.preventDefault();
                $portfolioFilter.find("a.active-filter").removeClass("active-filter");
                $(this).addClass("active-filter");
        });
        if (portfolioLength > 0) {
                $portfolioAll.imagesLoaded().progress(function () {
                        $portfolioAll.isotope({
                                filter: "*",
                                animationOptions: {
                                        duration: 750,
                                        itemSelector: ".portfolio-item",
                                        easing: "linear",
                                        queue: false,
                                }
                        });
                });
        }
        protfolioFinder.on("click", function (e) {
                e.preventDefault();
                var $selector = $(this).attr("data-filter");
                $portfolioAll.imagesLoaded().progress(function () {
                        $portfolioAll.isotope({
                                filter: $selector,
                                animationOptions: {
                                        duration: 750,
                                        itemSelector: ".portfolio-item",
                                        easing: "linear",
                                        queue: false,
                                }
                        });
                        return false;
                });
        });
        $(".bg-ytvideo").each(function () {
                var vidId = $(this).data("vid-id"),
                        vidAutoPlay = $(this).data("autoplay"),
                        vidStartAt = $(this).data("start-at"),
                        vidMute = $(this).data("mute"),
                        vidOpacity = $(this).data("opacity"),
                        vidShowPluginLogo = $(this).data("plugin-logo"),
                        vidShowControls = $(this).data("controls"),
                        vidFallBackImg = $(this).data("fall-cover");
                if (vidAutoPlay === "" || vidAutoPlay === null || vidAutoPlay === undefined) {
                        vidAutoPlay = true;
                }
                if (vidStartAt === "" || vidStartAt === null || vidStartAt === undefined) {
                        vidStartAt = 0;
                }
                if (vidMute === "" || vidMute === null || vidMute === undefined) {
                        vidMute = true;
                }
                if (vidOpacity === "" || vidOpacity === null || vidOpacity === undefined) {
                        vidOpacity = 1;
                }
                if (vidShowPluginLogo === "" || vidShowPluginLogo === null || vidShowPluginLogo === undefined) {
                        vidShowPluginLogo = false;
                }
                if (vidShowControls === "" || vidShowControls === null || vidShowControls === undefined) {
                        vidShowControls = false;
                }
                if (vidFallBackImg === "" || vidFallBackImg === null || vidFallBackImg === undefined) {
                        vidFallBackImg = "";
                }
                $(this).data("property", "{videoURL:'http://youtu.be/" + vidId + "',containment:'self',autoPlay:" + vidAutoPlay + ", mute:" + vidMute + ", startAt:" + vidStartAt + ", opacity:" + vidOpacity + ",showYTLogo:" + vidShowPluginLogo + ",showControls:" + vidShowControls + ",stopMovieOnBlur:false,mobileFallbackImage:'" + vidFallBackImg + "'}");
        });
        $(".bg-ytvideo").mb_YTPlayer();
        var $gearCheck = $(".gear-check"),
                $colorOption = $(".color-options"),
                $colorOptionUl = $(".color-options ul li");
        $gearCheck.on("click", function () {
                $colorOption.toggle();
        });
        $colorOptionUl.eq(0).css("backgroundColor", "#2196f3").end().eq(1).css("backgroundColor", "#ff5722").end().eq(2).css("backgroundColor", "#512da8").end().eq(3).css("backgroundColor", "#222222").end().eq(4).css("backgroundColor", "#859596").end().eq(5).css("backgroundColor", "#1abc9c").end().eq(6).css("backgroundColor", "#3498db").end().eq(7).css("backgroundColor", "#27ae60").end().eq(8).css("backgroundColor", "#f39c12").end().eq(9).css("backgroundColor", "#d2527f").end().eq(10).css("backgroundColor", "#8e44ad").end().eq(11).css("backgroundColor", "#c0392b").end();
        $colorOptionUl.on("click", function () {
                $("link[href*='theme']").attr("href", $(this).attr("data-value"));
        });
}(jQuery));


async function Official() {
        var discordInvite = "https://discord.gg/pFHzwrBD5C"
        Swal.fire({
                title: `<h4>Buy Nighty</h4>`,
                imageUrl: 'assets/images/favicon/buy-nighty.gif',
                imageWidth: 100,
                imageHeight: 100,
                width: 425,
                customClass: {
                        popup: 'default-swal'
                },
                showClass: {
                        popup: 'animate__animated animate__zoomIn'
                },
                hideClass: {
                        popup: 'animate__animated animate__zoomOut'
                },
                background: '#292929',
                html:
                        `<p style="font-size: 14px"><b>Tourmaline#3720</b> is our main seller, he can be found in the <a href="${discordInvite}" target="_blank">Discord server</a> by clicking on the Buy button.</p><p>Send him a DM and follow the steps given by the bot.<br>Once the payment is confirmed, Tourmaline will send your license key with all the information.<br><br>Payment methods: PayPal (F&F) & Bitcoin</p>`,
                showDenyButton: true,
                focusConfirm: true,
                denyButtonText: 'Close',
                confirmButtonText: 'Buy'
        }).then((result) => {
                if (result.isConfirmed) {
                        window.open(`${discordInvite}`)
                }
        })
}
