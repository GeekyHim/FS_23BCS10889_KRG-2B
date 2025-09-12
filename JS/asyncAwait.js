async function fetchData() {
    try {
        const res = await fetch("https")
        const data = await res.json();
        console.log(data)
    } catch (error) {
        console.log("\n\n\n")
        console.log("My Error is:" + error)
        console.log("\n\n\n")
    }


}


async function fetchDataWorking() {
    try {
        const res = await fetch("https://jsonplaceholder.typicode.com/posts/1")
        const data = await res.json();
        console.log(data)
        console.log("\n\n\n")
    } catch (error) {
        console.log("My Error is:" + error)
    }


}

fetchData()

fetchDataWorking()