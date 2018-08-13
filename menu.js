const docmenu = (document.currentScript || document._currentScript).ownerDocument;

class Menu extends HTMLElement {

	//Constructeur à faire plus tard

	connectedCallback() {
		var menu = docmenu.querySelector('#theme-menu').content;
		const shadowRoot = this.attachShadow({mode: 'open'});
		const instance = document.importNode(menu, true);
		shadowRoot.appendChild(instance);
	}
}

customElements.define('theme-menu', Menu);