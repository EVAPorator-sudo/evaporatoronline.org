"use strict";
const mainPage = safeFetch("mainpage");
const baseApi = "https://evaporatoronline.org";
const genApi = `${baseApi}/generate`;
const solveApi = `${baseApi}/solve`;
const backgroundApi = `${baseApi}/background`;
getBackgroundMaze();
function safeFetch(elementName) {
    var element = document.getElementById(elementName);
    if (element === null)
        throw `Element ${elementName} not loaded`;
    return element;
}
async function getBackgroundMaze() {
    var screenLength = screen.width + 5;
    var screenHeight = screen.height + 5;
    const response = await fetch(`${backgroundApi}?screenWidth=${screenLength}&screenHeight=${screenHeight}`);
    const blob = await response.blob();
    mainPage.style.backgroundImage = `url(${URL.createObjectURL(blob)})`;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9zcmMvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE1BQU0sUUFBUSxHQUFHLFNBQVMsQ0FBQyxVQUFVLENBQUMsQ0FBQztBQUV2QyxNQUFNLE9BQU8sR0FBRyw4QkFBOEIsQ0FBQTtBQUM5QyxNQUFNLE1BQU0sR0FBVyxHQUFHLE9BQU8sV0FBVyxDQUFBO0FBQzVDLE1BQU0sUUFBUSxHQUFXLEdBQUcsT0FBTyxRQUFRLENBQUE7QUFDM0MsTUFBTSxhQUFhLEdBQVcsR0FBRyxPQUFPLGFBQWEsQ0FBQTtBQUlyRCxpQkFBaUIsRUFBRSxDQUFDO0FBRXBCLFNBQVMsU0FBUyxDQUFDLFdBQW1CO0lBRWxDLElBQUksT0FBTyxHQUFHLFFBQVEsQ0FBQyxjQUFjLENBQUMsV0FBVyxDQUFDLENBQUM7SUFFbkQsSUFBSSxPQUFPLEtBQUssSUFBSTtRQUNoQixNQUFPLFdBQVcsV0FBVyxhQUFhLENBQUM7SUFDL0MsT0FBTyxPQUFPLENBQUM7QUFFbkIsQ0FBQztBQUlELEtBQUssVUFBVSxpQkFBaUI7SUFFNUIsSUFBSSxZQUFZLEdBQUcsTUFBTSxDQUFDLEtBQUssR0FBRyxDQUFDLENBQUM7SUFDcEMsSUFBSSxZQUFZLEdBQUcsTUFBTSxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUM7SUFFckMsTUFBTSxRQUFRLEdBQUcsTUFBTSxLQUFLLENBQUMsR0FBRyxhQUFhLGdCQUFnQixZQUFZLGlCQUFpQixZQUFZLEVBQUUsQ0FBQyxDQUFDO0lBQzFHLE1BQU0sSUFBSSxHQUFHLE1BQU0sUUFBUSxDQUFDLElBQUksRUFBRSxDQUFDO0lBRW5DLFFBQVEsQ0FBQyxLQUFLLENBQUMsZUFBZSxHQUFHLE9BQU8sR0FBRyxDQUFDLGVBQWUsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDO0FBQ3pFLENBQUMifQ==