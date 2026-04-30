import { library, config } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

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
