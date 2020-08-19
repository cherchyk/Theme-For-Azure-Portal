/* Function to add style element */ 
function addStyle(styles) { 
              
	/* Create style document */ 
	var css = document.createElement('style'); 
	css.type = 'text/css'; 
  
	if (css.styleSheet)  
		css.styleSheet.cssText = styles; 
	else  
		css.appendChild(document.createTextNode(styles)); 
	  
	/* Append style to the tag name */ 
	document.getElementsByTagName("html")[0].append(css); 
} 
  
/* Set the style */ 
var customStyles = `

.fxs-mode-dark .fxs-portal-bg-txt-br,

.fxs-mode-dark .fxc-menu-grid .ext-fxc-menu-item,

.fxs-mode-dark .azc-toolbar-item, .fxs-mode-dark .msportalfx-command-like-button,
 
.fxs-mode-dark a.azc-toolbarButton-container,

.fxs-mode-dark .fxc-pill-read-container,

.fxs-mode-dark .fxc-pill-collection-add-label,

.fxs-mode-dark .azc-input  {
  color: #a5a5a5 !important;
  /*
  color: #a5a5a5;
  color: #ec9765;
  color: #69b0d7;
  */
}



.fxs-mode-dark .fxs-blade-locked, .fxs-mode-dark .fxs-portal-background,

.fxs-mode-dark .fxs-portal-bg-txt-br  {
    background-color: #242424 !important;
}

.fxs-mode-dark .msportalfx-text-primary,

.fxs-mode-dark a
 {
  color: #69b0d7 !important;
}


.fxs-mode-dark .azc-toolbar-item, .fxs-mode-dark .msportalfx-command-like-button, .fxs-mode-dark a.azc-toolbarButton-container {
  fill: #69b0d7 !important;
}


a.fxs-topbar-reportbug.fxs-topbar-debug-button.fxs-topbar-search-activated-hidden {
  background-color: #3b5249 !important;
  color:#a5a5a5 !important;
}

`; 
  

addStyle(customStyles)