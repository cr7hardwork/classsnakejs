import { TranslateLoader } from '@ngx-translate/core';
import { HttpClient } from '@angular/common/http';
import { MissingTranslationHandler, MissingTranslationHandlerParams } from '@ngx-translate/core';
import {TranslateHttpLoader} from "@ngx-translate/http-loader";

export const httpLoaderFactory = (http: HttpClient) => new TranslateHttpLoader(http, './assets/i18n/', '.json');

export class MyMissingTranslationHandler implements MissingTranslationHandler {
    handle(params: MissingTranslationHandlerParams) {
        if (params.key !== '') {
            const keysList = params.key.split('.');
            const keyValue = keysList[keysList.length - 1];
            return keyValue.replace(/\s/g, '') !== '' ? keyValue : params.key;
        }
        return params.key;
    }
}

export const TRANSLATION_CONFIG = {
    isolate: false,
    missingTranslationHandler: { provide: MissingTranslationHandler, useClass: MyMissingTranslationHandler },
    loader: {
        provide: TranslateLoader,
        useFactory: httpLoaderFactory,
        deps: [HttpClient],
        defaultLanguage: 'en',
    },
};
