<template>

  <div class="container-fluid">

    <section class="row p-3 justify-content-end">
      <button 
        class="col-3 btn btn-primary" 
        data-bs-toggle="modal" 
        data-bs-target="#create-gift">
          Create Gift 🎁
      </button>
    </section>

    <section class="row justify-content-center">
      <div class="col-6">
        <SearchForm />
      </div>
    </section>

    <section class="row justify-content-center">
      <GiphyCard v-for="g in giphys" :key="g.id" :giphyProp="g" />
    </section>

    <section class="row">
        <!-- NOTE when I want to pass data from a parent component to the child... we do that using props -->
        <div class="gifts d-flex justify-space-around align-items-center">
            <GiftCard v-for="g in gifts" :key="g.id" :giftProp="g" />
        </div>
    </section>

  </div>

  <Modal id="create-gift">
    <GiftForm/>
  </Modal>

</template>

<script>

import { computed, onMounted } from "vue";
import { AppState } from "../AppState.js";
import { logger } from "../utils/Logger";
import Pop from "../utils/Pop";
import { giftsService } from '../services/GiftsService.js';
import GiftCard from "../components/GiftCard.vue";
import GiftForm from "../components/GiftForm.vue";
import SearchForm from "../components/SearchForm.vue";
import { Modal } from 'bootstrap'
import { Giphy } from "../models/Giphy.js";
import GiphyCard from "../components/GiphyCard.vue";
import SearchForm from "../components/SearchForm.vue";


export default {
  components: { GiftCard, GiftForm, SearchForm, Giphy, GiphyCard },
  setup() {
    async function getGifts() {
      try {
        await giftsService.getGifts()
        logger.log( '[GETTING GIFTS]', )
      } catch (error) {
        logger.error (error)
        Pop.toast ( '[COULD NOT GET GIFTS...]', error.message )
      }
    }

    onMounted(() => {
      getGifts()
    })
    return {
      placeholderImg: 'http://thiscatdoesnotexist.com',
      gifts: computed(() => AppState.gifts),
      giphys: computed(() => AppState.giphys)
    }
  }
}

</script>

<style scoped lang="scss">
.home {
  display: grid;
  height: 80vh;
  place-content: center;
  text-align: center;
  user-select: none;

  .home-card {
    width: 50vw;

    >img {
      height: 200px;
      max-width: 200px;
      width: 100%;
      object-fit: contain;
      object-position: center;
    }
  }

  .gifts {
    max-height: 6rem;
  }
}
</style>
