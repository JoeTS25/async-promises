//Numbers API
axios.get("http://numbersapi.com/18/trivia?json")
.then(res => {
    console.log(res.data)
})


axios.get("http://numbersapi.com/18,23,42,2")
.then(res => {
    console.log(res.data)
})


axios.get("http://numbersapi.com/18/trivia")
.then(res => {
    console.log(res.data)
    return axios.get("http://numbersapi.com/18/trivia")
})
.then(res => {
    console.log(res.data)
    return axios.get("http://numbersapi.com/18/trivia")
})
.then(res => {
    console.log(res.data)
    return axios.get("http://numbersapi.com/18/trivia")
})
