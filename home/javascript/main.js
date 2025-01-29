// JScript File

//==============================================================================
function getElementById(id)
{
 if (document.getElementById) return document.getElementById(id);
 if (document.all) return document.all[id];
}

//==============================================================================
function OnError(message, context) 
{
	alert('An unhandled exception has occurred:\n' + message);
}

//==============================================================================
function nop(message, context)
{

}

//==============================================================================
function TreeGetState()
{
	var obj;
	obj=getElementById('TRS');
	return obj.value;
}

//==============================================================================
function TreeGetNodeState(node_id)
{
	var obj;
	obj=getElementById('TRS');
	return TreeGetState().substring(node_id, node_id+1);
}

//==============================================================================
function TreeSetNodeState(node_id, state)
{
	var obj;
	obj=getElementById('TRS');
	
	var state_prev;
	var state_next;
	state_prev=obj.value.substring(0, node_id);
	state_next=obj.value.substring(node_id+1);
	obj.value = state_prev + state + state_next;
}

//==============================================================================
function TreeToogle(node_list, index, lower_index, upper_index)
{
	var node_id;
	var obj;
	
	if (TreeGetNodeState(index)=='1')
	{
		TreeSetNodeState(index, '0');
		for(node_id = lower_index; node_id <= upper_index; node_id++)
		{
			obj=getElementById('TR' + node_id);
			obj.style.display='none';
			TreeSetNodeState(node_id, '0');
		}
	}
	else
	{
		for(node_id = 0; node_id < node_list.length; node_id++)
		{
			obj=getElementById('TR' + node_list[node_id]);
			obj.style.display='';
			TreeSetNodeState(node_list[node_id], '0');
		}
		TreeSetNodeState(index, '1');
	}
}
//validar Email
function validateEmail(email) {
	var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
	return re.test(email);
}

//Validar NIF
function validaContribuinte(contribuinte) {

	var temErro = 0;

	if (
		contribuinte.substr(0, 1) != '1' && // pessoa singular
		contribuinte.substr(0, 1) != '2' && // pessoa singular
		contribuinte.substr(0, 1) != '3' && // pessoa singular
		contribuinte.substr(0, 2) != '45' && // pessoa singular não residente
		contribuinte.substr(0, 1) != '5' && // pessoa colectiva
		contribuinte.substr(0, 1) != '6' && // administração pública
		contribuinte.substr(0, 2) != '70' && // herança indivisa
		contribuinte.substr(0, 2) != '71' && // pessoa colectiva não residente
		contribuinte.substr(0, 2) != '72' && // fundos de investimento
		contribuinte.substr(0, 2) != '77' && // atribuição oficiosa
		contribuinte.substr(0, 2) != '79' && // regime excepcional
		contribuinte.substr(0, 1) != '8' && // empresário em nome individual (extinto)
		contribuinte.substr(0, 2) != '90' && // condominios e sociedades irregulares
		contribuinte.substr(0, 2) != '91' && // condominios e sociedades irregulares
		contribuinte.substr(0, 2) != '98' && // não residentes
		contribuinte.substr(0, 2) != '99' // sociedades civis

	) {
		return false;
	}
	var check1 = contribuinte.substr(0, 1) * 9;
	var check2 = contribuinte.substr(1, 1) * 8;
	var check3 = contribuinte.substr(2, 1) * 7;
	var check4 = contribuinte.substr(3, 1) * 6;
	var check5 = contribuinte.substr(4, 1) * 5;
	var check6 = contribuinte.substr(5, 1) * 4;
	var check7 = contribuinte.substr(6, 1) * 3;
	var check8 = contribuinte.substr(7, 1) * 2;

	var total = check1 + check2 + check3 + check4 + check5 + check6 + check7 + check8;
	var divisao = total / 11;
	var modulo11 = total - parseInt(divisao) * 11;
	if (modulo11 == 1 || modulo11 == 0) { comparador = 0; } // excepção
	else { comparador = 11 - modulo11; }


	var ultimoDigito = contribuinte.substr(8, 1) * 1;
	if (ultimoDigito != comparador) {
		return false;
	}

	if (contribuinte.length != 9)
		return false;

	return true;

}

$(window).load(function() {
	//corrigir problema nas tabelas quando se muda de tab
    $(".ui-tabs-anchor").click(function () {
        try {
            $($.fn.dataTable.tables(true)).DataTable()
                .columns.adjust();
        }
		catch {}
	})
	  $.datepicker.regional['pt-PT'] = {
		closeText: 'Fechar',
		prevText: '&#x3c;Anterior',
		nextText: 'Pr&oacute;ximo&#x3e;',
		currentText: 'Hoje',
		monthNames: ['Janeiro', 'Fevereiro', 'Mar&ccedil;o', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'],
		monthNamesShort: ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun', 'Jul', 'Ago', 'Set', 'Out', 'Nov', 'Dez'],
		dayNames: ['Domingo', 'Segunda-feira', 'Ter&ccedil;a-feira', 'Quarta-feira', 'Quinta-feira', 'Sexta-feira', 'Sabado'],
		dayNamesShort: ['Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sab'],
		dayNamesMin: ['D', 'S', 'T', 'Q', 'Q', 'S', 'S'],
		dateFormat: 'yy-mm-dd',
		firstDay: 0,
		isRTL: false
	  };
	  $.datepicker.setDefaults($.datepicker.regional['pt-PT']);

});


//==============================================================================
