alert("hola");

var listas = [];

function Lista(id,title){
    this.id = id
    this.title = title;
    this.pendientes=[];
    this.agregarAAtributoPendiente=function(pendiente){
        this.pendientes.push(pendiente);
    }
}

function Pendient(id,content){
    this.id = id;
    this.content =content;
}

function createList(){
    var title = document.getElementById("listTitle");
    var id = Date.now();
    var lista = new Lista(id,title.value);
    listas.push(lista);
    renderHTML(lista);
}

function renderHTML(lista){
    var sectionContainer=document.createElement("section");
    var containerList=document.getElementById("containerList");

    var inputPendient=document.createElement("input");
    var buttonPendient=document.createElement("input");

    inputPendient.type="text";
    inputPendient.id= Date.now();

    buttonPendient.type="submit";
    buttonPendient.value="Enviar Pendiente";
    buttonPendient.onclick = agregarPendiente;
    buttonPendient.setAttribute("data-lista-id",lista.id);


    sectionContainer.id=lista.id
    var h3Title= document.createElement("h3");
    h3Title.innerText=lista.title;
    sectionContainer.appendChild(h3Title);

    containerList.appendChild(sectionContainer);
    containerList.appendChild(inputPendient);
    containerList.appendChild(buttonPendient);

}
function agregarPendiente(){
    var idDeListaAModificar = this.getAttribute("data-lista-id");
    var objetoAAgregarElPendiente= listas.filter(function(lista){
        return lista.id ==idDeListaAModificar;
    });
    var textoDePendienteAAgregar = document.getElementById("text-"+idDeListaAModificar.toString());
    var pendient = new Pendient(Date.now(),textoDePendienteAAgregar);
    objetoAAgregarElPendiente[0].agregarAAtributoPendiente(pendient);
    renderHTMLPendiente(idDeListaAModificar,pendient)
}

function renderHTMLPendiente(idDeListaAModificar,pendient){
    var liContainer=document.createElement("li");
    liContainer.innerHTML=pendient.content;
    var listaAModificar =document.createElement(idDeListaAModificar);
    liContainer.appendChild(idDeListaAModificar);
}
