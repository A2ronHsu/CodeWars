// Write a function "greet" that returns "hello world!"
greet = ()=> "hello world!";

console.log(greet()); // aqui o hello world classico

//outros warriors fizer assim

function greet2(){
	var a=0
  	var abc=['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l',
  	'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
  	var hello = [];
  	var world = [];
			              a++;    a++;  a++;a++;  a++;      a++;      a++;a--;a++;
hello.push(abc[a]); a++;    a++;  a--;      a--;      a--;      a--;    a--;
hello.push(abc[a]); a++;a++;a++;  a++;a--;  a++;      a++;      a++;    a++;
hello.push(abc[a]); a++;    a++;  a--;      a--;      a++;      a--;    a=a;
hello.push(abc[a]);	a++;    a--;  a++;a++;  a--;a++;  a--;a++;  a++;a--;a++;
hello.push(abc[a]);

					 
      			        a++;		      a++;  a++;a++;a++;  a++;a--;a++;  a=a;      a++;a++;
world.push(abc[a]);  a--;		     a--;   a--;    a--;  a--;    a--;  a--;      a--;   a=a;
world.push(abc[a]);   a++;	    a++;    a++;    a--;  a--;a--;      a++;      a++;    a++;
world.push(abc[a]);    a--;a++;a--;     a--;    a--;  a--;  a++;    a--;      a--;   a--;
world.push(abc[a]);     a--;  a--;      a--;a--;a--;  a--;    a--;  a--;a++;  a=a;a--;
world.push(abc[a]);

	return hello.join("") + " " + world.join("")+"!";
}

console.log(greet2());

//ou assim 

const greet3 = () => {
    const hello = ["h", "e", "l", "l", "o", " ", "w", "o", "r", "l", "d", "!"] ;
    let result = "";
  
    for (let indexFromHelloWorldArray = 0; indexFromHelloWorldArray < hello.length; indexFromHelloWorldArray++ ){
      result = result + hello[indexFromHelloWorldArray];
    }
    // Checking for result[0] is really "h"...
    if( result[0] === "h"){
      // ...Checking for result[1] is really "e"
      if( result[1] === "e"){
        // Checking for the "l"
        if( result[2] === "l"){
          /* checking for the second "l" becouse
          the second "l" is the most important
          letter in the hello world */
          if( result[3] === "l"){
            // Have you ever seen hello world without "o" ???
            if( result[4] === "o"){
              // Here is a big spaaaaaaaaaaaaace!!!!!111!!1!!!one!!!11one!
              if( result[5] === " "){
                // Hey it's a "W"
                if( result[6] === "w"){
                  // I have dejavu... Have u ever seen letter "o" before?
                  if( result[7] === "o"){
                    // Can anybody read this?
                    if( result[8] === "r"){
                      // Hmm again an important "l" letter! Never forget it.
                      if( result[9] === "l"){
                        // Deluckchuck - Good bye
                        if( result[10] === "d"){
                          // Greetings from Hungary (Pálinka!!)
                          if( result[11] === "!"){
                            return result;
                          } else {
                            greet();
                          }     
                        } else {
                          greet();
                        }
                      } else {
                        greet();
                      } // I have no idea what I am doing right now
                    } else {
                      greet();
                    }
                  } else {
                    greet();
                  }
                } else {
                  greet();
                }
              } else {
                greet();
              }
            } else {
              greet();
            }
          } else {
            greet();
          }
        } else {
          greet();
        }
      } else {
        greet();
      }
    } else {
      greet();
    }
  // 14.01.2021 team Potato
  }

console.log(greet3());