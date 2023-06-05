<template>
  <div class="modal-backdrop">
    <div class="modal rounded-lg">
      <header class="modal-header">
        <slot name="header" />
      </header>
      <section class="modal-body">
        <slot name="body" />
      </section>
      <footer class="modal-footer">
        <div class="flex items-center justify-end">
          <slot name="footer" />
          <button
            v-if="isSubmitting"
            class="text-white bg-red border border-solid border-red-500 hover:bg-red-500 hover:text-white active:bg-red-600 font-bold uppercase text-sm px-6 py-2.5 rounded outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
            type="submit"
            @click="onClick"
          >
            <span
              v-show="isSubmitting"
              class="spinner-border spinner-border-sm mr-1"
            ></span>
            OK
          </button>
          <button
            class="text-red bg-transparent border border-solid border-red-500 hover:bg-red-500 hover:text-red active:bg-red font-bold uppercase text-sm px-3 py-2.5 rounded outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
            type="reset"
            @click="onClose"
          >
            Close
          </button>
        </div>
      </footer>
    </div>
  </div>
</template>

<script lang="ts" setup>
export interface ModalProps {
  isSubmitting?: boolean;
  typeModal?: String;
  onClose?: () => void;
  onClick?: () => void;
}

const { typeModal, isSubmitting, onClose, onClick } = defineProps<ModalProps>();
</script>

<style>
.modal-backdrop {
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.3);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 9999;
}

.modal {
  background: #ffffff;
  box-shadow: 2px 2px 20px 1px;
  display: flex;
  flex-direction: column;
  overflow: auto;
  max-height: 70%;
  max-width: 75%;
}

.modal-header,
.modal-footer {
  padding: 15px;
  display: flex;
}

.modal-header {
  position: relative;
  border-bottom: 1px solid #eeeeee;
  color: #3f3f41;
  justify-content: space-between;
}

.modal-footer {
  border-top: 1px solid #eeeeee;
  flex-direction: column;
  justify-content: flex-end;
}

.modal-body {
  position: relative;
  padding: 20px 10px;
  background: #ffffff;
  display: flex;
  flex-direction: column;
  overflow: auto;
  max-height: 70%;
}

.btn-close {
  position: absolute;
  top: 0;
  right: 0;
  border: none;
  font-size: 20px;
  padding: 10px;
  cursor: pointer;
  font-weight: bold;
  color: #3f3f41;
  background: transparent;
}

.btn-green {
  color: white;
  background: #fbfafa;
  border: 1px solid #fbfafa;
  border-radius: 2px;
}
</style>
