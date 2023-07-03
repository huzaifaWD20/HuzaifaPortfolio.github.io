const styleSwitchToggler = document.querySelector('.style-switcher-toggler');
styleSwitchToggler.addEventListener('click',function()
{
    document.querySelector('.style-switcher').classList.toggle("open");
});

//hide sstyle switcher on scroll
window.addEventListener('scroll',function()
{
    if(document.querySelector('.style-switcher').classList.contains("open"))
    {
        document.querySelector('.style-switcher').classList.remove('open');
    }
});
//switching theme colors
const alternativeStyle = document.querySelectorAll('.alternative-style');
function setActiveStyle(color)
{
    alternativeStyle.forEach((style) => {
        if(color === style.getAttribute('title'))
        {
            style.removeAttribute('disabled');
        }
        else
        {
            style.setAttribute('disabled','true');
        }
    })
}
//switching dark and light theme
const DayNight = document.querySelector('.day-night');
DayNight.addEventListener('click',function()
{
    DayNight.querySelector('i').classList.toggle('fa-sun');
    DayNight.querySelector('i').classList.toggle('fa-moon');
    document.body.classList.toggle('dark');
});
window.addEventListener('load',function()
{
    if(this.document.body.classList.contains('dark'))
    {
        DayNight.querySelector('i').classList.add('fa-sun');
    }
    else
    {
        DayNight.querySelector('i').classList.add('fa-moon');
    }
});