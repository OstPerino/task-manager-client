import {
  faHome,
  faComment,
  faUserGroup,
  faArrowRightFromBracket,
} from "@fortawesome/free-solid-svg-icons";
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

library.add(faHome, faUserGroup, faComment, faArrowRightFromBracket);

const fontAwesomeIconComponent = {
  component: "font-awesome-icon",
  FontAwesomeIcon,
};

export default {
  library,
  fontAwesomeIconComponent,
};
