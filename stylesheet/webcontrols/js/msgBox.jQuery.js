
(function ($) {
    /*
    EFECTS      ICONS
    null        null
    blind       alert
    clip        check
    fade        help
    fold        info
    slide       notice
    */

    $.fn.msgBox = function () { };

    $.fn.msgBox.defaults = {
        height: 200,
        width: 400,
        title: "Message",
        modal: true,
        resizable: true,
        closeOnEscape: true
    };

    $.fn.extend({});


    // ALERT //
    $.alert = $.fn.msgBox.alert = function (msg, title, effect, icon) {
        // Set style
        var style;
        if ($('#euipp_web_portal_webcontrols_messagebox_style').length == 0) {
            style = jQuery("<style id=\"euipp_web_portal_webcontrols_messagebox_style\" type=\"text/css\">\n" +
            "    .euipp_wp_wc_mb_text { position: absolute; left: 45px; top: 11px; }\n" +
            "    .euipp_wp_wc_mb_image { position: absolute; left: 15px; top: 10px; }\n" +
            "</style>\n");
            style.appendTo(document.body);
        }
        else { style = $('#euipp_web_portal_webcontrols_messagebox_style'); }

        // Set div
        var div;
        if ($('#euipp_web_portal_webcontrols_messagebox_alert').length == 0) {
            div = jQuery("<div id=\"euipp_web_portal_webcontrols_messagebox_alert\">\n" +
            "   <div id=\"euipp_web_portal_webcontrols_messagebox_text_alert\" class=\"euipp_wp_wc_mb_text\" style=\"display: inline;\"></div>\n" +
            "   <div id=\"euipp_web_portal_webcontrols_messagebox_image_alert\" class=\"euipp_wp_wc_mb_image\" style=\"display: none;\">\n" +
            "       <span class=\"ui-icon\" style=\"float:left;\"></span>\n" +
            "   </div>\n" +
            "</div>\n");
            div.appendTo(document.body);
        }
        else { div = $('#euipp_web_portal_webcontrols_messagebox_alert'); }

        // Set message
        $("#euipp_web_portal_webcontrols_messagebox_text_alert").html(msg);

        // set icon
        if (icon != undefined && icon.length > 0 && icon.toLowerCase() != 'none') {
            $('#euipp_web_portal_webcontrols_messagebox_image_alert span').attr('class', 'ui-icon ui-icon-' + icon.toLowerCase());
            $("#euipp_web_portal_webcontrols_messagebox_image_alert").attr("style", "display:inline");
        }
        else {
            $('#euipp_web_portal_webcontrols_messagebox_image_alert span').attr('class', 'ui-icon');
            $("#euipp_web_portal_webcontrols_messagebox_image_alert").attr("style", "display:none");
        }

        // Create dialog
        var dialogOpt = {
            title: title,
            show: effect,
            hide: effect,
			height: $.fn.msgBox.defaults.height,
			width: $.fn.msgBox.defaults.width,
            modal: true,
            draggable: false,
            buttons: {
                Ok: function () {
                    $(this).dialog("close");
                }
            },
            close: function (event, ui) {
                $(this).dialog("destroy");
            }
        };
		
		div.hide();
		
        div.dialog(dialogOpt);

        return false;
    };



    // CONFIRM //
    $.confirm = $.fn.msgBox.confirm = function (msg, title, effect, icon, onConfirm, onCancel) {
        // Set style
        var style;
        if ($('#euipp_web_portal_webcontrols_messagebox_style').length == 0) {
            style = jQuery("<style id=\"euipp_web_portal_webcontrols_messagebox_style\" type=\"text/css\">\n" +
            "    .euipp_wp_wc_mb_text { position: absolute; left: 45px; top: 11px; }\n" +
            "    .euipp_wp_wc_mb_image { position: absolute; left: 15px; top: 10px; }\n" +
            "</style>\n");
            style.appendTo(document.body);
        }
        else { style = $('#euipp_web_portal_webcontrols_messagebox_style'); }

        // Set div
        var div;
        if ($('#euipp_web_portal_webcontrols_messagebox_confirm').length == 0) {
            div = jQuery("<div id=\"euipp_web_portal_webcontrols_messagebox_confirm\">\n" +
            "   <div id=\"euipp_web_portal_webcontrols_messagebox_text_confirm\" class=\"euipp_wp_wc_mb_text\" style=\"display: inline;\"></div>\n" +
            "   <div id=\"euipp_web_portal_webcontrols_messagebox_image_confirm\" class=\"euipp_wp_wc_mb_image\" style=\"display: none;\">\n" +
            "       <span class=\"ui-icon\" style=\"float:left;\"></span>\n" +
            "   </div>\n" +
            "</div>\n");
            div.appendTo(document.body);
        }
        else { div = $('#euipp_web_portal_webcontrols_messagebox_confirm'); }

        // Set message
        $("#euipp_web_portal_webcontrols_messagebox_text_confirm").html(msg);

        // Set icon
        if (icon != undefined && icon.length > 0 && icon.toLowerCase() != 'none') {
            $('#euipp_web_portal_webcontrols_messagebox_image_confirm span').attr('class', 'ui-icon ui-icon-' + icon.toLowerCase());
            $("#euipp_web_portal_webcontrols_messagebox_image_confirm").attr("style", "display:inline");
        }
        else {
            $('#euipp_web_portal_webcontrols_messagebox_image_confirm span').attr('class', 'ui-icon');
            $("#euipp_web_portal_webcontrols_messagebox_image_confirm").attr("style", "display:none");
        }

        // Create dialog
        var dialogOpt = {
            title: title,
            show: effect,
            hide: effect,
            modal: true,
            draggable: false,
            buttons: {
                Ok: function () {
                    $(this).dialog("close");
                    window.setTimeout(function () { return onConfirm(); }, 500);
                },
                "Cancelar": function () {
                    $(this).dialog("close");
                    window.setTimeout(function () { return onCancel(); }, 500);
                }
            },
            close: function (event, ui) {
                $(this).dialog("destroy");
            }
        };

		div.hide();
        div.dialog(dialogOpt);

        return false;
    }



    // MESSAGE //
    $.message = $.fn.msgBox.message = function (msg, title, effect, icon) {
        // Set style
        var style;
        if ($('#euipp_web_portal_webcontrols_messagebox_style').length == 0) {
            style = jQuery("<style id=\"euipp_web_portal_webcontrols_messagebox_style\" type=\"text/css\">\n" +
            "    .euipp_wp_wc_mb_text { position: absolute; left: 45px; top: 11px; }\n" +
            "    .euipp_wp_wc_mb_image { position: absolute; left: 15px; top: 10px; }\n" +
            "</style>\n");
            style.appendTo(document.body);
        }
        else { style = $('#euipp_web_portal_webcontrols_messagebox_style'); }

        // Set div
        var div;
        if ($('#euipp_web_portal_webcontrols_messagebox_message').length == 0) {
            div = jQuery("<div id=\"euipp_web_portal_webcontrols_messagebox_message\">\n" +
            "   <div id=\"euipp_web_portal_webcontrols_messagebox_text_message\" class=\"euipp_wp_wc_mb_text\" style=\"display: inline;\"></div>\n" +
            "   <div id=\"euipp_web_portal_webcontrols_messagebox_image_message\" class=\"euipp_wp_wc_mb_image\" style=\"display: none;\">\n" +
            "       <span class=\"ui-icon\" style=\"float:left;\"></span>\n" +
            "   </div>\n" +
            "</div>\n");
            div.appendTo(document.body);
        }
        else { div = $('#euipp_web_portal_webcontrols_messagebox_message'); }

        // Set message
        $("#euipp_web_portal_webcontrols_messagebox_text_message").html(msg);

        // Set icon
        if (icon != undefined && icon.length > 0 && icon.toLowerCase() != 'none') {
            $('#euipp_web_portal_webcontrols_messagebox_image_message span').attr('class', 'ui-icon ui-icon-' + icon.toLowerCase());
            $("#euipp_web_portal_webcontrols_messagebox_image_message").attr("style", "display:inline");
        }
        else {
            $('#euipp_web_portal_webcontrols_messagebox_image_message span').attr('class', 'ui-icon');
            $("#euipp_web_portal_webcontrols_messagebox_image_message").attr("style", "display:none");
        }

        // Create dialog
        var dialogOpt = {
            title: title,
            show: effect,
            hide: effect,
            draggable: false,
            close: function (event, ui) {
                $(this).dialog("destroy");
            }
        };
		
		div.hide();
        div.dialog(dialogOpt);

        return false;
    }



    // TOGGLE //
    $.toggle = $.fn.msgBox.toggle = function (msg, title, effect, icon, delay) {
        // Set style
        var style;
        if ($('#euipp_web_portal_webcontrols_messagebox_style').length == 0) {
            style = jQuery("<style id=\"euipp_web_portal_webcontrols_messagebox_style\" type=\"text/css\">\n" +
            "    .euipp_wp_wc_mb_text { position: absolute; left: 45px; top: 11px; }\n" +
            "    .euipp_wp_wc_mb_image { position: absolute; left: 15px; top: 10px; }\n" +
            "</style>\n");
            style.appendTo(document.body);
        }
        else { style = $('#euipp_web_portal_webcontrols_messagebox_style'); }

        // Set div
        var div;
        if ($('#euipp_web_portal_webcontrols_messagebox_toggle').length == 0) {
            div = jQuery("<div id=\"euipp_web_portal_webcontrols_messagebox_toggle\">\n" +
            "   <div id=\"euipp_web_portal_webcontrols_messagebox_text_toggle\" class=\"euipp_wp_wc_mb_text\" style=\"display: inline;\"></div>\n" +
            "   <div id=\"euipp_web_portal_webcontrols_messagebox_image_toggle\" class=\"euipp_wp_wc_mb_image\" style=\"display: none;\">\n" +
            "       <span class=\"ui-icon\" style=\"float:left;\"></span>\n" +
            "   </div>\n" +
            "</div>\n");
            div.appendTo(document.body);
        }
        else { div = $('#euipp_web_portal_webcontrols_messagebox_toggle'); }

        // Set message
        $("#euipp_web_portal_webcontrols_messagebox_text_toggle").html(msg);

        // Set icon
        if (icon != undefined && icon.length > 0 && icon.toLowerCase() != 'none') {
            $('#euipp_web_portal_webcontrols_messagebox_image_toggle span').attr('class', 'ui-icon ui-icon-' + icon.toLowerCase());
            $("#euipp_web_portal_webcontrols_messagebox_image_toggle").attr("style", "display:inline");
        }
        else {
            $('#euipp_web_portal_webcontrols_messagebox_image_toggle span').attr('class', 'ui-icon');
            $("#euipp_web_portal_webcontrols_messagebox_image_toggle").attr("style", "display:none");
        }

        // Create dialog
        var dialogOpt = {
            title: title,
            show: effect,
            hide: effect,
            draggable: false,
            open: function () {
                $(".ui-dialog-titlebar-close").hide();
            },
            close: function (event, ui) {
                $(this).dialog("destroy");
            }
        };
		
		div.hide();
        div.dialog(dialogOpt);
        
        window.setTimeout(function () { div.dialog("close"); }, Number(delay));

        return false;
    }

})(jQuery);