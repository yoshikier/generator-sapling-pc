/**
 * Created by xiangwenwen on 16/4/11.
 */

var base = require('base-extend-backbone');
var BaseModel = base.Model;
var Config = require('config');
var env = Config.env[Config.scheme];

var Model = BaseModel.extend({
    url:'{{url_prefix}}/index?id={{id}}',
    //headers:{},
    beforeEmit:function(options){
        if(/^\{{0,2}(url_prefix)\}{0,2}/.test(this.url)){
            this.url = this.url.replace('{{url_prefix}}',env['url_prefix']);
        }
    }
    //validate:function(atts){
    //
    //},
    //formatter:function(response){
    //   return response
    //},
    //defaults:function(){}
});
var shared = null;
Model.sharedInstanceModel = function(){
  if(!shared){
      shared = new Model()
  }
  return shared;
};
module.exports = Model;