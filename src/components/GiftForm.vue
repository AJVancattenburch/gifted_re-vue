<template>

  <div class="modal-content">
      <div class="modal-header">
          <h1 class="modal-title fs-5" id="exampleModalLabel">Create Gift 🎁</h1>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>

      <form @submit.prevent="submitGiftForm()">
          <div class="modal-body" name="modal-body">
              <div class="mb-3">
                  <label for="tag" class="form-label">Caption:</label>
                  <input type="text" v-model="formInputs.tag" required class="form-control" name="tag" id="tag">
              </div>
              <div class="mb-3">
                  <label for="url" class="form-label">.gifT URL:</label>
                  <input type="url" v-model="formInputs.url" required class="form-control" name="url" id="url">
              </div>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
            <button type="submit" class="btn btn-primary">🎁➡️</button>
          </div>
      </form>
  </div>

</template>

<script>

import { ref } from 'vue';
import { logger } from '../utils/Logger.js';
import Pop from '../utils/Pop.js';
import { giftsService } from '../services/GiftsService.js';
import { Modal } from 'bootstrap'
export default {
  setup() {
    const formInputs = ref({})
      return {
          formInputs,
          tag: [
            '',
          ],
          url: [
            '',
          ],

          async submitGiftForm() {
            try {
                  logger.log('submitting gift form!')
                  const formData = formInputs.value
                  window.event.preventDefault()
                  await giftsService.createGift(formData)
                  formInputs.value = {}
                  Modal.getOrCreateInstance('#create-gift').hide()
              } catch (error) {
                  Pop.error(error.message)
                  logger.log(error)
              }
          }
    };
  },
};

</script>