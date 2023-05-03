class TicketManager {
    #events
    // #counter
    #error
    constructor() {
        // this.#counter = 1
        this.#events = []
        this.#error = undefined
    }

    getEvents = () => this.#events

    getEventById = (id) => {
        const event = this.#events.find(item => item.id === id)
        if (!event) return 'Not Found'
        return event
    }

    #generateId = () => (this.#events.length === 0) ? 1 : this.#events[this.#events.length-1].id + 1

    #validateEvent = (name, artist, code, price, capacity, thumbnail) => {
        if (!name || !artist || !code || !price || !capacity || !thumbnail) {
            // return `[${name}]: campos incompletos`
            this.#error = `[${name}]: campos incompletos`
        } else {
            const found = this.#events.find(item => item.code === code)
            // if (!found) return this.#error = undefined
            // else return `[${name}]: el code ya existe`
            if (found) this.#error = `[${name}]: el code ya existe`
            else this.#error = undefined
        }
    }

    addEvent = (name, artist, code, price, capacity, thumbnail) => {
        // const id = this.#counter++
        // let id
        // if (this.#events.length === 0) id = 1
        // else id = this.#events[this.#events.length-1].id + 1
        this.#validateEvent(name, artist, code, price, capacity, thumbnail)
        if (this.#error === undefined) 
            this.#events.push({id: this.#generateId(), name, artist, code, price, capacity, thumbnail})
        else 
            console.log(this.#error)
    }
}

const ticketManager = new TicketManager()
ticketManager.addEvent('Session 53', 'Shakira', '10001', 500, 5000, 'https://infomercado.pe/wp-content/uploads/2023/01/shakiraaa.jpg')
ticketManager.addEvent('10001', 80000)  //error!! Faltan  datos
ticketManager.addEvent('La Respuesta 1', 'Piqué', '10002', 200, 80000, 'https://infomercado.pe/wp-content/uploads/2023/01/shakiraaa.jpg')
ticketManager.addEvent('La Respuesta 2', 'Piqué', '10001', 200, 80000)  //error!! Codigo repetido
console.log(ticketManager.getEvents())
console.log(ticketManager.getEventById(2))
console.log(ticketManager.getEventById(1))
console.log(ticketManager.getEventById(9))