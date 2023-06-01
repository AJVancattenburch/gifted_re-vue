<template>

  <div class="modal fade" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div class="modal-dialog">

          <!-- NOTE this 'slot' is the placeholder for what I want to inject into this component (modal) -->
          <slot>

          </slot>

          <!-- NOTE this is the Modal Guts -->
          <!-- <div class="modal-content">
              <div class="modal-header">
                  <h1 class="modal-title fs-5" id="exampleModalLabel">Create Listing</h1>
                  <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
              </div>
              <div class="modal-body" name="modal-body">
                  <slot></slot>
              </div>
              <div class="modal-footer">
                  <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                  <button type="button" class="btn btn-primary">Create</button>
              </div>
          </div> -->



      </div>
  </div>

</template>

<script>

export default {
  setup() {
      return {};
  },
};

</script>

<style></style>