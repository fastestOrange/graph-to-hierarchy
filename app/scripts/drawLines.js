        var canvasSecond=document.getElementById("secondLevel");
        var secondContext=canvasSecond.getContext("2d");

        function Line(x1,y1,x2,y2){
            this.x1=x1;
            this.y1=y1;
            this.x2=x2;
            this.y2=y2;
        }
        Line.prototype.drawWithArrowheads=function(ctx){


            // arbitrary styling
            ctx.strokeStyle="blue";
            ctx.fillStyle="blue";
            ctx.lineWidth=1;
            
            // draw the line
            ctx.beginPath();
            ctx.moveTo(this.x1,this.y1);
            ctx.lineTo(this.x2,this.y2);
            ctx.stroke();

            // draw the starting arrowhead
            // var startRadians=Math.atan((this.y2-this.y1)/(this.x2-this.x1));
            // startRadians+=((this.x2>this.x1)?-90:90)*Math.PI/180;
            // this.drawArrowhead(ctx,this.x1,this.y1,startRadians);
            // draw the ending arrowhead
            var endRadians=Math.atan((this.y2-this.y1)/(this.x2-this.x1));

            endRadians+=((this.x2>this.x1)?90:-90)*Math.PI/180;

            this.drawArrowhead(ctx,this.x2,this.y2,endRadians);

        }
        Line.prototype.drawArrowhead=function(ctx,x,y,radians){
            ctx.save();
            ctx.beginPath();
            ctx.translate(x,y);
            ctx.rotate(radians);
            ctx.moveTo(0,0);
            ctx.lineTo(5,20);
            ctx.lineTo(-5,20);
            ctx.closePath();
            ctx.restore();
            ctx.fill();
        }

        // function drawToSecondNodes(startX, startY, nodeCount){
        //     for(var i = 0; i < nodeCount; i++){
        //         var temp = new Line( startX, startY, 123, (26 + 71 * i) )
        //         temp.drawWithArrowheads(secondContext);
        //     }

        // }

        // drawToSecondNodes(8, 76, 7);

        // create a new line object
        var line1=new Line(8,76,130,26);
        var line2=new Line(8,76,130,97);
        var line3=new Line(8,76,130,168);
        var line4=new Line(8,76,130,239);
        var line5=new Line(8,76,130,310);
        var line6=new Line(8,76,130,381);
        var line7=new Line(8,76,130,452);

        redrawLines();

        function redrawLines(){
            secondContext.clearRect(0, 0, canvas.width, canvas.height);
            // draw the line
            line1.drawWithArrowheads(secondContext);
            line2.drawWithArrowheads(secondContext);
            line3.drawWithArrowheads(secondContext);
            line4.drawWithArrowheads(secondContext);
            line5.drawWithArrowheads(secondContext);
            line6.drawWithArrowheads(secondContext);
            line7.drawWithArrowheads(secondContext);   
        }
 












