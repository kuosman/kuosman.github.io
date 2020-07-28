var buttonModule = function(text, id, action){
	var me = this;
	me._text = text;
    me._id = id;
    me._action = action;

    me._templates = {
        button: jQuery('<button class="dim__button"></button>')
    };

    me._button = me._templates.button.clone();

    me.setId = function(id){
        me._id = id;
        me._button.filter('button').attr('id', id);
    };

    me.setText = function(text){
        me._text = text;
        me._button.filter('button').html(text);
    };

    me.setAction = function(action){
        if(typeof action !== 'function'){
            return;
        }

        me._action = action;
        me._button.filter('button').bind('click', function(){
            action(jQuery(this));
        });
    };

    me.getElement = function(){
        return me._button;
    };

    me.setAction(me._action);
    me.setId(me._id);
    me.setText(me._text);

    return me;
};