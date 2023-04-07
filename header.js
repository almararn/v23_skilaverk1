document.write(`

<nav class="p-6 bg-logo-background bg-cover">
<div class="flex items-center justify-between">
  <div class="flex items-center mt-1">
    <img src="/logo_small.png" alt="logo" class="absolute mt-16 -ml-7 sm:-ml-0">

  </div>
  <div class="hidden
              md:flex 
              md:gap-x-6
              md:items-center
            text-gray-700 
              font-semibold tracking-wide text-lg
              ">
    <a class="hover:text-llama-yellow transition ease-in-out duration-500" href="../">Home</a>
    <a class="hover:text-llama-yellow transition ease-in-out duration-500" href="/menu.html">Menu</a>
    <a class="hover:text-llama-yellow transition ease-in-out duration-500" href="/about.html">About Us</a>
    <a class="hover:text-llama-yellow transition ease-in-out duration-500" href="/contact.html">Contact</a>
    <a class="py-0
              px-3
              rounded-2xl
            text-llama-yellow
              outline 
              outline-4
            outline-llama-yellow
              shadow-lg
            hover:bg-llama-yellow
            hover:text-white
              transition-colors
              ease-in-out
              duration-300
              " href="/order.html">Order</a>
  </div>
  <div id="menu" class="font-bold md:hidden">
    <div id="hamburger">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
        stroke="currentColor" class="w-6 h-6">
        <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
      </svg>
    </div>
    <div id="x-hamburger" class="hidden md:hidden">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
        stroke="currentColor" class="w-6 h-6">
        <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
      </svg>
    </div>
  </div>

</div>
<div id="mobile-menu" class="md:hidden slide-in
                             transition ease-in-out duration-500
                             absolute z-10 top-0 left-0
                             w-10/12
                           bg-llama-blue
                           text-white/95
                             text-xl
                             ">
  <div class="flex flex-col mx-6">
    <a class="hover:text-llama-yellow transition ease-in-out duration-500 py-2" href="../">Home</a>
    <hr class="border-1 border-black/10 w-full" />
    <a class="hover:text-llama-yellow transition ease-in-out duration-500 py-2" href="/menu.html">Menu</a>
    <hr class="border-1 border-black/10 w-full" />
    <a class="hover:text-llama-yellow transition ease-in-out duration-500 py-2" href="/about.html">About Us</a>
    <hr class="border-1 border-black/10 w-full" />
    <a class="hover:text-llama-yellow transition ease-in-out duration-500 py-2" href="/contact.html">Contact</a>
    <hr class="border-1 border-black/10 w-full" />
    <a class="hover:text-llama-yellow transition ease-in-out duration-500 py-2" href="/order.html">Order</a>
    </div>

</div>
</nav>

`)
