function C1() {
    if ($("#MEGAREGION").val() == "") {
        alert("Please Choose Server Region.")
    } else {
        $(".S1").fadeOut(1000);
        setTimeout(function() {

            $(".S2").fadeIn(1000);

            setTimeout(function() {

                var TYPED = new Typed(".LOADING", {
                    strings: ["Requesting <strong>mega.nz/file/nsUCGT7C#qQkrU2TQTJNlVK0jP1LNKxk8fJ5</strong> <br/>Folder Data ^500.^500.^500.^1000", "Server " + $("#MEGAREGION").val() +" Region loaded^500.^500.^500.^1000", "Receiving Folder Data ^500.^500.^500.^3000", "Decrypting Folder Data <strong>" + "</strong>^500.^500.^500.^1000", "<strong>BOT DETECTED!</strong><br/><strong>To continue using MEGALINKHUB, solve the</strong><br/><strong>reCAPTCHA</strong>..."],
                    typeSpeed: 30,
                    backSpeed: 30,
                    backDelay: 75,
                    showCursor: false,
                    onComplete: function() {
                        $(".lds-ellipsis").fadeOut(1000);
                        $(".HV").fadeIn(1000);
                    }
                })

            }, 1000)

        }, 1000) 
    }
}