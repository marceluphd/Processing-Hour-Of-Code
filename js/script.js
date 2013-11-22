"use strict";

/*global helloEditor */
/*global Popcorn */
/*global $ */

/**
 * Script for Video One
 */

var scriptOne = {
    vimeoURL: "https://vimeo.com/77249859",
    exampleURL: null,
    runCache: null,
    reset: function () {
        // Set initial State

        $("#hint").hide();
        $("#editorContainer").hide();
        $("#canvasContainer").hide();
    },
    init: function (time) {

        helloEditor.popcorn = Popcorn.vimeo('#video', this.vimeoURL);
        helloEditor.popcorn.play(time);

        this.reset();

        // Popcorn Events

        helloEditor.popcorn
            .code({
                start: "01:15",
                onStart: function () {
                    helloEditor.videoMode = false;
                    helloEditor.resizeUI();
                },
                onEnd: function () {
                    helloEditor.videoMode = true;
                    helloEditor.resizeUI();
                }
            })
            .code({
                start: "01:22",
                onStart: function () {
                    $("#editorContainer").show();
                    helloEditor.setCode("");
                },
                onEnd: function () {
                    $("#editorContainer").hide();
                }
            })
            .code({
                start: "01:27",
                onStart: function () {
                    helloEditor.setCode("ellipse(250, 200, 400, 400);");
                },
                onEnd: function () {
                    helloEditor.setCode("");
                }
            })
            .code({
                start: "02:14",
                onStart: function () {
                    $("#editorCommands").show();
                },
                onEnd: function () {
                    $("#editorCommands").hide();
                }
            })
            .code({
                start: "02:41",
                onStart: function () {
                    $("#canvasContainer").show();
                },
                onEnd: function () {
                    $("#canvasContainer").hide();
                }
            })
            .code({
                start: "02:45",
                onStart: function () {
                    helloEditor.runCode();
                },
                onEnd: function () {
                    helloEditor.resetInstance();
                }
            })
            .code({
                start: "03:15",
                onStart: function () {
                    helloEditor.videoMode = true;
                    helloEditor.resizeUI();
                },
                onEnd: function () {
                    helloEditor.videoMode = false;
                    helloEditor.resizeUI();
                }
            });

        // End Event

        helloEditor.popcorn.on("ended", function () {

            helloEditor.showHint(1);

        });
    }
};

/**
 * Script for Video Two
 */

var scriptTwo = {
    vimeoURL: "https://vimeo.com/79984989",
    exampleURL: "/assets/pde/hello_1_drawing/hello_1_drawing.pde",
    runCache: null,
    reset: function () {
        // Set initial State

        $("#hint").hide();
        $("#editorContainer").hide();
        $("#canvasContainer").hide();
        $("#toggleRulers").hide();

        $("#resetButton").hide();
        $("#shareButton").hide();
        $("#nextButton").hide();
        $("#runButton").hide();
    },
    init: function (time) {

        helloEditor.popcorn = Popcorn.vimeo('#video', this.vimeoURL);
        helloEditor.popcorn.play(time);

        this.reset();

        // Popcorn Events

        helloEditor.popcorn
            // Leave video mode to introduce other UI elements
            .code({
                start: "04:25",
                onStart: function () {
                    helloEditor.videoMode = false;
                    helloEditor.resizeUI();
                }
            })
            // Show the editor, set the value to nothing
            .code({
                start: "04:28",
                onStart: function () {
                    $("#editorContainer").fadeIn("fast");
                    helloEditor.setCode("");
                }
            })
            // Manually set editor contents. This could come from a Gist or something.
            .code({
                start: "04:42",
                onStart: function () {
                    helloEditor.setCode("rect(250, 200, 150, 100);");
                }
            })
            // Show the canvas container
            .code({
                start: "04:57",
                onStart: function () {
                    $("#canvasContainer").fadeIn("fast");
                }
            })    
            // Show the rulers
            .code({
                start: "5:09",
                onStart: function () {
                    helloEditor.showRulers();
                }
            })        
            // Show the toggle button
            .code({
                start: "5:18",
                onStart: function () {
                    $("#toggleRulers").fadeIn("fast");
                }
            })   
            // Hide the rulers
            .code({
                start: "5:20",
                onStart: function () {
                    helloEditor.hideRulers();
                }
            })   
            // Show the rulers
            .code({
                start: "5:21",
                onStart: function () {
                    helloEditor.showRulers();
                }
            })                                     
            // Run whatever is in the editor
            .code({
                start: "05:29",
                onStart: function () {
                    helloEditor.runCode();
                }
            })
            // Show the run runButton
            .code({
                start: "05:57",
                onStart: function () {
                    $("#runButton").show();
                }
            })
            // Add one rectangels
            .code({
                start: "06:38",
                onStart: function () {
                    helloEditor.setCode("rect(250, 200, 150, 100);\n\nrect(50, 80, 40, 25);");
                }
            })
            // Add another rectangels
            .code({
                start: "06:39",
                onStart: function () {
                    helloEditor.setCode("rect(250, 200, 150, 100);\n\nrect(50, 80, 40, 25);\n\nrect(400, 10, 15, 100);");
                }
            })
            // Run whatever is in the editor
            .code({
                start: "06:40",
                onStart: function () {
                    helloEditor.runCode();
                }
            })            

            // Jump back to video mode for more explainations
            .code({
                start: "06:54",
                onStart: function () {
                    helloEditor.videoMode = true;
                    helloEditor.resizeUI();
                }
            })
            // Show the editor and canvas again and insert code
            .code({
                start: "8:19",
                onStart: function () {
                    helloEditor.videoMode = false;
                    helloEditor.resizeUI();

                    $("#editorContainer").fadeIn("fast");
                    $("#canvasContainer").fadeIn("fast");

                    helloEditor.setCode("rect(250, 200, 150, 100);");
                    helloEditor.runCode();
                }
            })
            .code({
                start: "08:28",
                onStart: function () {
                    helloEditor.setCode("rect(250, 200, 150, 100);\n\nellipse(250,200,200,200);");
                    helloEditor.runCode();
                }
            })  
            .code({
                start: "08:49",
                onStart: function () {
                    helloEditor.setCode("ellipse(250,200,200,200);\n\nrect(250, 200, 150, 100);");
                }
            })
            .code({
                start: "08:51",
                onStart: function () {
                    helloEditor.runCode();
                }
            });          


        // End Event

        helloEditor.popcorn.on("ended", function () {

            // Load the example here?

            helloEditor.loadCode(
                scriptTwo.exampleURL,
                function () {
                    helloEditor.runCode();
                }
            );

            // Show the proper hint over the video

            helloEditor.showHint(2);

        });
    }
};

/**
 * Script for Video Three
 */

var scriptThree = {
    vimeoURL: "https://vimeo.com/79984990",
    exampleURL: "/assets/pde/hello_2_color/hello_2_color.pde",
    runCache: null,
    reset: function () {
        // Set initial State

        helloEditor.videoMode = false;
        helloEditor.resizeUI();

        $("#hint").hide();
        $("#editorContainer").show();
        $("#canvasContainer").show();

        $("#resetButton").hide();
        $("#shareButton").hide();
        $("#nextButton").hide();
        $("#runButton").show();
    },
    init: function (time) {

        helloEditor.popcorn = Popcorn.vimeo('#video', this.vimeoURL);
        helloEditor.popcorn.play(time);

        this.reset();

        // Popcorn Events

        helloEditor.popcorn
            // Back to full screen
            .code({
                start: "00:19",
                onStart: function () {
                    helloEditor.videoMode = true;
                    helloEditor.resizeUI();

                    $("#editorContainer").hide();
                    $("#canvasContainer").hide();
                }
            })
            // Show the editor
            .code({
                start: "02:44",
                onStart: function () {
                    helloEditor.videoMode = false;
                    helloEditor.resizeUI();

                    $("#editorContainer").fadeIn("fast");
                    $("#canvasContainer").fadeIn("fast");

                    helloEditor.setCode("rect(250,200,100,75);");
                    helloEditor.runCode();
                }
            })
            // add stroke()
            .code({
                start: "02:48",
                onStart: function () {
                    helloEditor.setCode("stroke(0);\nrect(250,200,100,75);");
                    helloEditor.runCode();
                }
            })
            // add fill()
            .code({
                start: "02:50",
                onStart: function () {
                    helloEditor.setCode("stroke(0);\nfill(128);\nrect(250,200,100,75);");
                    helloEditor.runCode();
                }
            })
            // Back to video explanation
            .code({
                start: "3:00",
                onStart: function () {
                    helloEditor.videoMode = true;
                    helloEditor.resizeUI();

                    $("#editorContainer").hide();
                    $("#canvasContainer").hide();
                }
            })
            // RGB Demo -- back to code editor
            .code({
                start: "04:25",
                onStart: function () {
                    helloEditor.videoMode = false;
                    helloEditor.resizeUI();

                    $("#editorContainer").fadeIn("fast");
                    $("#canvasContainer").fadeIn("fast");
                }
            })
            // Now add red stroke
            .code({
                start: "04:34",
                onStart: function () {
                    helloEditor.setCode("stroke(255,0,0);\nfill(128);\nrect(250,200,100,75);");
                }
            })
            // Now add red stroke
            .code({
                start: "04:42",
                onStart: function () {
                    helloEditor.setCode("stroke(255,0,0);\nfill(0,0,255);\nrect(250,200,100,75);");
                }
            })
            // Now add red stroke
            .code({
                start: "04:45",
                onStart: function () {
                    helloEditor.runCode();
                }
            })
            // Show Color Picker
            .code({
                start: "04:56",
                onStart: function () {

                    $("#colorPicker").spectrum("container").css({
                        top: 28,
                        left: 20
                    });
                    $("#colorPicker").spectrum("show");

                }
            })
            // Hide color Picker
            .code({
                start: "05:05",
                onStart: function () {
                    $("#colorPicker").spectrum("hide");
                }
            })
            // Background Code
            .code({
                start: "05:34",
                onStart: function () {

                    helloEditor.setCode("background(216,225,149);\n\nstroke(255,0,0);\nfill(0,0,255);\nrect(250,200,100,75);");
                }
            })
            // Background Run
            .code({
                start: "05:41",
                onStart: function () {
                    helloEditor.runCode();
                }
            })
            // Example
            .code({
                start: "06:15",
                onStart: function () {
                    // Load example asynchronously with callback to run it
                    helloEditor.loadCode(
                        scriptThree.exampleURL,
                        function () {
                            helloEditor.runCode();
                        }
                    );

                }
            });

        // End Event

        helloEditor.popcorn.on("ended", function () {

            // Show the proper hint over the video

            helloEditor.showHint(3);

            $("#nextButton").show();
            $("#resetButton").show();

        });
    }
};

/**
 * Script for Video Four
 */

var scriptFour = {
    vimeoURL: "https://vimeo.com/79984988",
    exampleURL: "/assets/pde/hello_3_interact/hello_3_interact.pde",
    runCache: null,
    reset: function () {
        // Set initial State

        $("#hint").hide();
        $("#editorContainer").hide();
        $("#canvasContainer").hide();
    },
    init: function (time) {

        helloEditor.popcorn = Popcorn.vimeo('#video', this.vimeoURL);
        helloEditor.popcorn.play(time);

        this.reset();

        // Popcorn Events

        helloEditor.popcorn
            // Show the editor
            .code({
                start: "04:44",
                onStart: function () {
                    helloEditor.videoMode = false;
                    helloEditor.resizeUI();

                    $("#editorContainer").fadeIn("fast");
                    $("#canvasContainer").fadeIn("fast");

                    helloEditor.setCode("");
                    helloEditor.runCode();
                }
            })
            // add setup
            .code({
                start: "04:47",
                onStart: function () {
                    helloEditor.setCode("void setup() {\n\n}\n\n");
                }
            })
            // add draw
            .code({
                start: "04:48",
                onStart: function () {
                    helloEditor.setCode("void setup() {\n\n}\n\nvoid draw() {\n\n}");
                }
            })
            // add size
            .code({
                start: "04:55",
                onStart: function () {
                    helloEditor.setCode("void setup() {\n  size(500,400);\n}\n\nvoid draw() {\n\n}");
                }
            })
            // add background
            .code({
                start: "05:05",
                onStart: function () {
                    helloEditor.setCode("void setup() {\n  size(500,400);\n}\n\nvoid draw() {\n  background(0);\n}");
                }
            })
            // add some shapes
            .code({
                start: "05:07",
                onStart: function () {
                    helloEditor.setCode("void setup() {\n  size(500,400);\n}\n\nvoid draw() {\n  background(0);\n\n  stroke(255, 255, 255);\n  fill(160, 220, 90);\n  ellipse(250, 200, 300, 300);\n\n  fill(160, 210, 230);\n  rect(250, 200, 100, 75);\n}");
                }
            })
            // run it!
            .code({
                start: "05:17",
                onStart: function () {
                    helloEditor.runCode();
                }
            })
            // Back to video explanation
            .code({
                start: "5:48",
                onStart: function () {
                    helloEditor.videoMode = true;
                    helloEditor.resizeUI();

                    $("#editorContainer").hide();
                    $("#canvasContainer").hide();
                }
            })
            // Show the editor for mouseX mouseY demonstration
            .code({
                start: "07:31",
                onStart: function () {
                    helloEditor.videoMode = false;
                    helloEditor.resizeUI();

                    $("#editorContainer").fadeIn("fast");
                    $("#canvasContainer").fadeIn("fast");

                    helloEditor.setCode("void setup() {\n  size(500,400);\n}\n\nvoid draw() {\n  background(0);\n\n  stroke(255);\n  fill(128);\n  ellipse(250, 200, 100, 100);\n}");
                    helloEditor.runCode();
                }
            })
            // add mouseX and mouseY
            .code({
                start: "07:43",
                onStart: function () {
                    helloEditor.setCode("void setup() {\n  size(500,400);\n}\n\nvoid draw() {\n  background(0);\n\n  stroke(255);\n  fill(128);\n  ellipse(mouseX, mouseY, 100, 100);\n}");
                }
            })
            // run it!
            .code({
                start: "07:45",
                onStart: function () {
                    helloEditor.runCode();
                }
            })
            // background moves to setup
            .code({
                start: "09:39",
                onStart: function () {
                    helloEditor.setCode("void setup() {\n  size(500,400);\n  background(0);\n}\n\nvoid draw() {\n\n  stroke(255);\n  fill(128);\n  ellipse(mouseX, mouseY, 100, 100);\n}");
                }
            })
            // run it!
            .code({
                start: "09:56",
                onStart: function () {
                    helloEditor.runCode();
                }
            })
            // Example
            .code({
                start: "10:38",
                onStart: function () {
                    // Load example asynchronously with callback to run it
                    helloEditor.loadCode(
                        scriptFour.exampleURL,
                        function () {
                            helloEditor.runCode();
                        }
                    );

                }
            });

        // End Event

        helloEditor.popcorn.on("ended", function () {

            // Show the proper hint over the video

            helloEditor.showHint(4);

            $("#nextButton").show();
            $("#resetButton").show();

        });
    }
};

/**
 * Script for Video Five
 */

var scriptFive = {
    vimeoURL: "https://vimeo.com/79984987",
    exampleURL: "/assets/pde/hello_4_questions/hello_4_questions.pde",
    runCache: null,
    reset: function () {
        // Set initial State

        $("#hint").hide();
        $("#editorContainer").hide();
        $("#canvasContainer").hide();
    },
    init: function (time) {

        helloEditor.popcorn = Popcorn.vimeo('#video', this.vimeoURL);
        helloEditor.popcorn.play(time);

        this.reset();

        // Popcorn Events
        helloEditor.popcorn
            // Show the editor
            .code({
                start: "02:37",
                onStart: function () {
                    helloEditor.videoMode = false;
                    helloEditor.resizeUI();

                    $("#editorContainer").fadeIn("fast");
                    $("#canvasContainer").fadeIn("fast");

                    helloEditor.setCode("");
                    helloEditor.runCode();
                }
            })
            // add a circle
            .code({
                start: "02:40",
                onStart: function () {
                    helloEditor.setCode("void setup() {\n  size(500,400);\n}\n\nvoid draw() {\n  background(0);\n\n  stroke(255);\n  fill(128);\n  ellipse(250, 200, 100, 100);\n}");
                    helloEditor.runCode();
               }
            })
            // add an if statement
            .code({
                start: "02:50",
                onStart: function () {
                    helloEditor.setCode("void setup() {\n  size(500,400);\n}\n\nvoid draw() {\n  background(0);\n\n  stroke(255);\n  fill(128);\n  ellipse(250, 200, 100, 100);\n\n  if (mousePressed) {\n    rect(250,200,100,100);\n  }\n\n}");
                    helloEditor.runCode();
               }
            })
            // Back to video explanation
            .code({
                start: "3:13",
                onStart: function () {
                    helloEditor.videoMode = true;
                    helloEditor.resizeUI();

                    $("#editorContainer").hide();
                    $("#canvasContainer").hide();
                }
            })
            // And we're back
            .code({
                start: "04:00",
                onStart: function () {
                    helloEditor.videoMode = false;
                    helloEditor.resizeUI();

                    $("#editorContainer").fadeIn("fast");
                    $("#canvasContainer").fadeIn("fast");

                    helloEditor.setCode("void setup() {\n  size(500,400);\n}\n\nvoid draw() {\n  background(0);\n\n  stroke(255);\n  fill(128);\n  ellipse(250, 200, 100, 100);\n\n  if (mousePressed) {\n    rect(250,200,100,100);\n  }\n\n}");
                    helloEditor.runCode();
                }
            })
            
            // add an if statement
            .code({
                start: "04:05",
                onStart: function () {
                    helloEditor.setCode("void setup() {\n  size(500,400);\n}\n\nvoid draw() {\n  background(0);\n  stroke(255);\n  fill(128);\n\n  if (mousePressed) {\n    rect(250,200,100,100);\n  } else {\n     ellipse(250, 200, 100, 100);\n  }\n}");
                    helloEditor.runCode();
               }
            })
            

            // back to interact painting program
            .code({
                start: "04:30",
                onStart: function () {
                    helloEditor.setCode("void setup() {\n  size(500,400);\n  background(0);\n}\n\nvoid draw() {\n\n  stroke(255);\n  fill(128);\n  ellipse(mouseX, mouseY, 100, 100);\n}");
                    helloEditor.runCode();
               }
            })
            // add if statement to this
            .code({
                start: "04:46",
                onStart: function () {
                    helloEditor.setCode("void setup() {\n  size(500,400);\n  background(0);\n}\n\nvoid draw() {\n\n  if (mousePressed) {\n    background(0);\n  }\n\n  stroke(255);\n  fill(128);\n  ellipse(mouseX, mouseY, 100, 100);\n}");
                    helloEditor.runCode();
               }
            })
            // Back to video explanation
            .code({
                start: "5:15",
                onStart: function () {
                    helloEditor.videoMode = true;
                    helloEditor.resizeUI();

                    $("#editorContainer").hide();
                    $("#canvasContainer").hide();
                }
            })
            // And we're back
            .code({
                start: "05:50",
                onStart: function () {
                    helloEditor.videoMode = false;
                    helloEditor.resizeUI();

                    $("#editorContainer").fadeIn("fast");
                    $("#canvasContainer").fadeIn("fast");

                    helloEditor.runCode();
                }
            })  
            // Example
            .code({
                start: "5:58",
                onStart: function () {
                    // Load example asynchronously with callback to run it
                    helloEditor.loadCode(
                        scriptFive.exampleURL,
                        function () {
                            helloEditor.runCode();
                        }
                    );

                }
            });

        helloEditor.popcorn.on("ended", function () {

            // Show the proper hint over the video

            helloEditor.showHint(5);

            $("#nextButton").show();
            $("#resetButton").show();

        });
        // End Event
    }
};

/**
 * Script for Video Six
 */

var scriptSix = {
    vimeoURL: "https://vimeo.com/77249859",
    exampleURL: null,
    runCache: null,
    reset: function () {
        // Set initial State

        $("#hint").hide();
        $("#editorContainer").hide();
        $("#canvasContainer").hide();
    },
    init: function (time) {

        helloEditor.popcorn = Popcorn.vimeo('#video', this.vimeoURL);
        helloEditor.popcorn.play(time);

        this.reset();
    }
};

/**
 * Script catalog
 */

var scripts = [
    scriptOne, scriptTwo, scriptThree, scriptFour, scriptFive, scriptSix
];