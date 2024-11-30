const aboutMeText = `Bonjour, je m'appelle Nathan Desmee et je suis actuellement en 3eme année de BUT informatique. Je suis fortement intéressé par le domaine de l'intelligence artificielle car c'est le domaine informatique qui a le plus grand potentiel selon moi. En effet, je pense que l'IA peut jouer un rôle majeur dans l'évolution de l'humanité notament dans le domaine de la santé, du confort et de l'écologie. Ainsi, j'aimerais contribuer au développement de cette technologie qui va marquer un tournant dans l'histoire.`;
const aboutFormationText = `                                                                                        Grâce à ma formation, j'ai pu acquérir de nombreuses compétences informatiques et réaliser de nombreux projects. Avec un binôme, j'ai notamanent créé une base de données complète contenant des informations sur les jeux olympiques, j'ai ensuite analysé ces données pour produire des graphiques statistiques. Ce fut mon premier pas vers la gestion et l'analyse de données. J'ai également pu réaliser, avec un groupe de 4 personnes, un jeu vidéo de type "chasse au monstre" dans lequel les joueurs peuvent affronter des IA. Finalement, j'ai pu avoir l'opportunité de travailler en Norvège à la Norwegian University of Science and Technology dans le cadre de mon stage de fin de 2e année. Durant ce stage j'ai pu parfaire mon anglais et en apprendre plus sur les technologies du domaine du visuel.`;
const links = document.querySelectorAll(".link");
const button = document.querySelector("button");
const hamburger = document.querySelector(".hamburger");
let visible = false;

window.addEventListener("load", (event) => {
    const aboutMe = document.querySelector('.aboutMe');
    const aboutFormation = document.querySelector('.aboutFormation');
    let i = 0;
    const interval = setInterval(() => {
        if(i < aboutMeText.length){
            aboutMe.innerHTML = aboutMe.innerHTML.substring(0, aboutMe.innerHTML.length-1) + aboutMeText[i] + '|';
        }else if(i == aboutMeText.length){
            aboutMe.innerHTML = aboutMe.innerHTML.substring(0, aboutMe.innerHTML.length-1);
            aboutFormation.innerHTML = aboutFormationText[0] + '|';
        }else if(i < aboutMeText.length + aboutFormationText.length){
            aboutFormation.innerHTML =  aboutFormation.innerHTML.substring(0, aboutFormation.innerHTML.length-1) + aboutFormationText[i - aboutMeText.length] + '|';
        }else{
            clearInterval(interval);
            aboutFormation.innerHTML = aboutFormationText;
        }
        i++;
    }, 1);
});

button.addEventListener("click", event => {
    event.preventDefault();
    if(visible) hamburger.style.display = "none";
    else hamburger.style.display = "block";
    visible = !visible;
});

links.forEach(link => {
    link.addEventListener("click", event => {
        hamburger.style.display = "none";
        visible = false;
    });
});

fetch(`/data/hmf.json`)
    .then(response => response.json())
    .then(data => {
        const projectDisplayer = document.querySelector('.projectDisplayer');
        projectDisplayer.innerHTML = renderProject(data);
    });