function GoogleIt(e)
{
    var searchURL = "https://www.google.com/search?q=";

    if (e.nodeType == 1)
    {
        var searchString = e.innerHTML;
    } else
    {
        var searchString = e;
    }

    var searchArray = searchString.split(" ");

    for (i = 0; i < searchArray.length; i++)
    {
        searchURL = searchURL + searchArray[i] + "+";
    }

    searchURL = searchURL.substring(0, (searchURL.length - 1));

    window.open(searchURL);
}
