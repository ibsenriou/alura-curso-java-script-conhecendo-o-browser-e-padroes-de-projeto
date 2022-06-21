class Codigo {
    constructor(codigo) {
        this._codigo = codigo;
    }

    validaCodigo(codigo) {
        let codigoValido = /\D{3}-\D{2}-\d{2}/
        if (codigoValido.test(codigo)) {
            return console.log('Código válido')
        } else {
            return console.log('Código inválido')
        }
    }
}