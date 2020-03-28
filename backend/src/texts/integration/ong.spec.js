 const request = require('supertest')
 const app = require('../../app')
 const connection = require('../../db/connection')

 describe('ONG', () => {
     beforeEach(async () => {
        await connection.migrate.rollback();
        await connection.migrate.latest();
     })

     afterAll(async () =>{
        await connection.migrate.destroy();
     })

     it('', async () =>{
         const response = await request(app)
            .post('/ongs')
            .send({
                name: "TESTE NAME",
                email: "teste@email.com.br",
                whatsapp: "24436770",
                city: "São Gonçalo",
                uf: "RJ"
            });
        expect(response.body).toHaveProperty('id');
        expect(response.body.id).toHaveLength(8);
    });
 });