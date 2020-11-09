window.onload = function(){
    search();
}

function search () {
    var btn = document.getElementById("btn");

    btn.onclick =  function() {
        var httpRequest = new XMLHttpRequest();

        var url = "superheroes.php";

        httpRequest.onreadystatechange = getHeroes;
        httpRequest.open('GET', url);
        httpRequest.send();

        function getHeroes(){
            if (httpRequest.readyState === XMLHttpRequest.DONE) {
                if (httpRequest.status === 200){
                    var res = httpRequest.responseXML;
                    alert(res);
                }
                else {
                    alert ('There was an error')
                }
            }
        }

    }
}