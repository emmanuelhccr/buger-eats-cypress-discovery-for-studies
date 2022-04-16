var faker = require('faker')
var cpf = require('gerador-validador-cpf')
export default {

    deliver: function() {

        var firstName = faker.name.firstName()
        var lastName = faker.name.lastName()

        var data = {
            name: `${firstName} ${lastName}`,
            cpf: cpf.generate(),
            email: faker.internet.email(firstName),
            whatsapp: '79999999999',
            address: {
                postalcode: '49032360',
                street: 'Rua Tenente Antônio Fontes Pitanga',
                number: '256',
                details: 'Ap 123',
                district: 'Farolândia',
                city_state: 'Aracaju/SE'
             },
             delivery_method: 'Moto',
             cnh: 'cnh-digital.jpg'
        }

        return data
    }
}