let cellWidth, rows = 50, columns;
let x, y, num = 1;
let dirX = 1, dirY = 0;
let turnNum = 1, turnStep = 1, turnCount = 0;
let lastNum;
let prime;
let cells = [];

function setup() 
{
	frameRate(60);
	createCanvas(windowWidth, windowHeight - 4);

	cellWidth = (height - (height / rows)) / rows;
	columns = ceil(width / cellWidth);
	x = width / 2;
	y = height / 2;
	px = x, py = y;

	lastNum = sq((columns + 1) % 2 + columns);

	prime = Array(lastNum + 1).fill(true)
	prime[0] = false;
	prime[1] = false;
	prime[2] = true;

	for (let i = 2; i * i <= lastNum; i++) {
		if(prime[i])
		{
			for (let j = i * 2; j <= lastNum; j += i) {
				prime[j] = false;
			}
		}
	}

	ellipseMode(CENTER);
	noStroke();

	setGame();
}
function draw()
{
	background(0);
	for (var i = 0; i < cells.length; i++) {
		cells[i].view();
	}
} 
function setGame()
{	
	let i = 0;
	while(num <= lastNum)
	{
		
		if(prime[num])
		{
			let colr = color(
            	random(180, 220),
            	random(0, 30),
           		random(20, 40)
       		);

			cells[i] = new Cell(x, y, colr);
			i++;
		}

		if(num == turnNum + turnStep)
		{
			turnCount++;
			if(dirX == 0)
			{
				dirX = dirY;
				dirY = 0;
			}
			else
			{
				dirY = -dirX;
				dirX = 0;
			}

			turnNum = num;
			if(!(turnCount % 2))
				turnStep++;
		}
		x = x + cellWidth * dirX;
		y = y + cellWidth * dirY;
		num++;
	}
}
function keyPressed() 
{
   	if (keyCode === LEFT_ARROW)
   	{
   		cellWidth--;
   	}
   	if (keyCode === RIGHT_ARROW)
   	{
   		cellWidth++;
   	}
}