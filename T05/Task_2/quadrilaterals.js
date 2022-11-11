// Asking user to enter the length for each side of quadrilateral

let side1 = Number(prompt("Please enter length of the first side:"));
let side2 = Number(prompt("Please enter length of the second side:"));;
let side3 = Number(prompt("Please enter length of the third side:"));;
let side4 = Number(prompt("Please enter length of the fourth side:"));;

let corner1 = Number(prompt("Please enter measurement of the first corner (N.B. total corners need to total exactly 360):"));
let corner2 = Number(prompt("Please enter measurement of the second corner (N.B. total corners need to total exactly 360):"));
let corner3 = Number(prompt("Please enter measurement of the third corner (N.B. total corners need to total exactly 360):"));
let corner4 = Number(prompt("Please enter measurement of the fourth corner (N.B. total corners need to total exactly 360):"));

switch (true) {
  // Checking for a SQUARE & RHOMBUS shape based on the sides measurements(all sides are equal)
  case side1 === side2 && side1 === side3 && side1 === side4:

    //Determining between two shapes based on the corners
    switch (true) {
      // SQUARE
      case corner1 === 90 && corner2 === 90 && corner3 === 90 && corner4 === 90:
        console.log(`Shape of your quadrilateral is a ➡️SQUARE⬅️ with the following measurements:

                Side 1: ${side1}
                Side 2: ${side2}
                Side 3: ${side3}
                Side 4: ${side4}
                        
                Corner 1: ${corner1}
                Corner 2: ${corner2}
                Corner 3: ${corner3}
                Corner 4: ${corner4}`);
        break;

      // RHOMBUS
      default:
        console.log(`Shape of your quadrilateral is a ➡️RHOMBUS⬅️ with the following measurements:

                Side 1: ${side1}
                Side 2: ${side2}
                Side 3: ${side3}
                Side 4: ${side4}
                        
                Corner 1: ${corner1}
                Corner 2: ${corner2}
                Corner 3: ${corner3}
                Corner 4: ${corner4}`);
        break;
    }

    break;

  // Remaining possible shapes are RECTANGLE and PARALLELOGRAM (opposite sides are equal)
    default:

    //Determining between two shapes based on the corners
        switch (true) {
        //RECTANGLE
        case corner1 === corner2 && corner1 === corner3 && corner1 === corner4:
            console.log(`Shape of your quadrilateral is a ➡️RECTANGULAR⬅️ with the following measurements:

                Side 1: ${side1}
                Side 2: ${side2}
                Side 3: ${side3}
                Side 4: ${side4}
                        
                Corner 1: ${corner1}
                Corner 2: ${corner2}
                Corner 3: ${corner3}
                Corner 4: ${corner4}`);
            break;
        // PARALLELOGRAM
        default:
            console.log(`Shape of your quadrilateral is a ➡️PARALLELOGRAM⬅️ with the following measurements:

            Side 1: ${side1}
            Side 2: ${side2}
            Side 3: ${side3}
            Side 4: ${side4}
                    
            Corner 1: ${corner1}
            Corner 2: ${corner2}
            Corner 3: ${corner3}
            Corner 4: ${corner4}`);
            break;
        }

    break;

}

