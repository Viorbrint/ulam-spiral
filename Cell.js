class Cell 
{
 	constructor(cellX, cellY) 
 	{
 		this.cellX = cellX;
 		this.cellY = cellY;
        this.cellWidth = cellWidth;
  	}
  	view(cur)
  	{
        let bcol = random(20, 50);
        this.colr = color(
            bcol, 
            bcol,
            bcol + 10
            );
        if(cur)
        {
            this.colr = color(
            random(80, 200));
        }
        fill(this.colr);
        circle(this.cellX, this.cellY, cellWidth);
  	}
}