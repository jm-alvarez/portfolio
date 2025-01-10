var content = document.getElementsByTagName('body')[0];
var darkMode = document.getElementById('toggler');
var home = document.getElementById('home');
var iframeToggler = document.getElementById('iframes-toggler');
var iframeContainer = document.getElementById('iframes-container');
var workFrame = document.getElementById('work-frame');
var frameTitle = document.getElementById('iframes-title');
var graphicsToggler = document.getElementById('graphicsToggler');
var systemsToggler = document.getElementById('systemsToggler');
var gamesToggler = document.getElementById('gamesToggler');
var btnCloseIframe = document.getElementById('btn-close-iframe');
var navbar = document.getElementById('navbar');
var bgImg = document.getElementById('bg-img');

    function showNavbar(){
        navbar.classList.add('show-nav');
    };

    document.getElementById('close-nav').addEventListener("click", (e)=>{
        navbar.classList.remove('show-nav');
    });

    darkMode.addEventListener("click", function() {
        darkMode.classList.toggle('active');
        content.classList.toggle('dark-mode');
        // home.classList.toggle('bg-dark');
    });

    btnCloseIframe.addEventListener("click", ()=>{
        iframeContainer.classList.remove('iframes-active');
        workFrame.src="";
        window.location = "index.html#works";
        content.style.position = "unset";
        
    });

    graphicsToggler.addEventListener("click", ()=>{
        iframeContainer.classList.add('iframes-active');
        workFrame.src = "graphics.html";
        frameTitle.innerHTML = "GRAPHICS";
        content.style.position = "fixed";
    });

    systemsToggler.addEventListener("click", ()=>{
        iframeContainer.classList.add('iframes-active');
        workFrame.src = "systems.html";
        frameTitle.innerHTML = "SYSTEMS";
        content.style.position = "fixed";
    });

    gamesToggler.addEventListener("click", ()=>{
        iframeContainer.classList.add('iframes-active');
        workFrame.src = "games.html";
        frameTitle.innerHTML = "GAMES";
        content.style.position = "fixed";
    });