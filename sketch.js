let cellWidth, rows = 120, columns;
let x, y, num = 1;
let dirX = 1, dirY = 0;
let turnNum = 1, turnStep = 1, turnCount = 0;
let lastNum;
let prime;
let cells = [];
let cur1 = 0, cur2;

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
	cur2 = cells.length - 4000;
}
function draw()
{
	background(0);
	for (var i = 0; i < cells.length; i++) {
		cells[i].view(cur1 == i || cur2 == i);
	}
	cur1++;
	cur2--;
	if(cur1 > cells.length - 4000)
		cur1 = 0;
	if(cur2 < 0)
		cur2 = cells.length - 2800;
} 
function setGame()
{	
	let i = 0;
	while(num <= lastNum)
	{
		
		if(prime[num])
		{
			cells[i] = new Cell(x, y);
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
   		cellWidth -= 10;
   	}
   	if (keyCode === RIGHT_ARROW)
   	{
   		cellWidth += 10;
   	}
}