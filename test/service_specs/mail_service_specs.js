import { expect, sinon } from '../common.test';
import { MailService } from '../../app/services';
describe("MailService",()=>{
    const sandbox = sinon.createSandbox();
    describe("message",()=>{
        before(()=>{
            // sandbox.stub()
        });
        after(()=>{
            sandbox.restore();
        })
        it("static", (done)=>{
            expect(MailService.message()).to.eventually.equal("Hello World!");
            done();
        });
    });
});