url = document.location;
a = document.createElement('a');
text = document.createTextNode('Sci-Hub');
a.appendChild(text);
a.setAttribute('href', 'https://sci-hub.cc/' + url);
a.setAttribute('target', '_blank')

span=document.createElement('span');
span.appendChild(a);
div=document.createElement('div');
div.appendChild(span);
div.setAttribute('style', 'position:fixed;left:1px;top:1px;')
body = document.body;
body.appendChild(div);     
