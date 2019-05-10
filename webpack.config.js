/*create a json object
  with the following keys
    entry(entrypoint)
    output (where the bundle goes)
    module (contains the rules (babel presets) for transpiling my code)
*/
module.exports ={
    entry: './client/src/index.jsx',
    ouput: {
        path: './client/src/bundle.js'
    },
    module: {
        rules: [
            
        ]
    }

}