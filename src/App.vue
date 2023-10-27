<template>
  <nav>
    <div class="navbar">
      <div class="navbar-brand"><router-link to="/"> <h2> DigitalPress </h2> </router-link></div>
      <div class="nav-links">
        <router-link to="/" class="menu" id="home-nav">Home</router-link>
        <router-link :to="{name: 'LatestView'}" class="menu">Latest</router-link>
        <router-link :to="{name: 'TellYourStories'}" class="menu">Tell Your Stories</router-link>
        <div class="dropdown">
          <a>Categories</a>
          <div class="dropdown-content">
            <router-link v-for="category in categories" :key="category.id" :to="{name: 'Categories', params: {id: category.urlName}}"> {{ category.name }} </router-link>
          </div>
        </div>

        <div class="dropdown">
          <a>Countries</a>
          <div class="dropdown-content">
            <router-link v-for="country in countries" :key="country.id" :to="{name: 'Countries', params: {id: country.urlName}}"> {{ country.name }} </router-link>
          </div>
        </div>
      </div>
    </div>
  </nav>

  <router-view/>

  <PageEndFooter/>

</template>

<style>
body {
  background-color: #f7f7f7;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  margin: 0;
  padding: 0;
}

.navbar {
  overflow: hidden;
  font-weight: bold;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 5px;
}

.navbar-brand {
  font-size: 20px;
  font-weight: bold;
  padding: 10px 20px;
  color: black;
}

.nav-links {
  display: flex;
  align-items: center;
  justify-content: flex-end;
}

.navbar a {
  font-size: 16px;
  color: black;
  text-align: center;
  text-decoration: none;
  padding: 14px 16px;
}

.dropdown {
  float: left;
  overflow: hidden;
}

.dropdown {
  font-size: 16px;
  border: none;
  outline: none;
  color: black;
  padding: 14px 16px;
  background-color: inherit;
  font-family: inherit;
  margin: 0;
}

.dropdown:hover{
  background-color: lightgray;
}

.menu:hover {
  background-color: lightgray;
}

.dropdown-content {
  display: none;
  position: absolute;
  background-color: white;
  min-width: 160px;
  box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2);
  z-index: 1;
}

.dropdown-content a {
  float: none;
  color: black;
  padding: 12px 16px;
  text-decoration: none;
  display: block;
  text-align: left;
}

.dropdown-content a:hover {
  background-color: lightgray;
}

.dropdown:hover .dropdown-content {
  display: block;
}

@media (min-width: 769px) {
  .navbar {
    margin: 0 185px;
  }
}

@media (max-width: 768px) {
  .navbar {
    flex-direction: column;
    margin: 5px;
  }

  .navbar-brand {
    text-align: center;
    padding: 10px;
  }

  .navbar a {
    text-align: center;
    padding: 10px 0;
    display: block;
  }

  .dropdown {
    float: none;
    display: inline-block;
    position: relative;
  }

  .dropdown-content {
    display: none;
    position: static;
    min-width: auto;
    box-shadow: none;
  }

  .dropdown:hover .dropdown-content {
    display: block;
  }
  a#home-nav {
    margin: 0 10px 0 0;
  }
}
</style>

<script>
import PageEndFooter from './components/PageEndFooter.vue'

export default {
  name: "App",
  components: { PageEndFooter },
  data() {
    return {
      categories: [
        { name: 'Sports', id: 1, urlName: 'sports' },
        { name: 'War', id: 2, urlName: 'war' },
        { name: 'Politics', id: 3, urlName: 'politics' },
        { name: 'Health', id: 4, urlName: 'health' }
      ],
      countries: [
        { name: 'USA', id: 1, urlName: 'us' },
        { name: 'Canada', id: 2, urlName: 'ca'},
        { name: 'China', id: 3, urlName: 'cn' },
        { name: 'India', id: 4, urlName: 'in' }
      ]
    }
  }
}
</script>
