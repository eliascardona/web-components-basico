////////////////////////////////////////////////////////////////
///////////          WEB COMPONENTS            ////////////////
///////////////////////////////////////////////////////////////

/**
 *	@comentario:
 *
 * Los web components son una 'feature' estándar en los navegadores modernos.
 *
 *  El primer 'componente web' (custom element) lo escribí yo.
 *  Me base en el tutorial de YouTube que te compartí por whats.
 *
 *  El segundo componente lo escribió chat GPT, es el más aterrizado para nuestro proyecto,
 *  sin embargo, aun es necesario pulirlo un poco. De momento te dejo los dos para que veas
 *  como funcionan.
 *
 * */
class ComponenteWeb extends HTMLElement {
 	constructor() {
 		super()
 		let shadow = this.attachShadow({ mode: 'open' })
 		this.strongEl = document.createElement('strong')
 		shadow.appendChild(this.strongEl)
 	}
	// fin del método constructor (un método universal en JS POO)

 	connectedCallback() {
 		let wcUsername = this.getAttribute('wc-username')

 		this.strongEl.innerHTML = `
 			<div style="margin: 4rem 3rem; padding: 2rem; border-radius: 1em; box-shadow: rgba(100, 100, 100, 0.3) 0px 2px 4px 0px;">
				<span>hola</span>

				<strong>
					${wcUsername}
				</strong>
 			</div>
 		`
 		this.strongEl.addEventListener('click', (e) => {
 			console.log('click en custom element')
 		})
	}
	// fin de connectedCallback (reservado para web components)
}

customElements.define('componente-web', ComponenteWeb)
// fin del primer customm element


/*  custom element escrito por chat GPT   */

class CustomSelect extends HTMLElement {
	constructor() {
	  super();
  
	  this.shadow = this.attachShadow({ mode: 'open' });
	  this.selectEl = document.createElement('select');
	  this.shadow.appendChild(this.selectEl);
	}
  
	connectedCallback() {
	  const wcId = this.getAttribute('wc-id');
	  const wcName = this.getAttribute('wc-name');
	  this.selectEl.setAttribute('id', wcId);
	  this.selectEl.setAttribute('name', wcName);
  
	  const options = JSON.parse(this.getAttribute('options'));
	  this.renderOptions(options);
  
	  this.selectEl.addEventListener('change', (e) => {
		console.log(e.target.value);
	  });
	}
  
	renderOptions(options) {
	  this.selectEl.innerHTML = '';
	  options.forEach((option) => {
		const optionEl = document.createElement('option');
		optionEl.value = option.value;
		optionEl.textContent = option.label;
		this.selectEl.appendChild(optionEl);
	  });
	}
}
  
  
customElements.define('mi-select', CustomSelect);





