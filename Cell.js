class Cell 
{
 	constructor(cellX, cellY, colr) 
 	{
 		this.cellX = cellX;
 		this.cellY = cellY;
        this.cellWidth = cellWidth;

        this.colr = colr;
  	}
  	view()
  	{
        fill(this.colr);
        circle(this.cellX, this.cellY, cellWidth);
        if(this.colr != 200)
        {
            this.colr = color(
                random(180, 220),
                random(0, 30),
                random(20, 40)
            );   
        }   
  	}
}