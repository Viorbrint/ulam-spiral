let cellWidth = 3, rows, columns;
let x, y, num = 1;
let dirX = 1, dirY = 0;
let turnNum = 1, turnStep = 1, turnCount = 0;
let lastNum;
let prime;

function setup() 
{
	frameRate(60);
	createCanvas(windowWidth, windowHeight - 4);

	/*cellWidth = (height - (height / rows)) / rows;
	columns = ceil(width / cellWidth);*/
	columns = width;
	x = width / 2;
	y = height / 2;

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

	background(0);
}
function draw()
{
	for (var i = 0; i < 5000; i++) 
		game();

	/*if(num > lastNum)
	{
		noLoop();
		save("ulam.png");
	}*/
} 
function view()
{
	noStroke();
	rectMode(CENTER);
	if(prime[num] || num == 1)
	{
		fill(
			map(x, 0, width, 0, 220),
			random(0, 40),
			map(x, 0, width, 150, 0)
		);
		if(num == 1)
			fill(200);
		square(x, y, cellWidth);
	}

	//square(x, y, cellWidth);  // rofl
}
function game()
{
	if(num <= lastNum)
	{
		view();
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