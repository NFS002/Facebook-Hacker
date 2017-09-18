chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
  walk(document.body);
  function walk(node)  {

	var child, next;

	switch ( node.nodeType )  
	{
		case 1: 
		case 9:  
		case 11: 
			child = node.firstChild;
			while (child) 
			{
				next = child.nextSibling; 
				walk(child);
				child = next;
			}
			break;

		case 3: 
			handleText(node);
			break;
	}
}

function handleText(textNode) 
{
	var v = textNode.nodeValue;
	v = v.replace(request.wtf, request.wtr);
	textNode.nodeValue = v;
}
}); 