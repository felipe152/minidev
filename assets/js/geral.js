jQuery.fn.shake = function(interval,distance,times){
   interval = typeof interval == "undefined" ? 100 : interval;
   distance = typeof distance == "undefined" ? 10 : distance;
   times = typeof times == "undefined" ? 999 : times;
   var jTarget = $(this);
   $(this).stop(true);
   jTarget.css('position','relative');
   jTarget.css('opacity',1);
   jTarget.css('top',0);
   jTarget.css('left',0);
   for(var iter=0;iter<(times+1);iter++){
      jTarget.animate({ left: ((iter%2==0 ? distance : distance*-1))}, interval);
   }
   return jTarget.animate({ left: 0},interval);
}
jQuery.fn.menujump = function(interval,distance,times){
   interval = typeof interval == "undefined" ? 100 : interval;
   distance = typeof distance == "undefined" ? 10 : distance;
   times = typeof times == "undefined" ? 999 : times;
   var jTarget = $(this);
   $(this).stop(true);
   var eTop = parseInt(jTarget.css('top').replace('px',''));
   distance = (distance*-1) + eTop;
   for(var iter=0;iter<(times+1);iter++){
      jTarget.animate({ top: (iter%2==0 ? distance : eTop)}, interval/2);
   }
   return jTarget.animate({ top: eTop},interval/2);
}
jQuery.fn.jump = function(interval,distance,times){
   interval = typeof interval == "undefined" ? 100 : interval;
   distance = typeof distance == "undefined" ? 10 : distance;
   times = typeof times == "undefined" ? 999 : times;
   var jTarget = $(this);
   $(this).stop(true);
   jTarget.css('position','relative');
   jTarget.css('opacity',1);
   jTarget.css('top',0);
   jTarget.css('left',0);
   for(var iter=0;iter<(times+1);iter++){
      jTarget.animate({ top: (iter%2==0 ? distance*-1 : 0)}, interval/2);
   }
   return jTarget.animate({ top: 0},interval/2);
}
jQuery.fn.fadeInOut = function(interval,times){
   interval = typeof interval == "undefined" ? 100 : interval;
   times = typeof times == "undefined" ? 999 : times;
   var jTarget = $(this);
   $(this).stop(true);
   jTarget.css('opacity',1);
   jTarget.css('top',0);
   jTarget.css('left',0);
   for(var iter=0;iter<(times+1);iter++){
      jTarget.animate({ opacity: (iter%2==0 ? 0 : 1)}, interval/2);
   }
   return jTarget.animate({ opacity: 1},interval/2);
}