const chai = require("chai");
const sinon = require("sinon");
const expect = chai.expect;
const { faker } = require("@faker-js/faker");

const UrlController = require("../src/modules/main/controllers/urlShortener.controller");
const urlShortenerRepository = require("../src/modules/main/repository/urlShortenerRepository");
const UrlShorteningService = require("../src/modules/main/services/urlShortener.services");

describe("UrlController", function() {
    describe("Create Url Record", function() {
      let status, json, res, urlController, urlService;
      beforeEach(() => {
        status = sinon.stub();
        json = sinon.spy();
        res = { json, status };
        status.returns(res);
        const urlRepo = sinon.spy();
        urlService = new UrlShorteningService(urlRepo);
      });

      it("should create a record  For A shortened Url", async function() {
        const req = {
          body: { shortcode: faker.random.alphaNumeric(), url: faker.internet.url(), redirectCount: 1, lastSeenDate: faker.date.past(), startDate: faker.date.past()}
        };
        const spyValue = {
            shortcode: faker.random.alphaNumeric(),
            url: faker.internet.url(),
            redirectCount: 1,
            lastSeenDate: faker.date.past(),
            startDate: faker.date.past()
        }
        const stub = sinon.stub(urlService, "shortenUrl").returns(spyValue);
        urlController = new UrlController(urlService);
        await urlController.shortenUrl(req, res);
        expect(stub.calledOnce).to.be.true;
        expect(status.calledOnce).to.be.true;
        expect(status.args[0][0]).to.equal(201);
        expect(json.calledOnce).to.be.true;
        expect(json.args[0][0].data).to.equal(stubValue);
      });
    });
  });