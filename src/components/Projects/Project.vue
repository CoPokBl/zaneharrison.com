<script>
export default {
  name: 'Project',
  props: {
    title: {
      type: String,
      required: true,
    },
    link_name: {
      type: String,
      default: '',
    },
    link: {
      type: String,
      default: '',
    },
    img_url: {
      type: String,
      default: ''
    }
  },
};
</script>

<template>
  <div class="project-container">
    <div class="col-md-10 d-flex flex-row project">
      <div class="project-icon">
        <img :src="img_url" alt="Project logo" width="256" height="256"/>
      </div>

      <div>
        <h2>{{ title }}</h2>
        <slot></slot>
        <p><a class="btn btn-secondary" :href="link" role="button">{{ link_name }} &raquo;</a></p>
      </div>
    </div>
  </div>
</template>

<style scoped>
.project {
  background-color: #1a1d20;
  border-radius: 10px;
  padding: 20px;
}

.project-container {
  margin: 20px 0;
}

.project-icon {
  padding: 0 20px 0 0;
}
</style>