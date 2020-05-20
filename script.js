window.addEventListener("load", ()=>{

    let cancelKeypress = false;
    let input = false
    let form = document.getElementById("frm");
    let binaryInput = document.getElementById("binaryInput");
    let button = document.getElementById("btnConvert");
    let resInp = document.getElementById("res");

    binaryInput.focus()

    form.addEventListener("submit", (ev)=>{
        ev.preventDefault();
    });

    button.addEventListener("click", ()=>{

        let binary = binaryInput.value;

        if (binary != "") {

            binary.split("").map((number)=>{
                if (number == 0  && number == 1) {
                    resInp.value = toDecimal(binary);
                } else {
                    return alert("Insert just binary numbers!");
                }
            });
        } else {
            alert("Insert binary numbers!");
        }
    });

    function toDecimal(binary) {
        return parseInt(binary, 2);
    }

    document.onkeydown = (ev) => {

        ev = ev || window.event;
      
        // Key Codes
        // 1 & 0 : 48 & 49
        // Enter, backspace, Ctrl, a, shift: 13, 8, 17, a

        cancelKeypress = /^(48|49|13|8)$/.test(ev.keyCode);
    
        if (!cancelKeypress) {
            error();
        }
    }

    function error() {
        binaryInput.style.borderBottomColor = "red";

        setTimeout(()=>{binaryInput.style.borderBottomColor = "#00ff00";}, 1000);
    }
});