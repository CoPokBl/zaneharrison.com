<script setup>
import Languages from "@/components/Home/Languages.vue";
import Technologies from "@/components/Home/Technologies.vue";
</script>

<template>
  <main>
    <h1>Hello, I'm Zane</h1>
    <br>
    <p class="description">
      I'm an Australian university student with a passion for programming and computing.
      Online you may know me as CoPokBl.
    </p>

    <br>

    <div class="text-center">  <!-- Display the languages and technologies I know -->
      <div class="d-flex flex-row full-row desktop"> <!-- For desktop users, display side by side -->
        <div class="experience-element bg-dark rounded p-5">
          <Languages/>
        </div>
        <div class="experience-element bg-dark rounded p-5">
          <Technologies/>
        </div>
      </div>

      <div class="mobile"> <!-- For mobile users, display one after the other -->
        <div class="bg-dark rounded mobile-experience-element">
          <Languages/>
        </div>

        <br>

        <div class="bg-dark rounded mobile-experience-element">
          <Technologies/>
        </div>
      </div>
    </div>


  </main>
</template>

<style scoped>
  .description {
    font-size: 1.5em;
  }

  .full-row {
    width: 90%;
    margin-left: 10%;
  }

  .experience-element {
    width: 40%;
    margin-left: 1%;
  }

  .mobile-experience-element {
    width: 90%;
    margin-left: 5%;
    justify-content: center;
    text-align: center;
    padding: 1rem;
  }
</style>
