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

webide.module("treeview", function(){
    this.treeview = {
        /**
         * Function to create treeview
         * 
         * @param string id
         * @return void
         */
        create: function(id){
            $(id).each(function(){
                $(this).fancytree({
                    clickFolderMode: 2,
                    extensions: ["glyph"],
                    createNode: function(event, data){
                        webide.treeview._bindContextMenu(data.node, data.node.span, data.node.data.type);
                    },
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
            });
        },
        
        /**
         * Function for associating contextmenu
         * 
         */
        _bindContextMenu: function(node, span, type){
            switch(type){
                case "container": 
                    $(span).contextMenu({menu: "containerContextMenu"}, function(action, el, pos) {
                        console.log(node);
                        switch(action){
                            case "build": webide.terminal.exec(node.key, "docker-compose build --no-cache --force-rm", "workspace:refresh"); break;
                            case "create": webide.terminal.exec(node.key, "docker-compose create --force-recreate --build ", "workspace:refresh"); break;
                            case "start": webide.terminal.exec(node.key, "docker-compose start " + node.data.serviceName, "workspace:refresh"); break;
                            case "restart": webide.terminal.exec(node.key, "docker-compose restart " + node.data.serviceName, "workspace:refresh"); break;
                            case "pause": webide.terminal.exec(node.key, "docker-compose pause " + node.data.serviceName, "workspace:refresh"); break;
                            case "unpause": webide.terminal.exec(node.key, "docker-compose unpause " + node.data.serviceName, "workspace:refresh"); break;
                            case "stop": webide.terminal.exec(node.key, "docker-compose stop " + node.data.serviceName, "workspace:refresh"); break;
                            case "up": webide.terminal.exec(node.key, "docker-compose up -d --build --remove-orphans", "workspace:refresh"); break;
                            case "down": webide.terminal.exec(node.key, "docker-compose down --remove-orphans", "workspace:refresh"); break;
                            case "settings": webide.file.open(node.key + "/docker-compose.yml");  break;
                            case "exec": webide.terminal.exec(node.key); break;
                        }
                    });
                break;
                case "folder": 
                    $(span).contextMenu({menu: "diretoryContextMenu"}, function(action, el, pos) {
                        switch(action){
                            case "open": break;
                        }
                    });
                break;
                case "file": 
                    $(span).contextMenu({menu: "fileContextMenu"}, function(action, el, pos) {
                        switch(action){
                            case "open": webide.file.open(node.key); break;
                        }
                    });
                break;
            }
        }
    };
        
    webide.treeview.create(".wi-treeview");       
});