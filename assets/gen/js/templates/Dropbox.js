Coveo.TemplateCache.registerTemplate("CardDropbox", Coveo.HtmlTemplate.fromString("<div class=\"coveo-result-frame\">\n  <div class=\"coveo-result-row\">\n    <div class=\"coveo-result-cell\">\n      <div class=\"coveo-result-row\">\n        <div class=\"coveo-result-cell\" style=\"width: 32px\">\n          <div class=\"CoveoIcon\" data-small=\"true\" data-with-label=\"false\">\n          </div>\n        </div>\n        <div class=\"coveo-result-cell\" style=\"text-align:left; padding-left: 10px\">\n          <a class=\"CoveoResultLink\"></a>\n        </div>\n      </div>\n      <div class=\"coveo-result-row\">\n        <div class=\"coveo-result-cell\" style=\"padding-top:10px; padding-bottom:10px\">\n          <span class=\"CoveoFieldValue\"\n                data-field=\"@filetype\"\n                data-helper=\"translatedCaption\"\n                style=\"border: 1px solid #BCC3CA; border-radius: 3px; padding: 2px 10px;\n                       text-transform: uppercase; font-weight: bold; font-size: 9px\"></span>\n        </div>\n      </div>\n      <div class=\"coveo-result-row\">\n        <div class=\"coveo-result-cell\" style=\"padding-top:5px; padding-bottom:5px\">\n          <div class=\"CoveoText\" data-value=\"Description\" data-weight=\"bold\"></div>\n          <span class=\"CoveoExcerpt\">\n          </span>\n        </div>\n      </div>\n      <div class=\"coveo-result-row\">\n        <div class=\"coveo-result-cell\">\n          <div class=\"CoveoText\" data-value=\"Modified\" data-weight=\"bold\"></div>\n          <span class=\"CoveoFieldValue\" data-field=\"@date\" data-helper=\"date\">\n          </span>\n        </div>\n      </div>\n      <div class=\"coveo-result-row\">\n        <div class=\"coveo-result-cell\" style=\"padding-top:5px; padding-bottom:5px\">\n          <span class=\"CoveoPrintableUri\">\n          </span>\n        </div>\n      </div>\n    </div>\n  </div>\n  <div class=\"CoveoCardActionBar\">\n    <div class=\"CoveoQuickview\"></div>\n    <div class=\"CoveoCardOverlay\" data-title=\"Details\" data-icon=\"coveo-sprites-main-search-active\">\n        <table class=\"CoveoFieldTable\" data-allow-minimization=\"false\">\n          <tbody>\n            <tr data-field=\"@author\" data-caption=\"Author\">\n            </tr>\n            <tr data-field=\"@source\" data-caption=\"Source\">\n            </tr>\n            <tr data-field=\"@language\" data-caption=\"Language\">\n            </tr>\n            <tr data-field=\"@dropboxrevision\" data-caption=\"Revision\">\n            </tr>\n          </tbody>\n        </table>\n    </div>\n  </div>\n</div>\n", "raw.connectortype == 'DropboxCrawler' && options.layout === 'card'"), true, true)
Coveo.TemplateCache.registerTemplate("MobileDropbox", Coveo.HtmlTemplate.fromString("<div class=\"coveo-result-frame\">\n  <div class=\"coveo-result-row\">\n    <div class=\"coveo-result-cell\" style=\"width:40px; vertical-align:middle\">\n      <span class=\"CoveoIcon\" data-small=\"true\">\n      </span>\n    </div>\n    <div class=\"coveo-result-cell coveo-no-wrap\" style=\"vertical-align:middle\">\n      <a class=\"CoveoResultLink\">\n      </a>\n    </div>\n    <div class=\"coveo-result-cell\" style=\"width:80px; text-align:center\">\n      <div class=\"CoveoFieldValue\" data-field=\"@date\" data-helper=\"date\">\n      </div>\n      <div class=\"CoveoQuickview\">\n        <span class=\"coveo-sprites-quickview\">\n        </span>\n      </div>\n    </div>\n  </div>\n  <div class=\"coveo-result-row\">\n    <div class=\"coveo-result-cell\" style=\"padding-top:5px; padding-bottom:5px\">\n      <span class=\"CoveoExcerpt\">\n      </span>\n    </div>\n  </div>\n  <div class=\"coveo-result-row\">\n    <div class=\"coveo-result-cell\" style=\"padding-top:5px; padding-bottom:5px\">\n      <table class=\"CoveoFieldTable\">\n        <tbody>\n          <tr data-field=\"@author\" data-caption=\"Author\">\n          </tr>\n          <tr data-field=\"@source\" data-caption=\"Source\">\n          </tr>\n          <tr data-field=\"@language\" data-caption=\"Language\">\n          </tr>\n          <tr data-field=\"@dropboxrevision\" data-caption=\"Revision\">\n          </tr>\n        </tbody>\n      </table>\n    </div>\n  </div>\n  <div class=\"coveo-result-row\">\n    <div class=\"coveo-result-cell\" style=\"padding-top:5px; padding-bottom:5px\">\n      <span class=\"CoveoPrintableUri\">\n      </span>\n    </div>\n  </div>\n</div>\n", "raw.connectortype == 'DropboxCrawler' && Coveo.DeviceUtils.isSmallScreenWidth()"), true, true)
Coveo.TemplateCache.registerTemplate("Dropbox", Coveo.HtmlTemplate.fromString("<div class=\"coveo-result-frame\">\n  <div class=\"coveo-result-row\">\n    <div class=\"coveo-result-cell\" style=\"width:85px; text-align:center; padding-top:7px\">\n      <span class=\"CoveoIcon\">\n      </span>\n      <div class=\"CoveoQuickview\">\n      </div>\n    </div>\n    <div class=\"coveo-result-cell\" style=\"padding-left:15px\">\n      <div class=\"coveo-result-row\">\n        <div class=\"coveo-result-cell\" style=\"font-size:18px\">\n          <a class=\"CoveoResultLink\">\n          </a>\n        </div>\n        <div class=\"coveo-result-cell\" style=\"width:120px; text-align:right; font-size:12px\">\n          <span class=\"CoveoFieldValue\" data-field=\"@date\" data-helper=\"date\">\n          </span>\n        </div>\n      </div>\n      <div class=\"coveo-result-row\">\n        <div class=\"coveo-result-cell\" style=\"padding-top:5px; padding-bottom:5px\">\n          <span class=\"CoveoExcerpt\">\n          </span>\n        </div>\n      </div>\n      <div class=\"coveo-result-row\">\n        <div class=\"coveo-result-cell\" style=\"padding-top:5px; padding-bottom:5px; font-size:13px;\">\n          <table class=\"CoveoFieldTable\">\n            <tbody>\n              <tr data-field=\"@author\" data-caption=\"Author\">\n              </tr>\n              <tr data-field=\"@source\" data-caption=\"Source\">\n              </tr>\n              <tr data-field=\"@language\" data-caption=\"Language\">\n              </tr>\n              <tr data-field=\"@dropboxrevision\" data-caption=\"Revision\">\n              </tr>\n            </tbody>\n          </table>\n        </div>\n      </div>\n      <div class=\"coveo-result-row\">\n        <div class=\"coveo-result-cell\" style=\"padding-top:5px; padding-bottom:5px\">\n          <span class=\"CoveoPrintableUri\">\n          </span>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n", "raw.connectortype == 'DropboxCrawler'"), true, true)