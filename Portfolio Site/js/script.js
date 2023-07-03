var TypingText = new Typed(".typing",
{
    strings: ["","Front-End Developer","Web Designer","UI/UX Designer","Student"],
    typeSpeed: 100,
    BackSpeed: 60,
    loop: true
})

const navBar = document.querySelector('.nav'),
navList = navBar.querySelectorAll('li'),
NavListLength = navList.length,
allSection = document.querySelectorAll('.section'),
SectionLength = allSection.length;
for(let i=0 ; i<NavListLength ; i++)
{
    const x = navList[i].querySelector('a');
    x.addEventListener('click',function()
    {
        removeBackSection();
        for(let j=0 ; j<NavListLength ; j++)
        {
            if(navList[j].querySelector('a').classList.contains('active'))
            {
                addBackSection(j);
                // allSection[j].classList.add('back-section');
            }
            navList[j].querySelector('a').classList.remove('active');
        }
        this.classList.add('active');
        showSection(this);
        // if(window.innerWidth < 1200)
        // {
        //     asideSectionToggleBtn();
        // }
    })
}

function removeBackSection()
{
    for(let i=0 ; i<SectionLength ; i++)
    {
        allSection[i].classList.remove('back-section');
    }
}

function addBackSection(j)
{
    allSection[j].classList.add('back-section');
}

function showSection(element)
{
    for(let i=0 ; i<SectionLength ; i++)
    {
        allSection[i].classList.remove('active');
    }
    const target = element.getAttribute('href').split('#')[1];
    document.querySelector('#' + target).classList.add('active');
}

function updateNav(element)
{
    for(let i=0 ; i<NavListLength ; i++)
    {
        navList[i].querySelector('a').classList.remove('active');
        const target = element.getAttribute('href').split('#')[1];
        if(target === navList[i].querySelector('a').getAttribute('href').split('#')[1])
        {
            navList[i].querySelector('a').classList.add('active');
        }
    }
}

document.querySelector('.hire-me').addEventListener('click',function()
{
    const sectionIndexData = this.getAttribute('data-section-index');
    showSection(this);
    updateNav(this);
    removeBackSection();
    addBackSection(sectionIndexData);
});

const navListBtn = document.querySelector('.nav-toggler'),
aside = document.querySelector('.aside');

navListBtn = addEventListener('click',function()
{
    asideSectionToggleBtn();
});

function asideSectionToggleBtn()
{
    aside.classList.toggle('open');
    navListBtn.classList.toggle('open');
    for(let i=0 ; i<SectionLength ; i++)
    {
        allSection[i].classList.toggle('open');
    }
}