

<template>

    <div class="col-4 justify-space-around align-items-center p-5">
      <div class="card bg-warning">
        <img :src="giftProp?.url" class="bg-light card-img-top card-header img-fluid fs-1 text-center py-5" alt="🎁😱">
        <div class="card-body text-center p-3">
          <h5 class="card-title">{{ giftProp?.tag }}</h5>
          <button @click="openGift(giftProp?.id)" class="btn btn-success mt-4">Open Gift</button>
          <p 
            class="card-text fs-5 rounded-3 mt-5 me-0 p-1" 
            style="outline: 4px solid dodgerblue;
                   background-color: skyblue; 
                   text-shadow: 1px 1px 3px black;">
              {{ giftProp?.opened ? 'Already Opened 🥺' : 'Unopened! 😎' }}
          </p>
        </div>
      </div>
    </div>

</template>

<script>

  import { computed } from 'vue';
  import { Gift } from '../models/Gift.js';
  import { AppState } from '../AppState.js';
  import { giftsService } from '../services/GiftsService.js';
  import Pop from "../utils/Pop.js";
  import { logger } from "../utils/Logger.js";

  export default {

    props: {
        giftProp: { type: Gift, required: true }
    },
    
    setup() {

        return {

            async openGift(giftId) {
                try {
                    await giftsService.openGift(giftId)
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