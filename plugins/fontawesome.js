import { library, config } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { fas } from "@fortawesome/free-solid-svg-icons";

import {
  faHouse,
  faIndustry,
  faHospital,
  faMagnifyingGlass,
  faCheckCircle,
  faTag,
} from "@fortawesome/free-solid-svg-icons";
import {
  faList,
  faComments,
  faQuestionCircle,
  faPhone,
  faBars,
} from "@fortawesome/free-solid-svg-icons";

import {
  faTelegram,
  faInstagram,
  faLinkedin,
  faYoutube,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";

config.autoAddCss = false;
import "@fortawesome/fontawesome-svg-core/styles.css";

library.add(fas);

library.add(
  faHouse,
  faIndustry,
  faHospital,
  faMagnifyingGlass,
  faCheckCircle,
  faTag,
);

library.add(
  faList,
  faComments,
  faQuestionCircle,
  faPhone,
  faBars,

  // Social icons for footer
  faTelegram,
  faInstagram,
  faLinkedin,
  faYoutube,
  faTwitter,
);

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.component("font-awesome-icon", FontAwesomeIcon);
});
