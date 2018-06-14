var legenda = {
    _templates: {
        legenda: jQuery('<div class="legenda color1 shadow">'+
            '<div class="header">Selitteet</div>'+
            '<table>'+
            '<tbody>'+
            '</tbody></table></div>'),
        legendaRivi: jQuery('<tr><td><div class="label"></div></td><td><div class="js text"></div></td></tr>'),
        icon: jQuery('<div><div class="awesome-marker label_icon"><i class="fa icon-white"></i></div></div>')
    },
    _legenda:null,
    init: function(){
        var me = this;
        var legenda = me._templates.legenda.clone();
        var map = jQuery('#map');
        if(l.grayscale === true){
            legenda.addClass('grayscale');
        }
        me._legenda = legenda;
        map.append(legenda);
    },
    lisaaSelite: function(symbol, text) {
        var me = this;
        var rivi = me._templates.legendaRivi.clone();
        var icon = me._templates.icon.clone();
        icon.find('.label_icon').attr('title', symbol.title);
        icon.find('.label_icon').addClass('awesome-marker-icon-' + symbol.color);
        icon.find('i').addClass(symbol.icon);
        rivi.find('.label').html(icon);
        rivi.find('.text').html(text);
        me._legenda.find('tbody').append(rivi);
    }
};

jQuery(document).ready(function(){
    legenda.init();
});