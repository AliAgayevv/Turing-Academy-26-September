/**
 * Tapşırıq 1: Element Yarat və DOM-a Əlavə Et
Bir JavaScript funksiyası yazın ki, o yeni bir <div> elementi yaratsın və bu elementə mətn əlavə etsin. Funksiya yeni yaradılan elementi səhifənin body hissəsinə əlavə etməlidir.

Tapşırıq 2: Mətn Məzmununu Dəyişdir
Elə bir funksiya yazın ki, müəyyən bir id-yə sahib <p> elementini seçib, onun mətnini "Salam, Dünya!" olaraq dəyişdirsin.

Tapşırıq 3: Bir Elementin Stilini Yenilə
Bir JavaScript funksiyası yazın ki, müəyyən bir class adı olan <div> elementinin arxa plan rəngini mavi rəngə dəyişdirsin.

Tapşırıq 5: Bir Neçə Element Yarat və Əlavə Et
Elə bir funksiya yazın ki, mövcud <ul> elementinə beş yeni <li> elementi yaratsın və əlavə etsin, və hər bir <li> 1-dən 5-ə qədər nömrələnmiş olsun.

 */



    document.body.onload = addElement("div", "Add element", "body");
    changeText("test", "Salam, Dunya!")
    changeBackgroundColor("divForColor", "yellow")
    document.body.onload = addLiElement("ul");
    

    // task 1
function addElement(elementType, elementText, whereInsertBefore)
{
    const element = document.createElement(elementType);
    const elementInner = document.createTextNode(elementText);

    element.appendChild(elementInner);

    const currentDiv = document.getElementById(whereInsertBefore)
    document.body.insertBefore(element, currentDiv);
    
}

    // task 2
function changeText(idOfElement, newTextForElemenet)
{
    let element = document.getElementById(idOfElement);
    element.innerText = newTextForElemenet;

}
    // task 3
function changeBackgroundColor(IdfElement, newColor)
{
    
    document.getElementById(IdfElement).style.backgroundColor = newColor;
    
}

    //task 5
function addLiElement(idOfUlElement)
{

    const innerTextOfLi = [1, 2, 3, 4, 5];
    

    
    for(let i = 0; i < 5; i++)
    {
        const liElement = document.createElement("ul");
        const liElementInnerText = document.createTextNode(innerTextOfLi[i]);
    
        liElement.appendChild(liElementInnerText);
    
        const currentDiv = document.getElementById(idOfUlElement)
        document.body.insertBefore(liElement, currentDiv);
        innerTextOfLi[i] = i + 1;
    }



}

