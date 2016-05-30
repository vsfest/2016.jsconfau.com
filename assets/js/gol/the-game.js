// Original reference: http://jsfiddle.net/xcs1y127/10/
// Additional modifications: http://github.com/kolber

(function() {
  var isPlaying = false;
  var tickCallCount = 0;
  var gridWidth = 500;
  var gridHeight = document.body.clientWidth < 1200 ? document.body.clientWidth : 1200;
  var theGrid = createArray(gridHeight, gridWidth);
  var mirrorGrid = createArray(gridHeight, gridWidth);

  initUi();

  var c = document.getElementById("c");
  var ctx = c.getContext("2d");
  c.width = gridHeight;
  c.height = gridWidth;
  ctx.fillStyle = "#fff";

  tick(); //call main loop

  //events
  function initUi() {
    var frag = document.createDocumentFragment();
    var canvas = document.createElement('canvas');
    canvas.id = "c";
    var playLink = document.createElement('a');
    playLink.href = '#';
    playLink.className = 'c-play-toggle';
    var resetLink = document.createElement('a');
    resetLink.href = '#';
    resetLink.className = 'c-reset';
    frag.appendChild(canvas);
    frag.appendChild(playLink);
    frag.appendChild(resetLink);
    document.querySelector('.bg').appendChild(frag);
  }

  document.querySelector('.c-play-toggle').addEventListener('click', function(e){
    e.preventDefault();
    isPlaying = !isPlaying;
    document.body.classList.toggle('is-playing');
    tick();
  })

  document.querySelector('.c-reset').addEventListener('click', function(e){
    e.preventDefault();
    ctx.clearRect(0, 0, gridHeight, gridWidth); //this should clear the canvas ahead of each redraw
    tickCallCount = 0;
    emptyGrid();
    drawGrid();
  })

  c.addEventListener('mousedown', function(e){
    handleClick(e);
    c.addEventListener('mousemove', handleClick);
  })

  c.addEventListener('mouseup', function(e){
    c.removeEventListener('mousemove', handleClick);
  })

  function handleClick(e) {
    var pos = c.getBoundingClientRect(),
        x = Math.floor(e.clientX - pos.left),
        y = Math.floor(e.clientY - pos.top);
    theGrid[x][y] = 1;
    drawGrid();
  }

  //functions
  function tick() { //main loop
    if (tickCallCount == 2) {
      fillRandom();
      drawLogo();
    }
    drawGrid();
    tickCallCount++;
    if (isPlaying) updateGrid();
    if (isPlaying) requestAnimationFrame(tick);
  }

  function createArray(rows, columns) { //creates a 2 dimensional array of required height
    var arr = new Array(rows);
    for (var j = 0; j < rows; j++) { //iterate through rows
      arr[j] = new Array(columns);
      for (var k = 0; k < columns; k++) { //iterate through columns
        arr[j][k] = 0;
      }
    }
    return arr;
  }

  function loadJSON(path) {
    var request = new XMLHttpRequest();
    request.open('GET', path, false);
    request.send(null);
    if (request.status === 200) {
      return JSON.parse(request.responseText);
    } else {
      return [];
    }
  }

  function drawLogo () {
    var pixelData = loadJSON('./assets/js/gol/js-logo.json');
    var x, y;
    for (var i = 0; i < pixelData.length; i++) { //iterate through pixels
      x = pixelData[i][1] + Math.floor(gridHeight/2) - 354/2;
      y = pixelData[i][0] + 110;
      theGrid[x][y] = 1;
    }
  }

  function fillRandom() { //fill the grid randomly
    for (var j = 0; j < gridHeight; j++) { //iterate through rows
      for (var k = 0; k < gridWidth; k++) { //iterate through columns
        theGrid[j][k] = Math.round(Math.random() * 15) === 15;
      }
    }
  }

  function emptyGrid() {
    for (var j = 0; j < gridHeight; j++) { //iterate through rows
      for (var k = 0; k < gridWidth; k++) { //iterate through columns
        theGrid[j][k] = 0;
      }
    }
  }

  function drawGrid() { //draw the contents of the grid onto a canvas
    var liveCount = 0;
    ctx.clearRect(0, 0, gridHeight, gridWidth); //this should clear the canvas ahead of each redraw
    for (var j = 1; j < gridHeight; j++) { //iterate through rows
      for (var k = 1; k < gridWidth; k++) { //iterate through columns
        if (theGrid[j][k] === 1) {
          ctx.fillRect(j, k, 1, 1);
          liveCount++;
        }
      }
    }
  }

  function updateGrid() { //perform one iteration of grid update
    for (var j = 1; j < gridHeight - 1; j++) { //iterate through rows
      for (var k = 1; k < gridWidth - 1; k++) { //iterate through columns
        var totalCells = 0;
        //add up the total values for the surrounding cells
        totalCells += theGrid[j - 1][k - 1]; //top left
        totalCells += theGrid[j - 1][k]; //top center
        totalCells += theGrid[j - 1][k + 1]; //top right

        totalCells += theGrid[j][k - 1]; //middle left
        totalCells += theGrid[j][k + 1]; //middle right

        totalCells += theGrid[j + 1][k - 1]; //bottom left
        totalCells += theGrid[j + 1][k]; //bottom center
        totalCells += theGrid[j + 1][k + 1]; //bottom right

        //apply the rules to each cell
        switch (totalCells) {
          case 2:
            mirrorGrid[j][k] = theGrid[j][k];
            break;
          case 3:
            mirrorGrid[j][k] = 1; //live
            break;
          default:
            mirrorGrid[j][k] = 0; //
        }
      }
    }

    //mirror edges to create wraparound effect
    for (var l = 1; l < gridHeight - 1; l++) { //iterate through rows
      //top and bottom
      mirrorGrid[l][0] = mirrorGrid[l][gridHeight - 3];
      mirrorGrid[l][gridHeight - 2] = mirrorGrid[l][1];
      //left and right
      mirrorGrid[0][l] = mirrorGrid[gridHeight - 3][l];
      mirrorGrid[gridHeight - 2][l] = mirrorGrid[1][l];

    }

    //swap grids
    var temp = theGrid;
    theGrid = mirrorGrid;
    mirrorGrid = temp;
  }
})();
