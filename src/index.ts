const mainPage = safeFetch("mainpage");

const baseApi = "https://evaporatoronline.org"
const genAPI: apiUrl = `${baseApi}/generate`
const solveApi: apiUrl = `${baseApi}/solve`

type apiUrl = `http://${string}.${string}/${string}` | `https://${string}.${string}/${string}` | `http://localhost:8080/${string}`;

getBackgroundMaze();

function safeFetch(elementName: string): HTMLElement{

    var element = document.getElementById(elementName);

    if (element === null)
        throw  `Element ${elementName} not loaded`;
    return element;

}



async function getBackgroundMaze(){
    var multiplier = 8
    var Length = multiplier * 16;
    var Height = multiplier * 9;
    var Weight = 80;
    var Algorithm = "GrowingTree"
    var cacheFiller = Date.now();
    var startXCoord = 0
    var endXCoord = Length -1
    var startYCoord = 0
    var endYCoord = Height -1
    var solveAlgorithm = "A*"

    const response = await fetch(`${genAPI}?Length=${Length}&Height=${Height}&Weight=${Weight}&Algorithm=${Algorithm}&_=${cacheFiller}`);
    const blob = await response.blob();

    const form = new FormData();
    form.append("image", blob, "maze.png");
    form.append("Start", `${startXCoord}-${startYCoord}`);
    form.append("End", `${endXCoord}-${endYCoord}`);
    form.append("Algorithm", solveAlgorithm);

    const solveResponse = await fetch(`${solveApi}`, {method : "POST", body : form});
    const solveBlob = await solveResponse.blob();

    mainPage.style.backgroundImage = `url(${URL.createObjectURL(solveBlob)}`;
}