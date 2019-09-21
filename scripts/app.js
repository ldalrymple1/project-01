document.addEventListener('DOMContentLoaded',() => {
  

  // Stored variables
  const grid = document.querySelector('.grid')
  const width = 10
  const cells = []
  let frogIndex = 95
  const startButton = document.querySelector('.start')
  const riverCells = document.querySelectorAll('.river')
  // let brownCell1 = 15
  
  
  
  
  // function handleClick(e) {
  //   e.target.classList.add('player')
  // }

  

  for (let i = 0; i < width ** 2; i++) {
    const cell = document.createElement('div')
    cell.setAttribute('data-id', i)
  

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
    if (index >= 15 && index <= 17 || index >= 23 && index <= 26 || index >= 23 && index <= 26 || index >= 31 && index <= 33 || index === 37 || index === 38 ) {
      cell.classList.add('log')
    }
    if (index >= 10 && index <= 14 || index >= 18 && index <= 22 || index >= 27 && index <= 30 || index >= 34 && index <= 36 || index === 39) {
      cell.classList.add('river')
    }
    if (index === 95) {
      cell.classList.add('player')
    }

  })  
    
  


  // cells.(function (cell, index) {
  //   if (index >= 15 && index <= 17){
  //     console.log('adding safety')
  //     cell.classList.add('safety')
  //   }
  // })





  // WHat happens when someone clicks on start button. Initiates the game
  startButton.addEventListener('click', () => {
   
    // let brownX = brownCell1 % width
    

    setInterval(() => {
      const logCells = document.querySelectorAll('.log')
      logCells.forEach(logCell => {
        logCell.classList.remove('log')
        logCell.classList.add('river')
        let logCellIndex = parseInt(logCell.getAttribute('data-id'))
        logCellIndex -= 1
        logCell = cells[logCellIndex]
        logCell.classList.add('log')
      })

    }, 1000)

  
    // logCells.forEach((logCell) => {
    //   setInterval(() => {
    //     
    //     if (brownX === 0) {
    //       brownCell1 = brownCell1 + width - 1
    //       brownX = brownX + width - 1
    //     } else {
    //       brownCell1 = brownCell1 - 1
    //       brownX = brownX - 1
    //     }
    //     logCell.classList.add('log')
        
       
    //   }, 1000)


    // })

  })
  
  
















  // KEY UP- frog moving. The agme?

  document.addEventListener('keyup', (e) => {
    console.log('here')
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

    // Declaring the frogInHome function
    function frogInHome(frogIndex) {
      if (frogIndex <= 9 && frogIndex % 2 === 1 ) {
        alert('You have won the game!')
      }
    }
    console.log(frogIndex)

    // Function to check to see if frog hits car
    function frogDrowned(frogIndex){
      if (cells[frogIndex].classList.contains('river')) {
        console.log('You drowned!')
      }
    }

    function frogRunOver(frogIndex) {
      if (cells[frogIndex].classList.contains('car')) {
        console.log('You have been run over!')
        cells[frogIndex].classList.replace('car', 'skull-and-crossbones')
      }

    }


    


    

    // setInterval(() => {
    //   cells[brownCell1].classList.remove('log')
    //   cells[brownCell1].classList.add('river')
    //   if (brownX === 0) {
    //     brownCell1 = brownCell1 + width - 1
    //     brownX = brownX + width - 1
    //   } else {
    //     brownCell1 = brownCell1 - 1
    //     brownX = brownX - 1
    //   }
    //   cells[brownCell1].classList.add('log')
    //   console.log(brownCell1, brownX, brownY)
     
    // }, 1000)



    









    //   cells.forEach(function (cell, index) {
    //     if (index >= 10 && index <= 39){
    //       cell.classList.add('safety')

    // // }

    // function movementOfRiver () {
    //   if (index >= 10 && <= 39) {
    //     classList
    //   }

    // }








    
    // Win conditions function to check to see if frog makes it to the lily pad
    frogInHome(frogIndex)
    frogDrowned(frogIndex)
    frogRunOver(frogIndex)
    






  })

  
  



  


}) 





// setInterval (checkCollision, frogdrowned, frog runover, every 60s)
// if x === width -1 (this means the last column) {
//   index -= width 1
// }
// index = index - width