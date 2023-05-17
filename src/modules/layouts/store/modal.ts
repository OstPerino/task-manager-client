import {defineStore} from "pinia";


export const useModalStore = defineStore("modal", {
  state: () => {
    return {
      currentModal: "",
      showModal: false
    }
  },
  actions: {
    setCurrentModal(currentModal: string) {
      this.showModal = true;
      this.currentModal = currentModal;
    },
    closeModal() {
      this.showModal = false;
      this.currentModal = "";
    }
  }
})