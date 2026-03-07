const mainPage = safeFetch("mainpage");

const genAPI: apiUrl = "https://evaporatoronline.org/generate"
const solveApi = "https://evaporatoronline.org/generate"

type apiUrl = `http://${string}.${string}/${string}` | `https://${string}.${string}/${string}`

getBackgroundMaze();

function safeFetch(elementName: string): HTMLElement{

    var element = document.getElementById(elementName);

    if (element === null)
        throw  `Element ${elementName} not loaded`;
    return element;

}



async function getBackgroundMaze(){
    var Length = 40 * 16;
    var Height = 40 * 9;
    var Weight = 80;
    var Algorithm = "GrowingTree"
    var cacheFiller = Date.now();

    const response = await fetch(`${genAPI}?Length=${Length}&Height=${Height}&Weight=${Weight}&Algorithm=${Algorithm}&_=${cacheFiller}`);
    const blob = await response.blob();

    mainPage.style.backgroundImage = `url(${URL.createObjectURL(blob)}`;
}