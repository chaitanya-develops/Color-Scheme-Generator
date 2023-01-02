const count = 5
let seedHex = ""
let mode = ""
const colorsArr = []
let url =  "" 
const colorboxColorId = ["colorbox-one-color","colorbox-two-color","colorbox-three-color","colorbox-four-color","colorbox-five-color"]
const colorboxHexId = ["colorbox-one-hex","colorbox-two-hex","colorbox-three-hex","colorbox-four-hex","colorbox-five-hex"]
const colorboxColorEl = []
const colorboxHexEl = []

const generateColorSchemeEl = document.getElementById("generate-color-scheme")

const formEl = document.getElementById("form-id")

formEl.addEventListener("submit",function(e) {
    e.preventDefault()
    seedHex = document.getElementById("main-form-color").value
    console.log(seedHex)
    url = "https://www.thecolorapi.com/scheme?hex="+ seedHex.slice(1)+"&count=5"
    generateScheme()

})



// generateColorSchemeEl.addEventListener("click",generateScheme())




async function generateScheme(){
    // console.log("Click")
    // console.log(url)
    await fetch(url)
        .then(res => res.json())
        .then((data) => {
            for(let i = 0;i<count;i++){
                colorsArr[i] = data.colors[i].hex.value
            }
        })
    // console.log(colorsArr)
    render()
}


function render(){
    for(let i = 0;i<count;i++){
        colorboxColorEl[i] = document.getElementById(colorboxColorId[i])
        // .style.backgroundColor = colorsArr[i]
        colorboxHexEl[i] = document.getElementById(colorboxHexId[i])
        // .textContent = colorsArr[i]
    }

    for(let i = 0;i<count;i++){
        colorboxColorEl[i].style.backgroundColor = colorsArr[i]
        colorboxHexEl[i].innerHTML = colorsArr[i]
        // colorboxHexEl[i].inner
    }

}

