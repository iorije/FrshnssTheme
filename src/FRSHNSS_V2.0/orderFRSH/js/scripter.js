﻿$(function () {
    //sets div containing img to height of img
    function SetDivHeight(div) {
        var imgHeight = div.find('img').height();
        div.css('height', imgHeight - 1);
    };

    //set margin-top of training
    function SetMarginTop() {
        var width = $('.training').width();
        var newValue = 99 + ((width - 53) * (-54 / 114));
        $('.training p').css('margin-top', newValue);
    };

    $(document).ready(function () {
        //SetDivHeight
        $('.dynamic-div').each(function () {
            SetDivHeight($(this));
        });

        //Firefox specific code
        var FF = !(window.mozInnerScreenX == null);

        if (FF) {
            $('.training p').css('font-size', '39px');
            $('a.button.fb-button').css('width', '155px');
            if ($(this).width() <= 768) {
                $('.trainingInfo p').css('font-size', '22.8px');
            }
        };

        //IE specific code
        var IE = /*@cc_on!@*/false;

        if (IE) {
            if ($(this).width() <= 768) {
                $('.trainingInfo p').css('font-size', '22.8px');
            }
            $('a.button.fb-button').css('width', '156px');
        }
    });

    $(window).resize(function () {
        //SetDivHeight
        $('.dynamic-div').each(function () {
            SetDivHeight($(this));
        });

        //Firefox specific code
        var FF = !(window.mozInnerScreenX == null);

        if (FF) {
            if ($(this).width() <= 768) {
                $('.trainingInfo p').css('font-size', '22.8px');
            } else {
                $('.trainingInfo p').css('font-size', '30.5px');
            }
        };

        //IE specific code
        var IE = /*@cc_on!@*/false;

        if (IE) {
            if ($(this).width() <= 768) {
                $('.trainingInfo p').css('font-size', '22.8px');
            } else {
                $('.trainingInfo p').css('font-size', '30.5px');
            }
        };
    });
});