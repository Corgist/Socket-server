var log = console.log.bind(console, new Date().toLocaleString())

var e = function (selector) {
    return document.querySelector(selector)
}


var bindEvents = function () {
    var b = e('#id-username-verify')
    b.addEventListener('click', function () {
        log('click')
        var input = e('#id-username-login')
        log('@@@@@', input)
        log(input.value)
        var text = '_0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'
        len = input.value.length
        start = input.value[0]
        end = input.value[input.value.length-1]
        if ((len >= 2 && len <= 10) && (verify(start, text.slice(11,))) && (verify(end, text.slice(1,))) && (verify(input.value, text))){
            log('检查合格')
            var message=document.getElementById("id-login-message")
            message.innerText="检查合格"
        } else {
            log('用户名错误')
            var message=document.getElementById("id-login-message")
            message.innerText="用户名错误"
        }

    })
}


var verify = function (value, text) {
    for (var i = 0; i < value.length; i++){
        for (var j = 0; j < text.length; j++){
            if (value[i] == text[j]){
                break
            }
        }
        if (j == text.length){
            return false
        }
    }
    if (i == value.length){
        return true
    }
}

var main = function () {
    bindEvents()
    // verify(value, text)
}

main()