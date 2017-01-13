/**
 *  __          __  _    _____ _____  ______ 
 *  \ \        / / | |  |_   _|  __ \|  ____|
 *   \ \  /\  / /__| |__  | | | |  | | |__   
 *    \ \/  \/ / _ \ '_ \ | | | |  | |  __|  
 *     \  /\  /  __/ |_) || |_| |__| | |____ 
 *      \/  \/ \___|_.__/_____|_____/|______|
 *                                                                            
 *  @author André Ferreira <andrehrf@gmail.com>
 *  @license MIT
 */

"use strict";

let SystemException = require("../wi.core.exception.js");

module.exports = {    
    /**
     * List module assets
     * @type object
     */
    assets: {
        js: [__dirname + "/mar10/fancytree/dist/jquery.fancytree-all.min.js"],
        css: [__dirname + "/mar10/fancytree/dist/skin-win8/ui.fancytree.min.css"]
    }
};