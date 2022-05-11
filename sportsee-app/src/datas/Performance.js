/**
* @param {object} data - User performance retrieved
*/

export default class Performance {
    constructor (data) {
        this.datas = data.data
        this.kind = data.kind
    }
}