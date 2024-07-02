import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';
import {fas as solid} from '@fortawesome/free-solid-svg-icons'

import {faCircle as farCircle} from '@fortawesome/free-regular-svg-icons'

library.add(faCoffee);

library.add(farCircle)
library.add(solid)

export default FontAwesomeIcon;
