<template>
	<div class="bg-background">
		<!-- Hero section with video background -->
		<div class="relative h-screen w-full">
			<div class="absolute inset-0 overflow-hidden w-full">
				<video
					class="absolute min-w-full min-h-full object-cover w-full h-full"
					autoplay
					loop
					muted
					playsinline
				>
					<source
						src="https://assets.mixkit.co/videos/23230/23230-720.mp4"
						type="video/mp4"
					/>
				</video>
				<div
					class="absolute inset-0 bg-gradient-to-r from-gray-900 to-transparent opacity-75"
				></div>
			</div>
			<div class="relative h-full flex items-center">
				<div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
					<div class="text-left">
						<h1
							class="text-5xl md:text-7xl font-extrabold tracking-tight text-white mb-6 animate-fade-in"
						>
							Discover Your Style
						</h1>
						<p
							class="text-xl md:text-2xl text-gray-300 max-w-3xl mb-8 animate-fade-in-delay"
						>
							Explore our curated collection of premium products.
							From fashion to electronics, find everything you
							need in one place.
						</p>
						<div
							class="flex flex-col sm:flex-row gap-4 animate-fade-in-delay-2"
						>
							<NuxtLink
								to="/products"
								class="inline-flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-primary hover:bg-primary-dark transition-all duration-300 transform hover:scale-105"
							>
								Shop Now
							</NuxtLink>
						</div>
					</div>
				</div>
			</div>
		</div>

		<!-- Featured Categories with hover effects -->
		<!-- Featured Categories section with hover effects and animations -->
		<!-- <div class="bg-surface py-24">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center">
          <h2 class="text-4xl font-extrabold tracking-tight text-primary mb-4">Featured Categories</h2>
          <p class="text-xl text-gray-500 dark:text-gray-400 max-w-2xl mx-auto">
            Explore our carefully curated categories to find exactly what you're looking for
          </p>
        </div>

        <div class="mt-16 grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          <div
            v-for="category in categories"
            :key="category.id"
            class="group relative overflow-hidden rounded-lg shadow-lg transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
          >
            <div class="relative h-96">
              <img
                :src="category.image"
                :alt="category.name"
                class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div class="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent opacity-60"></div>
              <div class="absolute bottom-0 left-0 right-0 p-6">
                <h3 class="text-2xl font-bold text-white mb-2">{{ category.name }}</h3>
                <p class="text-gray-200 mb-4">{{ category.description }}</p>
                <NuxtLink
                  :to="`/products?category=${category.id}`"
                  class="inline-flex items-center text-white hover:text-primary transition-colors"
                >
                  Shop Now
                  <svg class="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </NuxtLink>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div> -->

		<!-- Featured Products with animations -->
		<div class="bg-background py-24">
			<div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				<div class="text-center">
					<h2
						class="text-4xl font-extrabold tracking-tight text-primary mb-4"
					>
						Featured Products
					</h2>
					<p
						class="text-xl text-gray-500 dark:text-gray-400 max-w-2xl mx-auto"
					>
						Discover our most popular and trending products
					</p>
				</div>

				<div
					class="mt-16 grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4"
				>
					<ProductCard
						v-for="product in products"
						:key="product.id"
						:product="product"
					/>
				</div>
			</div>
		</div>

		<!-- Newsletter Section -->
		<div class="bg-primary py-16">
			<div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				<div class="text-center">
					<h2 class="text-3xl font-extrabold text-white mb-4">
						Stay Updated
					</h2>
					<p class="text-xl text-gray-200 max-w-2xl mx-auto mb-8">
						Subscribe to our newsletter for the latest products,
						exclusive offers, and updates
					</p>
					<form class="max-w-md mx-auto flex gap-4">
						<input
							type="email"
							placeholder="Enter your email"
							class="flex-1 min-w-0 px-4 py-3 rounded-md text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-white"
						/>
						<button
							type="submit"
							class="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-primary bg-white hover:bg-gray-100 transition-colors"
						>
							Subscribe
						</button>
					</form>
				</div>
			</div>
		</div>
	</div>
</template>

<script setup lang="ts">
import { ref, onMounted } from "vue";
import ProductCard from '~/components/ProductCard.vue';

definePageMeta({
	layout: "home",
});

interface Product {
	id: string;
	name: string;
	description: string;
	price: number;
	images: string[];
}

interface Category {
	id: number;
	name: string;
	description: string;
	image: string;
}

interface Testimonial {
	name: string;
	role: string;
	avatar: string;
	quote: string;
}

// Mock data for categories - replace with actual API calls
const categories = ref<Category[]>([
	{
		id: 1,
		name: "Electronics",
		description: "Latest gadgets and electronics",
		image: "https://images.unsplash.com/photo-1498049794561-7780e7231661?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80",
	},
	{
		id: 2,
		name: "Fashion",
		description: "Trendy clothing and accessories",
		image: "https://images.unsplash.com/photo-1445205170230-053b83016050?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2071&q=80",
	},
	{
		id: 3,
		name: "Home & Living",
		description: "Everything for your home",
		image: "https://images.unsplash.com/photo-1484101403633-562f891dc89a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2074&q=80",
	},
]);

// Mock testimonials data
const testimonials = ref<Testimonial[]>([
	{
		name: "Sarah Johnson",
		role: "Fashion Enthusiast",
		avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1287&q=80",
		quote: "The quality of products and customer service is outstanding. I always find exactly what I'm looking for!",
	},
	{
		name: "Michael Chen",
		role: "Tech Expert",
		avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1287&q=80",
		quote: "Fast shipping and great prices. The electronics selection is impressive and always up to date.",
	},
	{
		name: "Emma Wilson",
		role: "Home Decor Lover",
		avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
		quote: "I love how easy it is to find beautiful home decor items. The quality is always top-notch!",
	},
]);

// Fetch real products from the API
const products = ref<Product[]>([]);

const fetchProducts = async () => {
	try {
		const response = await $fetch("/api/products");
		// Get the first 4 products for the featured section
		products.value = response.slice(0, 4);
	} catch (error) {
		console.error("Error fetching products:", error);
	}
};

// Initialize
onMounted(() => {
	fetchProducts();
});
</script>

<style scoped>
.bg-background {
	background-color: var(--color-background);
}

.bg-surface {
	background-color: var(--color-surface);
}

.text-primary {
	color: var(--color-primary);
}

.hover\:bg-primary-dark:hover {
	filter: brightness(0.9);
}

/* Animations */
.animate-fade-in {
	animation: fadeIn 1s ease-out;
}

.animate-fade-in-delay {
	animation: fadeIn 1s ease-out 0.3s both;
}

.animate-fade-in-delay-2 {
	animation: fadeIn 1s ease-out 0.6s both;
}

@keyframes fadeIn {
	from {
		opacity: 0;
		transform: translateY(20px);
	}
	to {
		opacity: 1;
		transform: translateY(0);
	}
}

/* Line clamp utility */
.line-clamp-2 {
	display: -webkit-box;
	-webkit-line-clamp: 2;
	-webkit-box-orient: vertical;
	overflow: hidden;
}
</style>
