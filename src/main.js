const aboutMeText = `Bonjour, je m'appelle Nathan DESMEE. Je suis étudiant en première année d'ingénieur à Polytech Lille en spécialité informatique, statistiques et intelligence artificielle. Je suis également titulaire d'un diplôme de BUT informatique en développement et réalisation d'applications, obtenu à l'IUT de Lille. Je suis passionné par les domaines de l'IA et du Big Data. En effet, je pense que l'IA va jouer un rôle majeur dans l'évolution de l'humanité notamment dans le domaine de la santé, du confort et de l'écologie. Ainsi, j'aimerais contribuer au développement de cette technologie qui va marquer un tournant dans l'histoire.`;
const aboutFormationText = `                                                                                        Dans le cadre de mes études, j'ai pu acquérir de nombreuses compétences en informatique et statistiques et réaliser de nombreux projets. J'ai eu, entre autres, l'opportunité de travailler en Norvège à la Norwegian University of Science and Technology dans le cadre de mon stage de fin de 2e année de BUT. Durant ce stage, j'ai pu parfaire mon anglais et en apprendre plus sur les technologies du domaine du visuel. J'ai réalisé également un stage de 14 semaines dans l'entreprise Michelin de Clermont-Ferrand où j'ai pu perfectionner mes compétences en utilisation et analyse de données. Parmi les projets scolaires auxquels j'ai pu participer, j'ai également créé une base de données complète contenant des informations et des statistiques sur les jeux olympiques ainsi qu'un site web permettant de prendre des rendez-vous médicaux.`;
const aboutKnowHowText = `                                                                                        Je suis capable d'une grande adaptabilité car je n'ai pas de difficulté à m'acclimater à un nouvel environnement et à me conformer à de nouvelles exigences. Je suis aussi très autonome et je peux donc travailler efficacement sur les tâches qui me sont confiées. De plus, je suis responsable et rigoureux. Ainsi, je fais toujours le maximum pour que le travail qui m'a été confié soit fait le mieux possible et dans les délais. Finalement, je suis persévérant car je ne crains pas les difficultés et je suis prêt à les surmonter pour atteindre mes objectifs.`;
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