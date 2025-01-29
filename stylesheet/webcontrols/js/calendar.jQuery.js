(function ($) {

    $.fn.calendar = function () { };

    $.fn.extend({});


    // CALENDAR //
    $.calendar = $.fn.calendar = function (parent, options, objid) {
        var div, id, d = new Date();

        if (objid == undefined) {
            id = 'euipp_web_portal_webcontrols_calendar_' + d.getTime();
        }
        else if ($.trim(objid).length == 0) {
            id = 'euipp_web_portal_webcontrols_calendar_' + d.getTime();
        }
        else {
            id = $.trim(objid).toString().replace(' ', '_');
        }

        var div;
        if ($('#' + id).length == 0) {
            div = jQuery("<div id=\"" + id + "\" style=\"display:inline\"></div>");
            div.appendTo(parent);
        }
        else {
            div = $('#euipp_web_portal_webcontrols_calendar' + id);
        }

        $.datepicker.regional['pt'] = {
            closeText: 'Fechar',
            prevText: 'Anterior',
            nextText: 'Pr&oacute;ximo',
            currentText: 'Hoje',
            monthNames: ['Janeiro', 'Fevereiro', 'Mar&ccedil;o', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'],
            monthNamesShort: ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun', 'Jul', 'Ago', 'Set', 'Out', 'Nov', 'Dez'],
            dayNames: ['Domingo', 'Segunda-feira', 'Ter&ccedil;a-feira', 'Quarta-feira', 'Quinta-feira', 'Sexta-feira', 'Sábado'],
            dayNamesShort: ['Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sab'],
            dayNamesMin: ['D', 'S', 'T', 'Q', 'Q', 'S', 'S'],
            weekHeader: 'Sm',
            dateFormat: 'dd/mm/yy',
            firstDay: 0,
            isRTL: false,
            showMonthAfterYear: false,
            yearSuffix: ''
        };

        $.datepicker.setDefaults($.datepicker.regional["pt"]);

        div.datepicker(options);
    }

})(jQuery);