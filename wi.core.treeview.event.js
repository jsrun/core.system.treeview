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

(function(){
    $(".wi-treeview").each(function(){
        $(this).fancytree({
            extensions: ["glyph"],
            glyph: {
                map: {
                    doc: "fa fa-file-o",
                    docOpen: "fa fa-file-o",
                    checkbox: "fa fa-square-o",
                    checkboxSelected: "fa fa-check-square-o",
                    checkboxUnknown: "fa fa-square",
                    dragHelper: "fa fa-arrow-right",
                    dropMarker: "fa fa-long-arrow-right",
                    error: "fa fa-warning",
                    expanderClosed: "fa fa-caret-right",
                    expanderLazy: "fa fa-angle-right",
                    expanderOpen: "fa fa-caret-down",
                    folder: "fa fa-folder-o",
                    folderOpen: "fa fa-folder-open-o",
                    loading: "fa fa-spinner fa-pulse"
                }
            },
            source: {
                url: $(this).attr("rel"),
                cache: false
            },
            lazyLoad: function(event, data) {
                var node = data.node;

                data.result = {
                    url: $(this).attr("rel"),
                    data: {key: node.key}
                }
            },
            click: function(event, data) {
                if(!data.node.folder)
                    webide.file.open(data.node.key);
            }
        });
        
        $(this).mCustomScrollbar({set_height: "100%", theme:"inset"});
    });    
})();