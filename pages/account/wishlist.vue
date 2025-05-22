<template>
	<div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
		<div class="py-8">
			<h1 class="text-2xl font-semibold text-gray-900 dark:text-white">
				My Wishlist
			</h1>

			<div v-if="isLoading" class="mt-8 flex justify-center">
				<div
					class="animate-spin rounded-full h-12 w-12 border-b-2 border-primary"
				></div>
			</div>

			<div
				v-else-if="wishlistStore.items.length === 0"
				class="mt-8 text-center"
			>
				<svg
					class="mx-auto h-12 w-12 text-gray-400"
					fill="none"
					viewBox="0 0 24 24"
					stroke="currentColor"
				>
					<path
						stroke-linecap="round"
						stroke-linejoin="round"
						stroke-width="2"
						d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
					/>
				</svg>
				<p class="mt-2 text-gray-500 dark:text-gray-400">
					Your wishlist is empty
				</p>
				<NuxtLink
					to="/products"
					class="mt-4 inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-primary hover:bg-primary-dark focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary"
				>
					Browse Products
				</NuxtLink>
			</div>

			<div
				v-else
				class="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3"
			>
				<div
					v-for="item in wishlistStore.items"
					:key="item.id"
					class="group relative bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
				>
					<!-- Product Image Container -->
					<div
						class="relative aspect-square w-full overflow-hidden bg-gray-100 dark:bg-gray-700"
					>
						<img
							:src="item.image"
							:alt="item.name"
							class="h-full w-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
						/>
						<!-- Quick Add to Cart Button -->
						<div
							class="absolute inset-x-0 bottom-0 p-4 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"
						>
							<button
								@click="addToCart(item)"
								class="w-full bg-white dark:bg-gray-800 text-gray-900 dark:text-white py-2 px-4 rounded-md text-sm font-medium hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
							>
								Add to Cart
							</button>
						</div>
					</div>

					<!-- Product Info -->
					<div class="p-4">
						<h3
							class="text-lg font-semibold text-gray-900 dark:text-white mb-1 line-clamp-1"
						>
							{{ item.name }}
						</h3>
						<p
							class="text-sm text-gray-500 dark:text-gray-400 mb-2 line-clamp-2"
						>
							{{ item.description }}
						</p>
						<div class="flex items-center justify-between">
							<span class="text-xl font-bold text-primary">{{
								priceFormatter.formatPrice(item.price)
							}}</span>
							<div class="flex space-x-2">
								<NuxtLink
									:to="`/products/${item.productId}`"
									class="inline-flex items-center text-primary hover:text-primary-dark transition-colors"
								>
									View Details
									<svg
										class="ml-2 w-5 h-5"
										fill="none"
										stroke="currentColor"
										viewBox="0 0 24 24"
									>
										<path
											stroke-linecap="round"
											stroke-linejoin="round"
											stroke-width="2"
											d="M17 8l4 4m0 0l-4 4m4-4H3"
										/>
									</svg>
								</NuxtLink>
								<button
									@click="removeFromWishlist(item.id)"
									class="inline-flex items-center text-red-500 hover:text-red-600 transition-colors"
								>
									Remove
									<svg
										class="ml-2 w-5 h-5"
										fill="none"
										stroke="currentColor"
										viewBox="0 0 24 24"
									>
										<path
											stroke-linecap="round"
											stroke-linejoin="round"
											stroke-width="2"
											d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
										/>
									</svg>
								</button>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script setup lang="ts">
import { ref, onMounted } from "vue";
import { useCartStore } from "~/stores/cart";
import { useWishlistStore } from "~/stores/wishlist";
import { useAuthStore } from "~/stores/auth";

const cartStore = useCartStore();
const wishlistStore = useWishlistStore();
const authStore = useAuthStore();
const isLoading = ref(true);

onMounted(async () => {
	if (authStore.isAuthenticated) {
		await wishlistStore.initialize();
	}
	isLoading.value = false;
});

const addToCart = async (item: any) => {
	try {
		await cartStore.addItem({
			id: item.productId,
			name: item.name,
			price: item.price,
			images: [item.image],
		});
		await removeFromWishlist(item.id);
	} catch (error) {
		console.error("Error adding to cart:", error);
	}
};

const removeFromWishlist = async (itemId: string) => {
	try {
		await wishlistStore.removeItem(itemId);
	} catch (error) {
		console.error("Error removing from wishlist:", error);
	}
};

const priceFormatter = {
	formatPrice(price: number) {
		const currency = "EUR";
		const symbol = "€";
		return (
			new Intl.NumberFormat("en-US", {
				style: "currency",
				currency,
				minimumFractionDigits: 2,
				maximumFractionDigits: 2,
			}).format(price) + (currency === "EUR" ? "" : ` ${symbol}`)
		);
	},
};
</script>

<style scoped>
.line-clamp-1 {
	display: -webkit-box;
	-webkit-line-clamp: 1;
	-webkit-box-orient: vertical;
	overflow: hidden;
}

.line-clamp-2 {
	display: -webkit-box;
	-webkit-line-clamp: 2;
	-webkit-box-orient: vertical;
	overflow: hidden;
}
</style>
