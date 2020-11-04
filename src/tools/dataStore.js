import http from './http.js'

var countrySumData = async () => {
    var ret = ''
    await http.get('countrySumData').then((res) => {
        ret = res.data
    })
    return ret
}

export const dataStore = {
    countrySumData: countrySumData
}