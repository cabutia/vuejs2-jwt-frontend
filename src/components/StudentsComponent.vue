<template lang="html">
  <div class="students-container">
    <div class="loading-wrapper" v-bind:class="{'visible': pageLoading}">
      <div class="circle c-1"></div>
      <div class="circle c-2"></div>
      <div class="circle c-3"></div>
    </div>
    <div class="student-block" v-for="student in students">
      <h2>{{ student.surname }}, {{ student.name }}</h2>
      <p><strong>{{ student.age }} years old</strong></p>
      <p>Course: <strong>{{ student.course }}</strong></p>
      <p>School: <strong>{{ student.school }}</strong></p>
    </div>
  </div>

  <!--
  'course', 'name', 'surname', 'age', 'school'
  -->
</template>

<script>
import axios from 'axios'

export default {
  data () {
    return {
      pageLoading: true,
      students: []
    }
  },

  mounted () {
    this.fetchStudents()
  },

  methods: {
    fetchStudents () {
      let url = 'http://dev.lumen/students'
      axios.get(url).then(response => {
        this.students = response.data
        this.pageLoading = false
      })
      console.log(this.students)
    }
  }
}
</script>

<style lang="css">
  body
  {
    background-color: hsl(0, 0%, 95%);
  }

  .loading-wrapper
  {
    position: fixed;
    display: none;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background-color: #fff;
    justify-content: center;
    align-items: center;
    transition: all 2s ease;
  }

  .loading-wrapper.visible
  {
    display: flex;
    opacity: 1;
  }

  .circle
  {
    width: 10px;
    height: 10px;
    margin: 0 10px;
    background-color: hsl(0, 0%, 70%);
    border-radius: 50%;
  }

  .circle.c-1 { animation: bounce 1s infinite 0s; }
  .circle.c-2 { animation: bounce 1s infinite .3s; }
  .circle.c-3 { animation: bounce 1s infinite .6s; }

  @keyframes bounce {
    0% { transform: scale(1) }
    33% { transform: scale(2) }
    66% { transform: scale(1) }
    100% { transform: scale(1) }
  }

  .students-container
  {
    column-width: 400px;
    column-gap: 40px;
    -webkit-column-break-inside: avoid;
    page-break-inside: avoid;
    break-inside: avoid;
    padding: 0px 40px;
  }

  .student-block
  {
    display: inline-block;
    width: 100%;
    border: 1px solid hsl(0, 0%, 90%);
    margin-bottom: 40px;
    background-color: hsl(0, 0%, 100%);
    box-shadow: 0px 10px 40px hsla(0, 0%, 0%, 0.1);
    transition: border .3s ease, box-shadow .3s ease;
  }

  .student-block:hover
  {
    border: 1px solid hsl(200, 100%, 50%);
    box-shadow: 0px 20px 30px hsla(0, 0%, 0%, 0.2)
  }
</style>
