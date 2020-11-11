window.onload= function()
{
    searchhero();
}

function searchhero () 
{
    var httpRequest = new XMLHttpRequest();

    var url = "superheroes.php";

    document.getElementById("btn").onclick =  function() 
    {
               
        httpRequest.onreadystatechange = getHeroes;
        httpRequest.open('GET', url);
        httpRequest.send();
        return false;
    }

        function getHeroes () 
        {
            var result = document.getElementById("result");

            if (httpRequest.readyState === XMLHttpRequest.DONE)
             {
                if (httpRequest.status === 200)
                {
                    var res = httpRequest.responseText;
                    result.innerHTML = res;
                }
                else {
                    alert ('There was an error')
                }

            }
            
           
        }
   
        

    }

