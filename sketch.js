// put in setup whatever needs to be done to get things started
function setup() {

    // this line creates a virtual canvas and attaches it to your HTML
    createCanvas(640, 480).parent('p5')
    noLoop()
}

// put in draw everything you want to draw to the canvas
function draw() {

    // start off with a background
    background(209,189,6)
strokeWeight(3)
noStroke()
    // draw here!

fill(115,136,191)
rect(0,0,640,176)

fill(157,194,191)
circle(412,126,103)

fill(157,194,191)
circle(172,146,60)

fill(35,26,59)
beginShape()
curveVertex (206,5)
curveVertex (212,26)
curveVertex(397,66)
curveVertex(454,51)
curveVertex(514,59)
curveVertex(557,83)
curveVertex(582,72)
curveVertex(612,68)
curveVertex(640,82)
curveVertex(640,0)
endShape(CLOSE)

fill(63,166,35)
beginShape()
curveVertex (403,218)
curveVertex (361,245)
curveVertex (368,262)
curveVertex (388,285)
curveVertex(348,334)
curveVertex(325,375)
curveVertex(287,470)
curveVertex(319,470)
curveVertex(392,343)
curveVertex(353,367)
curveVertex(338,412)
curveVertex(339,428)
curveVertex(334,436)
curveVertex(325,452)
curveVertex(420,276)
curveVertex(396,252)
endShape(CLOSE)

fill(63,166,35)
beginShape()
curveVertex (403,219)
curveVertex (438,261)
curveVertex (454,321)
curveVertex (447,339)
curveVertex(443,352)
curveVertex(441,363)
curveVertex(427,389)
curveVertex(420,406)
curveVertex(408,428)
curveVertex(397,450)
curveVertex(396,453)
curveVertex(394,468)
curveVertex(396,471)
curveVertex(424,467)
endShape(CLOSE)

fill(32,29,46)
beginShape()
curveVertex (161,139)
curveVertex (158,146)
curveVertex (173,152)
curveVertex (181,137)
curveVertex(189,144)
curveVertex(186,149)
curveVertex(181,148)
curveVertex(171,151)
curveVertex(162,149)
curveVertex(156,144)
endShape(CLOSE)






}

// this function will print coordinates to the console whenever you click
function mouseClicked() {
    print(int(mouseX), int(mouseY))
}
