import {
  faHome,
  faComment,
  faUserGroup,
  faArrowRightFromBracket,
  faPlus,
  faUser,
  faXmark,
  faPaperclip,
  faXmarksLines,
  faTrash,
  faPencil,
} from "@fortawesome/free-solid-svg-icons";
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
  faXmark,
  faTrash,
  faPencil
);

const fontAwesomeIconComponent = {
  component: "font-awesome-icon",
  FontAwesomeIcon,
};

export default {
  library,
  fontAwesomeIconComponent,
};
