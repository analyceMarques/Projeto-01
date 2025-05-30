function somar(){
  
    var ipt_X;
    ipt_X = document.getElementById("iptX");
    var x = parseFloat(ipt_X.value);

    var y = parseFloat(document.getElementById("iptY").value);

    var spnRes = document.getElementById("spnRes");

    var res = x + y;

    // alert(res);

    spnRes.innerHTML = "O resultado é: "+res;
    
}