/**
* TabbedPanel.js
*  
*
*/

function TabbedPanel(elm) {
    var self = this;
    
    this.DOM = {
        container: elm,
        tabbar: elm.querySelector('ul'),
        tabbarButtons: Array.prototype.slice.call(elm.querySelectorAll('ul > li')),
        
        tabs: elm.querySelector('div.tabs'),
        tabList: Array.prototype.slice.call(elm.querySelectorAll('div.tabs > div'))
    }
    
    this.index = 0;
    this.length = this.DOM.tabList.length;
    
    this.DOM.tabbar.onclick = function(e){
        var target = e.target;
        
        var index;
        if(self.DOM.tabbar.contains(target)){
            
            do{
                index = self.DOM.tabbarButtons.indexOf(target);
                if(index>-1) break;
            }
            while(target=target.parentElement);
            
            if(!target.classList.contains('disabled'))
                if(self.index!=index)    
                    self.setIndex(index);
        }
    }
    
    //Show the first tab as default
    self.setIndex(0);
}

TabbedPanel.prototype.setIndex = function(index){
    var self = this;
    
    if(index>-1 && index<self.length){
        //hide current tab
        self.DOM.tabbarButtons[self.index].classList.remove('active');
        self.DOM.tabList[self.index].classList.remove('active');
        
        //show tab
        self.DOM.tabbarButtons[index].classList.add('active');
        self.DOM.tabList[index].classList.add('active');
        
        //update index
        self.index = index;
    }
}
