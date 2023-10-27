<template>
  <footer>
    <div class="footer-content">
      <div class="footer-left">
        <p>&copy; DigitalPress, All rights reserved.</p>
        <p>2023 - 2024</p>
        <p>Contact the Developer: nmasnanjana.123@gmail.com</p>
        <p>Contact the Editor: anarasinghe179@cicracampus.net</p>
      </div>

      <div class="footer-right">
        <h4>Subscribe to Newsletter</h4>
        <form>
          <label>First Name:</label>
          <input type="text" id="first-name" name="first-name" required>

          <label>Last Name:</label>
          <input type="text" id="last-name" name="last-name" required>

          <label>Email Address:</label>
          <input type="email" id="email" name="email" required>

          <button type="submit">Subscribe</button>
        </form>
      </div>
    </div>
  </footer>
</template>

<style scoped>
footer {
  background-color: #3f3f3f;
  padding: 20px;
}

.footer-content {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
}

.footer-left, .footer-right {
  width: 100%;
}

.footer-left p, .footer-left ul {
  font-size: 15px;
  color: #ffffff;
  margin: 0;
  list-style-type: none;
  padding: 0;
}

.footer-left li {
  margin: 8px 0;
}

.footer-left a {
  text-decoration: none;
  color: #007bff;
}

.footer-right h4 {
  font-size: 20px;
  color: #ffffff;
}

.footer-right form {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.footer-right label {
  font-size: 15px;
  color: #ffffff;
  margin-top: 10px;
}

.footer-right input[type="text"],
.footer-right input[type="email"] {
  width: 100%;
  padding: 10px;
  margin: 6px 0;
  border: 1px solid #ccc;
  border-radius: 4px;
}

.footer-right button {
  background-color: #007bff;
  color: #fff;
  border: none;
  padding: 10px 20px;
  border-radius: 4px;
  cursor: pointer;
  font-size: 14px;
}

.footer-right button:hover {
  background-color: #0056b3;
}

@media (min-width: 768px) {
  .footer-content {
    flex-direction: row;
    justify-content: space-between;
  }

  .footer-left, .footer-right {
    width: 50%;
  }

  .footer-left {
    text-align: left;
  }
}
</style>
