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
    mode = document.getElementById("main-form-scheme").value
    console.log(seedHex)
    url = "https://www.thecolorapi.com/scheme?hex="+ seedHex.slice(1)+"&mode="+mode+"&count=5"
    generateScheme()

})

async function generateScheme(){
    await fetch(url)
        .then(res => res.json())
        .then((data) => {
            for(let i = 0;i<count;i++){
                colorsArr[i] = data.colors[i].hex.value
            }
        })
    render()
}


function render(){
    for(let i = 0;i<count;i++){
        colorboxColorEl[i] = document.getElementById(colorboxColorId[i])
        colorboxHexEl[i] = document.getElementById(colorboxHexId[i])
    }

    for(let i = 0;i<count;i++){
        colorboxColorEl[i].style.backgroundColor = colorsArr[i]
        colorboxHexEl[i].innerHTML = colorsArr[i].slice(1)
    }

}

