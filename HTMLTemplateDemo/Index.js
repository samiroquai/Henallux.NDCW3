
function addCustomer(){

    //1. Cloner le template
    var template = document.querySelector('#customer');
    var clone = document.importNode(template.content, true);
    //2. L'attacher au DOM
    var mainDiv = document.querySelector("#customersList");
    mainDiv.appendChild(clone);
}