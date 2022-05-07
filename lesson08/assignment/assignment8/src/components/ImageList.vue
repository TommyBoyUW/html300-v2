<template>
<div>

</b-navbar>


<div>
<button class="btn draw-border" v-on:click="clicked('you just clicked on button 2')">Toggle Border</button>
</div>
<hr class="my-4">

  <div class="container">
            <div class="row">
            <div class="col-md-4" v-for="(lesson, x) in lessons" :key="x">
               <image-profile :lesson-data="lesson" />
                    <ImageProfile />
                </div>
            </div>
        </div>
    </div>
    </div>
</template>

<script>
import ImageProfile from './ImageProfile.vue'
import { imageMixin } from '../mixins/imageMixin.js'

export default {
name: 'Images',

    components: {
        ImageProfile
    },
    data(){
        return {

          lessons: [
                {
                    'title': 'Speech',
                    'description': 'Speech is how we say sounds and words, wow!',
                    'picture': require('@/assets/crayon.jpg'),
                    'alt': 'Crayon activity for speech'
                },
                {
                    'title': 'Language',
                    'description': 'Language refers to the words we use and how we use them to share ideas.',
                    'picture': require('@/assets/snowman.jpg'),
                    'alt': 'Winter activity for language'
                },
                {
                    'title': 'Literacy',
                    'description': 'Literacy is your ability to read and write and its fun!',
                    'picture': require('@/assets/pirate.jpg'),
                    'alt': 'Pirate activity for literacy'
                },
                {
                    'title': 'Speech',
                    'description': 'Target relational vocabulary, word associations, describing vocabulary, sorting items into categories, and inference clues while playing bingo.',
                    'picture': require('@/assets/tootwo.jpg'),
                    'alt': 'Activity to distinguish between Two and Too'
                },
                {
                    'title': 'Language',
                    'description': 'This language bundle is perfect for beehive-themed lesson plans targeting 12 prepositions or positional words.',
                    'picture': require('@/assets/beehive.jpg'),
                    'alt': 'Activity bundle about beehives and frogs'
                },
                {
                    'title': 'Literacy',
                    'description': 'Sequence the steps to follow to get dressed for rainy weather or playing in the rain using picture cards, sentence strips, and mini books',
                    'picture': require('@/assets/task.jpg'),
                    'alt': 'Activity bundle for literacy about rainy weather and clothing'
                },
                {
                    'title': 'Spring Articulation Printable Activities for Early Sounds in Speech Therapy',
                    'description': '352 Articulation Spring Raindrop Cards are included to target /p, b, t, d, m, n, k, g, f, v/ in all positions of words, /h/ and /w/ in the initial position of words, and CVC words in speech therapy. Students will enjoy adding raindrop picture cards to their umbrella, watering can, and/or cloud worksheets. Cut & glue worksheets for sorting sounds.',
                    'picture': require('@/assets/spring-articulation.jpg'),
                    'alt': 'This is a great resource for spring themed articulation activities in speech therapy!'
                },
                {
                    'title': 'Visual Supports for Describing and WH Questions Bundle for Speech & Language',
                    'description': 'Target describing vocabulary words by naming six to seven attributes and answering WH Questions (who, what, where, when, why) using these visual prompts in speech and language therapy. Learners can use these pictures to increase the number of characteristics or details in their vocabulary descriptions.',
                    'picture': require('@/assets/visual-support.jpg'),
                    'alt': 'This is a must-have, year round bundle for any SLP, teacher, and parent'
                },
                {
                    'title': 'Spring Pairs or Spring Things That Go Together Vocabulary Activities',
                    'description': 'Target relational vocabulary, describing vocabulary, sorting items into categories, and inference clues while playing bingo with these spring themed language activities This spring-themed resource could be paired with almost any story about spring. Digital Slide activities are also included that are compatible with PowerPoint and Google Slides™.',
                    'picture': require('@/assets/spring-vocab.jpg'),
                    'alt': 'Digital Slide activities are also included that are compatible with PowerPoint and Google Slides™.'
                }

            ]
        }
    }
}
</script>

<style scoped>
button {
  margin:3rem;
  color: #e4cece;
  border-style: solid;
  background-color: white;
  position: relative;
}
.card {
  width: 30rem;
  margin-left: 20rem;
  margin-bottom: 1rem;
}
.caption {
  padding: 1rem;
}






</style>
