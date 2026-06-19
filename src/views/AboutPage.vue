<template>
  <nav class="bg-blue-600 shadow-md">
    <div class="max-w-7xl mx-auto px-6">
      <div class="flex items-center justify-center h-16 space-x-8">
        <router-link
          to="/"
          class="text-white font-medium hover:text-blue-200 transition duration-300"
        >
          Home
        </router-link>

        <router-link
          to="/about"
          class="text-white font-medium hover:text-blue-200 transition duration-300"
        >
          About
        </router-link>

        <router-link
          to="/project"
          class="text-white font-medium hover:text-blue-200 transition duration-300"
        >
          Project
        </router-link>
      </div>
    </div>
  </nav>

  <div class="flex flex-col items-center text-center">
    <h1 class="font-bold text-4xl p-12 text-orange-900">Welcome to About Page</h1>

    <p class="max-w-2xl px-4">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam a recusandae maiores fuga
      explicabo aliquid soluta obcaecati, nobis aperiam, dolorem dolore. Itaque error voluptatem
      pariatur obcaecati alias incidunt, ut aliquam?
    </p>
  </div>
</template>

<script setup></script>

<style lang="scss" scoped></style>
