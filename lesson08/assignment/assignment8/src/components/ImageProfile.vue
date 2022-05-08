<template>
    <div class="container">

          <div class="card">
            <b-img :src="lessonData.picture" class="card-img-top rounded-circle img-fluid" width="340" height="340" background="#777" color="#777" :alt="lessonData.alt"></b-img>
            <div class="image-profile"><br>
                <p class="image-text"><strong>{{lessonData.title}}</strong></p>
                <p class="image-text">Description: {{lessonData.description}}</p>
            </div>
          </div>

    </div>
</template>

<script>

export default {
props: {
      title: {
      type: String,
      required: true,
      default: 'Lesson title'
      },
      description: {
      type: String,
      required: true,
      default: 'description'
      },
      picture: {
      type: String,
      required: true,
      default: 'img'
      },
      alt: {
      type: String,
      required: true,
      default: 'alternate text'
      },
      lessonData: {
      type: Object,
      required: true,
      default: () => {}
        }
        }}

</script>


<style scoped>
.container {
  display: flex;
  flex-flow: row wrap;
}
.card {
  width: 30rem;
  margin: 0.3rem;
}
.frame {
  padding: 0.3rem;
  background-color: #e4cece;
}

</style>
