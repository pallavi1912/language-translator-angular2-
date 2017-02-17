import { OpaqueToken } from '@angular/core';

import { LANG_EN_NAME, LANG_EN_TRANS} from './lang-en';
import { LANG_SP_NAME, LANG_SP_TRANS} from './lang-sp';
import { LANG_GR_NAME, LANG_GR_TRANS} from './lang-gr';

export const TRANSLATIONS = new OpaqueToken('translations');

const dictionary = {
	'en':LANG_EN_TRANS,
	'sp':LANG_SP_TRANS,
	'gr':LANG_GR_TRANS
};

export const TRANSLATION_PROVIDERS=[
 { provide: TRANSLATIONS, useValue: dictionary },
];