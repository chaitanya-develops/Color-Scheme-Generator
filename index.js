const count = 5
const seedHex = ""
const colorsArr = []
const url =  "https://www.thecolorapi.com/scheme?hex=https://www.thecolorapi.com&count=5" 
const colorboxColorId = ["colorbox-one-color","colorbox-two-color","colorbox-three-color","colorbox-four-color","colorbox-five-color"]
const colorboxHexId = ["colorbox-one-hex","colorbox-two-hex","colorbox-three-hex","colorbox-four-hex","colorbox-five-hex"]
const colorboxColorEl = []
const colorboxHexEl = []

const generateColorSchemeEl = document.getElementById("generate-color-scheme")

generateColorSchemeEl.addEventListener("click",generateScheme())




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

