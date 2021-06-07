class Dollynho {
    dale() {
        return true
    }

    dolly() {
        if(this.dale()) {
            console.log('dolly')
        }
    }
}

const teste = new Dollynho

teste.dolly()