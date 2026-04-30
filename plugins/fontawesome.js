import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import {
  faList,
  faComments,
  faQuestionCircle,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";

library.add(faList, faComments, faQuestionCircle, faPhone);

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.component("font-awesome-icon", FontAwesomeIcon);
});
