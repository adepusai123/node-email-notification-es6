import { expect, request, apiBase } from '../common.test';

describe("/mailer",()=>{
    describe("GET",()=>{
        it("it should return Helloworld ! message",(done)=>{
            request
            .get(`${apiBase}/mailer`)
            .expect(200)
            .end((error, response)=>{
                expect(error).to.be.null;
                expect(response.text).to.be.equal("Hello World!");
                done();
            });
        });
    });
});