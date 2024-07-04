<main>
  <div class="navbar bg-base-100 p-2 sticky top-0 z-10">
    <div class="flex-none">
      <label for="my-drawer" class="btn btn-square btn-ghost drawer-button">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" class="main-grid-item-icon inline-block w-5 h-5 stroke-current" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2">
          <line x1="3" x2="21" y1="12" y2="12" />
          <line x1="3" x2="21" y1="6" y2="6" />
          <line x1="3" x2="21" y1="18" y2="18" />
        </svg>
      </label>
    </div>
    <div class="flex-1">
      <a class="btn btn-ghost text-xl no-animation">Kruistz's Page</a>
    </div>
    <div class="flex-none">
      <label class="swap swap-rotate btn-square btn-ghost">
        <!-- this hidden checkbox controls the state -->
        <input type="checkbox" class="theme-controller" value="dark" />

        <!-- sun icon -->
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" class="main-grid-item-icon swap-off stroke-current w-5 h-5" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2">
          <circle cx="12" cy="12" r="5" />
          <line x1="12" x2="12" y1="1" y2="3" />
          <line x1="12" x2="12" y1="21" y2="23" />
          <line x1="4.22" x2="5.64" y1="4.22" y2="5.64" />
          <line x1="18.36" x2="19.78" y1="18.36" y2="19.78" />
          <line x1="1" x2="3" y1="12" y2="12" />
          <line x1="21" x2="23" y1="12" y2="12" />
          <line x1="4.22" x2="5.64" y1="19.78" y2="18.36" />
          <line x1="18.36" x2="19.78" y1="5.64" y2="4.22" />
        </svg>

        <!-- moon icon -->
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" class="main-grid-item-icon swap-on fill-current w-5 h-5" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2">
          <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
        </svg>
      </label>
    </div>
  </div>
  <div class="drawer">
    <input id="my-drawer" type="checkbox" class="drawer-toggle" />
    <div class="drawer-content">
      <!-- Page content here -->
    </div>
    <div class="drawer-side z-50">
      <label for="my-drawer" aria-label="close sidebar" class="drawer-overlay"></label>
      <ul class="menu p-2 w-80 min-h-full bg-base-200 text-base-content">
        <!-- Sidebar content here -->
        <li><a class="drawer-item">Home</a></li>
        <li><a class="drawer-item">Projects</a></li>
        <li><a class="drawer-item">Gallery</a></li>
        <li><a class="drawer-item">Blogs</a></li>
      </ul>
    </div>
  </div>
  <section class="body-font">
    <div class="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
      <div class="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-left text-left">
        <h1 class="title-font text-4xl mb-4 font-bold">Hello, I'm Kruistz!</h1>
        <p class="mb-8 leading-normal text-lg">An hobbyist coder who likes to play gacha games. I also like to take photos too!</p>
      <div class="flex justify-center">
        <button class="inline-flex btn btn-primary text-lg rounded-full">Button</button>
        <button class="ml-4 inline-flex btn text-lg rounded-full">Button</button>
      </div>
    </div>
    <div class="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
      <img class="object-cover object-center rounded" alt="hero" src="https://dummyimage.com/720x600">
    </div>
  </div>
  </section>
<div class="w-80 rounded-2xl bg-gray-100">
  <div class="flex flex-col gap-2 p-8">
    <input placeholder="Email" class="w-full rounded-lg border border-gray-300 bg-white px-4 py-3 focus:outline-none focus:ring-2 focus:ring-gray-700 focus:ring-offset-2 focus:ring-offset-gray-100" />
    <label class="flex cursor-pointer items-center justify-between p-1">
      Accept terms of use
      <div class="relative inline-block">
        <input type="checkbox" class="peer h-6 w-12 cursor-pointer appearance-none rounded-full bg-white checked:border-gray-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gray-900 focus-visible:ring-offset-2" />
        <span class="pointer-events-none absolute start-1 top-1 block h-4 w-4 rounded-full shadow bg-gray-400 transition-all duration-200 peer-checked:start-7 peer-checked:bg-gray-900"></span>
      </div>
    </label>
    <label class="flex cursor-pointer items-center justify-between p-1">
      Submit to newsletter
      <div class="relative inline-block">
        <input type="checkbox" class="peer h-6 w-12 cursor-pointer appearance-none rounded-full bg-white checked:border-gray-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gray-900 focus-visible:ring-offset-2" />
        <span class="pointer-events-none absolute start-1 top-1 block h-4 w-4 rounded-full shadow bg-gray-400 transition-all duration-200 peer-checked:start-7 peer-checked:bg-gray-900"></span>
      </div>
    </label>
    <button class="inline-block cursor-pointer rounded-md bg-gray-700 px-4 py-3.5 text-center text-sm font-semibold uppercase text-white transition duration-200 ease-in-out hover:bg-gray-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gray-700 focus-visible:ring-offset-2 active:scale-95">Save</button>
  </div>
</div>
</main>