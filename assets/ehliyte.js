let yas = Number(prompt('Yasiniz: '));
let okul = prompt('En son mezun oldugunuz okul: ');


if (
    yas > 18 && okul == 'Universite'
)
{
    alert('Ehliyet alabilirsiniz.');
}


else if(
    yas > 18 &&  okul == 'Lise'
)
{
    alert('Ehliyet alabilirsiniz.');
}

else if(
    yas >= 18 &&  okul == 'Ortaokul'
)
{
    alert('Ehliyet alabilirsiniz.');
}


else if (
    yas < 18 ||  okul == 'İlkokul' 
)
{
    alert('Ehliyet alamazsiniz');
}
