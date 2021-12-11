import { getRequests } from "./dataAccess.js"

//Defining the function that is being passed to the map() method
export const Requests = () => {
    const requests = getRequests()

//creating an unordered list and converting into list items
    let html = `
        <ul>
            ${
                requests.map((request) => convertRequestsToListElement(request)).join("")
            }
        </ul>
    `

    return html
}


//list items
const convertRequestsToListElement = (request) => {
    return `<li> ${request.description}</li>`
} 
