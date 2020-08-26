"use strict";

(function() {

    var timetacoList = {

        'initialize' : function() {

            var timetacoElements = document.getElementsByClassName('timetaco-list');

            if(!timetacoElements.length)
                return;

            window.addEventListener("message", function(message) {

                var iframeId = message.data['timetaco-id'];
                var iframeHeight = message.data['height'];

                if(iframeHeight <= 270)
                    iframeHeight = 270;

                document.getElementById('timetacoid-' + iframeId).style.height = iframeHeight + 'px';

            }, false);

            for(var i = 0; i < timetacoElements.length; i++) {

                if(timetacoElements[i].hasAttribute('data-timetacoid'))
                    this.setup(timetacoElements[i]);
            }
        },

        'setup' : function(timetacoElement) {

            var iframe = document.createElement('iframe');

            var timetacoid = timetacoElement.getAttribute('data-timetacoid');
            var src = "https://www.timetaco.com/";

            iframe.id = 'timetacoid-' + timetacoid;
            iframe.src = src + timetacoid + '/embed/?host=' + window.location.href;

            iframe.style.border = 'none';
            iframe.style.height = '300px';
            iframe.style.width = '100%';
            iframe.style.overflow = 'hidden';
            iframe.style.verticalAlign = 'bottom';

            iframe.setAttribute('allowTransparency', true);
            iframe.setAttribute('frameBorder', 0);
            iframe.setAttribute('tabIndex', 0);
            iframe.setAttribute('scrolling', 'no');

            timetacoElement.appendChild(iframe);
        }
    };

    timetacoList.initialize();

})();