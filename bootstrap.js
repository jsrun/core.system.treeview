/**
 *  __          __  _    _____ _____  ______ _______                  _               
 *  \ \        / / | |  |_   _|  __ \|  ____|__   __|                (_)              
 *   \ \  /\  / /__| |__  | | | |  | | |__     | |_ __ ___  _____   ___  _____      __
 *    \ \/  \/ / _ \ '_ \ | | | |  | |  __|    | | '__/ _ \/ _ \ \ / / |/ _ \ \ /\ / /
 *     \  /\  /  __/ |_) || |_| |__| | |____ _ | | | |  __/  __/\ V /| |  __/\ V  V / 
 *      \/  \/ \___|_.__/_____|_____/|______(_)|_|_|  \___|\___| \_/ |_|\___| \_/\_/                                                                                
 *                                                                            
 *  @author André Ferreira <andrehrf@gmail.com>
 *  @license MIT
 */

"use strict";

let SystemException = require("../wi.core.exception.js"),
    TemplateEngine = require("../wi.core.template.js");

module.exports = {    
    /**
     * List module assets
     * @type object
     */
    assets: {
        js:  [__dirname + "/node_modules/jquery.fancytree/dist/jquery.fancytree-all.min.js", __dirname + "/node_modules/jquery.fancytree/lib/contextmenu-abs/jquery.contextMenu-custom.js"],
        css: [__dirname + "/node_modules/jquery.fancytree/dist/skin-awesome/ui.fancytree.min.css", __dirname + "/node_modules/jquery.fancytree/lib/contextmenu-abs/jquery.contextMenu.css"]
    },
    
    /**
     * Function to generate template
     * 
     * @param object webide
     * @return string
     */
    getTemplate: function(settings, dirname, argv, app, i18n, passport, mongodb, webide){
        return TemplateEngine(__dirname + "/template.ejs").seti18n(i18n).render();
    }
};