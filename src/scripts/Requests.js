import { getRequests, getPlumbers } from "./dataAccess.js"
import { mainContainer } from "./main.js"



//Defining the function that is being passed to the map() method
export const Requests = () => {
    const requests = getRequests()
    

//creating an unordered list and converting into list items
    let html = `
        <ul>
            ${
                requests.map((request) => convertRequestsToListElement(request)).join("")
                // plumbers.map((plumber) => convertRequestsToListElement(plumber)).join("")
            }
        </ul>
    `

    return html
}




//list items
const convertRequestsToListElement = (request) => {
    const plumbers = getPlumbers()
    return `
        <li> 
            ${request.description}
            <select class="plumbers" id="plumbers">
                <option value="">Choose</option>
                ${
                    plumbers.map(
                        plumber => {
                            return `<option value="${request.id}--${plumber.id}">${plumber.name}</option>`
                        }
                    ).join("")
                }
            </select>
            <button class="request__delete"
                id="request--${request.id}">
                Delete
            </button>
        </li>`
} 
