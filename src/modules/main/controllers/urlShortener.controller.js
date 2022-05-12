const validUrl = require ('valid-url');
const shortid = require ('shortid');

const {HTTP} = require ('../../../constants/http');
const {RESPONSE} = require ('../../../constants/response');
const createError = require ('../../../_helpers/createError');
const {createResponse} = require ('../../../_helpers/createResponse');

class UrlShortenerController {
  constructor (UrlShorteningService) {
    this.UrlShorteningService = UrlShorteningService;
  }
  async shortenUrl (req, res, next) {
    try {
        let urlDetails;
      const urlCode = shortid.generate ();

      // check long url if valid using the validUrl.isUri method
      if (validUrl.isUri (req.body.url)) {
        const url = this.UrlShorteningService.getUrl (req.body.url);
        // url exist and return the respose
        if (url) {
          return createResponse ('Url exists', {originalUrl: url.url}) (
            res,
            HTTP.OK
          );
        }
        if(!req.body.shortcode){
            const data = {
                ...req.body,
                shortcode: urlCode
            }
            urlDeails = this.UrlShorteningService.shortenUrl(data)
        }
        urlDetails = this.UrlShorteningService.shortenUrl(req.body);
        return createResponse ('Ok', urlDetails) (
            res,
            HTTP.OK
          );
        
      }
    } catch (error) {
      console.error (error);
    }
  }

  async getUrl (req, res, next) {
    try {
      const urlDetails = await this.UrlShorteningService.getUrl (req.params);
      if (!urlDetails) {
        return next (
          createError (HTTP.BAD_REQUEST, [
            {
              status: RESPONSE.ERROR,
              message,
              statusCode: data instanceof Error
                ? HTTP.SERVER_ERROR
                : HTTP.BAD_REQUEST,
              data,
              code: HTTP.BAD_REQUEST,
            },
          ])
        );
      }
      return createResponse ('', {originalUrl: urlDetails.url}) (res, HTTP.OK);
    } catch (error) {
      console.error (error);
    }
  }

  async getUrlStats (req, res, next) {
    try {
        const urlDetails = await this.UrlShorteningService.getUrl (req.params);
        if (!urlDetails) {
          return next (
            createError (HTTP.BAD_REQUEST, [
              {
                status: RESPONSE.ERROR,
                message,
                statusCode: data instanceof Error
                  ? HTTP.SERVER_ERROR
                  : HTTP.BAD_REQUEST,
                data,
                code: HTTP.BAD_REQUEST,
              },
            ])
          );
        }
        return createResponse ('', urlDetails) (res, HTTP.OK);
      return {};
    } catch (error) {
      console.error (error);
    }
  }
}
module.exports = UrlShortenerController;
