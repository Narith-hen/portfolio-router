<template>
  <div class="flex flex-col items-center justify-center min-h-screen bg-gray-100">
    <h1 class="text-6xl font-bold text-red-500">404</h1>
    <h2 class="mt-4 text-2xl font-semibold text-gray-800">Page Not Found</h2>
    <p class="mt-2 text-gray-600">Sorry, the page you are looking for does not exist.</p>

    <router-link
      to="/"
      class="mt-6 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
    >
      Go Back Home
    </router-link>
  </div>
</template>

<script setup></script>

