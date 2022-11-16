window.addEventListener("load", showTabs)

// Scroll

const nav1 = document.querySelectorAll("nav")[0]
const links1 = nav1.querySelectorAll(".link");

const nav2 = document.querySelectorAll("nav")[1]
const links2 = nav2.querySelectorAll(".link");

const sections = document.querySelectorAll("section")
window.addEventListener("scroll", function(){
    let current = "" - 250
    for (let section of sections){
        const sectionTop = section.offsetTop
        if (window.pageYOffset >= sectionTop - 250){
            current = section.getAttribute("id")
        }
    }

    for (var x of links1){
        x.classList.remove("active")
        if(x.getAttribute("href") === "#" + current){
            x.classList.add("active")
        }
    }

    for (var x of links2){
        x.classList.remove("active")
        if(x.getAttribute("href") === "#" + current){
            x.classList.add("active")
        }
    }

})

// TABs
const tabSelection = document.querySelector(".tabs")
const cabageSelection = document.querySelector(".cabage")
const saladSelection = document.querySelector(".salad")
const stepsSelection = document.querySelector(".steps")
const laptopSelection = document.querySelector(".laptop")
const doitSelection = document.querySelector(".doit")
const alvinSelection = document.querySelector(".alvin")
const citrinaSelection = document.querySelector(".citrina")
const flowerSelection = document.querySelector(".flower")
const rankinukasSelection = document.querySelector(".rankinukas")
const tabs = document.getElementsByClassName("tab")
const buttons = document.getElementsByTagName("button")

function showTab(event, id){
    for(var x of tabs){
        x.classList.remove("block")
    }
    document.getElementById(id).classList.add("block")

    showTabs()

    for(var x of buttons){
        x.classList.remove("isijungiau")
    }
    event.currentTarget.classList.add("isijungiau")
}

function showTabs(){
    tabSelection.classList.remove("tabAnimation")
    setTimeout(function(){
        tabSelection.classList.add("tabAnimation")
    }, 200)

    cabageSelection.classList.remove("imgAnimation")
    setTimeout(function(){
        cabageSelection.classList.add("imgAnimation")
    }, 1200)
    saladSelection.classList.remove("imgAnimation")
    setTimeout(function(){
        saladSelection.classList.add("imgAnimation")
    }, 2200)
    stepsSelection.classList.remove("imgAnimation")
    setTimeout(function(){
        stepsSelection.classList.add("imgAnimation")
    }, 3200)

    laptopSelection.classList.remove("imgAnimation")
    setTimeout(function(){
        laptopSelection.classList.add("imgAnimation")
    }, 1200)
    doitSelection.classList.remove("imgAnimation")
    setTimeout(function(){
        doitSelection.classList.add("imgAnimation")
    }, 2200)
    alvinSelection.classList.remove("imgAnimation")
    setTimeout(function(){
        alvinSelection.classList.add("imgAnimation")
    }, 3200)

    citrinaSelection.classList.remove("imgAnimation")
    setTimeout(function(){
        citrinaSelection.classList.add("imgAnimation")
    }, 1200)
    flowerSelection.classList.remove("imgAnimation")
    setTimeout(function(){
        flowerSelection.classList.add("imgAnimation")
    }, 2200)
    rankinukasSelection.classList.remove("imgAnimation")
    setTimeout(function(){
        rankinukasSelection.classList.add("imgAnimation")
    }, 3200)
}

// Nav 

const burger = document.getElementById("burger")
const sideNav = document.querySelector(".side-nav")

burger.addEventListener("click", function(){
    this.classList.toggle("rotate")
    sideNav.classList.toggle("translate")
    sideNavOpened = true
})

window.addEventListener("resize", function(){
    if(this.window.innerWidth > 768){
        burger.classList.remove("rotate")
        sideNav.classList.remove("translate")
    }
})

let sideNavOpened = false
for(let link of links1){
    link.addEventListener("click", function(){
        burger.classList.remove("rotate")
        sideNav.classList.remove("translate")
        sideNavOpened = false
    })
}