document.addEventListener('DOMContentLoaded',() => {
  
  const grid = document.querySelector('.grid')
  const width = 10
  const cells = []
  let frogIndex = 95
  
  // function handleClick(e) {
  //   e.target.classList.add('player')
  // }

  

  for (let i = 0; i < width ** 2; i++) {
    const cell = document.createElement('DIV')
    grid.appendChild(cell)
    cells.push(cell)
    cell.classList.add('.div')
    // cell.addEventListener('click', handleClick)

  }

  cells.forEach(function (cell, index) {
    if (index >= 40 && index <= 59) {
      cell.classList.add('safety')
    }
    if (index <= 9 && index % 2 === 1) {
      cell.classList.add('lilypad')
    }
    if (index >= 80 && index <= 89 && index % 2 === 1) {
      cell.classList.add('car')
    }
    if (index >= 60 && index <= 69 && index % 2 === 1) {
      cell.classList.add('car')
    }
    if (index >= 10 && index <= 39) {
      cell.classList.add('river')
    }
    if (index === 95) {
      cell.classList.add('player')
    }

  })  
    

  // cells.forEach(function(cell, 89) {
  //   console.log(cell)
  // })

  // for (let i = 40; i <= 59; i++) {
  //   cell.classList.add('safety')
  // }



  document.addEventListener('keyup', (e) => {
    // when the key is lifted up, remove the avatar from that grid
    cells[frogIndex].classList.remove('player') 
    // x = 
    const x = frogIndex % width
    // 0,1,2,3,4 = index, divide these by width = 10 you get x coordinates of 0,0.1,0.2,0.3,0.4 - round these to integers
    const y = Math.floor(frogIndex / width)
    
    //  if key code is 37,38,39,40 (Left, Up, Right, Down)
    switch (e.keyCode) {
      case 37: if (x > 0) frogIndex -= 1
        break
      case 38: if (y > 0) frogIndex -= width
        break
      case 39: if (x < width - 1) frogIndex += 1
        break
      case 40: if (y < width - 1)frogIndex += width
        break
    }

    // when the key is pressed add the avatar to that grid
    cells[frogIndex].classList.add('player')

    function frogInHome(frogIndex) {
      if (frogIndex <= 9 && frogIndex % 2 === 1 ) {
        alert('You have won the game!')
      }
    }
    console.log(frogIndex)
  
    frogInHome(frogIndex)






  })

  
  



  


}) 