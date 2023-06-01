<template>
  <div class="container-fluid">
    <div class="row justify-content-center pt-5">
    </div>
  </div>
  <form @submit="searchGiphy()">
    <label for="search" placeholder="Search Giphy:"></label>
    <input class="w-100" type="text" title="search" name="search" v-model="editable.search" id="search" placeholder="Search..." />
    <button type="submit" class="btn btn-success">
      Search
    </button>
  </form>
</template>

<script>

  import { ref } from 'vue'
  import { giftsService } from "../services/GiftsService.js";
  import { logger } from "../utils/Logger.js";
  import Pop from "../utils/Pop.js";

  export default {
    setup() {
      const editable = ref({
        search: ''
      })

      async function searchGiphy() {
        try {
          const q = editable.value
          logger.log('[SEARCHING GIPHY APIS]')
          await giftsService.searchGiphy(q)
        } catch (error) {
          console.error(error)
          Pop.toast (error.message, '[COULD NOT PERFORM OBJECT SEARCH...]')

        }
      }

      return {
        editable,
        searchGiphy
      }
    }
  }
  
</script>




<!-- async search(query) {
  const res = await giphyApi.get('search', {
      key: 'OVZma9f0W7wQrKSMYI8y0uC8ItxecChE',
      rating: 'pg',
      limit: 10,
      q: query
  }) -->