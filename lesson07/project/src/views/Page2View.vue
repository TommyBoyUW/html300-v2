<template>
  <div class="page2">

<div class="container round" >



  <!-- Three columns of images -->

  <div class="container">
    <div class="row">
    <div class="col-lg-4"  v-for="picture in gallery">
      <b-img :src="picture" id="b-img" width="340" height="340" background="#777" color="#777" class="rounded-circle img-fluid"></b-img>
    </div>

  <hr class="featurette-divider">

    <div class="col-lg-4" v-for="(info, x) in names" :key="info.id">
           <b-img :src="info.pic" id="b-img" width="340" height="340" background="#777" color="#777" class="rounded-circle img-fluid"></b-img>
           <b-popover target="b-img" triggers="hover" placement="top">
          <template #title>{{ info.blurb }}</template>
        </b-popover>
        <h2>{{ info.title }}</h2>
    </div><!-- /.col-lg-4 -->
  </div><!-- /.row -->
</div>

        <hr class="featurette-divider">


        <div class="row featurette" v-for="(tool, y) in tools" :key="tool.id">
          <div class="col-md-7">
            <h2 class="featurette-heading">{{tool.title}}</h2>
            <p class="lead">{{tool.blurb}}</p>
          </div>
          <div class="col-md-5">
              <b-img :src="tool.pic" width="500" height="500" background="#eee" color="#aaa" class="bd-placeholder-img-lg featurette-image img-fluid mx-auto"></b-img>
          </div>
            <hr class="featurette-divider">
        </div>



</div>
  </div>
</template>

<script>
export default {
  data() {
    return {
    gallery: [require('@/assets/crayon.jpg'), require('@/assets/snowman.jpg'), require('@/assets/pirate.jpg')],
      names: [
        { id: 0, title: 'Speech', pic: require('@/assets/tootwo.jpg'), blurb: 'Speech: stuff' },
        { id: 1, title: 'Language', pic: require('@/assets/beehive.jpg'), blurb: 'Language: stuff'  },
        { id: 2, title: 'Literacy', pic: require('@/assets/task.jpg'), blurb: 'Literacy: stuff'  }
       ],
       tools: [
         { id: 0, title: 'Spring Articulation Printable Activities for Early Sounds in Speech Therapy', pic: require('@/assets/spring-articulation.jpg'), blurb: '352 Articulation Spring Raindrop Cards are included to target /p, b, t, d, m, n, k, g, f, v/ in all positions of words, /h/ and /w/ in the initial position of words, and CVC words in speech therapy. Students will enjoy adding raindrop picture cards to their umbrella, watering can, and/or cloud worksheets. Cut & glue worksheets for sorting sounds are also included for each speech sound. Color and black & white versions of each page are included. This is a great resource for spring themed articulation activities in speech therapy!' },
         { id: 1, title: 'Visual Supports for Describing and WH Questions Bundle for Speech & Language', pic: require('@/assets/visual-support.jpg'), blurb: 'Target describing vocabulary words by naming six to seven attributes and answering WH Questions (who, what, where, when, why) using these visual prompts in speech and language therapy. Learners can use these pictures to increase the number of characteristics or details in their vocabulary descriptions and to more confidently answer "who, what, where, when, and why" questions. This will help target vocabulary skills and answering WH questions during speech and language activities. The Describing Vocabulary resources includes digital slides of each page with drag & drop pieces are included. This is a must-have, year round bundle for any SLP, teacher, and parent.'  },
         { id: 2, title: 'Spring Pairs or Spring Things That Go Together Vocabulary Activities', pic: require('@/assets/spring-vocab.jpg'), blurb: 'Target relational vocabulary, describing vocabulary, sorting items into categories, and inference clues while playing bingo with these spring themed language activities This spring-themed resource could be paired with almost any story about spring. Digital Slide activities are also included that are compatible with PowerPoint and Google Slides™.'  }
        ]
    };
  }
}
</script>
