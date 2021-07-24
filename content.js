chrome.runtime.onMessage.addListener(
    function(request) {
        var [selector, styles] = request.message.split(" seperator ")
        styles = JSON.parse(styles)
        Array.from(document.querySelectorAll(selector)).map(function(el){
            styles.map(function(style){
                el.style[style.property] = style.value
            })
        })
    }
)