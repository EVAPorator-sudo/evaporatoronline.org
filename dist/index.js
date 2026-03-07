"use strict";
const mainPage = safeFetch("mainpage");
const genAPI = "https://evaporatoronline.org/generate";
const solveApi = "https://evaporatoronline.org/generate";
getBackgroundMaze();
function safeFetch(elementName) {
    var element = document.getElementById(elementName);
    if (element === null)
        throw `Element ${elementName} not loaded`;
    return element;
}
async function getBackgroundMaze() {
    var Length = 40 * 16;
    var Height = 40 * 9;
    var Weight = 80;
    var Algorithm = "GrowingTree";
    var cacheFiller = Date.now();
    const response = await fetch(`${genAPI}?Length=${Length}&Height=${Height}&Weight=${Weight}&Algorithm=${Algorithm}&_=${cacheFiller}`);
    const blob = await response.blob();
    mainPage.style.backgroundImage = `url(${URL.createObjectURL(blob)}`;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9zcmMvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE1BQU0sUUFBUSxHQUFHLFNBQVMsQ0FBQyxVQUFVLENBQUMsQ0FBQztBQUV2QyxNQUFNLE1BQU0sR0FBVyx1Q0FBdUMsQ0FBQTtBQUM5RCxNQUFNLFFBQVEsR0FBRyx1Q0FBdUMsQ0FBQTtBQUl4RCxpQkFBaUIsRUFBRSxDQUFDO0FBRXBCLFNBQVMsU0FBUyxDQUFDLFdBQW1CO0lBRWxDLElBQUksT0FBTyxHQUFHLFFBQVEsQ0FBQyxjQUFjLENBQUMsV0FBVyxDQUFDLENBQUM7SUFFbkQsSUFBSSxPQUFPLEtBQUssSUFBSTtRQUNoQixNQUFPLFdBQVcsV0FBVyxhQUFhLENBQUM7SUFDL0MsT0FBTyxPQUFPLENBQUM7QUFFbkIsQ0FBQztBQUlELEtBQUssVUFBVSxpQkFBaUI7SUFDNUIsSUFBSSxNQUFNLEdBQUcsRUFBRSxHQUFHLEVBQUUsQ0FBQztJQUNyQixJQUFJLE1BQU0sR0FBRyxFQUFFLEdBQUcsQ0FBQyxDQUFDO0lBQ3BCLElBQUksTUFBTSxHQUFHLEVBQUUsQ0FBQztJQUNoQixJQUFJLFNBQVMsR0FBRyxhQUFhLENBQUE7SUFDN0IsSUFBSSxXQUFXLEdBQUcsSUFBSSxDQUFDLEdBQUcsRUFBRSxDQUFDO0lBRTdCLE1BQU0sUUFBUSxHQUFHLE1BQU0sS0FBSyxDQUFDLEdBQUcsTUFBTSxXQUFXLE1BQU0sV0FBVyxNQUFNLFdBQVcsTUFBTSxjQUFjLFNBQVMsTUFBTSxXQUFXLEVBQUUsQ0FBQyxDQUFDO0lBQ3JJLE1BQU0sSUFBSSxHQUFHLE1BQU0sUUFBUSxDQUFDLElBQUksRUFBRSxDQUFDO0lBRW5DLFFBQVEsQ0FBQyxLQUFLLENBQUMsZUFBZSxHQUFHLE9BQU8sR0FBRyxDQUFDLGVBQWUsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDO0FBQ3hFLENBQUMifQ==