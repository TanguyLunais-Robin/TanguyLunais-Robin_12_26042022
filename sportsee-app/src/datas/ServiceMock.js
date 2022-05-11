import User from "./User"
import Activity from "./Activity"
import AverageSessions from "./AverageSessions"
import Performance from "./Performance"

import { USER_MAIN_DATA, USER_ACTIVITY, USER_AVERAGE_SESSIONS, USER_PERFORMANCE } from "./Mock"

export default class Service {

    /**
    * Fetch the user information from the mocked data file
    * @param {string} id - User ID number
    * @param {function} recoveryUser - Function which updates the state when the data is recovered
    */

    getUser = (id, recoveryUser) => {
        const data = USER_MAIN_DATA
        id = parseInt(id, 10)
        for (let i=0; i<data.length; i++) {
            if (data[i].id === id) {
                const user = new User(data[i])
                recoveryUser(user)
                return
            }
        }
    }

    /**
    * Fetch the user activity from the mocked data file
    * @param {string} id - User ID number
    * @param {function} recoveryActivity - Function which updates the state when the data is recovered
    */

    getActivity = (id, recoveryActivity) => {
        const data = USER_ACTIVITY
        id = parseInt(id, 10)
        for (let i=0; i<data.length; i++) {
            if (data[i].userId === id) {
                const activity = new Activity(data[i])
                recoveryActivity(activity)
                return
            }
        }
    }

    /**
    * Fetch the user average sessions from the mocked data file
    * @param {string} id - User ID number
    * @param {function} recoveryAverageSessions - Function which updates the state when the data is recovered
    */

    getAverageSessions = (id, recoveryAverageSessions) => {
        const data = USER_AVERAGE_SESSIONS
        id = parseInt(id, 10)
        for (let i=0; i<data.length; i++) {
            if (data[i].userId === id) {
                const averageSessions = new AverageSessions(data[i])
                recoveryAverageSessions(averageSessions)
                return
            }
        }
    }

    /**
    * Fetch the user average sessions from the mocked data file
    * @param {string} id - User ID number
    * @param {function} recoveryPerformance - Function which updates the state when the data is recovered
    */

    getPerformance = (id, recoveryPerformance) => {
        const data = USER_PERFORMANCE
        id = parseInt(id, 10)
        for (let i=0; i<data.length; i++) {
            if (data[i].userId === id) {
                const performance = new Performance(data[i])
                recoveryPerformance(performance)
                return
            }
        }
    }
}