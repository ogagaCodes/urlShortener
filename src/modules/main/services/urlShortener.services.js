class UrlShorteningService {
    constructor(UrlShortenerRepository){
        this.UrlShortenerRepository = UrlShortenerRepository;
    }

    async shortenUrl(data){
        return this.UrlShortenerRepository.shortenUrl(data);
    }

    async getUrl(shortCode){
        return this.UrlShortenerRepository.getUrl(shortCode);
    }
}

module.exports = UrlShorteningService;