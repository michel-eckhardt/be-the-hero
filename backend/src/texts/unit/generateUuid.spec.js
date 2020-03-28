const generateUuid = require('../../utils/generateUuid')

describe('Generate Unique ID', () =>{
    it('gera um uuid',()=> {
        let id = generateUuid();
        expect(id).toHaveLength(8);
    }) 
})