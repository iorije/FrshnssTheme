$(function () {
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
        SetMarginTop();
    });

    $(window).resize(function () {
        //SetDivHeight
        $('.dynamic-div').each(function () {
            SetDivHeight($(this));
        });
        SetMarginTop();
    });
});