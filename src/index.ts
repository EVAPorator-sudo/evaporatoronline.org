const mainPage = safeFetch("mainpage");

const baseApi = "https://evaporatoronline.org"
const genApi: apiUrl = `${baseApi}/generate`
const solveApi: apiUrl = `${baseApi}/solve`
const backgroundApi: apiUrl = `${baseApi}/background`

type apiUrl = `http://${string}.${string}/${string}` | `https://${string}.${string}/${string}` | `http://localhost:8080/${string}`;

getBackgroundMaze();

function safeFetch(elementName: string): HTMLElement{

    var element = document.getElementById(elementName);

    if (element === null)
        throw  `Element ${elementName} not loaded`;
    return element;

}



async function getBackgroundMaze(){

    var screenLength = screen.width + 5;
    var screenHeight = screen.height + 5;

    const response = await fetch(`${backgroundApi}?screenWidth=${screenLength}&screenHeight=${screenHeight}`);
    const blob = await response.blob();

    mainPage.style.backgroundImage = `url(${URL.createObjectURL(blob)})`;
}