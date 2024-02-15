//Write a function that when given a URL as a string, parses out just the domain name and returns it as a string.
//https://www.codewars.com/kata/514a024011ea4fb54200004b/train/javascript
//neste teste, a url nao são todas url validas, portanto são apenas strings que começam com, https://, http:// e www, ou comecam direto com o dito domain name. Com essa consideração a solução abaixo é valida


function domainName(url){
    url = url.replace("https://", '');
    url = url.replace("http://", '');
    url = url.replace("www.", '');
    return url.split('.')[0];
};
