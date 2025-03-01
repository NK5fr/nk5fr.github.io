const aboutMeText = `Bonjour, je m'appelle Nathan DESMEE et je suis actuellement en 3eme année de BUT informatique. Je suis fortement intéressé par le domaine de l'intelligence artificielle car, selon moi, c'est le domaine informatique qui a le plus grand potentiel de croissance. En effet, je pense que l'IA peut jouer un rôle majeur dans l'évolution de l'humanité notamment dans le domaine de la santé, du confort et de l'écologie. Ainsi, j'aimerais contribuer au développement de cette technologie qui va marquer un tournant dans l'histoire.`;
const aboutFormationText = `                                                                                        Grâce à ma formation, j'ai pu acquérir de nombreuses compétences informatiques et réaliser de nombreux projets. En binôme, j'ai notamment créé une base de données complète contenant des informations sur les jeux olympiques. J'ai ensuite analysé ces données pour produire des graphiques statistiques. Ce fut mon premier pas vers la gestion et l'analyse de données. J'ai également pu réaliser, de nouveau en binôme, un site web permettant de prendre des rendez-vous ce qui m'a permis d'apprendre de nouvelles compétences dans divers domaines. Finalement, j'ai eu l'opportunité de travailler en Norvège à la Norwegian University of Science and Technology dans le cadre de mon stage de fin de 2e année de BUT. Durant ce stage, j'ai pu parfaire mon anglais et en apprendre plus sur les technologies du domaine du visuel.`;
const aboutKnowHowText = `                                                                                        Je suis capable d'une grande adaptabilité car je n'ai pas de difficulté à m'acclimater à un nouvel environnement et à me conformer à de nouvelles exigences. Je suis aussi très autonome et je peux travailler sur les tâches qui me sont confiées sans avoir besoin d'être constamment surveillé. De plus, je suis responsable et rigoureux. Ainsi, je fais toujours le maximum pour que le travail qui m'a été confié soit fait le mieux possible et dans les délais. Finalement, je suis persévérant car je n'ai pas peur des difficultés et je suis prêt à les surmonter pour atteindre mes objectifs.`;
const links = document.querySelectorAll(".link");
const button = document.querySelector("button");
const hamburger = document.querySelector(".hamburger");
let visible = false;

window.addEventListener("load", (event) => {
    const aboutMe = document.querySelector('.aboutMe');
    const aboutFormation = document.querySelector('.aboutFormation');
    const aboutKnowHow = document.querySelector('.aboutKnowHow');
    let i = 0;
    const interval = setInterval(() => {
        if(i < aboutMeText.length){
            aboutMe.innerHTML = aboutMe.innerHTML.substring(0, aboutMe.innerHTML.length-1) + aboutMeText[i] + '|';
        }else if(i == aboutMeText.length){
            aboutMe.innerHTML = aboutMe.innerHTML.substring(0, aboutMe.innerHTML.length-1);
            aboutFormation.innerHTML = aboutFormationText[0] + '|';
        }else if(i < aboutMeText.length + aboutFormationText.length){
            aboutFormation.innerHTML =  aboutFormation.innerHTML.substring(0, aboutFormation.innerHTML.length-1) + aboutFormationText[i - aboutMeText.length] + '|';
        }else if(i == aboutMeText.length + aboutFormationText.length){
            aboutFormation.innerHTML = aboutFormation.innerHTML.substring(0, aboutFormation.innerHTML.length-1);
            aboutKnowHow.innerHTML = aboutKnowHowText[0] + '|';
        }else if(i < aboutMeText.length + aboutFormationText.length + aboutKnowHowText.length){
            aboutKnowHow.innerHTML = aboutKnowHow.innerHTML.substring(0, aboutKnowHow.innerHTML.length-1) + aboutKnowHowText[i - aboutMeText.length - aboutFormationText.length] + '|';
        }else{
            clearInterval(interval);
            aboutKnowHow.innerHTML = aboutKnowHowText;
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