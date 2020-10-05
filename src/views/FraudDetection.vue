<template>
  <div>
    <b-container>
      <h2>Fraud Detection</h2>
      <p>
        Fraud occurs when an individual or group of individuals, or a business
        entity intentionally deceives another individual or business entity with
        misrepresentation of identity, products, services, or financial
        transactions and/or false promises with no intention of fulfilling them.
      </p>
      <b-card>
        <b-media>
          <template v-slot:aside>
            <b-img width="100" alt="placeholder" :src="img"></b-img>
          </template>

          <h5 class="mt-0">First-party Fraud</h5>
          <p>
            An individual, or group of individuals, misrepresent their identity
            or give false information when applying for a product or services to
            receive more favourable rates or when have no intention of
            repayment.
          </p>
        </b-media>
      </b-card>
      <b-card>
        <b-media right-align>
          <template v-slot:aside>
            <b-img width="100" alt="placeholder" :src="img"></b-img>
          </template>

          <h5 class="mt-0">Second-party Fraud</h5>
          <p>
            An individual knowingly gives their identity or personal information
            to another individual to commit fraud or someone is perpetrating
            fraud in his behalf.
          </p>
        </b-media>
      </b-card>
      <b-card>
        <b-media>
          <template v-slot:aside>
            <b-img width="100" alt="placeholder" :src="img"></b-img>
          </template>

          <h5 class="mt-0">Third-party Fraud</h5>
          <p>
            An individual, or group of individuals, create or use another
            person’s identity, or personal details, to open or takeover an
            account.
          </p>
        </b-media>
      </b-card>
    </b-container>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
export default Vue.extend({
  // props: ["hostDNS"],
  data() {
    return {
      img: require("../assets/FraudDetection.png")
    };
  }
});
</script>

<style scoped>
.full-window {
  height: 100%;
}
</style>