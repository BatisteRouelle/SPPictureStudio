'use strict';

var context = SP.ClientContext.get_current();
var user = context.get_web().get_currentUser();

// This code runs when the DOM is ready and creates a context object which is needed to use the SharePoint object model
$(document).ready(function () {
    var ps = new BR.SPPictureStudio();
    ps.bind();
});


var BR = BR || {};
BR.SPPictureStudio = function () {
    var originalPicture = "";
    var targetPicture = "";
    var keepRatio = false;
    var alterImage = true;
    var targetWidth = 100;
    var targetHeight = 100;
    return {
        bind: function () {
            document.getElementById("txtWidth").val(targetWidth);
            document.getElementById("txtHeight").val(targetHeight);
        }
    }
};

