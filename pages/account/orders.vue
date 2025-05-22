<template>
	<div class="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
		<div class="px-4 py-6 sm:px-0">
			<h1 class="text-2xl font-semibold text-gray-900 dark:text-white">Order History</h1>

			<!-- Tabs -->
			<div class="mt-6 border-b border-gray-200 dark:border-gray-700">
				<nav class="-mb-px flex flex-wrap gap-2 sm:gap-8" aria-label="Tabs">
					<button
						v-for="tab in tabs"
						:key="tab.value"
						@click="activeTab = tab.value"
						:class="[
							activeTab === tab.value
								? 'border-primary text-primary'
								: 'border-transparent text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300 hover:border-gray-300 dark:hover:border-gray-600',
							'whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm transition-colors duration-200',
						]"
					>
						{{ tab.label }}
						<span
							:class="[
								activeTab === tab.value
									? 'bg-primary/10 text-primary'
									: 'bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-gray-100',
								'ml-2 py-0.5 px-2.5 rounded-full text-xs font-medium',
							]"
						>
							{{ getOrderCountByStatus(tab.value) }}
						</span>
					</button>
				</nav>
			</div>

			<div class="mt-6">
				<div v-if="loading" class="text-center py-12">
					<div
						class="animate-spin rounded-full h-12 w-12 border-b-2 border-primary mx-auto"
					></div>
					<p class="mt-4 text-gray-500 dark:text-gray-400">Loading orders...</p>
				</div>

				<div v-else-if="error" class="text-center py-12">
					<p class="text-red-500 dark:text-red-400">{{ error }}</p>
					<button
						@click="fetchOrders"
						class="mt-4 inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-primary hover:bg-primary-dark transition-colors"
					>
						Try Again
					</button>
				</div>

				<div
					v-else-if="filteredOrders.length === 0"
					class="text-center py-12"
				>
					<p class="text-gray-500 dark:text-gray-400">
						No orders found in this category.
					</p>
					<NuxtLink
						to="/products"
						class="mt-4 inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-primary hover:bg-primary-dark transition-colors"
					>
						Start Shopping
					</NuxtLink>
				</div>

				<div v-else class="space-y-6">
					<div
						v-for="order in filteredOrders"
						:key="order.id"
						class="bg-white dark:bg-gray-800 shadow rounded-lg overflow-hidden"
					>
						<div
							class="px-4 py-5 sm:px-6 flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4"
						>
							<div>
								<h3
									class="text-lg leading-6 font-medium text-gray-900 dark:text-white"
								>
									Order #{{ order.id }}
								</h3>
								<p class="mt-1 text-sm text-gray-500 dark:text-gray-400">
									Placed on
									{{
										new Date(
											order.createdAt
										).toLocaleDateString()
									}}
								</p>
							</div>
							<div>
								<span
									:class="{
										'bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200':
											order.status === 'DELIVERED',
										'bg-orange-100 dark:bg-orange-900 text-orange-800 dark:text-orange-200':
											order.status === 'PENDING',
										'bg-yellow-100 dark:bg-yellow-900 text-yellow-800 dark:text-yellow-200':
											order.status === 'PROCESSING',
										'bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200':
											order.status === 'SHIPPED',
										'bg-red-100 dark:bg-red-900 text-red-800 dark:text-red-200':
											order.status === 'CANCELLED',
									}"
									class="px-3 py-1 inline-flex text-xs leading-5 font-semibold rounded-full"
								>
									{{ order.status }}
								</span>
							</div>
						</div>
						<div class="border-t border-gray-200 dark:border-gray-700">
							<dl>
								<div
									class="bg-gray-50 dark:bg-gray-700/50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6"
								>
									<dt
										class="text-sm font-medium text-gray-500 dark:text-gray-400"
									>
										Total Amount
									</dt>
									<dd
										class="mt-1 text-sm text-gray-900 dark:text-white sm:mt-0 sm:col-span-2"
									>
										${{ order.total.toFixed(2) }}
									</dd>
								</div>
								<div
									class="bg-white dark:bg-gray-800 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6"
								>
									<dt
										class="text-sm font-medium text-gray-500 dark:text-gray-400"
									>
										Shipping Address
									</dt>
									<dd
										class="mt-1 text-sm text-gray-900 dark:text-white sm:mt-0 sm:col-span-2"
									>
										<div class="space-y-1">
											<p>
												{{ order.shippingAddress.firstName }}
												{{ order.shippingAddress.lastName }}
											</p>
											<p>
												{{ order.shippingAddress.street }}
											</p>
											<p>
												{{ order.shippingAddress.city }},
												{{ order.shippingAddress.state }}
												{{ order.shippingAddress.zipCode }}
											</p>
											<p>
												{{ order.shippingAddress.country }}
											</p>
										</div>
									</dd>
								</div>
								<div
									class="bg-gray-50 dark:bg-gray-700/50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6"
								>
									<dt
										class="text-sm font-medium text-gray-500 dark:text-gray-400"
									>
										Items
									</dt>
									<dd
										class="mt-1 text-sm text-gray-900 dark:text-white sm:mt-0 sm:col-span-2"
									>
										<ul
											class="border border-gray-200 dark:border-gray-600 rounded-md divide-y divide-gray-200 dark:divide-gray-600"
										>
											<li
												v-for="item in order.items"
												:key="item.id"
												class="pl-3 pr-4 py-3 flex items-center gap-4"
											>
												<!-- Product Image -->
												<div class="flex-shrink-0 w-16 h-16">
													<img
														:src="item.product.images[0]"
														:alt="item.product.name"
														class="w-full h-full object-cover rounded-md"
													/>
												</div>
												<!-- Product Details -->
												<div class="flex-1 min-w-0">
													<p class="font-medium text-gray-900 dark:text-white truncate">
														{{ item.product.name }}
													</p>
													<div class="flex items-center gap-4 mt-1">
														<p class="text-sm text-gray-500 dark:text-gray-400">
															Qty: {{ item.quantity }}
														</p>
														<p class="text-sm text-gray-500 dark:text-gray-400">
															${{ item.price.toFixed(2) }} each
														</p>
													</div>
												</div>
												<!-- Total Price -->
												<div class="flex-shrink-0 text-right">
													<p class="font-medium text-gray-900 dark:text-white">
														${{ (item.price * item.quantity).toFixed(2) }}
													</p>
												</div>
											</li>
										</ul>
									</dd>
								</div>
							</dl>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted } from "vue";
import { useAuthStore } from "~/stores/auth";

interface OrderItem {
	id: string;
	product: {
		name: string;
		images: string[];
	};
	quantity: number;
	price: number;
}

interface ShippingAddress {
	firstName: string;
	lastName: string;
	street: string;
	city: string;
	state: string;
	zipCode: string;
	country: string;
	phone?: string;
}

interface Order {
	id: string;
	createdAt: string;
	status: "PENDING" | "PROCESSING" | "SHIPPED" | "DELIVERED" | "CANCELLED";
	total: number;
	paymentMethod: string;
	items: OrderItem[];
	shippingAddress: ShippingAddress;
}

const orders = ref<Order[]>([]);
const loading = ref(true);
const error = ref("");
const authStore = useAuthStore();
const activeTab = ref("ALL");

const tabs = [
	{ label: "All Orders", value: "ALL" },
	{ label: "Pending", value: "PENDING" },
	{ label: "Processing", value: "PROCESSING" },
	{ label: "Shipped", value: "SHIPPED" },
	{ label: "Delivered", value: "DELIVERED" },
	{ label: "Cancelled", value: "CANCELLED" },
];

const filteredOrders = computed(() => {
	if (activeTab.value === "ALL") {
		return orders.value;
	}
	return orders.value.filter((order) => order.status === activeTab.value);
});

const getOrderCountByStatus = (status: string) => {
	if (status === "ALL") {
		return orders.value.length;
	}
	return orders.value.filter((order) => order.status === status).length;
};

const fetchOrders = async () => {
	try {
		loading.value = true;
		error.value = "";
		const response = await $fetch("/api/orders", {
			headers: {
				Authorization: `Bearer ${authStore.token}`,
			},
		});
		orders.value = response;
	} catch (err: any) {
		error.value = err.message || "Failed to load orders";
	} finally {
		loading.value = false;
	}
};

onMounted(() => {
	fetchOrders();
});
</script>
