<template>
  <div class="xl:container mx-auto py-5">
    <header>
      <nav class="flex items-center">
        <div class="flex-1">
          <base-icon name="logo" />
        </div>
        <div class="flex-1">
          <!-- menu -->
          <div class="flex gap-10">
            <router-link to="home">Home</router-link>
            <router-link to="home">Blog</router-link>
            <router-link to="home">Single Post</router-link>
            <router-link to="home">Pages</router-link>
            <router-link to="home">Contact</router-link>
          </div>
        </div>
        <div class="flex-1">
          <div class="flex items-center gap-10 justify-end">
            <div class="relative mt-2 rounded-md shadow-sm">
              <input
                type="text"
                name="price"
                id="price"
                class="block w-full rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                placeholder="Search"
              />
              <div class="absolute inset-y-0 right-3 flex items-center">
                <base-icon name="search" class="" />
              </div>
            </div>
            <div class="items-center mt-3">
              <label class="relative inline-flex items-center cursor-pointer">
                <input type="checkbox" value="" class="sr-only peer" />
                <div
                  class="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"
                ></div>
              </label>
            </div>
          </div>
        </div>
      </nav>
    </header>

    <main>
      <router-view />
    </main>
  </div>
  <footer class="bg-[#F6F6F7] rounded-lg m-4">
    <div class="w-full max-w-screen-xl mx-auto p-4 md:py-8">
      <div class="sm:flex sm:items-center sm:justify-between">
        <a
          href="https://flowbite.com/"
          class="flex items-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse"
        >
          <img src="https://flowbite.com/docs/images/logo.svg" class="h-8" alt="Flowbite Logo" />
          <span class="self-center text-2xl font-semibold whitespace-nowrap dark:text-white"
            >Flowbite</span
          >
        </a>
        <ul
          class="flex flex-wrap items-center mb-6 text-sm font-medium text-gray-500 sm:mb-0 dark:text-gray-400"
        >
          <li>
            <a href="#" class="hover:underline me-4 md:me-6">About</a>
          </li>
          <li>
            <a href="#" class="hover:underline me-4 md:me-6">Privacy Policy</a>
          </li>
          <li>
            <a href="#" class="hover:underline me-4 md:me-6">Licensing</a>
          </li>
          <li>
            <a href="#" class="hover:underline">Contact</a>
          </li>
        </ul>
      </div>
      <hr class="my-6 border-gray-200 sm:mx-auto lg:my-8" />
      <span class="block text-sm text-gray-500 sm:text-center dark:text-gray-400"
        >© 2023 <a href="https://flowbite.com/" class="hover:underline">Flowbite™</a>. All Rights
        Reserved.</span
      >
    </div>
  </footer>
</template>

<script lang="ts" setup></script>
