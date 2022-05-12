const chai = require("chai");
const sinon = require("sinon");
const expect = chai.expect;
const { faker } = require("@faker-js/faker");

const urlShortenerRepository = require("../src/modules/main/repository/urlShortenerRepository");

const UrlModel = require("../src/modules/main/database/models/url.model")

describe("Url Repository", function() {
    describe("Shorten Url: Success", function(){
        it("it should shorten url details", async function(){
            const spyValue = {
                shortcode: faker.random.alphaNumeric(),
                url: faker.internet.url(),
                redirectCount: 1,
                lastSeenDate: faker.date.past(),
                startDate: faker.date.past()
            }
            const stub = sinon.stub(UrlModel, "create").returns(spyValue);
            const urlRepo = new urlShortenerRepository();
            const shortendUrl = await urlRepo.shortenUrl(spyValue);
            expect(stub.calledOnce).to.be.true;
            expect(shortendUrl.shortcode).to.be.equal(spyValue.shortcode);
            expect(shortendUrl.url).to.be.equal(spyValue.url);
            expect(shortendUrl.startDate).to.be.equal(spyValue.startDate);
            
        })
    })

    describe("Shorten Url: Error", function(){
        it("it should get shortcode details", async function(){
            const spyValue = {
                shortcode: faker.random.alphaNumeric(),
                url: faker.internet.url(),
                redirectCount: 1,
                lastSeenDate: faker.date.past(),
                startDate: faker.date.past()
            }
            const stub = sinon.stub(UrlModel, "findOne").returns(spyValue);
            const urlRepo = new urlShortenerRepository();
            const shortendUrl = await urlRepo.getUrl(spyValue);
            expect(stub.calledOnce).to.be.true;
            expect(shortendUrl.shortcode).to.be.equal(spyValue.shortcode);
            expect(shortendUrl.url).to.be.equal(spyValue.url);
            expect(shortendUrl.startDate).to.be.equal(spyValue.startDate);
        })
    })
})