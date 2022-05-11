import User from "./User"
import Activity from "./Activity"
import AverageSessions from "./AverageSessions"
import Performance from "./Performance"

export default class Service {

    /**
    * Fetch the user information from the API
    * @param {string} id - User ID number
    * @param {function} recoveryUser - Function which updates the state when the data is recovered
    */

    getUser = (id, recoveryUser) => {
      fetch(`http://localhost:3000/user/${id}`)
      .then((response) => response.json())
      .then((response) => {
        const user = new User(response.data)
        recoveryUser(user)
      })
    }

    /**
    * Fetch the user activity from the API
    * @param {string} id - User ID number
    * @param {function} recoveryActivity - Function which updates the state when the data is recovered
    */

    getActivity = (id, recoveryActivity) => {
      fetch(`http://localhost:3000/user/${id}/activity`)
      .then((response) => response.json())
      .then((response) => {
        const activity = new Activity(response.data)
        recoveryActivity(activity)
      })
    }

    /**
    * Fetch the user average sessions from the API
    * @param {string} id - User ID number
    * @param {function} recoveryAverageSessions - Function which updates the state when the data is recovered
    */

    getAverageSessions = (id, recoveryAverageSessions) => {
      fetch(`http://localhost:3000/user/${id}/average-sessions`)
      .then((response) => response.json())
      .then((response) => {
        const averageSessions = new AverageSessions(response.data)
        recoveryAverageSessions(averageSessions)
      })
    }

    /**
    * Fetch the user average sessions from the API
    * @param {string} id - User ID number
    * @param {function} recoveryPerformance - Function which updates the state when the data is recovered
    */

    getPerformance = (id, recoveryPerformance) => {
      fetch(`http://localhost:3000/user/${id}/performance`)
      .then((response) => response.json())
      .then((response) => {
        const performance = new Performance(response.data)
        recoveryPerformance(performance)
      })
    }
}