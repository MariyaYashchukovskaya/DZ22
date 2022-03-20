class Text {

    constructor() {
        this.formElement = document.querySelector('#form')
        this.containerElement = document.querySelector('#container')

        this.init()
    }

    init() {
        this.formElement.addEventListener('submit', this.handleSubmitFormElement.bind(this))
    }

    handleSubmitFormElement(event){
        event.preventDefault()

        const formData= new FormData(this.formElement)

        for (let [name, value] of formData){            
            this.containerElement.innerHTML+=value
            .replace(/^\#\s(.+)/gim, '<h1>$1</h1>')
            .replace(/^\#{2}\s(.+)/gim, '<h2>$1</h2>')
            .replace(/^\#{3}\s(.+)/gim, '<h3>$1</h3>')
            .replace(/^\#{4}\s(.+)/gim, '<h4>$1</h4>')
            .replace(/\*\*(.+?)\*\*/gim, '<strong>$1</strong>')
            .replace(/\~\~(.+?)\~\~/gim, '<strike>$1</strike>')
            .replace(/(\[(.+?)\])(\((.+?)\))/gim, '<a href="$4" target="_blank">$2</a>')
            .replace(/\`(.+?)\`/gim, '<code>$1</code>')
            .replace(/\-{3}\s/gim, '<hr>')
            .replace(/\[\+\+(.+?)\+\+\]/gim, '<span class="text-success">$1</span>')
            .replace(/\[\-\-(.+?)\-\-\]/gim, '<span class="text-danger">$1</span>')

            .replace(/^\-\s(.+)/gim, '<li>$1</li>')
            .replace(/(<li>(.+)<li>)/gim, '<ul>$1</ul>')
            
        }


        this.formElement.reset()
    }

}

new Text()