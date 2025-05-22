<template>
	<div class="container mx-auto py-8 bg-background">
		<h1 class="text-3xl font-bold mb-8 text-gray-900 dark:text-gray-100">
			Shopping Cart
		</h1>

		<div v-if="isLoading" class="flex justify-center items-center h-64">
			<div
				class="animate-spin rounded-full h-12 w-12 border-b-2 border-primary"
			></div>
		</div>

		<div v-else-if="error" class="text-center text-red-500 py-8">
			{{ error }}
		</div>

		<div v-else-if="!cartStore.items.length" class="text-center py-16">
			<div class="max-w-md mx-auto">
				<svg
					class="w-24 h-24 mx-auto text-gray-400 mb-4"
					fill="none"
					stroke="currentColor"
					viewBox="0 0 24 24"
				>
					<path
						stroke-linecap="round"
						stroke-linejoin="round"
						stroke-width="2"
						d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
					/>
				</svg>
				<h2
					class="text-2xl font-semibold text-gray-900 dark:text-gray-100 mb-2"
				>
					Your cart is empty
				</h2>
				<p class="text-gray-500 dark:text-gray-400 mb-6">
					Looks like you haven't added any items to your cart yet.
				</p>
				<NuxtLink
					to="/products"
					class="inline-flex items-center px-6 py-3 bg-primary text-white rounded-lg hover:bg-primary-dark transition-colors"
				>
					Start Shopping
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
			</div>
		</div>

		<div v-else class="flex flex-col lg:flex-row gap-8">
			<!-- Cart Items -->
			<div class="lg:w-2/3">
				<div
					class="bg-white dark:bg-gray-800 rounded-xl shadow-sm overflow-hidden"
				>
					<div class="divide-y divide-gray-200 dark:divide-gray-700">
						<div
							v-for="item in cartStore.items"
							:key="item.id"
							class="p-6 flex gap-6 group hover:bg-gray-50 dark:hover:bg-gray-700/50 transition-colors"
						>
							<!-- Product Image -->
							<div class="w-24 h-24 flex-shrink-0">
								<img
									:src="item.image"
									:alt="item.name"
									class="w-full h-full object-cover rounded-lg shadow-sm"
								/>
							</div>

							<!-- Product Details -->
							<div class="flex-grow">
								<div class="flex justify-between">
									<div>
										<h3
											class="text-lg font-medium text-gray-900 dark:text-gray-100"
										>
											{{ item.name }}
										</h3>
										<p
											class="text-gray-500 dark:text-gray-400 mt-1"
										>
											${{ item.price.toFixed(2) }}
										</p>
									</div>
									<button
										@click="removeItem(item.id)"
										class="text-gray-400 hover:text-red-500 transition-colors opacity-0 group-hover:opacity-100"
										:disabled="isRemoving"
									>
										<svg
											class="w-5 h-5"
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

								<!-- Quantity Controls -->
								<div class="flex items-center gap-3 mt-4">
									<button
										@click="
											updateQuantity(
												item.id,
												item.quantity - 1
											)
										"
										class="p-1.5 rounded-lg border border-gray-200 dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
										:disabled="
											isUpdating || item.quantity <= 1
										"
									>
										<svg
											class="w-4 h-4 text-gray-600 dark:text-gray-400"
											fill="none"
											stroke="currentColor"
											viewBox="0 0 24 24"
										>
											<path
												stroke-linecap="round"
												stroke-linejoin="round"
												stroke-width="2"
												d="M20 12H4"
											/>
										</svg>
									</button>
									<span
										class="w-8 text-center text-gray-900 dark:text-gray-100 font-medium"
										>{{ item.quantity }}</span
									>
									<button
										@click="
											updateQuantity(
												item.id,
												item.quantity + 1
											)
										"
										class="p-1.5 rounded-lg border border-gray-200 dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
										:disabled="isUpdating"
									>
										<svg
											class="w-4 h-4 text-gray-600 dark:text-gray-400"
											fill="none"
											stroke="currentColor"
											viewBox="0 0 24 24"
										>
											<path
												stroke-linecap="round"
												stroke-linejoin="round"
												stroke-width="2"
												d="M12 4v16m8-8H4"
											/>
										</svg>
									</button>
								</div>
							</div>

							<!-- Total Price -->
							<div
								class="flex flex-col items-end justify-between"
							>
								<p
									class="text-lg font-medium text-gray-900 dark:text-gray-100"
								>
									${{
										(item.price * item.quantity).toFixed(2)
									}}
								</p>
							</div>
						</div>
					</div>
				</div>
			</div>

			<!-- Order Summary -->
			<div class="lg:w-1/3">
				<div
					class="bg-white dark:bg-gray-800 rounded-xl shadow-sm p-6 sticky top-8"
				>
					<h2
						class="text-lg font-medium text-gray-900 dark:text-gray-100 mb-6"
					>
						Order Summary
					</h2>

					<div class="space-y-4">
						<div
							class="flex justify-between text-gray-600 dark:text-gray-400"
						>
							<span>Subtotal</span>
							<span>${{ cartStore.totalAmount.toFixed(2) }}</span>
						</div>
						<div
							class="flex justify-between text-gray-600 dark:text-gray-400"
						>
							<span>Shipping</span>
							<span>Calculated at checkout</span>
						</div>
						<div
							class="flex justify-between text-gray-600 dark:text-gray-400"
						>
							<span>Tax</span>
							<span>Calculated at checkout</span>
						</div>
						<div
							class="border-t border-gray-200 dark:border-gray-700 pt-4 mt-4"
						>
							<div
								class="flex justify-between text-lg font-medium text-gray-900 dark:text-gray-100"
							>
								<span>Total</span>
								<span
									>${{
										cartStore.totalAmount.toFixed(2)
									}}</span
								>
							</div>
						</div>
					</div>

					<button
						@click="checkout"
						class="w-full bg-primary text-white py-3 rounded-lg mt-6 hover:bg-primary-dark transition-colors flex items-center justify-center gap-2 font-medium"
						:disabled="isCheckingOut"
					>
						<svg
							v-if="isCheckingOut"
							class="animate-spin h-5 w-5 text-white"
							xmlns="http://www.w3.org/2000/svg"
							fill="none"
							viewBox="0 0 24 24"
						>
							<circle
								class="opacity-25"
								cx="12"
								cy="12"
								r="10"
								stroke="currentColor"
								stroke-width="4"
							></circle>
							<path
								class="opacity-75"
								fill="currentColor"
								d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
							></path>
						</svg>
						{{
							isCheckingOut
								? "Processing..."
								: "Proceed to Checkout"
						}}
					</button>

					<div class="mt-6">
						<NuxtLink
							to="/products"
							class="text-primary hover:text-primary-dark transition-colors text-sm font-medium flex items-center gap-2"
						>
							<svg
								class="w-4 h-4"
								fill="none"
								stroke="currentColor"
								viewBox="0 0 24 24"
							>
								<path
									stroke-linecap="round"
									stroke-linejoin="round"
									stroke-width="2"
									d="M10 19l-7-7m0 0l7-7m-7 7h18"
								/>
							</svg>
							Continue Shopping
						</NuxtLink>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script setup lang="ts">
import { useCartStore } from "~/stores/cart";
import { useAuthStore } from "~/stores/auth";
import { useRouter } from "vue-router";
import { useNuxtApp } from "#app";

const cartStore = useCartStore();
const authStore = useAuthStore();
const router = useRouter();
const { $notification } = useNuxtApp();

const isLoading = ref(true);
const error = ref<string | null>(null);
const isUpdating = ref(false);
const isRemoving = ref(false);
const isCheckingOut = ref(false);

// Initialize cart
onMounted(async () => {
	try {
		await cartStore.initialize();
	} catch (e: any) {
		error.value = e.message || "Failed to load cart";
		$notification.show({
			type: "error",
			title: "Error",
			message: e.message || "Failed to load cart",
			timeout: 5000,
		});
	} finally {
		isLoading.value = false;
	}
});

// Update item quantity
const updateQuantity = async (itemId: string, quantity: number) => {
	if (quantity < 1) return;

	try {
		isUpdating.value = true;
		await cartStore.updateQuantity(itemId, quantity);
		$notification.show({
			type: "success",
			title: "Success",
			message: "Cart updated successfully",
			timeout: 3000,
		});
	} catch (e: any) {
		error.value = e.message || "Failed to update quantity";
		$notification.show({
			type: "error",
			title: "Error",
			message: e.message || "Failed to update quantity",
			timeout: 5000,
		});
	} finally {
		isUpdating.value = false;
	}
};

// Remove item from cart
const removeItem = async (itemId: string) => {
	try {
		isRemoving.value = true;
		await cartStore.removeItem(itemId);
		$notification.show({
			type: "success",
			title: "Success",
			message: "Item removed from cart",
			timeout: 3000,
		});
	} catch (e: any) {
		error.value = e.message || "Failed to remove item";
		$notification.show({
			type: "error",
			title: "Error",
			message: e.message || "Failed to remove item",
			timeout: 5000,
		});
	} finally {
		isRemoving.value = false;
	}
};

// Proceed to checkout
const checkout = async () => {
	if (!authStore.isAuthenticated) {
		router.push("/auth/login?redirect=/checkout");
		return;
	}

	try {
		isCheckingOut.value = true;
		router.push("/checkout");
	} catch (e: any) {
		error.value = e.message || "Failed to proceed to checkout";
		$notification.show({
			type: "error",
			title: "Error",
			message: e.message || "Failed to proceed to checkout",
			timeout: 5000,
		});
	} finally {
		isCheckingOut.value = false;
	}
};
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

.hover\:text-primary-dark:hover {
	filter: brightness(0.9);
}

.border-border {
	border-color: var(--color-border);
}

.hover\:bg-primary-dark:hover {
	filter: brightness(0.9);
}
</style>
