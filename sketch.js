// put in setup whatever needs to be done to get things started
function setup() {

    // this line creates a virtual canvas and attaches it to your HTML
    createCanvas(640, 296).parent('p5')
    noLoop()
}

// put in draw everything you want to draw to the canvas
function draw() {

    // start off with a background
    background(209,189,6)
strokeWeight(3)
noStroke()
    // draw here!

fill(115,136,191)   //light sky rectangle
rect(0,0,640,118)

fill(157,194,191) //big moon
circle(413,83,65)
fill(157,194,191) //big moon
circle(461,92,55)

fill(157,194,191) //small circle
circle(174,92,50)

fill(35,26,59)   //light sky rectangle
rect(0,0,88,56)

fill(35,26,59)
beginShape()
curveVertex (206,5)
curveVertex (212,26)  ///dark sky big
curveVertex(397,66)
curveVertex(454,51)
curveVertex(514,59)
curveVertex(557,83)
curveVertex(582,72)
curveVertex(612,68)
curveVertex(640,82)
curveVertex(640,0)
endShape(CLOSE)


stroke(63,166,35)
strokeWeight(20)  //grass line left
line(381,201,424,164)

stroke(63,166,35)
strokeWeight(20)  //grass line left 2
line(310,292,357,231)

stroke(63,166,35)
strokeWeight(20)  //grass line right 2
line(373,291,395,252)

stroke(63,166,35)
strokeWeight(20) //green
line(429,166,405,241)

stroke(63,166,35)
strokeWeight(20)  //grass line left
line(278,293,341,230)

stroke(63,166,35)
fill(63,166,35) //green triangle
triangle(258,290,344,233,315,294)

stroke(63,166,35)
fill(63,166,35) //green triangle
triangle(256,290,336,239,310,295)

stroke(138,94,94)
strokeWeight(30) //brown middle
line(338,293,409,189)

stroke(138,94,94)
fill(138,94,94)   //brown rek
rect(149,240,183,53)

stroke(63,166,35)
fill(63,166,35) //green triangle
triangle(0,126,185,244,120,259)

stroke(138,94,94)
fill(138,94,94) //brown triangle
triangle(0,148,132,296,44,296)

stroke(63,166,35)
fill(63,166,35) //green triangle
triangle(0,127,50,296,0,296)


stroke(138,94,94)
fill(138,94,94) //brown triangle right
triangle(443,293,639,218,639,293)






stroke(2, 1, 18) //bird 1
strokeWeight(5)
line(160,89,170,83)
line(170,83,175,90)
line(175,90,179,83)
line(179,83,189,87)

stroke(2, 1, 18) //bird 2
strokeWeight(5)
line(210,156,222,150)
line(222,150,228,159)
line(228,160,241,153)
line(241,153,247,158)

stroke(2, 1, 18) //bird 3
strokeWeight(5)
line(277,134,285,130)
line(285,130,290,137)
line(290,137,299,133)
line(299,133,308,137)

stroke(2, 1, 18) //bird 4
strokeWeight(5)
line(289,90,299,86)
line(299,86,303,97)
line(303,97,315,93)
line(315,93,322,99)

stroke(2, 1, 18) //bird 5
strokeWeight(5)
line(326,149,339,143)
line(339,143,342,154)
line(342,154,353,148)
line(353,148,360,155)

stroke(2, 1, 18) //bird 6
strokeWeight(5)
line(353,100,360,92)
line(360,92,364,100)
line(364,100,371,94)
line(371,94,376,103)

stroke(2, 1, 18) //bird
strokeWeight(4)
line(450,97,456,91)
line(456,91,460,96)
line(460,96,466,91)
line(466,91,469,97)

stroke(2, 1, 18) //bird
strokeWeight(4)
line(456,112,462,106)
line(462,106,464,110)
line(464,110,467,107)
line(467,107,472,111)

stroke(2, 1, 18) //bird
strokeWeight(4)
line(470,81,479,78)
line(479,78,484,85)
line(484,85,490,80)
line(490,80,496,84)

stroke(2, 1, 18) //bird
strokeWeight(4)
line(478,96,483,94)
line(483,94,486,99)
line(486,99,492,96)
line(492,96,500,100)

stroke(2, 1, 18) //bird
strokeWeight(4)
line(480,155,489,151)
line(489,151,499,162)
line(499,162,513,156)
line(513,156,527,167)

stroke(2, 1, 18) //bird
strokeWeight(4)
line(526,138,536,136)
line(536,136,540,144)
line(540,144,549,140)
line(549,140,559,151)

stroke(2, 1, 18) //bird
strokeWeight(4)
line(527,92,541,87)
line(541,87,553,98)
line(553,98,569,93)
line(569,93,573,99)

stroke(2, 1, 18) //bird
strokeWeight(4)
line(546,112,549,115)
line(549,115,553,112)

stroke(2, 1, 18) //bird
strokeWeight(4)
line(532,102,534,106)
line(534,106,541,101)

stroke(2, 1, 18) //bird
strokeWeight(4)
line(546,99,549,102)
line(549,102,554,100)

stroke(2, 1, 18) //bird
strokeWeight(4)
line(559,103,561,107)
line(561,107,565,104)

stroke(2, 1, 18) //bird
strokeWeight(4)
line(582,78,585,83)
line(586,87,591,82)

stroke(2, 1, 18) //bird
strokeWeight(4)
line(603,80,605,85)
line(605,85,609,82)

}

// this function will print coordinates to the console whenever you click
function mouseClicked() {
    print(int(mouseX), int(mouseY))
}
