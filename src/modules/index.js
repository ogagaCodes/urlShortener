const { Router } = require("express");

const UrlShortenerController = require("./main/controller")

const router = Router();


router.post("/shorten",
  UrlShortenerController
)

router.get("/:shortcode",
  UrlShortenerController
)

router.post("/:shortcode/stats",
  UrlShortenerController
)