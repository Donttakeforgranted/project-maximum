//normal vars
let i=0;
let j=0;
let z=0;
let a=1;

//not so normal vars
let psd=document.getElementById('progshowdiv');
let sider1=document.getElementById('sider1');
let sud=document.getElementById('signupdiv');
let htmld=document.getElementById('htmldiv');
let dark=document.getElementById('darkness');
let cssd=document.getElementById('cssdiv');
let sb=document.getElementById('submbutt');
let aud=document.getElementById('audiv');
let main=document.getElementById('main');
let jsd=document.getElementById('jsdiv');
let as=document.getElementById('as');
let ad=document.getElementById('adiv');

//one use buttons
document.getElementById('p').addEventListener("click",OCProgress);
document.getElementById('au').addEventListener("click",OCAboutUs);
document.getElementById('su').addEventListener("click",OCSignUpWindow);
document.getElementById('ab').addEventListener("click",OCIQValueAdder);
document.getElementById('hp').addEventListener("click",OCIQButton);

//multiple use buttons
document.getElementById('htmlspan').addEventListener("click",OCHTMLTF);
document.getElementById('cssspan').addEventListener("click",OCCSSTF);
document.getElementById('jsspan').addEventListener("click",OCJSTF);


let mainobj=[aud,psd,ad];

function OCDisplayer(el)
{
    for (let i = 0; i < mainobj.length; i++) 
        if(mainobj[i]!=el)
            mainobj[i].style.display="none";
    el.style.display= "flex";
}

function OCTF(el,it)
{
    let status=null;
    if(it%2==0)
        status=true;
    else
        status=false;
    if(status)
        el.style.display="flex";
    else
        el.style.display="none";
}

function OCIQValueAdder(el)
{
    as.innerHTML="Göndərilən ağlın miqdarı: " +a;
    a++;
}

function OCAboutUs(el)
{
    OCDisplayer(aud);
}

function OCProgress(el)
{
    OCDisplayer(psd);
}

function OCIQButton(el)
{
    OCDisplayer(ad);
}

function OCSignUpWindow(el)
{
    sud.style.display="flex";
    dark.style.display="flex";
    dark.style.position="fixed";
}

function OCHTMLTF()
{
    OCTF(htmld,i);
    i++;
}   

function OCCSSTF()
{
    OCTF(cssd,j);
    j++;
}

function OCJSTF()
{
    OCTF(jsd,z);
    z++;
}