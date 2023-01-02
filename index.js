const count = 5
const seedHex = ""
const colorsArr = []
const colorHexElArr = []
const url =  "https://www.thecolorapi.com/scheme?hex=https://www.thecolorapi.com&count=" + count


function generateScheme(){
    fetch(url)
        .then(res => res.json())
        .then((data) => {
            for(let i = 0;i<count;i++){
                colorsArr[i] = data.colors[i].hex.value
            }
        })

    console.log(colorsArr)
}

