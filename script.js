
var body = document.getElementsByTagName("body")[0];
var main = document.getElementsByTagName("main")[0];
var task = document.getElementById("task");
var tbody = document.getElementsByTagName("tbody")[0];
var i = 1;

function addTask(){
    /**CREATE ELEMENTS */
    var tr = document.createElement("tr"); tr.id = (Math.random * 10);

    var tdCheckBox = document.createElement("td");
    var checkBox = document.createElement("input"); checkBox.type = "checkbox";
    var tdName = document.createElement("td");
    var tdUpdate = document.createElement("td");
    var tdDelete = document.createElement("td");
    
    var tagP = document.createElement("p"); tagP.id = i; i+=1;

    var buttonUpdate = document.createElement("button"); 
        buttonUpdate.classList = "update buttonJS"
        buttonUpdate.innerHTML = "Update";
    var buttonDelete = document.createElement("button"); 
        buttonDelete.classList = "delete buttonJS";
        buttonDelete.innerHTML = "Delete"

    /**CREATING HTML */
    tr.appendChild(tdCheckBox).appendChild(checkBox);
    tr.appendChild(tdName).appendChild(tagP); tagP.innerHTML = task.value; task.value = "";
    tr.appendChild(tdUpdate).appendChild(buttonUpdate);
    tr.appendChild(tdDelete).appendChild(buttonDelete);
    tbody.appendChild(tr);

    /**FUNCTION: DELETE */
    buttonDelete.onclick = function() {
        let confirmation = window.confirm("Certeza que deseja excluir esta tarefa?");
        if(confirmation) { document.getElementById(tr.id).remove(); }
    }

    /**FUNCTION: UPDATE */
    buttonUpdate.onclick = function() {
        /**CREATE ELEMENTS */
        var div = document.createElement("div"); div.id = "999"; div.classList = "popUpWindow";
        var spanDiv = document.createElement("span"); spanDiv.innerHTML = "Nome da Tarefa";
        var inputDiv = document.createElement("input"); inputDiv.type = "text"; inputDiv.value = tagP.innerHTML;
        var buttonDivUpdate = document.createElement("button"); buttonDivUpdate.innerHTML = "Salvar"; buttonDivUpdate.classList = "update buttonJS";
        var buttonDivDelete = document.createElement("button"); buttonDivDelete.innerHTML = "Delete"; buttonDivDelete.classList = "delete buttonJS";

        /**DISPLAY */
        main.style.display = "none";

        /**FUNCTION: BUTTON DELETE */
        buttonDivDelete.onclick = function(){
            div.remove();
            main.style.display = "block";
        }

        /**FUNCTION: BUTTON SAVE */
        buttonDivUpdate.onclick = function(){
            tagP.innerHTML = inputDiv.value;
            div.remove();
            main.style.display = "block";
        }

        /**CREATING HTML */
        div.appendChild(spanDiv);
        div.appendChild(inputDiv);
        div.appendChild(buttonDivUpdate);
        div.appendChild(buttonDivDelete);
        body.appendChild(div);

    }
}