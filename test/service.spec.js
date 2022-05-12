const chai = require("chai");
const sinon = require("sinon");
const expect = chai.expect;
const { faker } = require("@faker-js/faker");

const urlShortenerRepository = require("../src/modules/main/repository/urlShortenerRepository");
const UrlShorteningService = require("../src/modules/main/services/urlShortener.services");

describe("Url Service", function() {
    describe("Shorten Url: Success", function(){
        it("it should shorten a given url and short code", async function(){
            const spyValue = {
                shortcode: faker.random.alphaNumeric(),
                url: faker.internet.url(),
                redirectCount: 1,
                lastSeenDate: faker.date.past(),
                startDate: faker.date.past()
            }

            const urlRepo = new urlShortenerRepository();
            const stub = sinon.stub(urlRepo, "shortenUrl").returns(spyValue);
            const urlService = new UrlShorteningService(urlRepo);
            const shortendUrl = await urlService.shortenUrl(spyValue);
            expect(stub.calledOnce).to.be.true;
            expect(shortendUrl.shortcode).to.be.equal(spyValue.shortcode);
            expect(shortendUrl.url).to.be.equal(spyValue.url);
            expect(shortendUrl.startDate).to.be.equal(spyValue.startDate);
            
        })
    })

    describe("Shorten Url: Success", function(){
        it("it should get shortcode details", async function(){
            const spyValue = {
                shortcode: faker.random.alphaNumeric(),
                url: faker.internet.url(),
                redirectCount: 1,
                lastSeenDate: faker.date.past(),
                startDate: faker.date.past()
            }
            const urlRepo = new urlShortenerRepository();
            const stub = sinon.stub(urlRepo, "getUrl").returns(spyValue);
            const urlService = new UrlShorteningService(urlRepo);
            const shortendUrl = await urlService.getUrl(spyValue.shortcode);
            expect(stub.calledOnce).to.be.true;
            expect(shortendUrl.shortcode).to.be.equal(spyValue.shortcode);
            expect(shortendUrl.url).to.be.equal(spyValue.url);
            expect(shortendUrl.startDate).to.be.equal(spyValue.startDate);
        })
    })
})