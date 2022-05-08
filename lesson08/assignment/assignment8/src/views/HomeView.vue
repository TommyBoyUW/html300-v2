<template>
  <div class="home">

  <div>
      <h2 class="mt-3">Speech joke of the day</h2>
      <div v-if="myToggle === false">
        What’s orange and sounds like a parrot?
        </div>
        <div v-else>
        A carrot!
        </div><br>
        <b-button :pressed.sync="myToggle" variant="primary">Answer</b-button>
    </div>
    <hr class="my-4">


      <div class="jumbotron" bg-variant="info">
        <div class="container" bg-variant="info">
        <b-jumbotron header="Speech, Language, and Literacy" lead="Pediatric Speech-Language Pathologist - creating Speech, Language, and Literacy Resources for the classroom, speech therapy and language therapy.">
        <b-button variant="primary"  href="/page2">Learn more &raquo;</b-button>
        </b-jumbotron>
      </div>

  </div>

<hr class="my-4">

    <div class="container">
      <!-- row of columns -->
      <div class="row">
        <div class="col-md-4"  v-for="(intro, a) in jumbo" :key="intro.id">
          <h2>{{intro.title}}</h2>
          <p>{{intro.text}}</p>
          <p><a class="btn btn-secondary" href="/page3" role="button">View details &raquo;</a></p>
        </div>
      </div>

    </div> <!-- /container -->

  </div>
</template>

<style scoped lang="scss">

.jumbotron {
    background-color:transparent !important;
}

.btn.btn-secondary {
padding: 2.5%;
}

b-button {
padding:5%;
}

</style>

<script>
export default {
  data() {
    return {
    showing: true,
    myToggle: false,

jumbo: [
  { id: 0, title: 'Speech', text: 'Speech is how we say sounds and words.' },
  { id: 1, title: 'Language', text: 'Language refers to the words we use and how we use them to share ideas and get what we want.'},
  { id: 2, title: 'Literacy', text: 'Literacy is your ability to read and write.'}
 ],
     computed: {
       btnStates() {
         return this.buttons.map(btn => btn.state)

       }}}}}

</script>
