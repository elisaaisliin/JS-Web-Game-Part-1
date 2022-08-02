function newImage(url){
    let image = document.createElement('img')
    image.src = url
    document.body.append(image)
    return image
}

function move(image, left, bottom){
    image.style.position = 'fixed'

    function moveToCoordinates(left, bottom){
        image.style.left = left +'px'
        image.style.bottom = bottom + 'px'
    }

    function moveWithArrowKeys(left, bottom){
        let direction = null;
        let x = left;
        let y = bottom;
    
        element.style.left = x + 'px'
        element.style.bottom = y + 'px'
        
        function moveCharacter(){ 
            if(direction === 'west'){
                x-=1
            }
            if(direction === 'north'){
                y+=1
            }
            if(direction === 'east'){
                x+=1
            }
            if(direction === 'south'){
                y-=1
            }
            element.style.left = x + 'px'
            element.style.bottom = y + 'px'
        }
        
        setInterval(moveCharacter, 1)
        
        document.addEventListener('keydown', function(e){
            if(e.repeat) return;
        
            if(e.key === 'ArrowLeft'){
                direction = 'west'
            }
            if(e.key === 'ArrowUp'){
                direction = 'north'
            }
            if(e.key === 'ArrowRight'){
                direction = 'east'
            }
            if(e.key === 'ArrowDown'){
                direction = 'south'
            }
        })
        
        document.addEventListener('keyup', function(e){
            direction = null
        })
    }
    
    return {
        to: moveToCoordinates,
        withArrowKeys: moveWithArrowKeys
    }
}
const character = newImage('assets/green-character/static.gif')
let direction = null;
let x = 100;
let y = 250;

setInterval(function(){  
if(direction === 'west') {
    x = x - 1
}
if(direction === 'north') {
    y = y + 1
}
if(direction === 'east'){
    x = x +1
}
if(direction === 'south'){
    y = y -1
}
character.style.left = x + 'px'
character.style.bottom = y + 'px'
}, 1)

document.addEventListener('keydown', function(e){
    if(e.repeat) return;

    if(e.key === 'ArrowLeft'){
        direction = 'west'
    }
    if(e.key === 'ArrowUp'){
        direction = 'north'
    }
    if(e.key === 'ArrowRight'){
        direction = 'east'
    }
    if(e.key === 'ArrowDown'){
        direction = 'south'
    }
})
document.addEventListener('keyup', function(e){
    direction = null
})
move(character).to(100, 250)

// move(newImage('assets/green-character.gif')).to(100,250)
move(newImage('assets/pine-tree.png')).to (450,200)
move(newImage('assets/tree.png')).to(200,300)
move(newImage('assets/pillar.png')).to(350,100)
move(newImage('assets/crate.png')).to(150,200)
move(newImage('assets/well.png')).to(500,425)
move(newItem('assets/sword.png')).to (500,405)
move(newItem('assets/sheild.png')).to (165,185)
move(newItem('assets/staff.png')).to(600,100)

function newItem(url, left, bottom){
    let item = newImage(url, left, bottom)
    item.addEventListener('click', function() {
        item.remove()
        let inventoryItem = document.createElement('img')
        inventoryItem.src = url 
        inventory.append(inventoryItem)
    })
    return item
}
function newInventory(){
    let inventory = document.createElement('div')
    inventory.style.position = 'fixed'
    inventory.style.bottom = '0px';
    inventory.style.left = '0px'
    inventory.style.width = '100%'
    inventory.style.height = '100px'
    inventory.style.display = 'flex'
    inventory.style.flexDirection = 'row'
    inventory.style.alignItems = 'center'
    inventory.style.justifyContent = 'space-evenly'
    inventory.style.border = '2px solid black'
    inventory.style.backgroundColor = 'brown'
    document.body.append(inventory)
    return inventory
}
// function tile(url, left, bottom, width, height){
//     for(let h = 0; h < height; h++){
//         for(let w = 0; w < width; w++){
//             newImage(url, left + w*100, bottom+h*100)
//         }
//     }
// }

// let horizon = window.innerHeight / 1.75
// let heightOfSky = window.innerHeight-horizon
// let heightOfGrass = horizon

// tile('assets/sky.png', 0, horizon, window.innerWidth/100, heightOfSky/100)
// tile('assets/grass.png', 0, 0, window.innerWidth/100, heightOfGrass/100)
const inventory = newInventory()
move(inventory).to(0,0)