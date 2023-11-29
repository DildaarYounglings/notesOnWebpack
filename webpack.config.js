/* this below is an example of how the webpack config file must be constructed */
/*  if mode property is set to production if you dont specify  */
module.exports = {
  mode:"developement"
  entry:"./src/index.js",
  output:{
    filename:"main.js",
    path:"./dist"
  }
}
/*  in yor package.json file add the following  */
scripts:{
  start:"webpack --config webpack.config.js"
}
/*  in the above string the "--config" is immeadiatly followed by the name of the config file such as "webpack.config.js" take note the file name can be anything you want it to be  */
