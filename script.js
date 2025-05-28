window.onload = function () {
  document.title="Fake Deledao Generater"
  var input = new URLSearchParams(window.location.search);
 document.getElementById("display").src =
      "https://static.deledao.com/default/blockCom.html?site=" +
      input.get("site") +
      "&category=" +
      input.get("type") +
      "&cname=" +
      input.get("title");
 
};
document.getElementById("enter").addEventListener("click", function () {
  if (
    document.getElementById("url").value != "" &&
    document.getElementById("type").value != "" &&
    document.getElementById("title").value != ""
  ) {
    window.location.search =
      "?site=" +
      document.getElementById("url").value +
      "&type=" +
      document.getElementById("type").value +
      "&title=" +
      document.getElementById("title").value;
  } else {
    alert("You needed to fill in all the things");
  }
});
document.getElementById("open").addEventListener("click", function () {
  window.open(document.getElementById("display").src);
});
