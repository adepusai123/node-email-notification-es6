import { expect, sinon } from '../common.test';
import { MailService } from '../../app/services';
import { MailController } from '../../app/controllers/v1';

describe("MailController", () => {
    const sandbox = sinon.createSandbox();
    const next = sinon.spy();
    const request = {
        body:{}
    };
    describe("Static method", () => {
        let result = "Hello World!";
        before(() => {
            sandbox.stub(MailService, 'message').resolves(result);
        });
        after(()=>{
            sandbox.restore();
        });
        it("welcome", async () => {
            let response = { send: sinon.spy() };
            MailController.welcome(request,response, next);
            expect(MailService.message.calledOnce).to.be.true;
            let msg = await MailService.message();
            expect(response.send.calledOnce).to.be.true;
            expect(response.send.firstCall.args[0]).to.be.equal(msg);
        });
    });
});