<template>

  <div class="container-fluid">
    <div class="row justify-content-center pt-5">
      <div class="card">
        <img class="card-img-top" :src="giphyProp?.url" alt="🥳">
        <div class="card-body">
          <h4 class="card-title">{{ giphyProp?.title }}</h4>
          <!-- <p class="card-text"></p> -->
          <button type="button" @click="openGiphy(giphyProp?.id)" class="btn btn-info">Card link</button>
        </div>
      </div>
    </div>
  </div>

</template>

<script>

  import { computed } from 'vue';
  import { Giphy } from '../models/Giphy.js';
  import { AppState } from '../AppState.js';
  import { giftsService } from '../services/GiftsService.js';
  import Pop from "../utils/Pop.js";
  import { logger } from "../utils/Logger.js";

  export default {

    props: {
        giphyProp: { type: Giphy, required: true }
    },
    
    setup() {

        return {

            async openGiphy(giphyId) {
                try {
                    await giftsService.openGiphy(giphyId)
                } catch (error) {
                    Pop.toast(error.message, 'error')
                    logger.log(error)
                }
            },

            account: computed(() => AppState.account)
        };
    },
  };

</script>