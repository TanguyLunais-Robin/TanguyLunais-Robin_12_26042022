/**
* API calls
* @param {string} endpoint - Containing the endpoint of the url (4 endpoints available by the back-end)
* @returns {object} data.data - Containing the recovered data
*/

const fetchData = async (endpoint) => {
    const response = await fetch(`http://localhost:3000/user/${endpoint}`)
    const data = await response.json()
    if (!response.ok) {
      console.error(response.status)
    }
    return data.data
  }
  
  export default fetchData