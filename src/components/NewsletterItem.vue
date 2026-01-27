<template>
  <section class="newsletter flex flex-col items-center text-center">
    <h2 class="newsletter-title">Inscreva-se para as últimas atualizações!</h2>
    <p class="newsletter-text">
      Receba análises jurídicas, decisões importantes e doutrina diretamente no seu email.
    </p>

    <form class="newsletter-form">
      <input type="email" placeholder="Seu endereço de email" required class="newsletter-input" />

      <button type="submit" class="newsletter-button">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="18"
          height="18"
          viewBox="0 0 24 24"
          fill="none"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
          class="button-icon"
        >
          <path
            d="M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z"
          />
          <path d="m21.854 2.147-10.94 10.939" />
        </svg>
        Inscrever-se
      </button>
    </form>

    <div class="newsletter-checkbox-wrapper">
      <button
        type="button"
        role="checkbox"
        aria-checked="false"
        id="terms"
        class="newsletter-checkbox"
      ></button>
      <label for="terms" class="newsletter-label"> Li e concordo com os termos e condições </label>
    </div>
  </section>
</template>

<style scoped>
.newsletter {
  background: linear-gradient(to right, #065f46, #047857);
  padding: 3rem 1rem;
  border-radius: 1rem;
  color: white;
  text-align: center;
}

.newsletter-title {
  font-size: 1.9rem;
  font-weight: bold;
  margin-bottom: 0.75rem;
}

.newsletter-text {
  font-size: 1rem;
  color: #a7f3d0;
  margin-bottom: 1.5rem;
}

.newsletter-form {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  width: 50%;
  margin: 0 auto;
}

@media (min-width: 768px) {
  .newsletter-form {
    flex-direction: row;
  }
}

.newsletter-input {
  flex: 1;
  height: 36px;
  padding: 0 0.75rem;
  border-radius: 0.375rem;
  border: 1px solid rgba(255, 255, 255, 0.2);
  background-color: rgba(255, 255, 255, 0.1);
  color: white;
}

.newsletter-input::placeholder {
  color: rgba(255, 255, 255, 0.6);
}

.newsletter-button {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  background-color: #82b8a9;
  color: #065f46;
  font-weight: 500;
  font-size: 0.875rem;
  padding: 0 1rem;
  border-radius: 0.375rem;
  height: 36px;
  border: none;
  cursor: pointer;
  transition: background 0.3s;
}

.newsletter-button:hover {
  background: #369569;
}

.newsletter-button:hover .button-icon{
  fill: #369569;
}

.button-icon {
  stroke: #065f46;
  fill: #82b8a9;
}

.newsletter-checkbox-wrapper {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  justify-content: center;
  margin-top: 0.75rem;
}

.newsletter-checkbox {
  width: 16px;
  height: 16px;
  background-color: #065f46;
  border-radius: 0.25rem;
  border: 1px solid rgba(255, 255, 255, 0.4);
  cursor: pointer;
}

.newsletter-label {
  font-size: 0.875rem;
  color: white;
  cursor: pointer;
}
</style>
