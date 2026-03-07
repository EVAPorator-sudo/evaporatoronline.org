"use strict";
const body = safeFetch("body");
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
    var screenLength = screen.width;
    var screenHeight = (2 * screen.height) + 2;
    const response = await fetch(`${backgroundApi}?screenWidth=${screenLength}&screenHeight=${screenHeight}`);
    const blob = await response.blob();
    body.style.backgroundImage = `url(${URL.createObjectURL(blob)})`;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9zcmMvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE1BQU0sSUFBSSxHQUFHLFNBQVMsQ0FBQyxNQUFNLENBQUMsQ0FBQztBQUUvQixNQUFNLE9BQU8sR0FBRyw4QkFBOEIsQ0FBQTtBQUM5QyxNQUFNLE1BQU0sR0FBVyxHQUFHLE9BQU8sV0FBVyxDQUFBO0FBQzVDLE1BQU0sUUFBUSxHQUFXLEdBQUcsT0FBTyxRQUFRLENBQUE7QUFDM0MsTUFBTSxhQUFhLEdBQVcsR0FBRyxPQUFPLGFBQWEsQ0FBQTtBQUlyRCxpQkFBaUIsRUFBRSxDQUFDO0FBRXBCLFNBQVMsU0FBUyxDQUFDLFdBQW1CO0lBRWxDLElBQUksT0FBTyxHQUFHLFFBQVEsQ0FBQyxjQUFjLENBQUMsV0FBVyxDQUFDLENBQUM7SUFFbkQsSUFBSSxPQUFPLEtBQUssSUFBSTtRQUNoQixNQUFPLFdBQVcsV0FBVyxhQUFhLENBQUM7SUFDL0MsT0FBTyxPQUFPLENBQUM7QUFFbkIsQ0FBQztBQUlELEtBQUssVUFBVSxpQkFBaUI7SUFFNUIsSUFBSSxZQUFZLEdBQUcsTUFBTSxDQUFDLEtBQUssQ0FBQztJQUNoQyxJQUFJLFlBQVksR0FBRyxDQUFDLENBQUMsR0FBRyxNQUFNLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDO0lBRTNDLE1BQU0sUUFBUSxHQUFHLE1BQU0sS0FBSyxDQUFDLEdBQUcsYUFBYSxnQkFBZ0IsWUFBWSxpQkFBaUIsWUFBWSxFQUFFLENBQUMsQ0FBQztJQUMxRyxNQUFNLElBQUksR0FBRyxNQUFNLFFBQVEsQ0FBQyxJQUFJLEVBQUUsQ0FBQztJQUVuQyxJQUFJLENBQUMsS0FBSyxDQUFDLGVBQWUsR0FBRyxPQUFPLEdBQUcsQ0FBQyxlQUFlLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQztBQUNyRSxDQUFDIn0=