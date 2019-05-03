chrome.bookmarks.getSubTree("7", function(itemTree) {
  itemTree.forEach(function(item) {
    processNode(item);
  });
});

console.log("hello?");

function processNode(node) {
  // recursively process child nodes
  if (node.children) {
    node.children.forEach(function(child) {
      processNode(child);
    });
  }

  // print leaf nodes URLs to console
  if (node.url) {
    var ul = document.getElementById("bookmarks");
    var li = document.createElement("li");
    var a = document.createElement("a");
    a.appendChild(document.createTextNode(node.title));
    a.href = node.url;
    li.appendChild(a);
    ul.appendChild(li);
    console.log(node.url);
  }
}
