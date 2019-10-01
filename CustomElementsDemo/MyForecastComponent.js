class ForecastComponent extends HTMLElement {

    constructor() {
        super();
        // Create a shadow root
        const shadow = this.attachShadow({ mode: 'open' });
        const div = document.createElement('div');
        this.temperature = document.createElement('div');
        this.dateAndTime = document.createElement('div');
        this.description = document.createElement('div');
        this.temperature.textContent = this.getAttribute('weather-temperature');
        this.dateAndTime.textContent = this.getAttribute('weather-datetime');
        this.description.textContent = this.getAttribute('weather-description');

        div.appendChild(this.dateAndTime);
        div.appendChild(this.temperature);
        div.appendChild(this.description);
        div.appendChild(document.createElement('hr'));
        shadow.appendChild(div);
    }

    static get observedAttributes() { return ['weather-temperature', 'weather-datetime', 'weather-description']; }

    attributeChangedCallback(name, oldValue, newValue) {
        console.log(`${name} has changed`);
        if (name === 'weather-temperature')
            this.temperature.textContent = newValue;
        else if (name === 'weather-datetime')
            this.dateAndTime.textContent = newValue;
        else if (name === 'weather-description')
            this.description.textContent = newValue;
    }
}

customElements.define('weather-forecast', ForecastComponent);
