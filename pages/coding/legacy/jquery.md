---
layout: page
title: jQuery
subtitle:
---

## Disable Ajax cache

```
// So IE won't use a cached xhr result -> adds a _=timestamp param for each request...
jQuery.ajaxSetup({ cache: false });
```

## Deferred

```
// success deferred function
function successF(){
    var d = jQuery.Deferred();
    d.resolve(', hurraa!!');
    return d.promise();
}

jQuery(document).ready(function(){
    successF()
        .done(function(text){
            alert('success ' + text;
        })
        .fail(function(text){
            alert('not success ' + text);
        });
});

// Not success deferred function
function notsuccessF(){
    var d = jQuery.Deferred();
    d.reject(', nyyh :(');
    return d.promise();
}

jQuery(document).ready(function(){
    notsuccessF()
        .done(function(text){
            alert('success ' + text);
        })
        .fail(function(text){
            alert('not success ' + text);
        });
});
```

## Grep

```
var places = [
              {id:0, name:'Place 1', keys: '1'},
              {id:1, name:'Place 2', keys: '2'},
              {id:2, name:'Place 3', keys: '1'}
             ];
var keysOne = jQuery.grep(places, function(place, index) {
    return place.keys === '1';
});
console.dir(keysOne);
// {id:0, name:'Place 1', keys: '1'},{id:2, name:'Place 3', keys: '1'}
```

## Each

```
jQuery.each([ 52, 97 ], function( index, value ) {
  alert( index + ": " + value );
});
```

## Events

### Create own event

```
// without data
jQuery(document).bind('Own.Event', function(event, params){
    if(params && params.text){
        alert(params.text;
    }
    else {
        alert('Own.Event without text');
    }
});

// with data
jQuery(document).bind('Own.Event', {value:1}, function(event, params){
    if(params && params.text){
        alert(params.text + ' ' + event.data.value);
    }
    else {
        alert('Own.Event without text' + ' ' + event.data.value);
    }
});
```

### Tgigger own event

```
jQuery(document).trigger('Own.Event', [{text:'Hello World!'}]);
```