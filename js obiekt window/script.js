window.addEventListener('load', function() 
{
    let wiek = prompt("Podaj swój wiek:");

    wiek = Number(wiek);

    if (wiek < 18) 
    {
        alert("Jesteś niepełnoletni. Zostaniesz przekierowany na Google.");
        window.location.href = "https://www.google.pl";
    }
    else 
    {
        console.log("Witaj! Masz co najmniej 18 lat.");
    }

    setInterval(() => 
    {
        console.log("Aktualna wysokość okna: " + window.innerHeight + "px");
    }, 10000);

});

function otworzOknoPomocy() 
{
    window.open
    (
        "about:blank",
        "OknoPomocy",
        "width=400,height=400,resizable=yes"
    );
}
