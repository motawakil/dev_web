// fontione pour echange les deux tableau 

function changer_pos() {
    const div = document.querySelector('.princpale-table');

if(div.style.flexDirection === 'row'){
div.style.flexDirection = 'row-reverse' ;

    }
    else{
div.style.flexDirection = 'row' ;

    }

}



//fonction pour afficher et masquer les sous  elements d'un tableau 
function afficherListe(button) {

  var element = button.parentElement;
  var ul = element.querySelector('ul');

  
  const affiche =element.querySelectorAll('#affiche');


  if (ul) {
      if (ul.style.display === 'none' || ul.style.display === ''){
          ul.style.display = 'block';
          affiche.forEach(button => button.style.display = 'none');
          button.innerHTML = "⧁" ;
      }
   
      else {
          ul.style.display = 'none';
          affiche.forEach(button => button.style.display = 'inline');
          button.innerHTML = "⟏" ;
      }        }
    }

// une fonction pour supprimer in element du tableau 
function deletbutt(button) {
const butt = button.parentElement ;
if (butt){
  butt.parentElement.removeChild(butt) ; 
}

 }

// un object pour stocker chaque element du tableau et son text et image 


var information = {
"HTML" : ["HTML" , "HTML, which stands for HyperText Markup Language, is the standard markup language used to create and design documents on the World Wide Web. It provides a structured way to organize and format content, such as text, images, links, and multimedia, on web pages. HTML utilizes a system of tags" , 
"https://th.bing.com/th/id/OIP.HGGPj09X7f4XHoR6DLLmEQHaEH?rs=1&pid=ImgDetMain"],
"CSS" : ["css" , "CSS, or Cascading Style Sheets, is a language used to style and format HTML documents, providing control over the visual presentation of web pages. It allows developers to define the look and layout, enhancing the design and user experience. " ,
"https://www.softfluent.fr/wp-content/uploads/2019/10/css-3.png" ],
"BDD": ["BDD", "Une base de données est un système organisé pour stocker et récupérer des données de manière structurée et efficace. ", "https://www.ionos.fr/digitalguide/fileadmin/DigitalGuide/Teaser/object-storage-t.jpg"],
"php": ["php", "php est language des programation pour dyanamique de web site ", "https://user.oc-static.com/upload/2021/09/30/16330114394851_p1c2-1.png"],
"Developpement web": ["Developpement web","le développement web fait référence au processus d’écriture d’un site ou d’une page web dans un langage technique", "https://www.keplearning.com/wp-content/uploads/2021/03/web-dev.jpg"],
"cote client": ["cote client", " Côté client en développement web fait référence à la partie du code qui s'exécute sur le navigateur de l'utilisateur. Cela inclut généralement HTML, CSS et JavaScript, gérant ainsi l'interface utilisateur et les interactions sur le site.", "https://www.activscreen.com/wp-content/uploads/2019/09/cot%C3%A9-client-2019.png"],
"cote serveur" : ["cote serveur"  , "Côté serveur en développement web correspond à la partie du code qui s'exécute sur le serveur. Elle gère les requêtes des clients, accède à la base de données, et génère les pages web dynamiquement avant de les envoyer au navigateur du client." , "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS4iQs7A3Gjr902xdrSVqKz4ZK-TuWWM2WRmQ&usqp=CAU"], 
"Conception" : ["Conception"  , "La conception, dans un contexte général, se réfère au processus de planification et de création d'un objet, d'un système ou d'une idée, en tenant compte de divers aspects tels que la fonctionnalité, l'esthétique, et la faisabilité."  , "https://www.automation-ges.com/wp-content/uploads/2019/05/conception.png"]

}; 


document.addEventListener('DOMContentLoaded', function () {
  
    var test = document.querySelector('.table1');
    //l'appel des elements du deuxieme tableau 
 var titre = document.getElementById('title');
 var paragraph = document.getElementById('def');
 var image = document.getElementById('img');
//-----------------------------------
// fonction qui prend l'element souhaiter afficher du tableau 1 et l'affiche au tableau 2
 test.addEventListener('click', function (event) {
  
   var target = event.target;
   var langage = target.getAttribute('data-language');

   if (langage) {
     var inf = information[langage];

     if (inf) {
       titre.textContent = inf[0];
       paragraph.textContent = inf[1];
       image.src = inf[2];
       image.alt = langage;
    
  
     } else {
    
       alert(" les Information non trouvée pour " + langage);
     }
   }

 });


  });
  // fonction qui ajoute un element du tableau 1 avant 
  function add_before(clickedButton) {
    // creation du nouveau liste
    var newList = document.createElement('li');

      // creation des elements du la liste qui ressemble au autres 
      var newButton = document.createElement('button');
      newButton.textContent = '⧁';
      var newButton2 = document.createElement('button');
      newButton2.textContent = '⊷';
      var newButton3 = document.createElement('button');
      newButton3.textContent = '⊶';
      var newButton4 = document.createElement('button');
      newButton4.textContent = '⋫';
      var newText = document.createElement('span');
      //--------------------------------------------
      //prompt pour savoir le nom choisi du nouvelle liste
      var name = prompt('Veuillez choisisez un nom ')
      newText.textContent = name;

      // ajouter les butttons et le text choisi au nouveau liste 
      newList.appendChild(newButton);
      newList.appendChild(newText);
      newList.appendChild(newButton2);
      newList.appendChild(newButton4);
      newList.appendChild(newButton3);
      newButton2.onclick = function () {
   //------------------------------------
   //donner les nouveaux elements les memes fonctionalites de autres 
        add_before(this) ; 
      };
      newButton.onclick = function () {
   
        afficherListe(this) ;
      };
      newButton4.onclick = function () {
       
        deletbutt(this) ;
      };
      newButton3.onclick = function () {
       
       add_after(this) ;
      };
      
      // trouver l'element parent du ul 
      var parentList = clickedButton.parentNode.parentNode;

      // inserer les nouveaux elements dans la liste 
      parentList.insertBefore(newList, clickedButton.parentNode);
  }

  // fonction pour ajouter apres , presque la meme que ajouter avant 
  function add_after(clickedButton2) {
    
    var newList = document.createElement('li');

    // ------------------------------------------
    var newButton = document.createElement('button');
    newButton.textContent = '⧁';
    var newButton2 = document.createElement('button');
    newButton2.textContent = '⊷';
    var newButton3 = document.createElement('button');
    newButton3.textContent = '⊶';
    var newButton4 = document.createElement('button');
    newButton4.textContent = '⋫';

    // ---------------------------------
    var newText = document.createElement('span');
    var name = prompt('Veuillez choisisez un nom ')
    newText.textContent = name;


    // --------------------------------
    newList.appendChild(newButton);
    newList.appendChild(newText);
    newList.appendChild(newButton2);
    newList.appendChild(newButton4);
    newList.appendChild(newButton3);

    // -------------------------------------
    newButton2.onclick = function () {
        add_before(this);
    };

    newButton.onclick = function () {
        afficherListe(this);
    };

    newButton4.onclick = function () {
        deletbutt(this);
    };

    newButton3.onclick = function () {
        add_after(this);
    };

    // -----------------------------
    clickedButton2.parentNode.insertAdjacentElement('afterend', newList);
}


// fonction pour compter le nombre total de mots dans le tableau 2 

function numero_mots(info) {
  var totalWords = 0;

  for (var key in info) {
    if (info.hasOwnProperty(key) && Array.isArray(info[key]) && info[key].length >= 2) {
      var secondElement = info[key][1];
      var wordsArray = secondElement.split(/\s+/);
      totalWords += wordsArray.length;
    }
  }

  return totalWords;
}

// Call the function with the provided information object and log the result
var total__ = numero_mots(information);
console.log("Total number of words:", total__);

document.addEventListener('DOMContentLoaded', function() {
  var total = document.querySelector('.total');
  console.log(total.innerHTML);
  total.innerHTML = total__ ;
});

