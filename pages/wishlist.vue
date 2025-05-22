<template>
	<div class="container mx-auto px-4 py-8">
		<h1 class="text-3xl font-bold mb-8">My Wishlist</h1>

		<div v-if="isLoading" class="flex justify-center items-center h-64">
			<div
				class="animate-spin rounded-full h-12 w-12 border-b-2 border-primary"
			></div>
		</div>

		<div
			v-else-if="wishlistStore.items.length === 0"
			class="text-center py-12"
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
			<h3 class="mt-2 text-lg font-medium text-gray-900">
				Your wishlist is empty
			</h3>
			<p class="mt-1 text-sm text-gray-500">
				Start adding some products to your wishlist!
			</p>
			<div class="mt-6">
				<NuxtLink
					to="/products"
					class="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-primary hover:bg-primary-dark focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary"
				>
					Browse Products
				</NuxtLink>
			</div>
		</div>

		<div
			v-else
			class="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
		>
			<div
				v-for="item in wishlistStore.items"
				:key="item.id"
				class="group relative bg-white rounded-lg shadow-md overflow-hidden"
			>
				<div
					class="aspect-h-1 aspect-w-1 w-full overflow-hidden bg-gray-200"
				>
					<img
						:src="item.image"
						:alt="item.name"
						class="h-full w-full object-cover object-center group-hover:opacity-75"
					/>
					<div class="absolute top-2 right-2">
						<button
							@click="removeFromWishlist(item.id)"
							class="p-2 rounded-full bg-white shadow-md hover:bg-gray-100 transition-colors"
						>
							<svg
								class="h-5 w-5 text-red-500"
								xmlns="http://www.w3.org/2000/svg"
								viewBox="0 0 24 24"
								fill="currentColor"
							>
								<path
									d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
								/>
							</svg>
						</button>
					</div>
				</div>
				<div class="p-4">
					<h3 class="text-lg font-medium text-gray-900">
						{{ item.name }}
					</h3>
					<p class="mt-1 text-lg font-medium text-gray-900">
						${{ item.price.toFixed(2) }}
					</p>
					<div class="mt-4 flex space-x-2">
						<button
							@click="addToCart(item)"
							class="flex-1 bg-primary text-white px-4 py-2 rounded-md hover:bg-primary-dark transition-colors"
						>
							Add to Cart
						</button>
						<NuxtLink
							:to="`/products/${item.productId}`"
							class="flex-1 bg-gray-100 text-gray-700 px-4 py-2 rounded-md hover:bg-gray-200 transition-colors text-center"
						>
							View Details
						</NuxtLink>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script setup lang="ts">
import { useWishlistStore } from "~/stores/wishlist";
import { useCartStore } from "~/stores/cart";
import { useAuthStore } from "~/stores/auth";

const wishlistStore = useWishlistStore();
const cartStore = useCartStore();
const authStore = useAuthStore();
const isLoading = ref(true);

onMounted(async () => {
	if (authStore.isAuthenticated) {
		await wishlistStore.initialize();
	}
	isLoading.value = false;
});

const removeFromWishlist = async (itemId: string) => {
	try {
		await wishlistStore.removeItem(itemId);
	} catch (error) {
		console.error("Error removing from wishlist:", error);
	}
};

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
</script>
