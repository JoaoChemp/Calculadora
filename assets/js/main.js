function Calculadora() {

    // ATRIBUTOS

    this.display = document.querySelector('.display')

    // MÉTODOS

    this.inicia = () => {
        this.cliqueBotoes();
        this.pressionaTecla();
    };

    this.cliqueBotoes = () => {
        document.addEventListener('click', (e) => {

            const el = e.target;

            if(el.classList.contains('btn-num')) {
                 this.display.value += el.innerText;
            }

            if(el.classList.contains('btn-clear')) this.display.value = ' ';

            if(el.classList.contains('btn-eq')) {
              
                try {
                    if(!this.display.value) return
                    this.realizaConta()
                } catch {
                    alert('conta inválida')
                }
            } 

            if(el.classList.contains('btn-del')) this.delete();

        })
    };

    this.pressionaTecla = () => {
        document.addEventListener('keyup', (e) => {

            if(e.keyCode === 13) {
                try {
                    if(!this.display.value) return
                    this.realizaConta()
                } catch {
                    alert('conta inválida')
                }
            }

            if(e.keyCode === 8) this.delete();

            if(!isNaN(e.key)) this.display.value += e.key;
            
            switch(e.key) {
                case '/': this.display.value += '/';
                break;
                case '*': this.display.value += '*';
                break;
                case '-': this.display.value += '-';
                break;
                case '+': this.display.value += '+';
            }

            
        })
    }

    this.realizaConta = () => {
        valor = eval(this.display.value)
        this.display.value = valor;
        document.querySelector('.display').focus()
    }

    this.delete = () => {
        const del = this.display.value.slice(0, -1);
        this.display.value = del;
    }
    
}

const calculadora = new Calculadora();
calculadora.inicia();