<template>
  <div class="container">
    <div class="error-code">404</div>
    <h1>Page Not Found</h1>
    <p>Sorry, the page you are looking for does not exist.</p>
    <p>Go back to <router-link to="/">Home Page</router-link> .</p>
  </div>
</template>

<script>
export default {
  name: "Not Found"
}
</script>

<style scoped>
.container {
  text-align: center;
}

h1 {
  font-size: 3rem;
}

p {
  font-size: 1.2rem;
  color: #777;
}

a {
  text-decoration: none;
  color: #007BFF;
}

.error-code {
  font-size: 8rem;
  color: #FF5733;
}

@media (max-width: 768px) {
  h1 {
    font-size: 2rem;
  }

  p {
    font-size: 1rem;
  }

  .error-code {
    font-size: 6rem;
  }
}
</style>