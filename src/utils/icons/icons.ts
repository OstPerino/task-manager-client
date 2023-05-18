import {
  faHome,
  faComment,
  faUserGroup,
  faArrowRightFromBracket,
  faPlus,
  faUser,
  faXmark,
  faPaperclip,
  faXmarksLines
} from "@fortawesome/free-solid-svg-icons";
import { far } from '@fortawesome/free-regular-svg-icons'
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

library.add(
  faHome,
  faUserGroup,
  faComment,
  faArrowRightFromBracket,
  faPlus,
  faUser,
  faPaperclip,
  faXmarksLines,
  faXmark
);

const fontAwesomeIconComponent = {
  component: "font-awesome-icon",
  FontAwesomeIcon,
};

export default {
  library,
  fontAwesomeIconComponent,
};
