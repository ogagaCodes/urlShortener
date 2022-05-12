const UrlModel = require("../database/models/url.model");

class urlShortenerRepository {
    constructor(){
        this.Url = UrlModel;
        // this.Url.syncIndexes({ force: true})
    }

    async shortenUrl(data){
        return this.Url.create({...data});
    }

    
    async getUrl(shortcode){
        return this.Url.findOne({shortcode:shortcode});
    }
}

module.exports = urlShortenerRepository;