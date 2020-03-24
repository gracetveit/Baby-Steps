You can access command-line arguments via the global process object. The
  process object has an argv property which is an array containing the
  complete command-line. i.e. process.argv.

  To get started, write a program that simply contains:
                                                                                                     ded-terminal-menu\node_modules\readable-stream\lib\_stream_writable.js:144:12)
     console.log(process.argv)                                                                       ode\node_modules\extended-terminal-menu\node_modules\readable-stream\lib\_stream_writable.js:192:5)       

  Run it with node baby-steps.js and some numbers as arguments. e.g:
                                                                                                     nheritance-fix\index.js:96:10)
     $ node baby-steps.js 1 2 3                                                                      nheritance-fix\index.js:114:10)
                                                                                                     dules\extended-terminal-menu\index.js:208:24)
  In which case the output would be an array looking something like:                                 node_modules\extended-terminal-menu\index.js:50:18)
                                                                                                     node\node_modules\extended-terminal-menu\node_modules\readable-stream\lib\_stream_transform.js:184:10)    
     ['node', '/path/to/your/baby-steps.js', '1', '2', '3']                                          unode\node_modules\extended-terminal-menu\node_modules\readable-stream\lib\_stream_transform.js:172:12)   

  You'll need to think about how to loop through the number arguments so                             \node_modules\duplexer2\index.js:50:19)
  you can output just their sum. The first element of the process.argv array
  is always 'node', and the second element is always the path to your                                ded-terminal-menu\node_modules\readable-stream\lib\_stream_writable.js:146:10)
  baby-steps.js file, so you need to start at the 3rd element (index 2),                             ode\node_modules\extended-terminal-menu\node_modules\readable-stream\lib\_stream_writable.js:192:5)       
  adding each item to the total until you reach the end of the array.
                                                                                                     node_modules\extended-terminal-menu\index.js:50:18)
  Also be aware that all elements of process.argv are strings and you may
  need to coerce them into numbers. You can do this by prefixing the
  property with + or passing it to Number(). e.g. +process.argv[2] or
  Number(process.argv[2]).

  Check to see if your program is correct by running this command:

     $ learnyounode verify baby-steps.js

  learnyounode will be supplying arguments to your program when you run
  learnyounode verify baby-steps.js so you don't need to supply them
  yourself. To test your program without verifying it, you can invoke it
  with learnyounode run baby-steps.js. When you use run, you are invoking
  the test environment that learnyounode sets up for each exercise.