<template>
  <div class="tell-your-stories">
    <h1>Tell Your Stories</h1>
    <form @submit.prevent="submitForm">
      <div class="form-group">
        <label for="first-name">First Name:</label>
        <input type="text" id="first-name" placeholder="Ex: John" required v-model="fName">
      </div>

      <div class="form-group">
        <label for="last-name">Last Name:</label>
        <input type="text" id="last-name" placeholder="Ex: Carpenter" required v-model="lName">
      </div>

      <div class="form-group">
        <label for="contact-info">How can we contact You:</label>
        <input type="text" id="contact-info" placeholder="Enter your Email or Telephone Number" required v-model="contactInfo">
      </div>

      <div class="form-group">
        <label for="story">Share Your Story:</label>
        <textarea id="story" required v-model="story"></textarea>
      </div>

      <div class="form-group">
        <label for="thumbnail">Thumbnail Image:</label>
        <input type="file" id="thumbnail" ref="fileInput">
      </div>

      <button type="submit">Submit</button>
    </form>
  </div>
</template>

<script>
export default {
  name: "Tell Your Stories",
  data() {
    return {
      fName: '',
      lName: '',
      contactInfo: '',
      story: '',
    }
  },
  methods: {
    submitForm() {
      alert(`Dear ${this.fName}, Your Response have been submitted to our database. We will contact you as soon as possible to get more information`);
      this.fName = ''
      this.lName = ''
      this.contactInfo = ''
      this.story = ''
      this.$refs.fileInput.value = ''
    }
  }
}
</script>

<style scoped>

.tell-your-stories {
  text-align: center;
  padding: 20px;
}

form {
  max-width: 600px;
  margin: 0 auto;
}

.form-group {
  margin-bottom: 20px;
}

label {
  display: block;
  font-weight: bold;
}

input[type="text"],
input[type="email"],
textarea {
  width: 100%;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  font-size: 16px;
}

input[type="file"] {
  width: 100%;
}

button {
  background-color: #007bff;
  color: #fff;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

@media (max-width: 768px) {
  .form-group {
    margin-bottom: 10px;
  }
}

</style>